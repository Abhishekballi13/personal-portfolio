import ProjectCard from "./ProjectCard"
import netflixDemo from "../../assets/netflix-demo.png"
import youtubeDemo from "../../assets/youtube-proj-thumbnail.png"
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
        <div className="py-12 px-11 flex flex-wrap gap-5">
            <ProjectCard title="Crypto Exchange" 
            main="it is a crypto exchange website where user can view all the exchnages and coins listed in them ,in various currencies."
            link="https://crypto-exchange-six.vercel.app/"
            />
            <ProjectCard title="Youtube Clone" 
            main="this is a video streaming platform with awesome features of search,live chat,comments and much more..."
              link="https://youtube-proj.vercel.app/"
              bg_img={youtubeDemo}
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