import React from 'react';
import { motion } from 'framer-motion';
import { User, Globe2, Briefcase, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Experience", value: "1+ Year", icon: <Briefcase className="w-5 h-5 text-primary" /> },
    { label: "Videos Produced", value: "100+", icon: <Award className="w-5 h-5 text-secondary" /> },
    { label: "Websites Built", value: "10+", icon: <Globe2 className="w-5 h-5 text-primary" /> },
    { label: "Clients Served", value: "5+", icon: <User className="w-5 h-5 text-secondary" /> }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">Multidisciplinary Creator</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a multi-skilled professional combining the logic of development with the art of creative media. My focus is on helping brands and individuals grow digitally through cutting-edge technology and compelling content.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Whether it's building a fast, scalable React application or producing cinematic AI-generated videos, I deliver premium, high-impact results.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
              <span className="px-4 py-2 rounded-full glass text-sm font-medium text-gray-200">English</span>
              <span className="px-4 py-2 rounded-full glass text-sm font-medium text-gray-200">Hindi</span>
              <span className="px-4 py-2 rounded-full glass text-sm font-medium text-gray-200">Marathi</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card flex flex-col items-center justify-center text-center p-8 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
