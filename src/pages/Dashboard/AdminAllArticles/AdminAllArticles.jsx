import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import AdminAllDataTable from "../../../components/Dashboard/Table/AdminAllDataTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminAllArticles = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: articles,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/articles");
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">All Articles</h2>

      <table className="w-full bg-white border border-gray-200 rounded shadow-lg">
        <thead>
          <tr className="border-b">
            <th className="py-3 px-2 text-left">Title</th>
            <th className="py-3 px-2 text-left">Author Name</th>
            <th className="py-3 px-2 text-left">Author Email</th>
            <th className="py-3 px-2 text-left">Author Photo</th>
            <th className="py-3 px-2 text-left">Posted Date</th>
            <th className="py-3 px-2 text-left">Status</th>
            <th className="py-3 px-2 text-left">Publisher</th>
            <th className="py-3 px-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <AdminAllDataTable
              key={article._id}
              article={article}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAllArticles;
