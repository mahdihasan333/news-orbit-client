const Testimonials = () => {
  return (
    <section className="bg-blue-50 dark:bg-gray-900 transition-all">
      <div className="w-11/12 mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          What Our Readers Say
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Hear from our valued readers about their experience.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-80 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
            <p className="text-gray-600 dark:text-gray-400 italic mb-4 h-24 overflow-hidden text-ellipsis">
              I rely on this service for daily updates because of its commitment to providing factual, objective news. A must-follow for anyone who values accuracy!
            </p>
            <div className="flex items-center justify-start mt-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mahdi Hassan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Regular Reader</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-80 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
            <p className="text-gray-600 dark:text-gray-400 italic mb-4 h-24 overflow-hidden text-ellipsis">
              Every day, I find myself turning to this platform for comprehensive, accurate, and balanced news. It’s a go-to source I can depend on for trustworthy information!
            </p>
            <div className="flex items-center justify-start mt-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Kamrul Hassan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Regular Reader</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-80 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
            <p className="text-gray-600 dark:text-gray-400 italic mb-4 h-24 overflow-hidden text-ellipsis">
              This website offers a wealth of knowledge and keeps me informed with reliable, well-researched articles. I trust it every time for staying updated!
            </p>
            <div className="flex items-center justify-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Saiful Islam</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Regular Reader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
