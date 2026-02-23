import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0b1120] text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[140px]"></div>
      <div className="absolute -bottom-40 right-1/3 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-indigo-500 uppercase tracking-[4px] text-sm font-semibold">
            About Us
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Committed to quality, driven by passion.
          </h1>
        </motion.div>

        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-24">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold mb-6">Who We Are</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Izhar Builders is a trusted construction and consultancy company
              based in Islamabad, established in 2020.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              We specialize in residential and commercial projects with a sharp
              focus on precision, quality, and client satisfaction.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our team of dedicated professionals ensures your vision becomes a
              reality — on time and within budget.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition shadow-lg"
              >
                View Our Projects
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-indigo-500 hover:text-indigo-400 transition"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Image / Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                alt="Izhar Builders Team at Work"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h4 className="text-lg font-semibold mb-2">
                Let’s Build Your Dream Together
              </h4>
              <p className="text-gray-400 text-sm">
                Delivering excellence in every brick we lay.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
