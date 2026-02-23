import { motion } from "framer-motion";
import { Home, Eye, Brush, RefreshCw, Coffee } from "lucide-react";
import Title from "./Title";

const featuresData = [
  {
    title: "Architectural Design",
    desc: "Innovative and tailored designs that fit your space and needs.",
    icon: <Home />,
  },
  {
    title: "Construction",
    desc: "High-quality building services for residential and commercial projects.",
    icon: <Home />,
  },
  {
    title: "Supervision",
    desc: "On-site supervision to ensure quality, safety, and efficiency.",
    icon: <Eye />,
  },
  {
    title: "Interior Design",
    desc: "Functional and aesthetic interiors that reflect your style.",
    icon: <Brush />,
  },
  {
    title: "Renovation",
    desc: "Modernizing spaces while maintaining structural integrity.",
    icon: <RefreshCw />,
  },
  {
    title: "Consultancy",
    desc: "Expert advice for planning, budgeting, and executing your dream project.",
    icon: <Coffee />,
  },
];

export default function Features() {
  return (
    <section
      id="services"
      className="py-20 2xl:py-32 relative bg-white/3 border-t border-white/6"
      style={{}}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <Title
          title="Our Services"
          heading="Building the future with expert consultancy and reliable construction."
          description="We deliver exceptional solutions tailored to your residential or commercial projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative z-10">
          {featuresData.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: i * 0.1,
              }}
              className="p-8 rounded-3xl  backdrop-blur-md border border-white/10 hover:shadow-2xl hover:-translate-y-2 transition-transform"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-700/20 flex items-center justify-center mb-4 text-blue-700">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
