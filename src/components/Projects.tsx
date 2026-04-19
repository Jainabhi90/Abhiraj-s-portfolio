"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    title: "ArbDetector",
    status: "Live Production",
    description: "Prediction market arbitrage system that identifies real-time cross-platform pricing gaps across Kalshi and Polymarket to help traders find profitable opportunities.",
    achievements: [
      "Custom event-matching algorithm using Fuse.js",
      "Real-time cross-platform price comparison",
      "Fee-adjusted arbitrage logic for YES/NO combinations",
      "Live profit calculator & near-miss tracking"
    ],
    tech: ["React", "Node.js", "MongoDB", "Fuse.js", "Vercel"],
    github: "#",
    live: "#"
  },
  {
    title: "InstaLead",
    status: "Live SaaS Product",
    description: "Instagram CRM automation platform that automates comment and DM responses, enabling businesses to maintain 24/7 customer engagement without manual intervention.",
    achievements: [
      "Meta Graph API integration for Instagram access",
      "OAuth 2.0 authentication (Google & Instagram)",
      "Real-time conversation monitoring dashboard",
      "Multi-user, multi-account scalable architecture"
    ],
    tech: ["React", "Node.js", "MongoDB", "Meta Graph API", "OAuth 2.0", "Vercel"],
    github: "#",
    live: "#"
  },
  {
    title: "GitHub Analyzer",
    status: "Live Project",
    description: "Web application that analyzes GitHub developer profiles with comprehensive insights into contribution patterns, repository activity, and developer metrics.",
    achievements: [
      "GitHub API integration for real-time data",
      "Contribution heatmaps with visual representation",
      "Activity graphs and timeline visualization",
      "Developer comparison feature"
    ],
    tech: ["React", "GitHub API", "Data Visualization"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Featured <span className="text-accent">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-glass border border-glass-border rounded-3xl p-8 flex flex-col h-full shadow-glass hover:shadow-glow transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4 border border-accent/20">
                      {project.status}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mb-8 flex-grow">
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start">
                          <span className="text-accent mr-2 mt-0.5">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors">
                        <FaGithub size={18} /> Code
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors ml-4">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
