"use client";

import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Core Committee Member - Marketing, Logistics & Creative Head",
    organization: "NOESIS 2026, Vedam Tech Fest",
    duration: "Ongoing",
    icon: <Users className="text-accent" size={24} />,
    responsibilities: [
      "Spearheaded marketing strategy and creative direction",
      "Managed logistics for 1500+ attendees",
      "Coordinated cross-functional teams for event execution",
      "Ensured smooth on-ground operations and led marketing campaigns"
    ]
  },
  {
    role: "Finance Head",
    organization: "Sports Club, Vedam School of Technology",
    duration: "Current",
    icon: <Briefcase className="text-accent" size={24} />,
    responsibilities: [
      "Manage budgeting and financial planning",
      "Allocate resources for sports activities and events",
      "Ensure financial transparency and organize sponsor outreach",
      "Plan and execute successful sports club initiatives"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Leadership & <span className="text-accent">Experience</span>
          </h2>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-[39px] md:left-1/2 top-4 bottom-4 w-[2px] bg-glass-border transform md:-translate-x-1/2 rounded-full overflow-hidden">
              <motion.div 
                className="w-full bg-accent"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            <div className="space-y-12">
              {EXPERIENCES.map((exp, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-10 h-10 rounded-full bg-[#121212] border-2 border-accent transform -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,212,255,0.5)]">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  
                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] bg-glass border border-glass-border p-8 rounded-3xl shadow-glass hover:border-accent/40 transition-colors ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-accent text-sm font-medium">{exp.organization}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-6 bg-white/5 inline-block px-3 py-1 rounded-full border border-white/5">
                      {exp.duration}
                    </p>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((req, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start">
                          <span className="text-accent mr-2 mt-0.5">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
