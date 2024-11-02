import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/satyanshuProfile.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-center sm:text-left"
            >
              Satyanshu Vishwakarma
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-center sm:text-left"
            >
              Front-End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-normal tracking-tighter  text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1, type: 'keyframes' }}
              href='resume.pdf'
              download
              className="download-btn px-6 py-3 mb-4 bg-gradient-to-r from-blue-800 via-purple-700 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:via-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition text-center md:text-left"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="rounded-xl"
              src={profilePic}
              alt="Satyanshu Vishwakarma"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
