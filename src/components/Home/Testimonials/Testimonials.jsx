const Testimonials = () => {
  return (
    <section className="bg-blue-50 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Readers Say</h2>
        <p className="text-gray-700 mb-8">
          Hear from our valued readers about their experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white rounded shadow p-6">
              <p className="text-gray-600 italic mb-4">
                "This newspaper keeps me updated with unbiased and accurate news
                every day. Highly recommend!"
              </p>
              <div className="flex items-center">
                <img
                  src={`https://via.placeholder.com/50?text=User+${index + 1}`}
                  alt={`User ${index + 1}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    User Name {index + 1}
                  </h3>
                  <p className="text-sm text-gray-500">Regular Reader</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
