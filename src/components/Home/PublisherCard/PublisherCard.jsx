/* eslint-disable react/prop-types */

const PublisherCard = ({ publisher, isDarkMode }) => {
  return (
    <div
      className={`${
        isDarkMode
          ? 'bg-gray-900 text-white shadow-xl' // Dark mode
          : 'bg-white text-gray-900 shadow-lg' // Light mode
      } rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105`}
    >
      <img
        src={publisher.imageUrl}
        alt={`${publisher.name} logo`}
        className="w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
      />
      <div className="p-6 text-center">
        <h3
          className={`text-xl font-semibold mb-3 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          {publisher.name}
        </h3>
        <p
          className={`text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-700'
          } transition-opacity duration-300 hover:opacity-80`}
        >
          Discover articles from {publisher.name}.
        </p>
      </div>
    </div>
  );
};

export default PublisherCard;
