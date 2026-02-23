import { motion } from "framer-motion";
import Title from "./Title";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
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
          <motion.div
            className="space-y-6"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              mass: 1,
            }}
          >
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
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col gap-6 relative z-10"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              mass: 1,
              delay: 0.1,
            }}
          >
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
          </motion.form>
        </div>
      </div>
    </section>
  );
}
