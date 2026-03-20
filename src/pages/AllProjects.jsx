import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
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
      tags: ["React", "Java", "Tailwind CSS"],
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
    },
    {
      title: "Brand Identity & Logo",
      desc: "Modern vector graphics and comprehensive branding strategies for startups.",
      tags: ["Illustrator", "Photoshop", "Branding"],
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop",
      type: "design"
    },
    {
      title: "Marketing Automation",
      desc: "Developed an internal dashboard to track ad performance and social media traction.",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      type: "web"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group glass px-6 py-2 rounded-full">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">All <span className="text-gradient">Projects</span></h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mt-6 text-lg">A comprehensive look at my professional work across web development, creative media, and AI generation.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
                
                {project.type !== 'web' && project.type !== 'design' && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center bg-black/40 backdrop-blur-md">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-8 relative z-20 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 flex-1 text-sm">{project.desc}</p>
                
                {project.type === 'web' && (
                  <div className="flex gap-4 mt-auto border-t border-white/10 pt-6">
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
    </div>
  );
};

export default AllProjects;
