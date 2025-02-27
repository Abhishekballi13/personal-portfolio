import ProjectCard from "./ProjectCard"


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
        <div className="py-12 px-11 flex flex-wrap gap-5">
           <ProjectCard title="Connectify" 
            main="A web platform for developers,where they can connect and chat with each other,premium features with subscription."
            link="https://www.connectify.icu/"
            />
            <ProjectCard title="Crypto Exchange" 
            main="it is a crypto exchange website where user can view all the exchnages and coins listed in them ,in various currencies."
            link="https://crypto-exchange-six.vercel.app/"
            />
            <ProjectCard title="Youtube Clone" 
            main="this is a video streaming platform with awesome features of search,live chat,comments and much more..."
              link="https://youtube-proj.vercel.app/"
            />
            <ProjectCard title="Netflix-GPT" 
            main="this is a video streaming website created in react js and used some component library and tailwind css for styling"
            link="https://netflix-gpt-rho-two.vercel.app/"
            />
            <ProjectCard title="Food-Genie" 
            main="this is a food ordering website created in react js,with awesome features of search,config driven ui and more...."
            link="https://food-genie.vercel.app/"
            />
        </div>
    </div>
  )
}

export default Projects