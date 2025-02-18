import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PremiumArticlesCard from "../../components/PremiumArticlesCard/PremiumArticlesCard";

const PremiumArticlesPage = () => {
  const axiosSecure = useAxiosSecure();
  const { data: premiumData, isLoading } = useQuery({
    queryKey: ["premium"],
    queryFn: async () => {
      const res = await axiosSecure.get("/premium");

      return res.data;
    },
  });

  
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>NewsOrbit | Premium Articles</title>
        <link rel="icon" type="image/png" href="/star-icon.png" />
      </Helmet>

      <section className="w-11/12 mx-auto mt-16 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Premium Articles</h2>
          <p className="text-gray-600 mb-8">
            Exclusive content for our premium subscribers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumData.map((premium) => (
              <PremiumArticlesCard key={premium._id} premium={premium} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PremiumArticlesPage;
