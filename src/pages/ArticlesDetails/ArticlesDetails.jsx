import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ArticleDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure()

  const { data: articlesData = {} } = useQuery({
    queryKey: ["articles-details", id],
    queryFn: async () => {
      

      const res = await axiosSecure.get(`/approved/${id}`)
      return res.data;
    },
  });
  console.log(articlesData);

  return (
    <div className="container mx-auto p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold mb-4">{articlesData?.title}</h1>

      {/* Publisher and Views */}
      <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
        <span>
          Publisher: <strong>{articlesData?.publisher}</strong>
        </span>
        <span>
          Views: <strong>views</strong>
        </span>
      </div>

      {/* Article Image */}
      <div className="mb-6">
        <img
          src={articlesData?.imageUrl}
          alt="Article Image"
          className="w-full h-96 object-cover rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        />
      </div>

      {/* Long Description */}
      <div className="text-gray-800 leading-relaxed">
        <p>{articlesData?.description}</p>
      </div>
    </div>
  );
};

export default ArticleDetails;
