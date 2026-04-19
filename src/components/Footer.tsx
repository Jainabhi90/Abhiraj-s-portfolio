"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--surface-strong)] border-t border-glass-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <a href="#hero" className="text-2xl font-semibold tracking-tight text-foreground">
            ABHIRAJ<span className="text-accent">.</span>
          </a>
          <p className="text-foreground/75 text-sm mt-2 font-medium">
            © {year} Abhiraj Jain. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="#about" className="text-sm font-medium text-foreground/82 hover:text-accent transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium text-foreground/82 hover:text-accent transition-colors">Projects</a>
          <a href="#experience" className="text-sm font-medium text-foreground/82 hover:text-accent transition-colors">Experience</a>
          <a href="#contact" className="text-sm font-medium text-foreground/82 hover:text-accent transition-colors">Contact</a>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="p-4 bg-glass border border-glass-border rounded-xl hover:bg-accent/15 hover:text-accent hover:border-accent/50 transition-all text-foreground/82 group flex items-center gap-2"
        >
          <span className="text-sm font-medium hidden md:block">Back to top</span>
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
