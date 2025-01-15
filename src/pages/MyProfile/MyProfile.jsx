const MyProfile = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>
      <div className="card bg-base-100 shadow-lg p-6">
        {/* User Information */}
        <div className="flex items-center space-x-6 mb-6">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://via.placeholder.com/150" alt="User Profile" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">johndoe@example.com</p>
          </div>
        </div>

        {/* Update Information Form */}
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                defaultValue="John Doe"
                className="input input-bordered w-full"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                defaultValue="johndoe@example.com"
                className="input input-bordered w-full"
              />
            </div>

            {/* Profile Picture Input */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="profilePic"
              >
                Profile Picture
              </label>
              <input
                type="file"
                id="profilePic"
                className="file-input file-input-bordered w-full"
              />
            </div>

            {/* Contact Input */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="contact"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="contact"
                placeholder="Enter your contact number"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Update Button */}
          <div className="mt-6">
            <button type="submit" className="btn btn-primary">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
