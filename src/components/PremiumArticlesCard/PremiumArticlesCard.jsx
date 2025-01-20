/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PremiumArticlesCard = ({premium}) => {
  return (
    <div className="p-4 rounded shadow bg-amber-200 border-2 border-amber-950">
      <img
        src={premium?.imageUrl}
        alt="Article Title"
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{premium?.title}</h2>
      <p className="text-sm text-gray-600 mb-4">
        Publisher: <strong>{premium?.publisher}</strong>
      </p>
      <p className="text-gray-800 mb-4">{premium?.description}</p>
      <Link to={`/premium/${premium._id}`}>
        <button  className="px-4 py-2 rounded bg-blue-500 text-white">
          Details
        </button>
      </Link>
    </div>
  );
};

export default PremiumArticlesCard;
