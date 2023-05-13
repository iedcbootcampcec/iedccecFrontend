import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import img1 from "../../images/iet/innovative.jpeg"
import img2 from "../../images/iet/entrepreneurship.jpeg"
import img3 from "../../images/iet/technology.jpeg"

function iet() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false })
  }, [])
  return (
    <div id="vision" class="pt-16 mb-16 flex flex-col">
      <div className="flex flex-row flex-wrap justify-between ">
        <div
          data-aos="fade-up"
          class="w-[300px] h-[350px] flex flex-col items-center justify-center border-[1px] border-gray-300 rounded-2xl shadow-lg p"
        >
          <div class="w-24 h-24 mb-3 flex">
            <img class="w-full h-full object-cover" src={img1} alt="" />
          </div>
          <h1 class="text-center text-xl font-semibold mb-3">Innovation</h1>
          <div class="w-[70%]">
            <p class="text-[12px] text-gray-500 text-center">
              As a leading innovation hub, we are committed to fostering a
              culture of creativity and out-of-the-box thinking. We offer a
              range of programs and services designed to support innovators at
              all stages of their journey, from ideation to commercialization.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          class="w-[300px] h-[350px] flex flex-col items-center justify-center border-[1px] border-gray-300 rounded-2xl shadow-lg p"
        >
          <div class="w-24 h-24 mb-3 flex">
            <img class="w-full h-full object-cover" src={img2} alt="" />
          </div>
          <h1 class="text-center text-xl font-semibold mb-3">
            Entrepreneurship
          </h1>
          <div class="w-[70%]">
            <p class="text-[12px] text-gray-500 text-center">
              Our organization is dedicated to fostering a culture of
              entrepreneurship in our local community. We partner with
              universities and incubators to provide mentorship and resources to
              aspiring entrepreneurs.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          class="w-[300px] h-[350px] flex flex-col items-center justify-center border-[1px] border-gray-300 rounded-2xl shadow-lg p"
        >
          <div class="w-28 h-28 mb-3 overflow-hidden flex">
            <img
              class="w-full h-full mt-2 scale-125 object-cover"
              src={img3}
              alt=""
            />
          </div>
          <h1 class="text-center text-xl font-semibold mb-3">Technology</h1>
          <div class="w-[70%]">
            <p class="text-[12px] text-gray-500 text-center">
              Our organization is dedicated to helping individuals and
              businesses stay ahead of the curve in the rapidly evolving world
              of technology. We host regular workshops and panel discussions
              that explore the latest trends and technologies shaping the
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default iet
