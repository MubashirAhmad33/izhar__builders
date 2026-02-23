import { ChevronDownIcon } from "lucide-react";
import Title from "./Title";
import { motion } from "framer-motion";
import { useRef } from "react";

const faqData = [
  {
    question: "What types of construction projects do you handle?",
    answer:
      "We specialize in residential and commercial projects including villas, houses, and office buildings across Islamabad.",
  },
  {
    question: "How do you ensure project quality and safety?",
    answer:
      "Our team conducts regular inspections, uses premium materials, and follows industry best practices to ensure quality and safety on every project.",
  },
  {
    question: "Do you provide architectural design services?",
    answer:
      "Yes, we provide custom architectural designs that balance aesthetics, functionality, and client requirements.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timelines vary depending on project size and complexity. We provide a detailed schedule and update clients regularly to ensure timely completion.",
  },
  {
    question: "Can you handle renovation and interior design?",
    answer:
      "Absolutely. We modernize existing spaces while maintaining structural integrity and provide interior design services tailored to your style.",
  },
  {
    question: "How can I get a project quote?",
    answer:
      "You can contact us via phone, email, or our contact form. We’ll assess your requirements and provide a detailed and transparent estimate.",
  },
];

export default function Faq() {
  const refs = useRef<(HTMLDetailsElement | null)[]>([]);

  return (
    <section id="faq" className="py-20 2xl:py-32">
      <div className="max-w-3xl mx-auto px-4">
        <Title
          title="FAQ"
          heading="Frequently Asked Questions"
          description="Everything you need to know about working with Izhar Builders. If you have more questions, feel free to reach out."
        />

        <div className="space-y-3 mt-10">
          {faqData.map((faq, i) => (
            <motion.details
              ref={(el) => {
                refs.current[i] = el;
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: i * 0.1,
              }}
              key={i}
              onAnimationComplete={() => {
                const card = refs.current[i];
                if (card) card.classList.add("transition", "duration-300");
              }}
              className="group bg-white/6 rounded-xl select-none border border-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition-all"
            >
              <summary className="flex items-center justify-between p-4 cursor-pointer">
                <h4 className="font-medium text-lg">{faq.question}</h4>
                <ChevronDownIcon className="w-5 h-5 text-gray-300 group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <p className="p-4 pt-0 text-gray-300 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
