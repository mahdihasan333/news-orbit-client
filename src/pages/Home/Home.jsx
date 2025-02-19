import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Questions from "../../components/Home/Questions/Questions";
import Banner from "../../components/Home/Banner/Banner";
import Publisher from "../../components/Home/Publisher/Publisher";
import Plan from "../../components/Home/Plan/Plan";
// import Statistic from "../../components/Home/Statistic/Statistic";
import Modal from "../../components/Home/modal/Modal";
import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";
import FeaturedCategories from "../../components/Home/FeaturedCategories/FeaturedCategories";

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`transition-colors  space-y-16 duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-blue-50 text-black"
      }`}
    >
      <Helmet>
        <title>NewsOrbit | Home</title>
        <link rel="icon" type="image/png" href="/newspaper-icon.png" />
      </Helmet>
      <Modal />
      <Banner />
      <About />
      <Publisher />
      {/* <Statistic /> */}
      <Plan />
      <FeaturedCategories/>
      
      <Testimonials />
      <Questions />
      <Contact />
    </div>
  );
};

export default Home;
