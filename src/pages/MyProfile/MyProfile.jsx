import { Helmet } from "react-helmet-async";
import { useState, useContext } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { shortImageName } from "../../utilities";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { imageUpload } from "../../api/utils";
import { ThemeContext } from "../../providers/ThemeProvider";

const MyProfile = () => {
  const { user } = useAuth();
  const { theme } = useContext(ThemeContext); // Dark/Light mode support
  const [uploadImage, setUploadImage] = useState({
    image: { name: "Upload Button" },
  });

  const axiosSecure = useAxiosSecure();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const imageUrl = await imageUpload(image);

    const updateUserData = {
      name,
      imageUrl,
      email: user.email,
    };

    try {
      await axiosSecure.patch("/update-user", updateUserData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Profile updated successfully!",
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
    <>
      <Helmet>
        <title>My Profile || Dashboard</title>
        <link rel="icon" type="image/png" href="/person.png" />
      </Helmet>
      <div
        className={`max-w-6xl mx-auto mt-16 p-6 rounded-lg shadow-lg transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-6">My Profile</h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* User Profile Image */}
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-lime-500 shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={uploadImage.url || user?.photoURL || "/default-avatar.png"}
                alt="User Profile"
              />
            </div>
            <h3 className="text-xl font-semibold mt-3">{user?.displayName}</h3>
            <p className="text-gray-500">{user?.email}</p>
          </div>

          {/* Update Profile Form */}
          <div className="flex-grow">
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">
              Update Information
            </h3>
            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    className={`input input-bordered w-full ${
                      theme === "dark" ? "bg-gray-800 text-white" : ""
                    }`}
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    className="input input-bordered w-full bg-gray-200"
                    disabled
                  />
                </div>

                {/* Profile Picture Upload */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Profile Picture
                  </label>
                  <div
                    className={`file_upload px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-all ${
                      theme === "dark" ? "border-gray-500" : "border-gray-300"
                    }`}
                  >
                    <input
                      onChange={(e) =>
                        setUploadImage({
                          image: e.target.files[0],
                          url: URL.createObjectURL(e.target.files[0]),
                        })
                      }
                      className="hidden"
                      type="file"
                      name="image"
                      accept="image/*"
                      id="image"
                      required
                    />
                    <label
                      htmlFor="image"
                      className="flex justify-center items-center gap-2 cursor-pointer"
                    >
                      <span
                        className={`px-4 py-2 rounded-lg font-semibold ${
                          theme === "dark"
                            ? "bg-lime-600 text-white"
                            : "bg-lime-500"
                        }`}
                      >
                        {shortImageName(uploadImage?.image)}
                      </span>
                    </label>
                  </div>
                </div>

                {uploadImage?.url && (
                  <div className="sm:col-span-2 flex flex-col items-center">
                    <img
                      className="w-24 h-24 rounded-full shadow-lg border-2 border-gray-300"
                      src={uploadImage.url}
                      alt="Preview"
                    />
                    <p className="text-sm text-gray-500">
                      Image Size: {uploadImage?.image?.size} Bytes
                    </p>
                  </div>
                )}
              </div>

              <button
                className={`btn w-full mt-6 text-lg font-semibold py-2 ${
                  theme === "dark"
                    ? "bg-lime-600 text-white hover:bg-lime-700"
                    : "bg-lime-500 hover:bg-lime-600"
                }`}
                type="submit"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
