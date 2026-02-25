import { motion } from "framer-motion";
import { achievements, competitiveProfiles } from "../assets/assets";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { scale: 0.6, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Achievement = () => {
  return (
    <section id="achievements" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-white mb-14"
        >
          Achievements
        </motion.h2>

        {/* Achievements Grid (2 columns only) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievements.map((item, index) => {
            const icon = item.split(" ")[0];
            const text = item.replace(icon, "").trim();

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6
                           hover:border-orange-500 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  
                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    className="shrink-0 text-2xl mt-5"
                  >
                    {icon}
                  </motion.div>

                  {/* Text */}
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {text}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Competitive Profile Links at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {Object.values(competitiveProfiles).map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl border border-white/15
                         text-gray-300 hover:text-white
                         hover:border-orange-500 hover:bg-orange-500/10
                         transition-colors duration-300"
            >
              <span className="font-semibold">{profile.platform}</span>
              {profile.rating && ` • ${profile.rating}`}
              {profile.rank && ` • ${profile.rank}`}
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Achievement;
