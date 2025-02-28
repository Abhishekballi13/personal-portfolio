import { motion } from "framer-motion";
import { 
  FaArrowRight, FaReact, FaNodeJs, FaDatabase, FaCloud, 
  FaJsSquare, FaHtml5, FaCss3, FaAws, FaDocker, FaJenkins
} from "react-icons/fa";
import { SiRedux, SiJest, SiTailwindcss, SiMongodb, SiExpress, SiWebrtc,SiMysql,SiOracle } from "react-icons/si";
// import { DiMysql } from "react-icons/di";
import AboutImg from "../../assets/happyAvatar.webp";

const skills = [
  {
    title: "Frontend Development",
    description: "I have hands-on experience with React.js, Tailwind CSS, HTML, Jest, and Framer Motion. I’ve developed several projects showcasing my frontend skills, presented at hackathons and during internships.",
    icon: <FaReact size={30} className="text-blue-400" />,
    stack: [
      { icon: FaJsSquare, color: "text-yellow-400" },
      { icon: FaReact, color: "text-blue-400" },
      { icon: SiRedux, color: "text-purple-400" },
      { icon: SiJest, color: "text-red-400" },
      { icon: SiTailwindcss, color: "text-teal-400" },
    ],
  },
  {
    title: "Backend Development",
    description: "Experienced in Node.js, Express.js, and real-time tech like WebSockets. Built scalable APIs, authentication systems, and full-stack applications.",
    icon: <FaNodeJs size={30} className="text-green-400" />,
    stack: [
      { icon: FaJsSquare, color: "text-yellow-400" },
      { icon: FaNodeJs, color: "text-green-400" },
      { icon: SiExpress, color: "text-gray-300" },
      { icon: SiWebrtc, color: "text-purple-300" },
    ],
  },
  {
    title: "Database Management",
    description: "Skilled in MongoDB, PostgreSQL, and Oracle DB. Have built scalable databases with optimized queries and indexing.",
    icon: <FaDatabase size={30} className="text-yellow-400" />,
    stack: [
      { icon: SiMongodb, color: "text-green-500" },
      {icon : SiMysql ,color:"text-blue-500"},
      {icon : SiOracle ,color:"text-red-500"}
    ],
  },
  { 
    title: "Cloud Computing",
    description: "Experience with AWS, Azure, and DevOps tools like Docker and Jenkins. Deployed projects using AWS EC2 and VPC architecture.",
    icon: <FaCloud size={30} className="text-purple-400" />,
    stack: [
      { icon: FaAws, color: "text-orange-400" },
      { icon: FaDocker, color: "text-blue-500" },
      { icon: FaJenkins, color: "text-red-500" },
    ],
  },
];

const floatingAnimation = {
  initial: { y: 0 },
  animate: { y: [0, -5, 0], transition: { duration: 2, repeat: Infinity } },
};

const About = () => {
  return (
    <motion.div 
      id="About" 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="text-white flex flex-col md:flex-row items-center justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 space-y-8 md:space-y-0 md:space-x-12"
    >
      {/* Left Side - Image */}
      <motion.img 
        src={AboutImg} 
        alt="About img" 
        className="w-48 md:w-64 rounded-full shadow-lg"
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }}
      />

      {/* Right Side - About Content */}
      <div className="flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">About Me</h2>
        <p className="text-md text-gray-300 mt-2 text-center md:text-left">
          I am a passionate software developer with expertise in full-stack development, cloud computing, and scalable architectures.
        </p>

        {/* Skills Section */}
        <div className="mt-6 space-y-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col bg-gray-800 p-4 rounded-lg shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
                }}
            >
              {/* Skill Title & Icon */}
              <div className="flex items-center gap-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              
              <p className="text-sm text-gray-400 mt-2">{skill.description}</p>

              {/* Animated Tech Stack Icons */}
              <div className="flex mt-4 space-x-4">
                {skill.stack.map(({ icon: Icon, color}, i) => (
                  <motion.div key={i} {...floatingAnimation} whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
                    }}>
                    <Icon size={28} className={`${color}`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
