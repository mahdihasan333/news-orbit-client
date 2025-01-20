/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [subscriptionPeriod, setSubscriptionPeriod] = useState("1");
  const [error, setError] = useState("");
  const totalPrice = parseInt(subscriptionPeriod);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user?.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment save", res.data);
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Thank you ${user.displayName} for purchase Premium users`,
            showConfirmButton: false,
            timer: 1500,
          });

          // user premium
          axiosSecure.patch(`/users/premium/${user?.email}`).then((res) => {
            console.log(res.data);
            // jwt token
            const userInfo = { email: user?.email };
            axiosSecure.post("/premiumJwt", userInfo).then((res) => {
              if (res.data.token) {
                localStorage.setItem("access-premium-token", res.data.token);
              } else {
                localStorage.removeItem("access-premium-token");
              }
            });
          });

          navigate("/premiumArticles");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <select
        value={subscriptionPeriod}
        onChange={(e) => setSubscriptionPeriod(parseInt(e.target.value))}
        className="block w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="1">1 Minute - $1.00</option>
        <option value="5">5 Days - $5.00</option>
        <option value="10">10 Days - $10.00</option>
      </select>

      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="btn bg-lime-500 w-full"
      >
        Pay ${totalPrice}
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-600"> Your transaction id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
