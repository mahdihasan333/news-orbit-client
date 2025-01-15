import { useState } from "react";
import { shortImageName } from "../../../utilities";
import { imageUpload } from "../../../api/utils";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPublisher = () => {
  // const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const [uploadImage, setUploadImage] = useState({
    image: { name: "Upload Button" },
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const imageUrl = await imageUpload(image);

    const publisherData = {
      name,
      imageUrl,
    };
    console.log(publisherData);

    // sent data to server side
    try {
      await axiosPublic.post("/add-publisher", publisherData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Publisher Added Successfully!!!",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Publisher</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Publisher Name */}
        <div className="space-y-1 text-sm">
          <label htmlFor="publisherName" className="block text-gray-600">
            Publisher Name
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
            name="name"
            id="publisherName"
            type="text"
            placeholder="Publisher Name"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="p-4 w-full m-auto rounded-lg flex-grow">
          <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
            <div className="flex flex-col w-max mx-auto text-center">
              <label>
                <input
                  onChange={(e) =>
                    setUploadImage({
                      image: e.target.files[0],
                      url: URL.createObjectURL(e.target.files[0]),
                    })
                  }
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  required
                />
                <div className="bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500">
                  {shortImageName(uploadImage?.image)}
                </div>
              </label>
            </div>
          </div>
        </div>

        {uploadImage && uploadImage?.image?.size && (
          <div className="flex gap-5 items-center">
            <img className="w-20" src={uploadImage?.url} alt="" />
            <p>Image Size: {uploadImage?.image?.size} Bytes</p>
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className="btn bg-lime-500 w-full">
          Add Publisher
        </button>
      </form>
    </div>
  );
};

export default AddPublisher;
