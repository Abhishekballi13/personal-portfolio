import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";
import LeetCodeHeatmap from "./LeetCodeHeatmap";

const Coding = () => {
  return (
    <div id="Coding" className="p-10 md:p-24 text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Coding Profile</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* LeetCode */}
        <motion.div
          className="bg-zinc-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8}}
        >
          <SiLeetcode size={40} className="text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold">LeetCode</h2>
          <p className="text-gray-400 text-sm">Problems Solved: 500+</p>
          <a
            href="https://leetcode.com/your-profile"
            target="_blank"
            className="mt-3 inline-block text-blue-400 hover:underline"
          >
            View Profile →
          </a>
        </motion.div>

        {/* GeeksforGeeks */}
        <motion.div
          className="bg-zinc-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8}}
        >
          <SiGeeksforgeeks size={40} className="text-green-500 mb-4" />
          <h2 className="text-xl font-semibold">GeeksforGeeks</h2>
          <p className="text-gray-400 text-sm">Problems Solved: 300+</p>
          <a
            href="https://auth.geeksforgeeks.org/user/your-profile"
            target="_blank"
            className="mt-3 inline-block text-blue-400 hover:underline"
          >
            View Profile →
          </a>
        </motion.div>

        {/* GitHub */}
        <motion.div
          className="bg-zinc-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaGithub size={40} className="text-gray-300 mb-4" />
          <h2 className="text-xl font-semibold">GitHub</h2>
          <p className="text-gray-400 text-sm">Repositories: 50+</p>
          <p className="text-gray-400 text-sm">Contributions: 500+</p>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            className="mt-3 inline-block text-blue-400 hover:underline"
          >
            View Profile →
          </a>
        </motion.div>
      </div>

      {/* Animated Heatmaps */}
      <div className="mt-10">
        <motion.h2
          className="text-2xl font-semibold text-center mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
        >
          GitHub Contribution Heatmap
        </motion.h2>

        {/* GitHub Heatmap Animation */}
        <motion.div
          className="w-full md:w-2/3 mx-auto rounded-lg"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=Abhishekballi13&theme=rogue"
            alt="GitHub Heatmap"
            className="rounded-lg"
          />
        </motion.div>

        {/* LeetCode Heatmap Animation */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <LeetCodeHeatmap username={"DVD_Mathadis"} />
        </motion.div>
      </div>
    </div>
  );
};

export default Coding;
