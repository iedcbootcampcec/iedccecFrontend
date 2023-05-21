import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"

// Import Swiper styles
import "swiper/swiper-bundle.min.css"
import data from "./Achievements.json"

export default function Achievements() {
  return (
    <div class="mb-16">
      <div
        data-aos="flip-up"
        data-aos-duration="1000"
        class="flex items-center my-7"
      >
        <div class="p-[6px] rounded-md bg-black mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
              clip-rule="evenodd"
            />
            <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
          </svg>
        </div>
        <h2 id="achievements" class="text-2xl">
          Achievements
        </h2>
      </div>
      <div className="Card h-fit sm:block hidden">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={3}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {data &&
            data.map(item => {
              return (
                <SwiperSlide>
                  <div className="mb-[100px]">
                    <div className="w-[300px] h-[200px]">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div class="bottom w-[280px] h-fit">
                      <h1 class="text-center text-xl font-semibold mb-3">
                        {item.title}
                      </h1>
                      <p class="text-sm text-gray-500 text-center">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
      <div className="sm:hidden block">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {data &&
            data.map(item => {
              return (
                <SwiperSlide>
                  <div className="mb-[50px]">
                    <div className="w-[300px] h-[200px]">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div class="bottom w-[280px] h-fit">
                      <h1 class="text-center text-xl font-semibold mb-3">
                        {item.title}
                      </h1>
                      <p class="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  )
}
