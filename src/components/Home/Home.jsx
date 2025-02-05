import avatarImg from "../../assets/avatar.webp"
import TextChange from "../TextChange"
import resumeDemo from "../../assets/resume-demo.png";
import { Link } from "lucide-react";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
        <div className="md:w-2/4 md:pt-10">
            <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter"><TextChange/></h1>
            <p className="text-sm mt-4 md:text-2xl leading-tight tracking-tight">To obtain a challenging position that best utilizes my skills & provides
opportunities to grow my technical and managerial skills, enabling me as
a fresh graduate to grow while fulfilling organizational goals</p>
            <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm  md:text-lg md:py-2 md:px-4 hover:opacity-85
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"><a href="#Contact">Contact me</a></button>
            {/* <div id="About" className="text-white mt-20 md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black
    shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"></div> */}

          <div className="mt-20 group relative w-80 p-6 bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Animated Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
                <img
            src={resumeDemo}
            alt=""
            className="w-full h-full object-cover rounded-2xl relative z-10"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-2xl flex items-center justify-center">
            <p className="text-white text-lg font-semibold">
            <div className="flex">
            <Link className="text-white items-center"/>
            <a href="https://drive.google.com/file/d/1m4oUVLBC43bjE3qjPFEpzd22v7XtB4g3/view?usp=sharing" target="blank">
                View Resume
              </a>
            </div>
            </p>
          </div>
              </div>
        </div>
        <div><img className="" src={avatarImg} alt=""/></div>
    </div>
  )
}

export default Home