import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Video, Sparkles, Cpu, Mic, GitBranch, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code className="w-6 h-6 text-primary" />,
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "HTML5 & CSS3"]
    },
    {
      title: "App & Software",
      icon: <Layout className="w-6 h-6 text-secondary" />,
      skills: ["App Development", "Git & GitHub", "VS Code", "Vercel Deployment"]
    },
    {
      title: "Creative Media",
      icon: <Video className="w-6 h-6 text-primary" />,
      skills: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Audio Editing", "Social Media Content"]
    },
    {
      title: "AI Tools & Generation",
      icon: <Sparkles className="w-6 h-6 text-secondary" />,
      skills: ["Heygen (AI Video)", "ElevenLabs (Voice)", "Midjourney / DALL-E", "ChatGPT Prompting"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 relative z-10 bg-black/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & <span className="text-gradient">Tools</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="p-3 bg-white/5 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                    <span className="group-hover:text-white transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
