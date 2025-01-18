import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const UserCard = ({ item }) => {
  return (
    <>
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
        <Link to={`/articlesDetails/${item._id}`}>
          <button className="px-4 py-2 rounded bg-blue-500 text-white">
            Details
          </button>
        </Link>
      </div>
    </>
  );
};

export default UserCard;
