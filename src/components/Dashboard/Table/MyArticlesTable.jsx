/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyArticlesTable = ({ article, index, refetch }) => {
  const { _id, title, status, premium } = article || {};
  console.log(_id);

  const axiosSecure = useAxiosSecure();

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
        axiosSecure.delete(`/userDataDelete/${_id}`).then((res) => {
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

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>
        <span className="badge badge-success">{status}</span>
      </td>
      <td>
        <span className="badge badge-info">{premium}</span>
      </td>
      <td>
        <div className="flex space-x-2">
          <Link to={`/userApprovedDetails/${_id}`}>
            <button className="btn btn-sm bg-lime-500">Details</button>
          </Link>
          <Link to={`/updateArticles/${_id}`}>
            <button className="btn btn-sm btn-warning">Update</button>
          </Link>
          <button
            onClick={() => handleDeleteUser(_id)}
            className="btn btn-sm btn-error"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyArticlesTable;
