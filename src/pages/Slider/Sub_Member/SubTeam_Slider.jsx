import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "./Item.css"
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCoverflow,
} from "swiper"

import detail from "./detail.json"

// Import Swiper styles
import "swiper/swiper-bundle.min.css"

export const SubTeam_Slider = () => {
  return (
    <div>
      <div className="item">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            Autoplay,
            EffectCoverflow,
          ]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {detail &&
            detail.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item.image} />
                  <div className="name">
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <h6 class="text-[15px]">{item.position}</h6>
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
      <div className="item item-mob">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            Autoplay,
            EffectCoverflow,
          ]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {detail &&
            detail.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item.image} />
                  <div className="name">
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <h6 class="text-[15px]">{item.position}</h6>
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  )
}
