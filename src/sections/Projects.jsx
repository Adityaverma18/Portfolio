import { motion } from "framer-motion";
import { projects } from "../assets/assets.js";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-white mb-14"
        >
          Projects
        </motion.h2>

        <div className="flex justify-end mb-6">
          <Link
            to="/projects"
            className="text-blue-400 hover:text-blue-600 underline"
          >
            Show more
          </Link>
        </div>


        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-6
                         hover:border-orange-500 transition duration-300"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full
                               bg-black/40 border border-white/10
                               text-orange-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-4 flex-wrap">
                {/* GitHub for all */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white
                             border border-white/20 px-4 py-2 rounded-full
                             hover:border-orange-500 hover:text-orange-400
                             transition"
                >
                  GitHub
                </a>

                {/* Live Site only if exists */}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white
                               border border-white/20 px-4 py-2 rounded-full
                               hover:border-orange-500 hover:text-orange-400
                               transition"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
