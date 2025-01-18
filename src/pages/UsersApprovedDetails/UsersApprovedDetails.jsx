import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UsersApprovedDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: userApprovedData = {} } = useQuery({
    queryKey: ["user-approved", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/userapproved/${id}`);
      return res.data;
    },
  });
  console.log(userApprovedData);

  return (
    <div className="container mx-auto p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold mb-4">{userApprovedData?.title}</h1>

      {/* Publisher and Views */}
      <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
        <span>
          Publisher: <strong>{userApprovedData?.publisher}</strong>
        </span>
        <span>
          Views: <strong>views</strong>
        </span>
      </div>

      {/* Article Image */}
      <div className="mb-6">
        <img
          src={userApprovedData?.imageUrl}
          alt="Article Image"
          className="w-full h-96 object-cover rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        />
      </div>

      {/* Long Description */}
      <div className="text-gray-800 leading-relaxed">
        <p>{userApprovedData?.description}</p>
      </div>
    </div>
  );
};

export default UsersApprovedDetails;
