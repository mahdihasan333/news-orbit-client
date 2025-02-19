import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import CountUp from "react-countup";
import useAuth from "../../../hooks/useAuth";
import { FaUsers, FaUserAlt, FaCrown } from 'react-icons/fa'; // Adding icons from react-icons

const Statistic = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: statData = {} } = useQuery({
    queryKey: ["statData"],
    // enabled: !!user,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-stat`);
      return res.data.totalUser;
    },
  });

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Statistics
      </h2>
      {/* Subtitle */}
      <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-8">
        A quick overview of users and their categories, updated in real-time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Total Users Card */}
        <div className="stat-card p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 bg-blue-500 text-white hover:shadow-2xl flex flex-col justify-between h-80">
          <div className="text-center mb-4">
            <FaUsers className="text-6xl" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center">Total Users</h3>
          <CountUp
            start={0}
            end={statData.totalUsers || 0}
            duration={2}
            separator=","
            className="text-4xl font-bold text-center"
          />
        </div>
        {/* Normal Users Card */}
        <div className="stat-card p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 bg-green-500 text-white hover:shadow-2xl flex flex-col justify-between h-80">
          <div className="text-center mb-4">
            <FaUserAlt className="text-6xl" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center">Normal Users</h3>
          <CountUp
            start={0}
            end={statData.normalUsers || 0}
            duration={2}
            separator=","
            className="text-4xl font-bold text-center"
          />
        </div>
        {/* Premium Users Card */}
        <div className="stat-card p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 bg-orange-500 text-white hover:shadow-2xl flex flex-col justify-between h-80">
          <div className="text-center mb-4">
            <FaCrown className="text-6xl" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center">Premium Users</h3>
          <CountUp
            start={0}
            end={statData.premiumUsers || 0}
            duration={2}
            separator=","
            className="text-4xl font-bold text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
