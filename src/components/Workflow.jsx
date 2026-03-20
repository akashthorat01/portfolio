import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, PenTool, Code, Search, CheckCircle } from 'lucide-react';

const Workflow = () => {
  const steps = [
    { title: "Requirement Discussion", icon: <MessageSquare />, desc: "Understanding your vision, goals, and target audience." },
    { title: "Planning & Strategy", icon: <Lightbulb />, desc: "Crafting a roadmap and defining the technical/creative approach." },
    { title: "Design / Editing", icon: <PenTool />, desc: "Creating UI designs, editing videos, or generating AI content." },
    { title: "Development / Production", icon: <Code />, desc: "Building the application or finalizing the media production." },
    { title: "Review & Feedback", icon: <Search />, desc: "Iterative refinement based on your invaluable feedback." },
    { title: "Final Delivery", icon: <CheckCircle />, desc: "Deploying the project and handing over the final assets." }
  ];

  return (
    <section id="workflow" className="py-20 px-6 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Workflow</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg">A streamlined process from concept to delivery.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(139,92,246,0.8)] transform -translate-x-1/2 mt-6 md:mt-0 z-10 border-4 border-background"></div>
                
                <div className={`ml-20 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                  <div className="glass p-6 rounded-2xl hover:border-primary/40 transition-colors duration-300 group">
                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 group-hover:text-white transition-all duration-300 ${idx % 2 === 0 ? '' : 'md:ml-auto'}`}>
                      {React.cloneElement(step.icon, { className: 'w-6 h-6' })}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
