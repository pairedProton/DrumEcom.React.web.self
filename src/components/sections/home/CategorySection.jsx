import React from 'react'
import CategoryCircle from '../../ui/CategoryCircle'
import {categoryData} from '../../../constants/categoryData'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const CategorySection = () => {
  return (
    <div className="flex gap-8 p-4 px-6">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        freeMode={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {categoryData.map((item, index) => (
          <SwiperSlide key={index}>
            <CategoryCircle key={index} img={item.img} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategorySection