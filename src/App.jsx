import Landing from "./pages/Landing/Landing"
import Announcement from "./pages/Announcment/Announcement"
import Achievements from "./pages/Achievements/Achievements"
import Testimonials from "./pages/Testimonials/Testimonials"
import Footer from "./pages/Footer/Footer"
import Team from "./pages/Team/Team"
import Subteam from "./pages/Sub team/Subteam"
import { About } from "./pages/About/About"
import { Iet } from "./pages/IET/Iet"

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
        <About />
        <Team />
        <Subteam />
        <Testimonials />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
