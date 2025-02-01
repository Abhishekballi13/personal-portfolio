import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"

const App = () => {
  return (
    //overflow-hidden will automatically hide the overflowing content
    <div className="bg-[#171d32] w-full h-auto overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App