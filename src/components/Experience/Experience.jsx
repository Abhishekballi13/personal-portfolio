import { FaJava, FaDatabase } from "react-icons/fa";
import { SiSpring, SiHibernate, SiJunit5, SiCplusplus, SiMysql, SiPython, SiJavascript } from "react-icons/si";
import psitImg from "../../assets/psit-logo-1.jpeg";
import {easeOut, motion} from "framer-motion";
const experiences = [
  {
    company: "Nucleus Software",
    role: "Software Engineer",
    duration: "Feb 2024 - Aug 2024",
    description: ["Worked as a Software Developer", "Associate Software Engineer"],
    logo: "https://toppng.com/uploads/preview/nucleus-software-logo-11609370525scxmzzrjnf.png",
    technologies: [
      { icon: <FaJava size={22} className="text-orange-400" />, name: "Java" },
      { icon: <SiSpring size={22} className="text-green-500" />, name: "Spring" },
      { icon: <SiHibernate size={22} className="text-yellow-600" />, name: "Hibernate" },
      { icon: <SiJunit5 size={22} className="text-red-400" />, name: "JUnit" },
      { icon: <FaDatabase size={22} className="text-blue-400" />, name: "Oracle DB" },
    ],
  },
  {
    company: "Bachelor Of Technology, Computer Science",
    role: "Student",
    duration: "Dec 2020 - Jul 2024",
    description: ["Completed my graduation in Computer Science", "GPA: 8.2"],
    logo: psitImg,
    technologies: [
      { icon: <SiCplusplus size={22} className="text-blue-400" />, name: "C++" },
      { icon: <SiJavascript size={22} className="text-yellow-400" />, name: "JavaScript" },
      { icon: <SiPython size={22} className="text-green-300" />, name: "Python" },
      { icon: <SiMysql size={22} className="text-indigo-400" />, name: "MySQL" },
    ],
  },
];

const Experience = () => {
  return (
    <div id="Experience" 
    className="p-10 md:p-24">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Experience</h1>

      {/* Experience Cards Container */}
      <div className="grid gap-6 md:gap-8 md:grid-cols-2 sm:grid-cols-3">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, x: index%2 ? 120 : -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8}}
          >
            {/* Company Logo */}
            <div className="flex items-center gap-4">
              <img src={exp.logo} alt={exp.company} className="w-20 h-20 object-cover rounded-lg" />
              <div>
                <h2 className="text-lg font-semibold text-white">{exp.role}</h2>
                <p className="text-gray-400 text-sm">{exp.duration}</p>
              </div>
            </div>

            {/* Description */}
            <ul className="mt-4 text-gray-300 text-sm space-y-2">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-blue-400 rounded-full"></span> {desc}
                </li>
              ))}
            </ul>

            {/* Technologies Used */}
            <div className="mt-4 flex flex-wrap gap-3">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-white text-xs"
                >
                  {tech.icon} {tech.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
