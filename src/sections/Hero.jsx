import { resume, profile } from "../assets/assets.js";

// make sure this file exists

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-left">
          {/* Badge */}
          <div className="inline-block mb-3 px-4 py-1 border border-orange-500/40 rounded-full text-sm text-orange-400">
            👋 Computer Science Undergraduate
          </div>

          <div className="inline-block mb-6 px-4 py-1 border border-orange-500/40 rounded-full text-sm text-orange-400">
            🌐 Web developer
          </div>

          <div className="inline-block mb-6 px-4 py-1 border border-orange-500/40 rounded-full text-sm text-orange-400">
            🤖 ML Enthusiast
          </div>
        

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I’m <br />
            <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Aditya Verma
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mb-6">
            I specialize in building scalable web applications with React,
            Node.js, and MongoDB, along with designing and deploying complex
            Machine Learning and Deep Learning models.
          </p>

          <div className="flex gap-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-orange-500 text-black rounded-full font-medium hover:bg-orange-400 transition"
            >
              View Projects
            </a>

            <a
              href={resume}
              download
              className="px-6 py-3 border border-orange-500 text-white rounded-full font-medium hover:bg-orange-500 hover:text-black transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-orange-500 blur-3xl opacity-20"></div>
            <img
              src={profile}
              alt="Aditya Verma"
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-orange-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
