import React, { useState } from "react"
import "./Tab.css"

export const Tab = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = index => {
    setToggleState(index)
  }

  return (
    <div id="Tab">
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Our Mission
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Objectives
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            We Cell
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <p className="text-gray-400 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo
              nihil vel voluptatum?
            </p>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <p className="text-gray-400 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <p className="text-gray-400 text-md">
              Women Entrepreneurship Cell A world of million opportunities
              awaits outside and this is one of the very few chances to grab the
              heights. Stay ahead of your league by making the first step into
              the world of women entrepreneurship. IEDC Bootcamp College of
              Engineering, Chengannur launches Women Entrepreneurship Cell a
              Women Lead Initiative coming to you in a new face and new
              structure with the perfect lineup of the best to leave you spell
              bound. Prime yourself for mind boggling WE experience !
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
