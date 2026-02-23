import { ArrowRightIcon, X } from "lucide-react";
import { GhostButton } from "./Buttons";
import { motion, AnimatePresence } from "framer-motion";

type CTAProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CTA({ setModalOpen }: CTAProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-3xl bg-gradient-to-b from-violet-900/90 to-violet-900/70 border border-violet-500/40 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            onClick={() => setModalOpen(false)}
          >
            <X size={20} />
          </button>

          {/* Modal Content */}
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 250, damping: 70 }}
          >
            Let’s Build Your Dream Home
          </motion.h2>
          <motion.p
            className="text-white/90 mb-10 max-w-xl mx-auto leading-relaxed"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              delay: 0.2,
            }}
          >
            Partner with Izhar Builders to design, plan, and construct your
            ideal residential or commercial space — on time, on budget, and with
            unparalleled quality.
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              delay: 0.3,
            }}
          >
            <GhostButton className="px-8 py-3 gap-2">
              Contact Us <ArrowRightIcon size={20} />
            </GhostButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
