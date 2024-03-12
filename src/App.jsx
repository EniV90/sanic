import "./App.css"
import Tokenomics from "./assets/Tokenomics"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Lore from "./components/Lore"
import Navbar from "./components/Navbar"
import Socials from "./components/Socials"
import Speedmap from "./components/Speedmap"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Lore />
      <Speedmap />
      <Tokenomics />
      <Socials />
      <Footer />
    </>
  )
}

export default App
