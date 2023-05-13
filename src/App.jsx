import Landing from "./sections/Landing/Landing"
import Announcement from "./sections/Announcment/Announcement"
import Achievements from "./sections/Achievements/Achievements"
import Testimonials from "./sections/Testimonials/Testimonials"
import Footer from "./sections/Footer/Footer"
import Team from "./sections/Team/Team"
import Subteam from "./sections/Sub team/Subteam"
import { About } from "./sections/About/About"
import { Card_Slider } from "./sections/Slider/Card_Slider"

function App() {
  return (
    <div>
      <div>
        <Landing />
      </div>
      <div className="px-16 w-full">
        <Announcement />
        <Achievements />
        <Card_Slider />
        <Team />
        <Subteam />
        <About />
        <Testimonials />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
