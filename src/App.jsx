import Landing from "./sections/Landing/Landing"
import Iet from "./sections/IET/iet"
import Announcement from "./sections/Announcment/Announcement"
import Achievements from "./sections/Achievements/Achievements"
import Testimonials from "./sections/Testimonials/Testimonials"
import Footer from "./sections/Footer/Footer"
import Team from "./sections/Team/Team"
import Subteam from "./sections/Sub team/Subteam"
import {About} from "./sections/About/About"

function App() {
  return (
    <div>
      <div>
        <Landing />
      </div>
      <div className="px-16 w-full">
        <Iet />
        <Announcement />
        <Achievements />
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
