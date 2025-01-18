import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import { Helmet } from "react-helmet-async";

const DashboardPage = () => {
  // Dummy data for charts
  const publicationData = [
    ["Publisher", "Articles"],
    ["PublicationA", 2],
    ["PublicationB", 3],
    ["PublicationC", 5],
  ];

  const barChartData = [
    ["Month", "Articles"],
    ["Jan", 10],
    ["Feb", 20],
    ["Mar", 30],
    ["Apr", 40],
    ["May", 50],
  ];

  const lineChartData = [
    ["Day", "Views"],
    ["Mon", 30],
    ["Tue", 40],
    ["Wed", 20],
    ["Thu", 50],
    ["Fri", 60],
  ];

  return (
    <>
      <Helmet>
        <title>NewsOrbit || Admin Dashboard</title>
        <link rel="icon" type="image/png" href="/chart-icon.png" />
      </Helmet>
      <div className="flex min-h-screen">
        {/* Main Content Section */}
        <div className="flex-1 bg-gray-100">
          <div className="p-6">
            {/* Title and Breadcrumb */}
            <div className="mb-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                Admin Dashboard
              </h2>
              <p className="text-gray-600">
                Manage your content and analytics here.
              </p>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pie Chart for Publications */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Publication Distribution
                </h3>
                <Chart
                  chartType="PieChart"
                  width="100%"
                  height="400px"
                  data={publicationData}
                />
              </div>

              {/* Bar Chart for Articles Over Time */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Articles by Month
                </h3>
                <Chart
                  chartType="BarChart"
                  width="100%"
                  height="400px"
                  data={barChartData}
                />
              </div>

              {/* Line Chart for Views */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Article Views Over Days
                </h3>
                <Chart
                  chartType="LineChart"
                  width="100%"
                  height="400px"
                  data={lineChartData}
                />
              </div>
            </div>

            {/* Links to Admin Sections */}
            <div className="mt-6 space-y-4">
              <Link
                to="/dashboard/all-users"
                className="text-blue-600 hover:underline"
              >
                All Users
              </Link>
              <Link
                to="/dashboard/all-articles"
                className="text-blue-600 hover:underline"
              >
                All Articles
              </Link>
              <Link
                to="/dashboard/add-publisher"
                className="text-blue-600 hover:underline"
              >
                Add Publisher
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
