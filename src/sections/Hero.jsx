import { motion } from "framer-motion";
import { resume, profile } from "../assets/assets.js";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 bg-[#0a0a0a]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >

        {/* LEFT CONTENT */}
        <motion.div variants={containerVariants} className="text-left">

          {/* Badges */}
          {[
            "👋 Computer Science Undergraduate",
            "🌐 Web Developer",
            "🤖 ML Enthusiast",
          ].map((text, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="inline-block mb-3 mr-2 px-4 py-1
                         border border-orange-500/40
                         rounded-full text-sm text-orange-400"
            >
              {text}
            </motion.div>
          ))}

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6 mt-4"
          >
            Hi, I’m <br />
            <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Aditya Verma
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-xl mb-6"
          >
            I specialize in building scalable web applications with React,
            Node.js, and MongoDB, along with designing and deploying complex
            Machine Learning and Deep Learning models.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className="px-6 py-3 bg-orange-500 text-black
                         rounded-full font-medium
                         hover:bg-orange-400 transition"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resume}
              download
              className="px-6 py-3 border border-orange-500
                         text-white rounded-full font-medium
                         hover:bg-orange-500 hover:text-black transition"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={imageVariants}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-orange-500 blur-3xl opacity-20"></div>
            <img
              src={profile}
              alt="Aditya Verma"
              className="relative w-72 h-72 md:w-80 md:h-80
                         rounded-full object-cover
                         border-4 border-orange-500"
            />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
