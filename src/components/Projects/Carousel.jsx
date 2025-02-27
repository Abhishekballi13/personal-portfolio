import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const cards = [
  { id: 0, content: <ProjectCard title="Connectify" main="A web platform for developers, where they can connect and chat with each other, premium features with subscription." link="https://www.connectify.icu/" /> },
  { id: 1, content: <ProjectCard title="Crypto Exchange" main="A crypto exchange website where users can view all the exchanges and coins listed in them, in various currencies." link="https://crypto-exchange-six.vercel.app/" /> },
  { id: 2, content: <ProjectCard title="Youtube Clone" main="A video streaming platform with awesome features like search, live chat, comments, and much more..." link="https://youtube-proj.vercel.app/" /> },
  { id: 3, content: <ProjectCard title="Netflix-GPT" main="A video streaming website created in React.js with component libraries and Tailwind CSS for styling." link="https://netflix-gpt-rho-two.vercel.app/" /> },
  { id: 4, content: <ProjectCard title="Food-Genie" main="A food ordering website created in React.js, with features like search, config-driven UI, and more..." link="https://food-genie.vercel.app/" /> }
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
    <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
    <div className="relative flex flex-col items-center justify-center w-full h-[530px]">
      <div className="relative flex w-full h-full justify-center items-center">
        {cards.map((card, i) => {
          let position = (i - index + cards.length) % cards.length;
          return (
            <motion.div
              key={card.id}
              initial={{ scale: 0.9 }}
              animate={{
                scale: position === 0 ? 1 : 0.8,
                x: position === 0 ? 0 : position === 1 ? "50%" : "-50%",
                rotateY: position === 0 ? "0deg" : position === 1 ? "-20deg" : "20deg",
              }}
              transition={{ duration: 0.5 }}
              className={`absolute w-80 h-auto bg-gray-800 text-white rounded-xl shadow-lg overflow-hidden ${position === 0 ? "z-10" : "z-0"}`}
            >
              {card.content}
            </motion.div>
          );
        })}
      </div>
      <div className="flex gap-4 mt-10">
        <button onClick={prevSlide} className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600"><FaArrowLeft/></button>
        <button onClick={nextSlide} className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600"><FaArrowRight/></button>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
