import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import axios from "axios";
import UserCard from "../../components/UserCard/UserCard";

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

    {
      approvedData.map(item => <UserCard key={item._id} item={item}/>)
    }

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        

        <div className="p-4 rounded shadow bg-white border border-gray-200">
          <img
            src="https://via.placeholder.com/150"
            alt="Article Title"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Article Title</h2>
          <p className="text-sm text-gray-600 mb-4">
            Publisher: <strong>Publisher Name</strong>
          </p>
          <p className="text-gray-800 mb-4">
            Short description of the article...
          </p>
          <button className="px-4 py-2 rounded bg-blue-500 text-white">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
