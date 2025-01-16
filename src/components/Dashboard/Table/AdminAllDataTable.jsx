/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AdminAllDataTable = ({ article, refetch }) => {
  console.log(article);

  const { _id, title, publisher, tags, description, imageUrl } = article || {};

  const articleData = {
    articleId: _id,
    title,
    publisher,
    tags,
    description,
    imageUrl,
  };
  console.log(articleData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [declineReason, setDeclineReason] = useState("");
  const axiosPublic = useAxiosPublic();

  const getFormattedDate = () => {
    return format(new Date(), "d MMM yy");
  };

  // handleApprovedData post to server side
  const handleApprovedData = async () => {
    try {
      await axiosPublic.post("/admin-approved", articleData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Articles Approved Successfully!!!",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
    }
  };

  return (
    <>
      <tr className="border-b hover:bg-gray-100">
        <td className="py-3 px-2">{article.title}</td>
        <td className="py-3 px-2">{"authorName"}</td>
        <td className="py-3 px-2">{"authorEmail"}</td>
        <td className="py-3 px-2">{"authorPhoto"}</td>
        <td className="py-3 px-2">
          {article.postedDate
            ? format(new Date(article.postedDate), "MMMM d, yyyy")
            : getFormattedDate()}
        </td>
        <td className="py-3 px-2">{"status"}</td>
        <td className="py-3 px-2">{article.publisher}</td>
        <td className="py-3 px-2 flex space-x-2">
          <button
            onClick={handleApprovedData}
            className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
          >
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
    </>
  );
};

export default AdminAllDataTable;
