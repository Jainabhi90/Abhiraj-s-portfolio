"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, FileText, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "ready">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    );

    window.location.href = `mailto:abhiraj.jain@vedamsot.org?subject=${subject}&body=${body}`;
    setStatus("ready");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[var(--surface)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface)] to-background pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-glass border border-glass-border rounded-[2rem] p-8 md:p-14 lg:p-16 shadow-glass flex flex-col md:flex-row gap-16 justify-between items-center"
        >
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let&apos;s Work <span className="text-accent">Together.</span>
            </h2>
            <p className="text-foreground/82 text-lg mb-12 max-w-md">
              I am currently open for full-time opportunities. Feel free to connect if you have a project in mind or want to discuss technology.
            </p>
            
            <div className="space-y-6 mb-12">
              <a aria-label="Email Abhiraj" href="mailto:abhiraj.jain@vedamsot.org" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group p-4 bg-[var(--surface)] rounded-2xl border border-glass-border w-fit hover:border-accent/30 shadow-glass">
                <div className="p-3 bg-background rounded-xl group-hover:bg-accent/15 transition-colors">
                  <Mail size={24} className="text-foreground group-hover:text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground/70 font-medium mb-1">Email Me At</p>
                  <p className="text-lg font-semibold">abhiraj.jain@vedamsot.org</p>
                </div>
              </a>
              
              <a aria-label="Call Abhiraj" href="tel:+919098025208" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group p-4 bg-[var(--surface)] rounded-2xl border border-glass-border w-fit hover:border-accent/30 shadow-glass">
                <div className="p-3 bg-background rounded-xl group-hover:bg-accent/15 transition-colors">
                  <Phone size={24} className="text-foreground group-hover:text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground/70 font-medium mb-1">Call Me At</p>
                  <p className="text-lg font-semibold">+91 9098025208</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              <a aria-label="Open LinkedIn profile" href="https://www.linkedin.com/in/abhiraj-jain/" target="_blank" rel="noopener noreferrer" className="p-4 bg-[var(--surface)] border border-glass-border rounded-xl hover:bg-accent hover:text-background hover:border-accent transition-all shadow-glass">
                <FaLinkedin size={24} />
              </a>
              <a aria-label="Open GitHub profile" href="https://github.com/Jainabhi90" target="_blank" rel="noopener noreferrer" className="p-4 bg-[var(--surface)] border border-glass-border rounded-xl hover:bg-accent hover:text-background hover:border-accent transition-all shadow-glass">
                <FaGithub size={24} />
              </a>
              <a aria-label="Open resume" href="/Abhiraj.Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 bg-[var(--surface)] border border-glass-border rounded-xl hover:border-accent/50 text-foreground font-medium transition-all group shadow-glass">
                <FileText size={20} className="group-hover:text-accent" /> Resume
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-[45%]">
            <form onSubmit={handleSubmit} className="bg-background/80 p-8 rounded-3xl border border-glass-border shadow-inner backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 text-foreground border-b border-glass-border pb-4">
                Send a Message
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-foreground/75 font-medium mb-2 block">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full bg-[var(--surface)] border border-glass-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/80 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-foreground/75 font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full bg-[var(--surface)] border border-glass-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/80 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-foreground/75 font-medium mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="w-full bg-[var(--surface)] border border-glass-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/80 transition-colors resize-none"
                    placeholder="Hello Abhiraj, let's talk about..."
                  ></textarea>
                </div>

                {status === "error" && (
                  <p className="text-sm text-foreground/80">
                    Please fill all fields before sending your message.
                  </p>
                )}

                {status === "ready" && (
                  <p className="text-sm text-foreground/80">
                    Your email app should be open now with a prefilled draft.
                  </p>
                )}
                
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-background font-bold py-4 rounded-xl transition-colors mt-2 text-lg shadow-[0_8px_20px_rgba(32,35,39,0.22)]">
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
