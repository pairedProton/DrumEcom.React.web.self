import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import Reel from "../../ui/Reel";

const ReelSection = ({ videoData = [], loading, error }) => {
  const skeletonArray = Array.from({ length: 5 });

  const renderSlides = () => {
    // 🔄 Loading state
    if (loading) {
      return skeletonArray.map((_, index) => (
        <SwiperSlide key={index} className="h-auto!">
          <div className="w-[200px] h-[300px] bg-gray-300 rounded-xl animate-pulse">
            <div className="w-[200px] h-[300px] bg-gray-300 rounded-xl animate-pulse flex items-end p-3">
              <div className="w-full h-4 bg-gray-400 rounded"></div>
            </div>
          </div>
        </SwiperSlide>
      ));
    }

    // ❌ Error state
    if (error) {
      return (
        <div className="text-red-500 text-center w-full">
          Failed to load reels 🚫
        </div>
      );
    }

    // ✅ Normal state
    return videoData.map(reel => (
      <SwiperSlide key={reel.id} className="h-auto!">
        <Reel reelData={reel.video || reel.video_url} />
      </SwiperSlide>
    ));
  };

  return (
    <div className="w-full h-auto py-10 px-4">
      <div className="container mx-auto">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {renderSlides()}
        </Swiper>
      </div>
    </div>
  );
};

export default ReelSection;
