import { footerLinks } from "../assets/dummy-data";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-indigo-950/30 border-t border-indigo-500/20 pt-12 text-gray-300 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-700/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-700/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-white/10">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold text-white">Izhar Builders</h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              We are a trusted construction and consultancy company focused on
              building modern, durable, and beautiful residential and commercial
              projects in Islamabad.
            </p>
          </div>

          <div className="flex flex-wrap justify-between w-full md:w-[50%] gap-5">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-base text-white md:mb-5 mb-2">
                  {section.title}
                </h3>
                <ul className="text-sm space-y-1">
                  {section.links.map(
                    (link: { name: string; url: string }, i) => (
                      <li key={i}>
                        <a
                          href={link.url}
                          className="hover:text-white transition"
                        >
                          {link.name}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Izhar Builders. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
