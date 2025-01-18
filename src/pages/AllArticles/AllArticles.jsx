import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import UserCard from "../../components/UserCard/UserCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const AllArticles = () => {
  const axiosPublic = useAxiosPublic();
  const { data: approvedData, isLoading } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axiosPublic.get("/approved-data");

      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>NewsOrbit || All Articles</title>
        <link rel="icon" type="image/png" href="/page-icon.png" />
      </Helmet>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedData.map((item) => (
            <UserCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllArticles;
