import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div id="Contact" className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">
        <div>
            <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
            <h3 className="text-2xl md:text-2xl font-normal">Feel Free To Reach Out!</h3>
        </div>
        <ul className="text-sm md:text-xl">
           {/* rel="noopener noreferrer": Provides security by preventing the new tab from accessing the original page. */}
           <a href="mailto:abhishekdvd404@gmail.com" rel="noopener noreferrer"><li className="flex gap-1 items-center"><MdOutlineEmail size={20}/>abhishekdvd404@gmail.com</li></a> 
           {/* target blank for opening it in new tab */}
           <a href="https://www.linkedin.com/in/abhishek-dwivedi-b18242221" target="blank"><li className="flex gap-1 items-center"><CiLinkedin size={20}/><a>linkedin.com/Abhishek</a></li></a> 
           <a href="https://github.com/Abhishekballi13" target="blank"><li className="flex gap-1 items-center"><FaGithub size={20}/><a>github.com/Abhishek</a></li></a> 
        </ul>
    </div>
  )
}

export default Footer