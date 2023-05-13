import React from "react"
import college from "../../images/About/College_clipart.jpg"
import { Tab } from "./Tab"

export const About = () => {
  return (
    <div id="About" className="flex flex-col mb-16">
      <div class="flex my-7">
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
          Who we are
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[80%] h-fit border-none border-gray-300 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex flex-col justify-center items-center">
          <p className="p-14  text-gray-400 text-md text-center">
            The Innovation and Entrepreneurship Development Cell [IEDC] Bootcamp
            College of Engineering Chengannur was established in June 2015 in
            association with Kerala Startup Mission [KSUM], with the vision of
            molding youngsters into technological entrepreneurs and innovative
            leaders. KSUM serves as a stepping stone for aspiring business
            owners looking to enter the field of technology-based jobs and
            supports entrepreneurs in pursuing their goals.
            <br />
            <br /> IEDC CEC promotes entrepreneurship, cultivates an innovative
            attitude, and encourages students to pursue their passion. The cell
            organizes myriad programs that will inspire young, aspiring
            technology graduates to pursue entrepreneurship as a profession and
            become job providers rather than job seekers.
          </p>
          <div className="w-[550px] h-[400px]">
            <img src={college} className="w-full h-full object-cover" />
          </div>
          <h3 className="pb-10 text-gray-500">
            COLLEGE OF ENGINEERING CHENGANNUR
          </h3>
        </div>
      </div>
      <Tab />
    </div>
  )
}
