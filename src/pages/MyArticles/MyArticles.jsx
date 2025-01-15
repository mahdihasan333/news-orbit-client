const MyArticles = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Articles</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Header */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Status</th>
              <th>Is Premium</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Article Row */}
            <tr>
              <td>1</td>
              <td>Understanding React</td>
              <td>
                <span className="badge badge-success">Approved</span>
                {/* Example for declined article */}
                {/* <span className="badge badge-error">Declined</span>
            <button className="btn btn-xs btn-secondary ml-2">Reason</button> */}
                {/* Example for pending article */}
                {/* <span className="badge badge-warning">Pending</span> */}
              </td>
              <td>
                <span className="badge badge-info">Yes</span>
                {/* Example for non-premium article */}
                {/* <span className="badge badge-secondary">No</span> */}
              </td>
              <td>
                <div className="flex space-x-2">
                  <button className="btn btn-sm btn-primary">Details</button>
                  <button className="btn btn-sm btn-warning">Update</button>
                  <button className="btn btn-sm btn-error">Delete</button>
                </div>
              </td>
            </tr>
            {/* Duplicate rows for additional articles */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyArticles;
