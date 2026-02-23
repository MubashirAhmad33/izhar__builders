import { ArrowRightIcon } from "lucide-react";
import { PrimaryButton } from "./Buttons";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden text-white"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-3 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-yellow-400">Izhar Builders</span>
        </motion.h1>

        <motion.p
          className="mt-2 sm:mt-3 text-white text-md md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Your vision, our innovation. Bringing technology and creativity
          together to transform your ideas into reality.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a href="#projects">
            <PrimaryButton className="px-8 py-4 text-lg">
              View Projects <ArrowRightIcon className="size-4 ml-2" />
            </PrimaryButton>
          </a>
        </motion.div>
      </div>

      {/* Wavy Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-24 md:h-32"
          preserveAspectRatio="none"
        >
          <path
            fill="#0b1120"
            d="M0,224L60,218.7C120,213,240,203,360,192C480,181,600,171,720,176C840,181,960,203,1080,218.7C1200,235,1320,245,1380,250.7L1440,256V320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
