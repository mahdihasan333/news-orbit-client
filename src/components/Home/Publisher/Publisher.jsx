import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import PublisherCard from "../PublisherCard/PublisherCard";

const Publisher = () => {
  const axiosPublic = useAxiosPublic();
  const { data: publisherData, isLoading } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axiosPublic.get("/publisher");
      return res.data;
    },
  });
  console.log("publisher data", publisherData);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="space-y-7">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Explore Trusted Publishers</h2>
        <p className="text-lg">
          Discover a diverse range of news sources curated by our platform,
          bringing you quality articles from top publishers worldwide
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {publisherData.map((publisher) => (
          <PublisherCard key={publisher._id} publisher={publisher} />
        ))}
      </div>
    </div>
  );
};

export default Publisher;
