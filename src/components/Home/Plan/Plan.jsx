import { Link } from "react-router-dom";

const Plan = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Plans and Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free Plan */}
          <div className="p-6 border rounded-lg shadow-md bg-white">
            <h3 className="text-2xl font-semibold mb-4">Free Plan</h3>
            <p className="text-xl font-bold mb-4">Free</p>
            <ul className="mb-6">
              <li className="mb-2 flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                Access to public articles
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                View trending articles
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                Search by title and tags
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                Limited to 1 article post
              </li>
            </ul>
            <Link to='/allArticles'>
            <button className="w-full py-2 px-4 rounded-md bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700">
              Get Started
            </button>
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="p-6 border rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
            <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
            <p className="text-xl font-bold mb-4">$10.00/Days</p>
            <ul className="mb-6">
              <li className="mb-2 flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                Access to premium articles
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                Unlimited article posting
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                Advanced article analytics
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                Ad-free experience
              </li>
            </ul>
            <Link to='/subscription'>
            <button className="w-full py-2 px-4 rounded-md bg-white text-indigo-600 font-semibold text-lg hover:bg-gray-200">
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
