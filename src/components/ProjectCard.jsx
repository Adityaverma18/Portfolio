import { useState } from "react";
import { motion } from "framer-motion";
import { githubProjects } from "../assets/assets.js";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ProjectsCard = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <section className="min-h-screen bg-black text-white pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-8">

        <h1 className="text-center text-5xl font-bold mb-24">
          My <span className="text-orange-500">Projects</span>
        </h1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-14">

          {githubProjects.map((project, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <div
                key={index}
                className={`flip-card h-[420px] ${isFlipped ? "flipped" : ""}`}
              >

                <div className="rotating-border"></div>

                <div className="flip-inner relative h-full">

                  {/* FRONT COVER */}
                  <div className="flip-face flex flex-col bg-[#111827]">

                    {/* IMAGE */}
                    <div className="w-full h-48 overflow-hidden rounded-xl mb-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-semibold mb-4">
                      {project.title}
                    </h3>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full
                                    bg-black/40 border border-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* FLIP BUTTON */}
                    <button
                      onClick={() => setFlippedIndex(index)}
                      className="mt-auto self-end text-orange-600 hover:opacity-80 transition border rounded-4xl bg-white"
                    >
                      <FaArrowRight/>
                    </button>

                  </div>

                  {/* BACK PAGE */}
                  <div className="flip-face flip-back flex flex-col justify-between bg-[#111827]">

                    <div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-400 transition"
                      >
                        GitHub
                      </a>

                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:opacity-80 transition"
                        >
                          Live
                        </a>
                      )}

                      <button
                        onClick={() => setFlippedIndex(null)}
                        className="text-orange-400 border rounded-4xl bg-white"
                      >
                        <FaArrowLeft />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ProjectsCard;