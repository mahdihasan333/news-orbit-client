const AddPublisher = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Publisher</h2>
      <form>
        {/* Article Title */}
        <div className="space-y-1 text-sm">
          <label htmlFor="articleTitle" className="block text-gray-600">
            Publisher Name
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
            name="name"
            id="articleTitle"
            type="text"
            placeholder="Publisher Name"
            required
          />
        </div>

        <div className=" p-4  w-full  m-auto rounded-lg flex-grow">
          <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
            <div className="flex flex-col w-max mx-auto text-center">
              <label>
                <input
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  hidden
                />
                <div className="bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500">
                  Image File
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn bg-lime-500 w-full">
          Add Publisher
        </button>
      </form>
    </div>
  );
};

export default AddPublisher;
