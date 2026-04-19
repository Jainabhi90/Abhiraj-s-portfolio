"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Academic <span className="text-accent">Background</span>
            </h2>
            
            <div className="bg-glass border border-glass-border rounded-3xl p-8 relative overflow-hidden shadow-glass group hover:border-accent/30 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-accent/20 transition-all"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-4 bg-accent/10 text-accent rounded-2xl border border-accent/20">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-1">B.Tech in Computer Science</h3>
                  <p className="text-foreground/78 font-medium">(Artificial Intelligence & Machine Learning)</p>
                </div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex flex-col border-l-2 border-glass-border pl-4 py-1">
                  <span className="text-sm text-foreground/72 uppercase tracking-wider font-semibold mb-1">University</span>
                  <span className="text-lg text-foreground font-medium">Ajeenkya DY Patil University (ADYPU), Pune</span>
                </div>
                
                <div className="flex flex-col border-l-2 border-glass-border pl-4 py-1">
                  <span className="text-sm text-foreground/72 uppercase tracking-wider font-semibold mb-1">Institution</span>
                  <span className="text-lg text-foreground font-medium">Vedam School of Technology</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-[var(--surface)] border border-glass-border p-4 rounded-2xl">
                    <span className="text-sm text-foreground/72 uppercase tracking-wider font-semibold block mb-1">Timeline</span>
                    <span className="text-xl text-foreground font-semibold">2025 - 2029</span>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 p-4 rounded-2xl shadow-[0_0_15px_rgba(52,80,112,0.15)]">
                    <span className="text-sm text-accent/80 uppercase tracking-wider font-semibold block mb-1">Current CGPA</span>
                    <span className="text-xl text-accent font-semibold">9.13 / 10.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
             <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Key <span className="text-accent">Milestones</span>
            </h2>
            
            <div className="flex flex-col gap-6">
              {[
                "CGPA of 9.13 in first semester of B.Tech",
                "40+ Data Structures & Algorithms problems solved on LeetCode",
                "Built and shipped 3 full-stack applications to production",
                "Successfully integrated complex third-party Meta & GitHub APIs",
                "Completed Advanced AI Tools Workshop by Be10X",
                "Led 1500+ participant tech fest with cross-functional coordination"
              ].map((achievement, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: -5 }}
                  className="bg-glass border border-glass-border p-5 rounded-2xl flex items-center gap-4 hover:border-accent/40 transition-all shadow-sm"
                >
                  <div className="p-2 bg-accent/10 rounded-full text-accent shrink-0">
                    <Award size={20} />
                  </div>
                  <p className="text-foreground/85 font-medium">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
