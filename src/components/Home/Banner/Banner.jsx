import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Slide from "../../Slide/Slide";

const Banner = () => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide  text="Learn Together, Succeed Together!" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide  text="Your Gateway to Collaborative Success" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            
            text="Join Hands, Share Knowledge, Excel Together"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide  text="Share Ideas, Solve Problems, Succeed" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide  text="Share Ideas, Solve Problems, Succeed" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide  text="Share Ideas, Solve Problems, Succeed" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
