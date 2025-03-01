import React from "react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const Slider = () => {
  return (
    <Swiper
      className="mt-[104px] h-96 cursor-grab active:cursor-grabbing"
      modules={[Navigation, Pagination, A11y, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="w-full h-full">
        <img
          className="w-full h-full object-cover object-center"
          src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-1.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-full object-cover object-center"
          src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-2.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-full object-cover object-center"
          src="https://cdn.smartslider3.com/wp-content/uploads/slider/cache/2eac36426bb7c29a06cdd9f1fc93aea9/fullwidth-product-slider1.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-full object-cover object-center"
          src="https://theme.hstatic.net/1000388227/1001117190/14/slider_3_image.jpg?v=1257"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
