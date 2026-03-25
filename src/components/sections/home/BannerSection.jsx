import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { bannerImages } from "../../../assets/images";
import { HomeBannerData } from "../../../constants/HomeBannerData";
import Banner from "../../ui/Banner";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import {Autoplay, Pagination } from "swiper/modules";


const BannerSection = () => {
  return (
    <div className="w-full h-110 ">
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {HomeBannerData.map((item, index) => (
          <SwiperSlide key={index}>
            <Banner img={item.img} />
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
}

export default BannerSection