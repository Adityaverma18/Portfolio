import { motion } from "framer-motion";
import { githubProjects } from "../assets/assets";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
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

const ProjectsCard = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-bold mb-14"
        >
          Projects
        </motion.h1>

        {/* PROJECTS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {githubProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-6
                         hover:border-orange-500 transition duration-300 flex flex-col"
            >
              {/* TITLE */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full
                               bg-black/40 border border-white/10
                               text-orange-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                {project.description}
              </p>

              {/* LINKS */}
              <div className="flex items-center justify-between mt-auto">
                {/* GitHub - LEFT */}
                <a
                  href={project.github.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white
                            border border-white/20 px-4 py-2 rounded-full
                            hover:border-orange-500 hover:text-orange-400
                            transition"
                >
                  GitHub
                </a>

                {/* Live Site - RIGHT (only if exists) */}
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

export default ProjectsCard;
