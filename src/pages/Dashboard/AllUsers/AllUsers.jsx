const AllUsers = () => {
  return (
    <div className="overflow-x-auto w-full p-6">
      <h2 className="text-2xl font-bold mb-6">All Users</h2>
      <table className="table w-full">
        {/* Table Header */}
        <thead>
          <tr>
            <th className="text-left">#</th>
            <th className="text-left">Profile</th>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Example User Row */}
          <tr>
            <td>1</td>
            <td>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://via.placeholder.com/150" alt="Profile" />
                </div>
              </div>
            </td>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td>
              {/* Show button if not admin */}
              <button className="btn btn-sm btn-primary">Make Admin</button>
              {/* Show text if admin */}
              {/* <span className="text-green-500 font-bold">Admin</span> */}
            </td>
          </tr>
          {/* Duplicate rows for additional users */}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
