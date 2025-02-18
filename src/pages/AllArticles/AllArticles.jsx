import { useQuery } from "@tanstack/react-query";
import UserCard from "../../components/UserCard/UserCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const AllArticles = () => {
  const [approvedData, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchAllArticles = async () => {
      const { data } = await axiosPublic.get(
        `${import.meta.env.VITE_API_URL}/approved-data?filter=${filter}&search=${search}&tag=${selectedTag}`
      );
      setData(data);
    };
    fetchAllArticles();
  }, [axiosPublic, filter, search, selectedTag]);

  const { data: publisherData } = useQuery({
    queryKey: ["publisherData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/publisher");
      return res.data;
    },
  });

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleReset = () => {
    setFilter("");
    setSearch("");
    setSelectedTag("");
  };

  const tags = [
    { value: "politics", label: "Politics" },
    { value: "technology", label: "Technology" },
    { value: "health", label: "Health" },
    { value: "entertainment", label: "Entertainment" },
    { value: "sports", label: "Sports" },
    { value: "business", label: "Business" },
    { value: "education", label: "Education" },
    { value: "environment", label: "Environment" },
    { value: "travel", label: "Travel" },
    { value: "science", label: "Science" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "crime", label: "Crime" },
    { value: "fashion", label: "Fashion" },
    { value: "food", label: "Food" },
    { value: "economy", label: "Economy" },
    { value: "startup", label: "Startup" },
    { value: "automobile", label: "Automobile" },
  ];

  return (
    <>
      <Helmet>
        <title>NewsOrbit | All Articles</title>
        <link rel="icon" type="image/png" href="/page-icon.png" />
      </Helmet>

      <div className="w-11/12 pt-24 mx-auto transition duration-300 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        {/* Dark Mode Toggle Button */}
        

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-6 bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
          <input
            type="text"
            placeholder="Search by title"
            className="p-2 border border-gray-400 dark:border-gray-600 rounded w-full md:w-1/2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button className="px-4 py-2 text-sm font-medium uppercase bg-lime-500 dark:bg-lime-500 text-white rounded-md hover:bg-lime-600 dark:hover:bg-lime-500 transition">
            Search
          </button>

          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="p-2 border border-gray-400 dark:border-gray-600 rounded w-full md:w-1/4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">All Publishers</option>
            {Array.isArray(publisherData) &&
              publisherData.map((item) => (
                <option key={item._id} value={item?.name}>
                  {item?.name}
                </option>
              ))}
          </select>

          <select
            onChange={(e) => setSelectedTag(e.target.value)}
            value={selectedTag}
            className="p-2 border border-gray-400 dark:border-gray-600 rounded w-full md:w-1/4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">All Tags</option>
            {tags.map((tag) => (
              <option key={tag.value} value={tag.value}>
                {tag.label}
              </option>
            ))}
          </select>

          <button
            onClick={handleReset}
            className="px-4 py-2 text-white bg-gray-500 dark:bg-gray-700 rounded-md hover:bg-gray-600 dark:hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>

        {/* Articles Section */}
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
