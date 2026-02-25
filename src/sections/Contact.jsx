import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Contact
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Feel free to reach out for collaboration, internships, or
          full-time opportunities.
        </motion.p>

        {/* Contact Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-8">

          {/* Email */}
          <motion.a
            href="mailto:adityaverma20111@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white/5 border border-white/10
                       px-6 py-4 rounded-xl hover:border-orange-500 transition"
          >
            <FaEnvelope className="text-2xl text-orange-400" />
            <span className="text-gray-300">
              adityaverma20111@gmail.com
            </span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/adityaverma05"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white/5 border border-white/10
                       px-6 py-4 rounded-xl hover:border-orange-500 transition"
          >
            <FaLinkedin className="text-2xl text-orange-400" />
            <span className="text-gray-300">
              linkedin.com/in/adityaverma05
            </span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Adityaverma18"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white/5 border border-white/10
                       px-6 py-4 rounded-xl hover:border-orange-500 transition"
          >
            <FaGithub className="text-2xl text-orange-400" />
            <span className="text-gray-300">
              github.com/Adityaverma18
            </span>
          </motion.a>

        </div>

      </div>
    </section>
  );
};

export default Contact;
