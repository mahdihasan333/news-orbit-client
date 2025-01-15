import { useState } from "react";

const AdminAllArticles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [declineReason, setDeclineReason] = useState("");
//   const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">All Articles</h2>

      <table className="w-full bg-white border border-gray-200 rounded shadow-lg">
        <thead>
          <tr className="border-b">
            <th className="py-3 px-4 text-left">Title</th>
            <th className="py-3 px-4 text-left">Author Name</th>
            <th className="py-3 px-4 text-left">Author Email</th>
            <th className="py-3 px-4 text-left">Posted Date</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Publisher</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          
            <tr className="border-b hover:bg-gray-100">
              <td className="py-3 px-4">{'title'}</td>
              <td className="py-3 px-4">{'authorName'}</td>
              <td className="py-3 px-4">{'authorEmail'}</td>
              <td className="py-3 px-4">{'postedDate'}</td>
              <td className="py-3 px-4">{'status'}</td>
              <td className="py-3 px-4">{'publisher'}</td>
              <td className="py-3 px-4 flex space-x-2">
                <button className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600">
                  Approve
                </button>
                <button
                  onClick={() => {
                    
                    setIsModalOpen(true);
                  }}
                  className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                >
                  Decline
                </button>
                <button className="bg-gray-500 text-white py-1 px-4 rounded hover:bg-gray-600">
                  Delete
                </button>
                <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
                  Make Premium
                </button>
              </td>
            </tr>
          
        </tbody>
      </table>

      {/* Modal for Decline Reason */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">Decline Reason</h3>
            <textarea
              value={declineReason}
              onChange={(e) => setDeclineReason(e.target.value)}
              className="w-full h-32 border p-2 rounded mb-4"
              placeholder="Write the reason for declining this article..."
            ></textarea>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  // Handle decline logic here
                }}
                className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
              >
                Decline Article
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white py-1 px-4 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAllArticles;
