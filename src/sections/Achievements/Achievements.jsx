import React from "react"
import Carousel from "react-multi-carousel"
import "../../../node_modules/react-multi-carousel/lib/styles.css"
import Cards from "./Cards"

export default function Achievements() {
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
        <h2 id="achievements" class="text-2xl">
          Achievements
        </h2>
      </div>
    
      <div className="carousel">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={4000}
          infinite={true}
          showDots={true}
          focusOnSelect={true}
        >
          <div>
            <Cards />
          </div>
          <div>
            <Cards />
          </div>
          <div>
            <Cards />
          </div>
          <div>
            <Cards />
          </div>
          <div>
            <Cards />
          </div>
        </Carousel>
      </div>
=======
        <div className="carousel">
            <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={4000} infinite={true} showDots={true} focusOnSelect={true}>
                <div><Cards/></div>
                <div><Cards/></div>
                <div><Cards/></div>
                <div><Cards/></div>
                <div><Cards/></div>
                <div><Cards/></div>
            </Carousel>
        </div>



    </div>
  )
}
