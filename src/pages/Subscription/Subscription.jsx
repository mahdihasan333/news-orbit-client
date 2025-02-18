import { Helmet } from "react-helmet-async";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Subscription = () => {
  return (
    <>
      <Helmet>
        <title>NewsOrbit || Subscription</title>
        <link rel="icon" type="image/png" href="/diamond-icon.png" />
      </Helmet>

      <div className="mt-16 w-11/12 mx-auto">
        {/* Attractive Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12 px-6 rounded-lg mb-8 shadow-lg">
          <h1 className="sm:text-2xl md:text-4xl font-bold mb-4">
            Subscribe to Premium
          </h1>
          <p className="sm:text-base md:text-lg">
            Unlock exclusive content and premium articles with our subscription
            plans. Choose the one that suits you best!
          </p>
        </div>

        {/* Subscription Form */}
        <div className="bg-base-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Choose Your Plan</h2>

          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Subscription;
