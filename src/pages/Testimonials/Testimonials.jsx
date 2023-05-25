import React from "react"
import "aos/dist/aos.css"
import img1 from "../../images/Sub team/FuhadSanin.jpg"

export default function Testimonials() {
  return (
    <div id="testimonials">
      <div class="flex items-center my-2">
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
        <h2 class="text-2xl">Testimonials</h2>
      </div>
      <div class="pt-16 mb-16 flex flex-col h-fit">
        <div className="flex flex-row flex-wrap justify-between gap-6">
          <div
            data-aos="flip-up"
            class="sm:w-[500px] w-[350px] h-fit flex flex-col  border-none border-gray-300 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
          >
            <div class="w-[95%] p-3 pb-0 h-[40%]  self-center">
              <p class="italic text-[12px] text-gray-500 text-center">
                " As a leading innovation hub, we are committed to fostering a
                culture of creativity and out-of-the-box thinking. We offer a
                range of programs and services designed to support innovators at
                all stages of their journey, from ideation to
                commercialization."
              </p>
            </div>

            <div class="bg-white w-[50px] h-[50px] rounded-full self-end mr-4 mb-4">
              <img
                class="object-contain rounded-full w-full h-full object-cover  shadow-xl"
                src={img1}
                alt=""
              />
            </div>
          </div>

          <div
            data-aos="flip-up"
            class="sm:w-[500px] w-[350px] h-fit flex flex-col  border-none border-gray-300 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
          >
            <div class="w-[95%] p-3 pb-0 h-[40%]  self-center">
              <p class="italic text-[12px] text-gray-500 text-center">
                " As a leading innovation hub, we are committed to fostering a
                culture of creativity and out-of-the-box thinking. We offer a
                range of programs and services designed to support innovators at
                all stages of their journey, from ideation to
                commercialization."
              </p>
            </div>

            <div class="bg-white w-[50px] h-[50px] rounded-full self-end mr-4 mb-4">
              <img
                class="object-contain rounded-full w-full h-full object-cover  shadow-xl"
                src={img1}
                alt=""
              />
            </div>
          </div>

          <div
            data-aos="flip-up"
            class="sm:w-[500px] w-[350px] h-fit flex flex-col  border-none border-gray-300 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
          >
            <div class="w-[95%] p-3 pb-0 h-[40%]  self-center">
              <p class="italic text-[12px] text-gray-500 text-center">
                " As a leading innovation hub, we are committed to fostering a
                culture of creativity and out-of-the-box thinking. We offer a
                range of programs and services designed to support innovators at
                all stages of their journey, from ideation to
                commercialization."
              </p>
            </div>

            <div class="bg-white w-[50px] h-[50px] rounded-full self-end mr-4 mb-4">
              <img
                class="object-contain rounded-full w-full h-full object-cover  shadow-xl"
                src={img1}
                alt=""
              />
            </div>
          </div>

          <div
            data-aos="flip-up"
            class="sm:w-[500px] w-[350px] h-fit flex flex-col  border-none border-gray-300 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
          >
            <div class="w-[95%] p-3 pb-0 h-[40%]  self-center">
              <p class="italic text-[12px] text-gray-500 text-center">
                " As a leading innovation hub, we are committed to fostering a
                culture of creativity and out-of-the-box thinking. We offer a
                range of programs and services designed to support innovators at
                all stages of their journey, from ideation to
                commercialization."
              </p>
            </div>

            <div class="bg-white w-[50px] h-[50px] rounded-full self-end mr-4 mb-4">
              <img
                class="object-contain rounded-full w-full h-full object-cover  shadow-xl"
                src={img1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
