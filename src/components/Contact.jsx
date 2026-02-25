import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* PAGE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Get in <span className="text-orange-500">Touch</span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-center max-w-3xl mx-auto mb-14"
        >
          I’m always open to discussing new opportunities, collaborations,
          internships, or full-time roles. Feel free to reach out through
          any of the platforms below.
        </motion.p>

        {/* CONTACT CARDS */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {/* Email */}
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            href="mailto:adityaverma20111@gmail.com"
            className="flex flex-col items-center justify-center text-center
                       bg-white/5 border border-white/10 rounded-2xl p-8
                       hover:border-orange-500 transition duration-300"
          >
            <FaEnvelope className="text-4xl text-orange-400 mb-4" />
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <p className="text-gray-400 text-sm">
              adityaverma20111@gmail.com
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            href="https://www.linkedin.com/in/adityaverma05"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center
                       bg-white/5 border border-white/10 rounded-2xl p-8
                       hover:border-orange-500 transition duration-300"
          >
            <FaLinkedin className="text-4xl text-orange-400 mb-4" />
            <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
            <p className="text-gray-400 text-sm">
              linkedin.com/in/adityaverma05
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            href="https://github.com/Adityaverma18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center
                       bg-white/5 border border-white/10 rounded-2xl p-8
                       hover:border-orange-500 transition duration-300"
          >
            <FaGithub className="text-4xl text-orange-400 mb-4" />
            <h3 className="text-lg font-semibold mb-1">GitHub</h3>
            <p className="text-gray-400 text-sm">
              github.com/Adityaverma18
            </p>
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
