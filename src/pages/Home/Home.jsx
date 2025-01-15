import { Helmet } from "react-helmet-async";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import FeaturedSection from "../../components/Home/FeaturedSection/FeaturedSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NewsOrbit || Home</title>
            </Helmet>
            <FeaturedSection/>
            <Testimonials/>
        </div>
    );
};

export default Home;