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
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Education</h1>
                            <p className="text-sm md:text-md leading-tight">
                            I completed my Bachelor of Technology in Computer Science and Engineering in July 2024, graduating with an 8.2 GPA. During my academic journey, I built a strong foundation in software development and problem-solving. My passion for technology drove me to participate in hackathons and internships, where I honed my technical skills through real-world applications.
                            </p>
                        </span>
                    </div>
                    <div className="flex gap-3 py-4">
                    <FaArrowRight size={30}/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Development</h1>
                            <p className="text-sm md:text-md leading-tight">
                            I have hands-on experience with React.js, Tailwind CSS, HTML, Jest, and React Testing Library. I’ve developed several projects showcasing my frontend skills, which I’ve presented at hackathons and during my internship. These experiences helped me design intuitive and responsive user interfaces while ensuring high-quality code through testing frameworks.                            </p>
                        </span>
                    </div>
                    <div className="flex gap-3 py-4">
                    <FaArrowRight size={30}/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Cloud Computing</h1>
                            <p className="text-sm md:text-md leading-tight">
                            My interest in cloud technologies motivates me to continuously learn and experiment with deployment strategies and cloud infrastructure.
                            I have experience of working on AWS with practical knowledge of deploying projects using services like EC2 instances and VPC architecture. I hold the Azure AZ-900 Cloud Fundamentals certification and am exploring Docker and Jenkins for CI/CD workflows.
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