import { motion } from "framer-motion";
import { skillGroups } from "../assets/assets";

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

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-white mb-14"
        >
          Technical Expertise
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-6
                         hover:border-orange-500 transition duration-300"
            >
              {/* Card Title */}
              <h3 className="text-lg font-semibold text-orange-400 mb-6">
                {group.title}
              </h3>

              {/* Icons Grid */}
              <div className="grid grid-cols-3 gap-6">
                {group.icons.map((Icon, i) => (
                  <motion.div
                    key={i}
                    variants={iconVariants}
                    whileHover={{ scale: 1.15, y: -6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center justify-center p-4
                               rounded-xl bg-white
                               border border-white/10
                               hover:border-orange-500
                               cursor-pointer"
                  >
                    <Icon size={34} />
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
