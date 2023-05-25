import React, { useEffect } from "react"
import AOS from "aos"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Scrollbar, Mousewheel } from "swiper"
import "aos/dist/aos.css"
import "swiper/swiper-bundle.min.css"
import data from "./Announcement.json"
import "./style.css"

export default function Announcement() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false })
  }, [])
  return (
    <div id="announcement" class="flex flex-row">
      <div class="mb-16">
        <div class="flex items-center my-7">
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
          <h2 id="announcment-section" class="text-2xl">
            Announcements
          </h2>
        </div>

        <div className="Card h-fit sm:block hidden ">
          <Swiper
            height={200}
            direction={"vertical"}
            slidesPerView={1}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            className="mySwiper"
            spaceBetween={0}
            loop={true}
          >
            {data &&
              data.map(item => {
                return (
                  <SwiperSlide>
                    <div class="mt-7 mb-32">
                      <div class="mt-1 mb-7">
                        <div class="flex flex-row">
                          <div class="flex flex-col w-[70%]">
                            <a href="" class="font-bold text-[16px] mb-2">
                              {item.title}
                            </a>
                            <span class="text-[13px] text-gray-600 mb-2">
                              {item.description}
                            </span>
                          </div>
                          <div class="w-[30%] h-44 mb-32">
                            <img
                              class="w-full h-full object-cover"
                              src={item.image}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </div>
        <div className="h-fit sm:hidden block ">
          <Swiper
            height={300}
            direction={"vertical"}
            slidesPerView={1}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            className="mySwiper"
            spaceBetween={0}
          >
            {data &&
              data.map(item => {
                return (
                  <SwiperSlide>
                    <div class="mt-7 mb-[500px] h-fit">
                      <div class="mt-1 mb-7  ">
                        <div class="flex flex-row">
                          <div class="flex flex-col w-[70%]">
                            <a href="" class="font-bold text-[16px] mb-2">
                              {item.title}
                            </a>
                            <span class="text-[13px] text-gray-600 mb-2">
                              {item.description}
                            </span>
                          </div>
                          <div class="w-[30%]  h-44 mb-32">
                            <img
                              class="w-full h-full object-cover"
                              src={item.image}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </div>
      </div>

      <div data-aos="fade-left" class="ml-96 mt-16 sm:block hidden ">
        <ul class="flex items-center">
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Workshop
            </button>
          </li>
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Orientation
            </button>
          </li>
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Seminar
            </button>
          </li>
        </ul>
        <ul class="flex item-centre">
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Lecture
            </button>
          </li>
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Hackathon
            </button>
          </li>
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Acheivements
            </button>
          </li>
        </ul>
        <ul class="flex items-center my-2">
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Workshop
            </button>
          </li>
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Seminar
            </button>
          </li>
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Orientation
            </button>
          </li>
        </ul>
        <span class="text-[13px] text-gray-600 mb-2">
          IEDC Bootcamp CEC in association with IPL, Innovators Premier <br />{" "}
          League is here with a session on Resume Building.
        </span>
        <div class="mb-4">
          <input
            class="shadow appearance-none border border-gray-300 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline mr-2.5 my-6 placeholder-gray-600 placeholder-opacity-75"
            id="have idea for any event?"
            type="text"
            placeholder="Have idea for any event? "
          />
          <button class="text-sm text-white bg-black rounded-md px-4 py-2 transition hover:bg-transparent hover:text-black hover:ring-2 hover:ring-black cursor-pointer">
            Request
          </button>
        </div>
      </div>
    </div>
  )
}
