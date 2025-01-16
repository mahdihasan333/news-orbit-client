import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import axios from "axios";
import UserCard from "../../components/UserCard/UserCard";
import { Link } from "react-router-dom";

const AllArticles = () => {
  const { data: approvedData, isLoading } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/approved-data`
      );
      return data;
    },
  });
  console.log(approvedData);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Articles</h1>

      {/* Search and Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title"
          className="p-2 border border-gray-300 rounded w-full md:w-1/2"
        />
        <select className="p-2 border border-gray-300 rounded w-full md:w-1/4">
          <option value="">All Publishers</option>
          <option value="Publisher 1">Publisher 1</option>
          <option value="Publisher 2">Publisher 2</option>
        </select>
      </div>

      {/* Articles List */}

      {approvedData.map((item) => (
        <UserCard key={item._id} item={item} />
      ))}

      
    </div>
  );
};

export default AllArticles;
