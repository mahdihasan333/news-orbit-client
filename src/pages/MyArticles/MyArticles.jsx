import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import MyArticlesTable from "../../components/Dashboard/Table/MyArticlesTable";

const MyArticles = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  

  const { data: articles = [], refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-articles/${user?.email}`);
      return res.data;
    },
  });

  

  return (
    <>
      <Helmet>
        <title>NewsOrbit || My Articles</title>
        <link rel="icon" type="image/png" href="/fountain.png" />
      </Helmet>

      <div className="w-11/12 mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">My Articles</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table Header */}
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Status</th>
                <th>Is Premium</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                articles.map((article, index) => <MyArticlesTable refetch={refetch} key={article._id} article={article} index={index} />)
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyArticles;
