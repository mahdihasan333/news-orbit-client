/* eslint-disable react/prop-types */
const UserCard = ({item}) => {
  return (
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
  );
};

export default UserCard;
