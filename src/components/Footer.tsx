"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-glass-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <a href="#" className="text-2xl font-bold tracking-tighter text-white">
            ABHIRAJ<span className="text-accent">.</span>
          </a>
          <p className="text-gray-500 text-sm mt-2 font-medium">
            © 2025 Abhiraj Jain. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="#about" className="text-sm font-medium text-gray-400 hover:text-accent transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium text-gray-400 hover:text-accent transition-colors">Projects</a>
          <a href="#experience" className="text-sm font-medium text-gray-400 hover:text-accent transition-colors">Experience</a>
          <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-accent transition-colors">Contact</a>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="p-4 bg-white/5 border border-glass-border rounded-xl hover:bg-accent/20 hover:text-accent hover:border-accent/50 transition-all text-gray-400 group flex items-center gap-2"
        >
          <span className="text-sm font-medium hidden md:block">Back to top</span>
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
