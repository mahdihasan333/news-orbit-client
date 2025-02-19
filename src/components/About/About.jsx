import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../../providers/ThemeProvider";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Helmet>
        <title>Assignment Buddy | About Us</title>
      </Helmet>
      <section
        className={`w-11/12 mx-auto transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-blue-50 text-black"
        }`}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            We are a team of passionate developers committed to building innovative web solutions.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Mission */}
            <div
              className={`p-6 h-80 flex flex-col justify-center items-center rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Our mission is to create innovative web applications that solve real-world problems.
              </p>
            </div>

            {/* Card 2 - Vision */}
            <div
              className={`p-6 h-80 flex flex-col justify-center items-center rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                We envision a world where technology enables seamless communication and enhances life.
              </p>
            </div>

            {/* Card 3 - Team */}
            <div
              className={`p-6 h-80 flex flex-col justify-center items-center rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold">Our Team</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Our team consists of skilled developers, designers, and strategists delivering exceptional products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
