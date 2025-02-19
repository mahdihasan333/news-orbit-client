import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const DashboardPage = () => {
  const [stats, setStats] = useState({
    users: 0,
    posts: 0,
    comments: 0,
    revenue: 0,
    totalArticles: 0,
    totalPremiumArticles: 0,
  });

  useEffect(() => {
    // Fetch stats from backend
    fetch("http://localhost:5000/dashboard-stats", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`, // Assuming you store the token in localStorage
      }
    })
      .then(res => res.json())
      .then(data => {
        setStats({
          users: data.totalUsers,
          posts: 450, // Static data, replace with actual API if needed
          comments: 3200, // Static data, replace with actual API if needed
          revenue: 23000, // Static data, replace with actual API if needed
          totalArticles: data.totalArticles,
          totalPremiumArticles: data.totalPremiumArticles,
        });
      });
  }, []);

  const barData = [
    { name: "Users", value: stats.users },
    { name: "Posts", value: stats.posts },
    { name: "Comments", value: stats.comments },
    { name: "Revenue", value: stats.revenue / 1000 }, // K for thousand
    { name: "Articles", value: stats.totalArticles },
    { name: "Premium Articles", value: stats.totalPremiumArticles },
  ];

  const pieData = [
    { name: "Users", value: stats.users },
    { name: "Posts", value: stats.posts },
    { name: "Comments", value: stats.comments },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-500 text-white p-4 rounded-md shadow">
          <h3 className="text-lg">Users</h3>
          <p className="text-2xl font-bold">{stats.users}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-md shadow">
          <h3 className="text-lg">Posts</h3>
          <p className="text-2xl font-bold">{stats.posts}</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-md shadow">
          <h3 className="text-lg">Comments</h3>
          <p className="text-2xl font-bold">{stats.comments}</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-md shadow">
          <h3 className="text-lg">Revenue</h3>
          <p className="text-2xl font-bold">${stats.revenue.toLocaleString()}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-lg font-semibold mb-2">Overview Bar Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-lg font-semibold mb-2">User Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
