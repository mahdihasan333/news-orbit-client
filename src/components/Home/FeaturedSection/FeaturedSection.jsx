const FeaturedSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Meet Our Featured Journalists
        </h2>
        <p className="text-gray-600 mb-8">
          Discover the talented individuals behind the stories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white rounded shadow p-4">
              <img
                src={`https://via.placeholder.com/150?text=Journalist+${
                  index + 1
                }`}
                alt={`Journalist ${index + 1}`}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">
                Journalist Name {index + 1}
              </h3>
              <p className="text-sm text-gray-500">
                Expert in Politics & Economy
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                View Articles
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
