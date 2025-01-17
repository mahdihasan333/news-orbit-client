/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminAllDataTable = ({ article, refetch }) => {
  console.log(article);
  const axiosSecure = useAxiosSecure();

  const {
    _id,
    title,
    publisher,
    tags,
    description,
    imageUrl,
    userData,
    status,
  } = article || {};

  const articleData = {
    articleId: _id,
    title,
    publisher,
    tags,
    description,
    imageUrl,
    userData,
  };
  console.log(articleData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getFormattedDate = () => {
    return format(new Date(), "d MMM yy");
  };

  // handleApprovedData post to server side
  const handleApprovedData = async () => {
    try {
      await axiosSecure.post("/admin-approved", articleData);
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

  // delete
  const handleDeleteUser = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/articles/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // decline data server site
  const handleDecline = async (event, id) => {
    event.preventDefault();
    const form = event.target;
    const declineReason = form.decline.value;

    try {
      const response = await axiosSecure.post("/articles-decline", {
        articleId: id,
        reason: declineReason,
      });
      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Article Declined Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsModalOpen(false);
        refetch();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Failed to decline article: ${error.message}`,
      });
    }
  };

  return (
    <>
      <tr className="border-b hover:bg-gray-100">
        <td className="py-3 px-2">{title}</td>
        <td className="py-3 px-2">{userData?.name}</td>
        <td className="py-3 px-2">{userData?.email}</td>
        <td>
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={userData?.image} alt="Profile" />
            </div>
          </div>
        </td>
        <td className="py-3 px-2">
          {article.postedDate
            ? format(new Date(article.postedDate), "MMMM d, yyyy")
            : getFormattedDate()}
        </td>
        <td className="py-3 px-2">{status}</td>
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
          <button
            onClick={() => handleDeleteUser(_id)}
            className="bg-gray-500 text-white py-1 px-4 rounded hover:bg-gray-600"
          >
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
            <form onSubmit={(event) => handleDecline(event, _id)}>
              <textarea
                name="decline"
                className="w-full h-32 border p-2 rounded mb-4"
                placeholder="Write the reason for declining this article..."
                required
              ></textarea>
              <div className="flex justify-end space-x-2">
                <button
                  type="submit"
                  className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                >
                  Decline Article
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white py-1 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminAllDataTable;
