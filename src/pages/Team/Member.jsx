import React from "react"
import img4 from "../../images/team/parvathy.jpeg"

export const Member = props => {
  return (
    <div class="flex flex-col justify-center items-center mb-10">
      <div class="w-[180px] h-[180px] rounded-full border-solid border border-gray-300 hover:scale-50">
        <img
          class="w-full h-full object-cover rounded-full border-8 border-gray-200 shadow-xl"
          src={props.img}
          alt=""
        />
      </div>
      <div class="mt-4">
        <a href="" class="text-xl font-bold ">
          {props.name}
        </a>
      </div>
      <h6 class="text-md">IEDC Lead</h6>
    </div>
  )
}
