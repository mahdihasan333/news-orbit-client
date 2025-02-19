import { Link } from "react-router-dom";

const Plan = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 transition-all">
      <div className="w-11/12 mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Our Plans and Pricing
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12">
          Choose a plan that best suits your needs and start your journey with us today.
        </p>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Free Plan */}
          <div className="p-6 h-80 border rounded-lg shadow-lg bg-white dark:bg-gray-800 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Free Plan</h3>
            <p className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-300">Free</p>
            <ul className="mb-6 text-gray-600 dark:text-gray-400">
              <li className="mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Access to public articles
              </li>
              <li className="mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                View trending articles
              </li>
              <li className="mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Search by title and tags
              </li>
              <li className="mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Limited to 1 article post
              </li>
            </ul>
            <Link to="/allArticles">
              <button className="w-full py-2 px-4 rounded-md bg-lime-500 text-white font-semibold text-lg hover:bg-lime-700 transition-all duration-300">
                Get Started
              </button>
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="p-6 border h-80 rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
            <p className="text-xl font-bold mb-4">$10.00/Days</p>
            <ul className="mb-6">
              <li className="mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Access to premium articles
              </li>
              <li className="mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited article posting
              </li>
              <li className="mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Advanced article analytics
              </li>
              <li className="mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Ad-free experience
              </li>
            </ul>
            <Link to="/subscription">
              <button className="w-full py-2 px-4 rounded-md bg-white text-indigo-600 font-semibold text-lg hover:bg-gray-200 transition-all duration-300">
                Premium Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
