import ProjectCard from "./ProjectCard"
import netflixDemo from "../../assets/netflix-demo.png"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
        <div className="py-12 px-11 flex flex-wrap gap-5">
            <ProjectCard title="Blogging Website" 
            main="this is a blogging website created in next js and used some component library and tailwind css for styling"/>
            <ProjectCard title="Youtube Clone" 
            main="this is a blogging website created in next js and used some component library and tailwind css for styling"
              link="https://youtube-proj.vercel.app/"
            />
            <ProjectCard title="Netflix-GPT" 
            main="this is a blogging website created in next js and used some component library and tailwind css for styling"
            link="https://netflix-gpt-rho-two.vercel.app/"
            bg_img={netflixDemo}
            />
        </div>
    </div>
  )
}

export default Projects