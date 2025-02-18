import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { shortImageName } from "../../utilities";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { imageUpload } from "../../api/utils";

const MyProfile = () => {
  const { user } = useAuth();
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
    

    // sent data to server side
    try {
      await axiosSecure.patch("/update-user", updateUserData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "user Data updated Successfully!!!",
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
        <title>NewsOrbit || User Profile</title>
        <link rel="icon" type="image/png" href="/person.png" />
      </Helmet>
      <div className="w-11/12 mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">My Profile</h2>
        <div className="card bg-base-100 shadow-lg p-6">
          {/* User Information */}
          <div className="flex items-center space-x-6 mb-6">
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src={user?.photoURL} alt="User Profile" />
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="sm:text-xs md:text-xl font-semibold">
                {user?.displayName}
              </h3>
              <p className="sm:text-xs text-gray-600">{user?.email}</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex items-center justify-center text-3xl font-bold">
            <h2>Update Information</h2>
          </div>
          <div className="divider"></div>

          {/* Update Information Form */}
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue={user.email}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>

              {/* Profile Picture Input */}
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

              <button className="btn bg-lime-500" type="submit">
                update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
