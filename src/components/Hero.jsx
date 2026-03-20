import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, PlayCircle } from 'lucide-react';
import akuuu1 from '../assets/akuuu1.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-start md:items-center justify-center px-4 md:px-12 py-10 md:py-0 relative overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10 w-full">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass border border-primary/30 text-primary text-sm font-medium mb-4">
            Available for new projects
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-gradient">Akash</span> <br />
            Creator & Developer
          </h1>

          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            I blend technical expertise with creative vision. From building seamless web applications to crafting cinematic video content and AI-driven experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]">
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="flex items-center gap-2 glass hover:bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-white/10 mt-8">
            <div>
              <p className="text-3xl font-bold text-white">100+</p>
              <p className="text-sm text-gray-400">Video Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-sm text-gray-400">Websites Built</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center mt-12 md:mt-0"
        >
          {/* Decorative elements for image placeholder */}
          <div className="relative w-full aspect-square max-w-md mx-auto mt-6 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-3xl"></div>
            <div className="absolute inset-4 glass rounded-3xl border border-white/20 overflow-hidden flex items-center justify-center p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src={akuuu1} alt="Abstract Code/Design" loading="lazy" className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500" />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -left-8 top-1/4 glass px-4 py-2 rounded-xl flex items-center gap-3 backdrop-blur-md border border-white/10 shadow-xl"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-white">Web Dev</span>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -right-8 bottom-1/4 glass px-4 py-2 rounded-xl flex items-center gap-3 backdrop-blur-md border border-white/10 shadow-xl"
            >
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                <PlayCircle className="w-4 h-4 text-secondary" />
              </div>
              <span className="text-sm font-medium text-white">Creative</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
