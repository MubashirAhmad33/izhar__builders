import { motion, AnimatePresence } from "framer-motion";
import Title from "./Title";
import { Mail, Phone, MapPin, X } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [ctaOpen, setCtaOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-indigo-950 via-indigo-900 to-indigo-950 text-white overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-700/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-700/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <Title
          title="Get in Touch"
          heading="We'd love to hear from you!"
          description="Reach out to discuss your dream construction project. Our team is ready to help you from consultation to completion."
        />

        <div className="mt-20 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Details</h3>
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-indigo-400 mt-1" />
              <p>
                Plot No. 319-C, Main Double Road (Bhatta Road), I-14/4,
                Islamabad
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={20} className="text-indigo-400" />
              <p>0335 334 9961</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={20} className="text-indigo-400" />
              <p>izharbuilders@email.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col gap-6 relative z-10">
            <h3 className="text-xl font-semibold text-white">
              Send Us a Message
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-white/10 placeholder-gray-300 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-semibold text-white text-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Floating CTA Button */}
        <motion.button
          onClick={() => setCtaOpen(true)}
          className="absolute -bottom-10 right-8 md:right-16 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-3xl shadow-2xl z-20 transition-all hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 250, damping: 30, mass: 1 }}
        >
          Start Your Project
        </motion.button>

        {/* Modal */}
        <AnimatePresence>
          {ctaOpen && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-xl rounded-3xl bg-gradient-to-br from-indigo-900/90 to-indigo-700/80 border border-indigo-500/40 shadow-2xl p-8 text-white"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <button
                  onClick={() => setCtaOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <X size={20} />
                </button>

                <h2 className="text-2xl font-extrabold mb-4">
                  Let's Start Your Project
                </h2>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Contact Izhar Builders today to discuss your dream
                  construction project. Our team will guide you from
                  consultation to execution with precision, quality, and care.
                </p>

                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl bg-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 rounded-xl bg-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-4 rounded-xl bg-white/10 placeholder-gray-300 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-semibold text-white text-lg transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
