import React from 'react'

export default function Cards() {
  return (
    <div class="flex flex-col w-[280px] h-[480px]">
        <div class="top w-[280px] h-[200px] mb-3">
            <img class="w-full h-full object-cover" src="acheive1.jpeg" alt=""/>
        </div>
        <div class="bottom w-[280px] h-[180px]">
            <h1 class="text-center text-xl font-semibold mb-3">TOP PERFORMING IEDC IN SOUTH REGION</h1>
            <p class="text-sm text-gray-500">IEDC BOOTCAMP CEC TEAM recieving award for best performer in South Region and Alappuzha District in IPL, Innovators Premier League hosted by Kerala StartUp Mission and IEDC Kerala at SJCET palai on IEDC SUMMIT 2022.</p>
        </div>
  </div>
  )
}
