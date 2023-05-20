import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Carousel from "react-multi-carousel"
import "../../../node_modules/react-multi-carousel/lib/styles.css"

import img4 from "../../images/team/parvathy.jpeg"
import img5 from "../../images/team/archana.jpg"
import img6 from "../../images/team/sujii.jpeg"
import img7 from "../../images/team/durga.jpeg"
import img8 from "../../images/team/haripriya.jpg"
import img9 from "../../images/team/Breesa.jpg"
import img10 from "../../images/team/nishanth.jpg"
import img11 from "../../images/team/visal.jpeg"
import img12 from "../../images/team/prajeeth.jpeg"
import { Member } from "./Member"
import Cards from "../Achievements/Cards"

export default function Announcement() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false })
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <div data-aos="fade-up" id="team" class="flex flex-col mb-16 ">
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
        <h2 class="text-2xl">The Team</h2>
      </div>
      <div className="h-fit flex overflow-x-auto gap-20">
        <div>
          <Member img={img4} name="Parvathy Madhu" position="IEDC Lead" />
        </div>
        <div>
          <Member img={img5} name="Parvathy Madhu" position="IEDC Lead" />
        </div>
        <div>
          <Member img={img6} name="Parvathy Madhu" position="IEDC Lead" />
        </div>
        <div>
          <Member img={img7} name="Parvathy Madhu" position="IEDC Lead" />
        </div>
        <div>
          <Member img={img8} name="Parvathy Madhu" position="IEDC Lead" />
        </div>
        <div>
          <Member img={img9} name="Parvathy Madhu" position="IEDC Lead" />
        </div>
        <div>
          <Member img={img10} name="Parvathy Madhu" position="IEDC Lead" />
        </div>
        <div>
          <Member img={img11} name="Parvathy Madhu" position="IEDC Lead" />
        </div>
        <div>
          <Member img={img12} name="Parvathy Madhu" position="IEDC Lead" />
        </div>
      </div>

      {/* <div>
          <div class="bg-white w-[180px] h-[180px] mr-12 rounded-full border-solid border border-gray-300 ">
            <img
              class="rounded-full border-8 border-gray-200 shadow-xl"
              src={img4}
              alt=""
            />
          </div>

          <div class="mt-4">
            <a href="" class="ml-7 font-bold ">
              Parvathy Madhu
            </a>
          </div>
          <h6 class="text-[13px] px-2 mb-2 ml-14 ">IEDC Lead</h6>
        </div>
        <div class="px-0 mb-3">
          <div class="bg-white w-[180px] h-[180px] mr-12 rounded-full border-solid border border-gray-300 ">
            <img
              class="rounded-full border-8 border-gray-200 shadow-xl"
              src={img5}
              alt=""
            />
          </div>
          <div class="mt-4">
            <a href="" class="font-bold px-2 ml-1">
              Archana Lejikumar
            </a>
          </div>
          <h6 class="text-[13px] px-2 mb-2 ml-6 ">Community Lead</h6>
        </div>

        <div>
          <div class="bg-white w-[180px] h-[180px] mr-12 rounded-full border-solid border border-gray-300 ">
            <img
              class="rounded-full border-8 border-gray-200 shadow-xl"
              src={img6}
              alt=""
            />
          </div>
          <div class="mt-4">
            <a href="" class="font-bold px-2 ml-4">
              Suji Marium Saji
            </a>
          </div>
          <h6 class="text-[13px] px-2 mb-2 ml-6 ">We Cell Secretary</h6>
        </div>

        <div class="px-3 mb-3">
          <div class="bg-white w-[180px] h-[180px] mr-12 rounded-full border-solid border border-gray-300 ">
            <img
              class="rounded-full border-8 border-gray-200 shadow-xl"
              src={img7}
              alt=""
            />
          </div>
          <div class="mt-4">
            <a href="" class="font-bold px-2 ml-3">
              Durga Ajithkumar
            </a>
          </div>
          <h6 class="text-[13px] px-2 mb-2 ml-8">Marketing Lead</h6>
        </div>

        <div class="mt-7 ml-16 flex flex-row flex-wrap w-full">
          <div>
            <div class="bg-white w-[180px] h-[180px] mr-12 rounded-full border-solid border border-gray-300 ">
              <img
                class="rounded-full border-8 border-gray-200 shadow-xl"
                src={img8}
                alt=""
              />
            </div>

            <div class="mt-4">
              <a href="" class="font-bold ml-11 ">
                Haripriya P
              </a>
            </div>
            <h6 class="text-[13px] px-2 mb-2">Branding and Marketing Lead</h6>
          </div>

          <div class="px-3 mb-3">
            <div class="bg-white w-[180px] h-[180px] mr-12 rounded-full border-solid border border-gray-300 ">
              <img
                class="rounded-full border-8 border-gray-200 shadow-xl"
                src={img9}
                alt=""
              />
            </div>
            <div class="mt-4">
              <a href="" class="font-bold px-2">
                Breesa Eliswa Manoj
              </a>
            </div>
            <h6 class="text-[13px] px-2 mb-2 ml-7">Operational Lead</h6>
          </div>

          <div>
            <div class="bg-white w-[180px] h-[180px] mr-12 rounded-full border-solid border border-gray-300 ">
              <img
                class="rounded-full border-8 border-gray-200 shadow-xl"
                src={img10}
                alt=""
              />
            </div>
            <div class="mt-4">
              <a href="" class="font-bold px-2">
                Nishanth R Pillai
              </a>
            </div>
            <h6 class="text-[13px] px-2 mb-2 ml-7 ">Creative Lead</h6>
          </div>

          <div class="px-3 mb-3">
            <div class="bg-white w-[180px] h-[180px] mr-12 rounded-full border-solid border border-gray-300 ">
              <img
                class="rounded-full border-8 border-gray-200 shadow-xl"
                src={img11}
                alt=""
              />
            </div>
            <div class="mt-4">
              <a href="" class="font-bold px-2 ml-6">
                Visal Krishnan
              </a>
            </div>
            <h6 class="text-[13px] px-2 mb-2 ml-11 ">Tech Lead</h6>
          </div>

          <div>
            <div class="bg-white w-[180px] h-[180px] mr-12 rounded-full border-solid border border-gray-300 ">
              <img
                class="rounded-full border-8 border-gray-200 shadow-xl"
                src={img12}
                alt=""
              />
            </div>
            <div class="mt-4">
              <a href="" class="font-bold px-2 ml-5">
                Prajeeth Menon
              </a>
            </div>
            <h6 class="text-[13px] px-2 mb-2 ml-9 ">Finance Lead</h6>
          </div>
        </div>*/}
    </div>
  )
}
