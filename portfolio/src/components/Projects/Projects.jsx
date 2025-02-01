import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
        <div className="py-12 px-11 flex flex-wrap gap-5">
            <ProjectCard title="Blogging Website" 
            main="this is a blogging website created in next js and used some component library and tailwind css for styling"/>
            <ProjectCard title="Youtube Clone" 
            main="this is a blogging website created in next js and used some component library and tailwind css for styling"/>
            <ProjectCard title="Netflix Clone" 
            main="this is a blogging website created in next js and used some component library and tailwind css for styling"/>
        </div>
    </div>
  )
}

export default Projects