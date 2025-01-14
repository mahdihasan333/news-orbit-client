import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";
import Select from "react-select";
import { useState } from "react";

const AddArticles = () => {
  const { loading } = useAuth();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "mango", label: "Mango" },
    { value: "blueberry", label: "Blueberry" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.name.value,
      publisher: e.target.category.value,
      tags: selectedOptions.map((option) => option.value), // Multi-selected values
      description: e.target.description.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
    };
    console.log(formData);
  };

  return (
    <div className="w-full px-1 md:w-8/12 mx-auto min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full">
          {/* Article Title */}
          <div className="space-y-1 text-sm">
            <label htmlFor="articleTitle" className="block text-gray-600">
              Article Title
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
              name="name"
              id="articleTitle"
              type="text"
              placeholder="Article Title"
              required
            />
          </div>
          {/* Publisher */}
          <div className="space-y-1 text-sm">
            <label htmlFor="category" className="block text-gray-600">
              Publisher
            </label>
            <select
              required
              className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
              name="category"
            >
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Succulent">Succulent</option>
              <option value="Flowering">Flowering</option>
            </select>
          </div>
          {/* Multi-Select Tags */}
          <div className="space-y-1 text-sm">
            <label htmlFor="tags" className="block text-gray-600">
              Tags
            </label>
            <Select
              id="tags"
              isMulti
              options={options}
              onChange={setSelectedOptions}
              placeholder="Select tags..."
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>
          {/* Description */}
          <div className="space-y-1 text-sm">
            <label htmlFor="description" className="block text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Write description here..."
              className="block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800 border border-lime-300 bg-white focus:outline-lime-500"
              name="description"
            ></textarea>
          </div>
          {/* Image */}
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
          <button
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticles;
