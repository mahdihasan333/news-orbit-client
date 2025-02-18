import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const UserCard = ({ item }) => {
  return (
    <div className="p-4 rounded-lg shadow-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 transition-transform duration-500 hover:scale-105 flex flex-col justify-between">
      {/* Image Section */}
      <div>
        <img
          src={item?.imageUrl}
          alt={item?.title}
          className="w-full h-32 object-cover rounded-lg mb-3"
        />

        {/* Title */}
        <h2 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">
          {item?.title}
        </h2>

        {/* Publisher & Tags */}
        <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300 mb-3">
          <p>
            Publisher: <strong>{item?.publisher}</strong>
          </p>
        </div>

        {/* Tags Display */}
        <div className="flex flex-wrap gap-2 mb-3">
          {item?.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-lime-100 text-lime-600 dark:bg-lime-500 dark:text-white text-xs font-medium px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description (Truncated) */}
        <p className="text-gray-700 dark:text-gray-400 text-sm line-clamp-2">
          {item?.description}
        </p>
      </div>

      {/* See More Button (Always at the Bottom) */}
      <div className="mt-auto">
        <Link to={`/articlesDetails/${item._id}`}>
          <button className="w-full mt-4 py-2 rounded bg-lime-500 text-white text-sm font-semibold transition-all duration-300 hover:bg-lime-600 dark:bg-lime-700 dark:hover:bg-lime-600">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
