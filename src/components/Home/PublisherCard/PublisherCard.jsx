/* eslint-disable react/prop-types */

const PublisherCard = ({ publisher }) => {
  console.log(publisher);
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
      <img
        src={publisher.imageUrl}
        alt={`${publisher.name} logo`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          {publisher.name}
        </h3>
        <p className="text-sm text-gray-500">
          Discover articles from {publisher.name}.
        </p>
      </div>
    </div>
  );
};

export default PublisherCard;
