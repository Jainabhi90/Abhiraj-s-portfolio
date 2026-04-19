"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["JavaScript", "Java", "Python", "TypeScript"]
  },
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "Mongoose"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Meta Graph API", "OAuth 2.0"]
  },
  {
    title: "Key Concepts",
    skills: ["Data Structures & Algorithms", "System Architecture", "API Integration", "Data Visualization", "Product Management"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Technical <span className="text-accent">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-glass border border-glass-border rounded-3xl p-8 shadow-glass transition-all duration-300 hover:border-accent/30"
              >
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 212, 255, 0.2)", color: "#00D4FF", borderColor: "rgba(0, 212, 255, 0.5)" }}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-gray-300 cursor-default transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
