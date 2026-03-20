import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "100+ Video Editing Projects",
      desc: "Created and edited over 100 high-engaging videos including reels, commercial ads, and social media content for various clients.",
      tags: ["Premiere Pro", "After Effects", "Color Grading"],
      img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      type: "video"
    },
    {
      title: "Game Store Website",
      desc: "Full-stack e-commerce platform with a modern UI inspired by Xbox. Features advanced animations and secure backend integration.",
      tags: ["React", "Java", "Tailwind CSS", "Framer Motion"],
      img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop",
      type: "web"
    },
    {
      title: "Premium Client Portfolios",
      desc: "Designed and developed customized, high-performance portfolio websites for creative professionals and studios.",
      tags: ["React", "GSAP", "Next.js"],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      type: "web"
    },
    {
      title: "AI Video Generations",
      desc: "Produced cinematic, AI-driven video content leveraging Heygen and state-of-the-art voice generation for marketing campaigns.",
      tags: ["Heygen", "ElevenLabs", "Midjourney"],
      img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      type: "ai"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 relative z-10 bg-black/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors">
            View All Work <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass border border-white/10 hover:border-primary/40 transition-all duration-500 pb-0 flex flex-col h-full"
            >
              <div className="aspect-[16/10] relative overflow-hidden group/media">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                
                {project.videoUrl ? (
                  <video 
                    src={project.videoUrl} 
                    poster={project.img}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out relative z-0" 
                    muted 
                    loop 
                    playsInline
                    preload="none"
                    onMouseEnter={(e) => { e.target.play(); e.target.controls = true; }}
                    onMouseLeave={(e) => { e.target.pause(); e.target.controls = false; }}
                  />
                ) : (
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out relative z-0" 
                  />
                )}
                
                {project.type !== 'web' && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center bg-black/40 backdrop-blur-md">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-8 relative z-20 bg-gradient-to-t from-black via-black/95 to-transparent -mt-20 pt-20 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 flex-1">{project.desc}</p>
                
                {project.type === 'web' && (
                  <div className="flex gap-4 mt-auto">
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary text-gray-300 transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary text-gray-300 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
