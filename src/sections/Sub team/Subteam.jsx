import React from "react"
import img4 from "../../images/Sub team/Ananthu.jpg"
import img5 from "../../images/Sub team/Sayana.jpg"
import img6 from "../../images/Sub team/FuhadSanin.jpg"
import img7 from "../../images/Sub team/Rony Philips Vidhu.jpg"
import img8 from "../../images/Sub team/Rosu.jpg"
import img9 from "../../images/Sub team/Aparna.jpg"
import img10 from "../../images/Sub team/Vaishak.png"
import img11 from "../../images/Sub team/Reo.png"
import img12 from "../../images/Sub team/Ananthu.jpg"

function Subteam() {
  return (
    <div data-aos="fade-up" id="team" class="mb-16 ">
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
        <h2 class="text-2xl">The Sub Team</h2>
      </div>

      <div class="mt-7 flex flex-row flex-wrap w-full">
        <div>
          <div class="bg-white w-[180px] h-[180px] mr-12 rounded-full border-solid border border-gray-300 ">
            <img
              class="rounded-full w-full h-full object-cover border-8  border-gray-200 shadow-xl"
              src={img4}
              alt=""
            />
          </div>

          <div class="mt-4">
            <a href="" class="ml-7 font-bold ">
              Ananthu M P
            </a>
          </div>
          <h6 class="text-[13px] px-2 mb-2 ml-14 ">Program Manager</h6>
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
              Sayana Elizabeth Siju
            </a>
          </div>
          <h6 class="text-[13px] px-2 mb-2 ml-6 ">Program Manager</h6>
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
              Fuhad Sanin
            </a>
          </div>
          <h6 class="text-[13px] px-2 mb-2 ml-6 ">Technical Analyst</h6>
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
              Rony Philips Vidhu
            </a>
          </div>
          <h6 class="text-[13px] px-2 mb-2 ml-8">Technical Analyst</h6>
        </div>

        <div class="mt-7 ml-16 flex flex-row flex-wrap w-full">
          <div>
            <div class="bg-white w-[180px] h-[180px] mr-12 rounded-full border-solid border border-gray-300 ">
              <img
                class="rounded-full w-full h-full object-cover border-8 border-gray-200 shadow-xl"
                src={img8}
                alt=""
              />
            </div>

            <div class="mt-4">
              <a href="" class="font-bold ml-11 ">
                Rosu J Edanad
              </a>
            </div>
            <h6 class="text-[13px] px-2 mb-2">Administrative Manager</h6>
          </div>

          <div class="px-3 mb-3">
            <div class="bg-white w-[180px] h-[180px] mr-12 rounded-full border-solid border border-gray-300 ">
              <img
                class="rounded-full w-full h-full object-cover border-8 border-gray-200 shadow-xl"
                src={img9}
                alt=""
              />
            </div>
            <div class="mt-4">
              <a href="" class="font-bold px-2">
                Aparna Pradeep
              </a>
            </div>
            <h6 class="text-[13px] px-2 mb-2 ml-7">Administrative Manager</h6>
          </div>

          <div>
            <div class="bg-white w-[180px] h-[180px] mr-12 rounded-full border-solid border border-gray-300 ">
              <img
                class="rounded-full w-full h-full object-cover border-8 border-gray-200 shadow-xl"
                src={img10}
                alt=""
              />
            </div>
            <div class="mt-4">
              <a href="" class="font-bold px-2">
                Vaisakh R Nair
              </a>
            </div>
            <h6 class="text-[13px] px-2 mb-2 ml-7 ">Project Lead</h6>
          </div>

          <div class="px-3 mb-3">
            <div class="bg-white  w-[180px] h-[180px] mr-12 rounded-full border-solid border border-gray-300 ">
              <img
                class="rounded-full w-full h-full object-cover border-8 border-gray-200 shadow-xl"
                src={img11}
                alt=""
              />
            </div>
            <div class="mt-4">
              <a href="" class="font-bold px-2 ml-6">
                Reo George
              </a>
            </div>
            <h6 class="text-[13px] px-2 mb-2 ml-11 ">Project Lead</h6>
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
                Athul M E
              </a>
            </div>
            <h6 class="text-[13px] px-2 mb-2 ml-9 ">Media Lead</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subteam
