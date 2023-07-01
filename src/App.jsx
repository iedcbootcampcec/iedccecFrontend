import Landing from "./pages/Landing/Landing"
import Announcement from "./pages/Announcment/Announcement"
import Achievements from "./pages/Achievements/Achievements"
import Testimonials from "./pages/Testimonials/Testimonials"
import Footer from "./pages/Footer/Footer"
import Team from "./pages/Team/Team"
import Subteam from "./pages/Sub team/Subteam"
import { About } from "./pages/About/About"
import { Iet } from "./pages/IET/Iet"
import { useState, useEffect } from "react"
import PropagateLoader from "react-spinners/PropagateLoader"
import './index.css'

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <PropagateLoader color={"#000000"} loading={loading} size={30} />
        </div>
      ) : (
        <>
          <div>
            <Landing />
          </div>
          <div className="sm:px-16 px-10 w-full">
            <Iet />
            <Announcement />
            <Achievements />
            <About />
            <Team />
            <Subteam />
            <Testimonials />
          </div>
          <div>
            <Footer />
          </div>
        </>
      )}
    </div>
  )
}

export default App
