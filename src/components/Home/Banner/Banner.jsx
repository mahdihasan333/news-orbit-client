import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Slide from "../../Slide/Slide";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const Banner = () => {
  const axiosPublic = useAxiosPublic();

  const { data: sliderData = [], isLoading } = useQuery({
    queryKey: ["slider"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/slider`);
      return res.data;
    },
  });
  if(isLoading) return <LoadingSpinner/>

  console.log( 'slider', sliderData);

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
        {sliderData.map((slider) => (
          <SwiperSlide key={slider._id}>
            <Slide image={slider?.imageUrl} text={slider?.description} />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <Slide text="1" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide text="2" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide text="" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide text="" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide text="" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide text="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
