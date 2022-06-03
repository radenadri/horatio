import Clients from "./components/Clients"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import LatestJournal from "./components/LatestJournal"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"

const App = () => {

  return (
    <main>
      <Navbar />
      <Hero />
      <Portfolio />
      <Clients />
      <LatestJournal />
      <Footer />
    </main>
  )
}

export default App
