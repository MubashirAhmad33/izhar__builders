import { motion, AnimatePresence } from "framer-motion";
import Title from "./Title";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const projectsData = [
  {
    name: "Residential House – F-15/1",
    size: "One Kanal house",
    year: "Completed in 2019",
    location: "Islamabad",
    description:
      "Modern one kanal luxury residence with premium finishes, spacious layout, and contemporary elevation.",
    featured: false,
  },
  {
    name: "Residential House – I-14/3",
    size: "7 Marla house",
    year: "Completed in 2020",
    location: "Islamabad",
    description:
      "Compact yet elegant family home designed with functional spaces and high-quality materials.",
    featured: false,
  },
  {
    name: "Residential House – I-14/3",
    size: "6 Marla house",
    year: "Completed in 2021",
    location: "Islamabad",
    description:
      "Contemporary 6 marla residence with smart space planning and modern architectural detailing.",
    featured: false,
  },
  {
    name: "Residential House – I-14/4",
    size: "8 Marla house",
    year: "Completed in 2023",
    location: "Islamabad",
    description:
      "Premium 8 marla project featuring elegant facade, luxury interiors, and superior construction quality.",
    featured: true,
  },
  {
    name: "Residential House – I-14/4",
    size: "8.5 Marla house",
    year: "Completed in 2024",
    location: "Islamabad",
    description:
      "Spacious 8.5 marla home built with attention to detail, durability, and modern aesthetics.",
    featured: false,
  },
  {
    name: "Residential House – Block E, MPCHS",
    size: "7 Marla house",
    year: "Completed in 2024",
    location: "Islamabad",
    description:
      "Beautifully designed 7 marla residence combining functionality with stylish interior concepts.",
    featured: false,
  },
  {
    name: "Residential House – I-14/2",
    size: "5 Marla house",
    year: "Completed in 2024",
    location: "Islamabad",
    description:
      "Affordable modern 5 marla home delivering quality construction and elegant design solutions.",
    featured: false,
  },
];

export default function Projects() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section
      id="projects"
      className="py-20 bg-white/3 border-t border-white/6 relative"
    >
      <div className="max-w-6xl mx-auto px-4">
        <Title
          title="Our Projects"
          heading="Delivering quality construction across Islamabad since 2019."
          description="We take pride in building durable, modern, and beautifully designed residential homes."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projectsData.map((project, i) => (
            <motion.div
              key={i}
              onClick={() => setSelectedProject(project)}
              ref={(el) => {
                refs.current[i] = el;
              }}
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.1 + i * 0.1,
              }}
              className={`cursor-pointer relative p-6 rounded-xl border backdrop-blur ${
                project.featured
                  ? "border-indigo-500/50 bg-indigo-900/30"
                  : "border-white/8 bg-indigo-950/30"
              } hover:scale-105 transition-all duration-500`}
            >
              {project.featured && (
                <p className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 rounded-md text-xs">
                  Featured Project
                </p>
              )}

              <div className="mb-6">
                <p className="text-sm text-gray-400">Project</p>
                <div className="mt-2">
                  <span className="text-lg font-extrabold block">
                    {project.name}
                  </span>
                  <span className="text-sm text-gray-400 block mt-2">
                    {project.size}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mt-4">{project.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-br from-indigo-900/90 to-indigo-700/80 border border-indigo-500/40 shadow-2xl p-8 text-white"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <X size={18} />
              </button>

              <h2 className="text-2xl font-extrabold mb-4">
                {selectedProject.name}
              </h2>

              <div className="space-y-3 text-gray-200">
                <p>
                  <span className="font-semibold text-white">Size:</span>{" "}
                  {selectedProject.size}
                </p>
                <p>
                  <span className="font-semibold text-white">Completion:</span>{" "}
                  {selectedProject.year}
                </p>
                <p>
                  <span className="font-semibold text-white">Location:</span>{" "}
                  {selectedProject.location}
                </p>
                <p className="pt-4 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
