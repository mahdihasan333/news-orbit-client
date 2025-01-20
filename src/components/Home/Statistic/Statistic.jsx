import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import CountUp from "react-countup";

const Statistic = () => {
  const axiosSecure = useAxiosSecure();

  const { data: statData = [] } = useQuery({
    queryKey: ["statData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-stat`);
      return res.data.totalUser;
    },
  });
  

  console.log(statData.length);
  console.log( "stat", statData );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat-card bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Total Users</h3>
          <CountUp
             start={statData}
             end={statData}
            duration={2}
            separator=","
            className="text-4xl font-bold"
          />
        </div>
        <div className="stat-card bg-green-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Normal Users</h3>
          <CountUp
             start={statData}
             end={statData}
            duration={2}
            separator=","
            className="text-4xl font-bold"
          />
        </div>
        <div className="stat-card bg-orange-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Premium Users</h3>
          <CountUp
            start={statData}
            end={statData}
            duration={2}
            separator=","
            className="text-4xl font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
