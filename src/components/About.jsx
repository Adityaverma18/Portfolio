import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* PAGE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          About <span className="text-orange-500">Me</span>
        </motion.h1>

        {/* INTRO / SUMMARY */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-gray-400 text-lg leading-relaxed max-w-5xl">
            I am a Computer Science undergraduate specializing in <strong>Data Science</strong>,
            currently pursuing my B.Tech from <strong>Techno Main Salt Lake, Kolkata</strong>.
            I have a strong interest in building scalable software systems and intelligent
            machine learning applications. My academic background, combined with hands-on
            project experience and competitive programming, has helped me develop a solid
            foundation in both software engineering and applied machine learning.
          </p>
        </motion.section>

        {/* EDUCATION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            Education
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-medium">
              Bachelor of Technology (B.Tech)
            </h3>
            <p className="text-gray-300 mt-1">
              Computer Science & Engineering (Data Science)
            </p>
            <p className="text-gray-400 mt-1">
              Techno Main Salt Lake, Kolkata
            </p>
            <p className="text-gray-500 text-sm mt-2">
              GPA: 7.48 / 10 · Expected Graduation: 2026
            </p>
          </div>
        </motion.section>

        {/* TECHNICAL FOCUS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            Technical Focus
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-5xl mb-4">
            My primary technical focus lies in <strong>full-stack web development</strong>
            and <strong>machine learning</strong>. On the web side, I work with
            React, Node.js, Express, and MongoDB to build secure and scalable applications.
            I emphasize clean architecture, RESTful APIs, authentication mechanisms, and
            performance optimization.
          </p>

          <p className="text-gray-400 leading-relaxed max-w-5xl">
            In machine learning, I have experience designing and training deep learning
            models for real-time applications such as facial emotion recognition and
            speech-based emotion analysis. I am comfortable working with TensorFlow,
            feature extraction pipelines, model optimization techniques, and deploying
            models for real-time inference.
          </p>
        </motion.section>

        {/* PROJECT EXPERIENCE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            Project Experience
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-5xl mb-4">
            Through my projects, I have gained experience working on end-to-end systems.
            This includes designing frontend interfaces, building backend services,
            integrating databases, and deploying applications. I have also worked on
            optimizing APIs, improving response latency, and implementing authentication
            and authorization flows.
          </p>

          <p className="text-gray-400 leading-relaxed max-w-5xl">
            My machine learning projects focus on real-time systems, where performance
            and robustness are critical. I have worked with convolutional and recurrent
            neural networks, audio and image feature extraction techniques, and
            multi-dataset training strategies.
          </p>
        </motion.section>

        {/* CODING & ACHIEVEMENTS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            Coding & Problem Solving
          </h2>

          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>CodeChef 3★ rated (Rating: 1616), Global Rank 34 in Global Starters 158</li>
            <li>Codeforces Pupil with regular participation in contests</li>
            <li>Solved 500+ data structures and algorithms problems</li>
            <li>Participated in Flipkart Grid 2024 and Smart India Hackathon 2024</li>
          </ul>
        </motion.section>

        {/* INTERESTS & SOFT SKILLS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            Beyond Coding
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-5xl">
            Beyond technical work, I value teamwork, consistency, and continuous learning.
            I actively participate in sports and technical clubs, which has helped me
            develop discipline, collaboration skills, and a growth-oriented mindset.
            I also enjoy reading technology and biography books to gain broader perspectives
            on problem-solving and innovation.
          </p>
        </motion.section>

      </div>
    </section>
  );
};

export default About;
