"use client";

import { motion } from "framer-motion";
import { Mail, Phone, FileText, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0F0F0F] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-glass border border-glass-border rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-t border-t-white/10 flex flex-col md:flex-row gap-16 justify-between items-center"
        >
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let&apos;s Work <span className="text-accent">Together.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              I am currently open for full-time opportunities. Feel free to connect if you have a project in mind or want to discuss technology.
            </p>
            
            <div className="space-y-6 mb-12">
              <a href="mailto:abhiraj.jain@vedamsot.org" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group p-4 bg-white/5 rounded-2xl border border-white/5 w-fit hover:border-accent/30 shadow-glass">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <Mail size={24} className="text-white group-hover:text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Email Me At</p>
                  <p className="text-lg font-semibold">abhiraj.jain@vedamsot.org</p>
                </div>
              </a>
              
              <a href="tel:+919098025208" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group p-4 bg-white/5 rounded-2xl border border-white/5 w-fit hover:border-accent/30 shadow-glass">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <Phone size={24} className="text-white group-hover:text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Call Me At</p>
                  <p className="text-lg font-semibold">+91 9098025208</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#00D4FF] hover:text-[#121212] hover:border-[#00D4FF] transition-all shadow-glass">
                <FaLinkedin size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#00D4FF] hover:text-[#121212] hover:border-[#00D4FF] transition-all shadow-glass">
                <FaGithub size={24} />
              </a>
              <a href="#" className="flex items-center gap-2 px-6 bg-white/5 border border-white/10 rounded-xl hover:border-accent/50 text-white font-medium transition-all group shadow-glass">
                <FileText size={20} className="group-hover:text-accent" /> Resume
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-[45%]">
            <form className="bg-[#121212]/50 p-8 rounded-3xl border border-white/5 shadow-inner backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">
                Send a Message
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 font-medium mb-2 block">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/80 transition-colors" placeholder="John Doe" />
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 font-medium mb-2 block">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/80 transition-colors" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 font-medium mb-2 block">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/80 transition-colors resize-none" placeholder="Hello Abhiraj, let's talk about..."></textarea>
                </div>
                
                <button type="button" className="w-full flex items-center justify-center gap-2 bg-[#00D4FF] hover:bg-[#0099b8] text-[#121212] font-bold py-4 rounded-xl transition-colors mt-2 text-lg shadow-[0_4px_15px_rgba(0,212,255,0.4)]">
                  Submit <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
