import AboutImg from "../../assets/happyAvatar.webp";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black
    shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
        <div>
            <h2 className="text-2xl md:text-4xl font-bold">About</h2>
            <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                <img className="md:h-80" src={AboutImg} alt="About img"/>
                <ul>
                    <div className="flex gap-3 py-4">
                    <FaArrowRight size={30}/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
                            <p className="text-sm md:text-md leading-tight">
                                Ullamco laboris voluptate eiusmod irure elit laborum dolore esse consequat qui laborum. Ex mollit reprehenderit consectetur anim fugiat tempor id ea. Irure amet commodo exercitation reprehenderit ut occaecat Lorem deserunt quis sint irure nulla.
                            </p>
                        </span>
                    </div>
                    <div className="flex gap-3 py-4">
                    <FaArrowRight size={30}/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Backend Developer</h1>
                            <p className="text-sm md:text-md leading-tight">
                                Ullamco laboris voluptate eiusmod irure elit laborum dolore esse consequat qui laborum. Ex mollit reprehenderit consectetur anim fugiat tempor id ea. Irure amet commodo exercitation reprehenderit ut occaecat Lorem deserunt quis sint irure nulla.
                            </p>
                        </span>
                    </div>
                    <div className="flex gap-3 py-4">
                    <FaArrowRight size={30}/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Cloud enthusiast</h1>
                            <p className="text-sm md:text-md leading-tight">
                                Ullamco laboris voluptate eiusmod irure elit laborum dolore esse consequat qui laborum. Ex mollit reprehenderit consectetur anim fugiat tempor id ea. Irure amet commodo exercitation reprehenderit ut occaecat Lorem deserunt quis sint irure nulla.
                            </p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About