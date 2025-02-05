import { FaCss3Alt,FaHtml5,FaJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiRedis } from "react-icons/si";
import psitImg from "../../assets/psit-logo-1.jpeg";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl font-bold text-white">Experience</h1>
        <div className="flex flex-wrap items-center justify-around">
            <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaHtml5 color="#E3F426" size={50}/>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaCss3Alt color="#1572b6" size={50}/>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaReact color="#61DAFB" size={50}/>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaJs color="#F7DF1E" size={50}/>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiMongodb color="#47A248" size={50}/>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiRedis color="#FF4438" size={50}/>
                </span>
            </div>
            <div className="">
            <div className="flex gap-5 bg-slate-950 bg-opacity mt-4 rounded-lg p-4 items-center">
               <img className="w-30 h-20 rounded-lg" src="https://toppng.com/uploads/preview/nucleus-software-logo-11609370525scxmzzrjnf.png"/>
               <span className="text-white">
                 <h2 className="leading-tight">Software Engineer, Nucleus Software</h2>
                 <p className="text-sm leading-tight font-thin">Feb 2024 - Aug 2024</p>
                 <ul className="text-sm p-2">
                    <li>- Work as Software developer</li>
                    <li>- Associate Software Engineer</li>
                 </ul>
               </span>
            </div>
            <div className="flex gap-5 bg-slate-950 bg-opacity mt-4 rounded-lg p-4 items-center">
               <img className="w-30 h-20 rounded-lg bg-transparent object-cover" src="https://banner2.cleanpng.com/20180802/xri/5c06c331d802e115c4f41577cf477ba0.webp"/>
               <span className="text-white">
                 <h2 className="leading-tight">Cloud Virtual Experience Program</h2>
                 <p className="text-sm leading-tight font-thin">May 2022 - June 2022</p>
                 <ul className="text-sm p-2">
                    <li>- basics of Cloud Computing </li>
                    <li>- hands on AWS services</li>
                 </ul>
               </span>
            </div>
            <div className="flex gap-5 bg-slate-950 bg-opacity mt-4 rounded-lg p-4 items-center">
               <img className="w-30 h-20 rounded-lg bg-transparent object-cover" src={psitImg}/>
               <span className="text-white">
                 <h2 className="leading-tight">Bachelor Of Technology, Computer Science</h2>
                 <p className="text-sm leading-tight font-thin">Dec 2020 - Jul 2024</p>
                 <ul className="text-sm p-2">
                    <li>- Completed my graduation from Computer Science</li>
                    <li>- GPA :- 8.2</li>
                 </ul>
               </span>
            </div>
            {/* <div className="flex gap-10 bg-slate-950 bg-opacity mt-4 rounded-lg p-4 items-center">
               <RiNetflixFill color="#E50914" size={50}/>
               <span className="text-white">
                 <h2 className="leading-tight">Software Engineer, Netflix</h2>
                 <p className="text-sm leading-tight font-thin">Sept 2023 - Present</p>
                 <ul className="text-sm p-2">
                    <li>- Work as Software developer</li>
                    <li>- Senior SDE developer</li>
                 </ul>
               </span>
            </div> */}
            {/* <div className="flex gap-10 bg-slate-950 bg-opacity mt-4 rounded-lg p-4 items-center">
               <FaAmazon color="#FF9900" size={50}/>
               <span className="text-white">
                 <h2 className="leading-tight">Software Engineer, Amazon</h2>
                 <p className="text-sm leading-tight font-thin">Sept 2023 - Present</p>
                 <ul className="text-sm p-2">
                    <li>- Work as Software developer</li>
                    <li>- Senior SDE developer</li>
                 </ul>
               </span>
            </div> */}
            </div>
        </div>
    </div>
  )
}

export default Experience