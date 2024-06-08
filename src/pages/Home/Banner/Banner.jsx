import { Swiper, SwiperSlide } from "swiper/react";
// import Slide from "./Slide";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import SpecialOffer from "../SpecialOffer/SpecialOffer";

const Banner = () => {
  return (
    <Swiper
      className=""
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
      }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
    >
      {/* <SpecialOffer /> */}
      <SwiperSlide>
        <div
          className={`h-[500px] md:h[700px] lg:h-[862px] bg-bgImg1 bg-no-repeat bg-cover z-10 rounded-lg`}
        >
          <div className="h-[500px] md:h[700px] lg:h-[862px] flex flex-col items-center justify-center bg-black opacity-75 rounded-lg space-y-3">
            <h1 className="text-[30px] lg:text-[80px] font-playfair text-white font-extrabold">
              Welcome to <span className="text-[#FFAC41]">Elite Property</span>
            </h1>
            <p className="w-[100%] md:w-[70%] mx-auto text-center text-[16px] font-open-sans font-normal text-gray-400">
              Our premium real estate offerings are meticulously curated to
              provide you with unparalleled comfort and luxury. Whether you are
              looking for a modern apartment in the heart of the city, a serene
              suburban home, or a sprawling countryside estate.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`h-[500px] md:h[700px] lg:h-[862px] bg-bgImg2 bg-no-repeat bg-cover z-10 rounded-lg`}
        >
          <div className="h-[500px] md:h[700px] lg:h-[862px] flex flex-col items-center justify-center bg-black opacity-75 rounded-lg space-y-3">
            <h1 className="text-[30px] lg:text-[80px] font-playfair text-white font-extrabold">
              Discover Your
              <span className="text-[#FFAC41] font-playfair"> Place </span>
              To Live
            </h1>
            <p className="w-[100%] md:w-[70%] mx-auto text-center text-[16px] font-open-sans font-normal text-gray-400">
              At Elite Property, we offer a diverse array of properties to suit
              every lifestyle and preference. From chic urban lofts and charming
              suburban houses to luxurious estates, our commitment is to help
              you find a space that resonates with your unique vision of home.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`h-[500px] md:h[700px] lg:h-[862px] bg-bgImg3 bg-no-repeat bg-cover z-10 rounded-lg`}
        >
          <div className="h-[500px] md:h[700px] lg:h-[862px] flex flex-col items-center justify-center bg-black opacity-75 rounded-lg space-y-3">
            <h1 className="text-[30px] lg:text-[80px] font-playfair text-white font-extrabold text-center">
              Beautiful{" "}
              <span className="text-[#FFAC41] font-playfair"> Houses </span>
              Around The World
            </h1>
            <p className="w-[100%] md:w-[70%] mx-auto text-center text-[16px] font-open-sans font-normal text-gray-400">
              Discover the most beautiful houses around the world with Elite
              Property. Our exclusive listings feature stunning homes in the
              most desirable locations, each offering unique architecture,
              luxurious amenities, and breathtaking views.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
