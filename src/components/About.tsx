"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HIGHLIGHTS = [
  "Shipped 3 Live Products",
  "40+ DSA Problems Solved",
  "Full-Stack Expert (Frontend + Backend)",
  "API Integration Specialist",
  "OAuth 2.0 Security Implementation",
  "Scalable Architecture Design",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center md:text-left">
            About <span className="text-accent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                Full-stack developer and AI/ML student at ADYPU with expertise in building scalable web applications. Passionate about creating innovative solutions that solve real-world problems. Experienced in JavaScript, React, Node.js, and API integration with a proven track record of shipping live products. Strong foundation in Data Structures and Algorithms with demonstrated leadership in community-building initiatives.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <a aria-label="Email Abhiraj" href="mailto:abhiraj.jain@vedamsot.org" className="p-3 bg-glass border border-glass-border rounded-full hover:bg-accent/20 hover:text-accent transition-colors">
                  <Mail size={24} />
                </a>
                <a aria-label="Call Abhiraj" href="tel:+919098025208" className="p-3 bg-glass border border-glass-border rounded-full hover:bg-accent/20 hover:text-accent transition-colors">
                  <Phone size={24} />
                </a>
                <a aria-label="Open LinkedIn profile" href="https://www.linkedin.com/in/abhiraj-jain/" target="_blank" rel="noopener noreferrer" className="p-3 bg-glass border border-glass-border rounded-full hover:bg-accent/20 hover:text-accent transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a aria-label="Open GitHub profile" href="https://github.com/Jainabhi90" target="_blank" rel="noopener noreferrer" className="p-3 bg-glass border border-glass-border rounded-full hover:bg-accent/20 hover:text-accent transition-colors">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-glass border border-glass-border shadow-glass flex items-center justify-center text-center hover:border-accent/50 transition-colors"
                >
                  <span className="font-medium text-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
