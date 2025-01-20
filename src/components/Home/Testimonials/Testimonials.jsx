const Testimonials = () => {
  return (
    <section className="bg-blue-50 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Readers Say</h2>
        <p className="text-gray-700 mb-8">
          Hear from our valued readers about their experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded shadow p-6">
            <p className="text-gray-600 italic mb-4">
              I rely on this service for daily updates because of its commitment
              to providing factual, objective news. A must-follow for anyone who
              values accuracy!
            </p>
            <div className="flex items-center">
              <div>
                <h3 className="text-lg font-semibold">Mahdi Hassan</h3>
                <p className="text-sm text-gray-500">Regular Reader</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded shadow p-6">
            <p className="text-gray-600 italic mb-4">
              Every day, I find myself turning to this platform for
              comprehensive, accurate, and balanced news. It’s a go-to source I
              can depend on for trustworthy information!
            </p>
            <div className="flex items-center">
              <div>
                <h3 className="text-lg font-semibold">Kamrul Hassan</h3>
                <p className="text-sm text-gray-500">Regular Reader</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded shadow p-6">
            <p className="text-gray-600 italic mb-4">
              This website offers a wealth of knowledge and keeps me informed
              with reliable, well-researched articles. I trust it every time for
              staying updated!
            </p>
            <div className="flex items-center">
              <div>
                <h3 className="text-lg font-semibold">Saiful Islam</h3>
                <p className="text-sm text-gray-500">Regular Reader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
