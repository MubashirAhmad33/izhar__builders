import { motion } from "framer-motion";
import Title from "./Title";
import { Linkedin, Mail, Phone } from "lucide-react";

const teamData = [
  {
    name: "Izharul Haq Siddiqi",
    role: "Managing Director",
    phone: "0335 334 9961",
    email: "izharizharbuilders@gmail.com",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mairajul Haq Siddiqi",
    role: "Director Finance",
    phone: "0300 5189598",
    email: "mairajizharbuildrs@gmail.com",
    image:
      "https://images.squarespace-cdn.com/content/v1/6301697925f23c538af70112/34484d8c-5435-408e-9c14-e97554cb6429/business-portraits-9726.jpg",
  },
  {
    name: "Taha Mairaj",
    role: "Financial Analyst",
    phone: "0336 5368081",
    email: "Tahaizharbuilders@gmail.com",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Muhammad Aslam",
    role: "Project Coordinator",
    phone: "0335 5000092",
    email: "aslamizharbuilders@gmail.com",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 bg-[#0b1120] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <Title
          title="Our Leadership"
          heading="The people behind Izhar Builders"
          description="A professional team committed to quality construction, financial transparency, and project excellence."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          {teamData.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold tracking-wide">
                  {member.name}
                </h3>

                <p className="text-indigo-400 text-sm mt-1 uppercase tracking-widest">
                  {member.role}
                </p>

                <div className="w-10 h-[2px] bg-indigo-500 mx-auto my-5"></div>

                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center justify-center gap-2">
                    <Phone size={15} />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail size={15} />
                    <span className="truncate">{member.email}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                  <a
                    href="#"
                    className="p-2 rounded-full bg-white/5 hover:bg-indigo-600 transition"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
