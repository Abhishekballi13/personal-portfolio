import { useState } from "react";
import bannerImg from "../../assets/bannerImg.webp";
import { useEffect } from "react";
import {MICRO_API_URL} from "../../utils/constants";

const ProjectCard = ({title,main,link}) => {

  const [thumbnail,setThumbnail] = useState("");
  
  //logic for extracting our thumbnail from any website url we give from micro api
  //by this we dont have to manually provide images for project it will fetch it.
  useEffect(()=>{
      const fetchThumbnail = async () => {
        const response = await fetch(`${MICRO_API_URL}/?url=${link}&screenshot=true`);
        const data = await response.json();
        setThumbnail(data?.data?.screenshot?.url || bannerImg);
      }
      fetchThumbnail();
  },[link])

  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
        <img src={thumbnail} alt="Website Thumbnail" className="rounded-lg w-full h-full"/>
        <h3 className="px-4 mt-4 text-xl md:text-2xl font-bold leading-normal">
            {title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
        <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
            <a href={link} target="blank"><button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Demo</button></a>
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Source Code</button>
        </div>
    </div>
  )
}

export default ProjectCard