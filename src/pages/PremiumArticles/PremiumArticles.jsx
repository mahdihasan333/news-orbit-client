import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PremiumArticlesPage = () => {
  return (
    <>
      <Helmet>
        <title>NewsOrbit || Premium Articles</title>
        <link rel="icon" type="image/png" href="/star-icon.png" />
      </Helmet>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Premium Articles</h2>
          <p className="text-gray-600 mb-8">
            Exclusive content for our premium subscribers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Article Card */}
            <div className="bg-white rounded shadow p-6">
              <img
                src="https://via.placeholder.com/400x200?text=Article+1"
                alt="Article 1"
                className="w-full h-40 object-cover rounded-t mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                The Future of AI in Everyday Life
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Published by: Tech News
              </p>
              <p className="text-sm text-gray-600 mb-4">
                An in-depth look into the future of artificial intelligence and
                its impact on daily life.
              </p>
              <Link
                to="/article/1"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Read Details
              </Link>
            </div>

            {/* Article Card */}
            <div className="bg-white rounded shadow p-6">
              <img
                src="https://via.placeholder.com/400x200?text=Article+2"
                alt="Article 2"
                className="w-full h-40 object-cover rounded-t mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                How Blockchain is Revolutionizing Finance
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Published by: Finance Hub
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Blockchain is changing the way we think about money and banking.
                Find out how.
              </p>
              <Link
                to="/article/2"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Read Details
              </Link>
            </div>

            {/* Article Card */}
            <div className="bg-white rounded shadow p-6">
              <img
                src="https://via.placeholder.com/400x200?text=Article+3"
                alt="Article 3"
                className="w-full h-40 object-cover rounded-t mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                The Rise of Electric Vehicles
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Published by: Auto World
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Electric vehicles are taking over the roads. Learn about the
                latest trends and innovations.
              </p>
              <Link
                to="/article/3"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Read Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PremiumArticlesPage;
