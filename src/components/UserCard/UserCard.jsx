import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const UserCard = ({ item }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 rounded shadow bg-white border border-gray-200">
          <img
            src={item?.imageUrl}
            alt="Article Title"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{item?.title}</h2>
          <p className="text-sm text-gray-600 mb-4">
            Publisher: <strong>{item?.publisher}</strong>
          </p>
          <p className="text-gray-800 mb-4">{item?.description}</p>
          <Link to={`/articles-details/${item._id}`}>
            <button className="px-4 py-2 rounded bg-blue-500 text-white">
              Details
            </button>
          </Link>
        </div>
      </div>

      <div className="p-4 rounded shadow bg-yellow-100 border border-yellow-500">
        <img
          src="https://via.placeholder.com/150"
          alt="Article Title"
          className="w-full h-40 object-cover rounded mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{item?.title}</h2>
        <p className="text-sm text-gray-600 mb-4">
          Publisher: <strong>{item?.publisher}</strong>
        </p>
        <p className="text-gray-800 mb-4">{item.description}</p>
        <button
          className="px-4 py-2 rounded bg-gray-400 cursor-not-allowed"
          disabled
        >
          Subscribe to View
        </button>
      </div>
    </>
  );
};

export default UserCard;
