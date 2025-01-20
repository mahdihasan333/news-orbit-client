import { Helmet } from "react-helmet-async";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Questions from "../../components/Home/Questions/Questions";
import Banner from "../../components/Home/Banner/Banner";
import Publisher from "../../components/Home/Publisher/Publisher";
import Plan from "../../components/Home/Plan/Plan";
import Statistic from "../../components/Home/Statistic/Statistic";
import Modal from "../../components/Home/modal/Modal";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>NewsOrbit || Home</title>
        <link rel="icon" type="image/png" href="/newspaper-icon.png" />
      </Helmet>
      <Modal />
      <Banner />
      <Publisher />
      <Statistic />
      <Plan />
      <Testimonials />
      <Questions />
    </div>
  );
};

export default Home;
