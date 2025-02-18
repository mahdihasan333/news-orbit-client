import { useQuery } from "@tanstack/react-query";
// import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import UserCard from "../../components/UserCard/UserCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const AllArticles = () => {
  const [approvedData, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const axiosPublic = useAxiosPublic();

  // const { data: approvedData, isLoading } = useQuery({
  //   queryKey: ["publisher"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(
  //       // `/approved-data?filter=${filter}&search=${search}`
  //       `/approved-data?filter=${filter || ""}&search=${search || ""}`
  //     );
  //     return res.data;
  //   },
  // });

  useEffect(() => {
    const fetchAllJobs = async () => {
      const { data } = await axiosPublic.get(
        `${
          import.meta.env.VITE_API_URL
        }/approved-data?filter=${filter}&search=${search}`
      );
      setData(data);
    };
    fetchAllJobs();
  }, [axiosPublic, filter, search]);

  const { data: publisherData } = useQuery({
    queryKey: ["publisherData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/publisher");
      return res.data;
    },
  });
  

  // if (isLoading) return <LoadingSpinner />;

  const handleReset = () => {
    setFilter("");
    setSearch("");
  };
  

  return (
    <>
      <Helmet>
        <title>NewsOrbit || All Articles</title>
        <link rel="icon" type="image/png" href="/page-icon.png" />
      </Helmet>

      <div className="w-11/12 mt-24 mx-auto">
        

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by title"
            className="p-2 border border-lime-500 rounded w-full md:w-1/2"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-lime-500 rounded-md hover:bg-gray-600 focus:bg-lime-500 focus:outline-none">
            Search
          </button>
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="p-2 border border-gray-300 rounded w-full md:w-1/4"
          >
            <option value="">All Publishers</option>
            {Array.isArray(publisherData) &&
              publisherData.map((item) => (
                <option key={item._id} value={item?.name}>
                  {item?.name}
                </option>
              ))}
          </select>

          <div>
            <button onClick={handleReset} className="btn">
              Reset
            </button>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(approvedData) &&
              approvedData.map((item) => (
                <UserCard key={item._id} item={item} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllArticles;
