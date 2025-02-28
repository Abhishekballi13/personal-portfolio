import About from "./components/About/About"
import Coding from "./components/Coding/Coding"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Carousel from "./components/Projects/Carousel"

const App = () => {
  return (
    //overflow-hidden will automatically hide the overflowing content
    <div className="bg-[#171d32] w-full h-auto overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Coding/>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default App