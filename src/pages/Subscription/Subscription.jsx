import { Helmet } from "react-helmet-async";

const Subscription = () => {
  return (
    <>
      <Helmet>
        <title>NewsOrbit || Subscription</title>
        <link rel="icon" type="image/png" href="/diamond-icon.png" />
      </Helmet>

      <div className="p-6">
        {/* Attractive Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12 px-6 rounded-lg mb-8 shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Subscribe to Premium</h1>
          <p className="text-lg">
            Unlock exclusive content and premium articles with our subscription
            plans. Choose the one that suits you best!
          </p>
        </div>

        {/* Subscription Form */}
        <div className="bg-base-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Choose Your Plan</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="subscriptionPeriod"
                className="block text-sm font-medium mb-2"
              >
                Subscription Period
              </label>
              <select
                id="subscriptionPeriod"
                className="select select-bordered w-full"
                defaultValue="1 minute"
              >
                <option value="1 minute">1 Minute - $1 (For Testing)</option>
                <option value="5 days">5 Days - $5</option>
                <option value="10 days">10 Days - $10</option>
              </select>
            </div>

            {/* Total Cost */}
            <div className="mb-6">
              <p className="text-lg font-semibold">
                Total Cost: <span className="text-primary">$10</span>
              </p>
            </div>

            {/* Subscribe Button */}
            <button
              type="submit"
              className="btn btn-primary w-full"
              onClick={() => alert("Redirecting to payment page...")}
            >
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Subscription;
