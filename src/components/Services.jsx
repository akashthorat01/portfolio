import React from 'react';
import { motion } from 'framer-motion';
import { Video, Image as ImageIcon, Layout, Smartphone, Instagram, Share2, Megaphone, Sparkles, PenTool, Mail } from 'lucide-react';

const Services = () => {
  const services = [
    { title: "Website Development", icon: <Layout />, desc: "Modern, responsive, and high-performance websites built with React and Tailwind." },
    { title: "App Development", icon: <Smartphone />, desc: "Cross-platform mobile applications with seamless user experiences." },
    { title: "Video Editing", icon: <Video />, desc: "Cinematic edits for reels, ads, and long-form content using Premiere Pro." },
    { title: "AI Video Generator", icon: <Sparkles />, desc: "High-quality AI-generated videos and avatars using tools like Heygen." },
    { title: "Photo Editing", icon: <ImageIcon />, desc: "Professional retouching and composition in Photoshop." },
    { title: "Logo Design", icon: <PenTool />, desc: "Memorable brand identities and scalable vector graphics." },
    { title: "Instagram Handling", icon: <Instagram />, desc: "Complete page management, content creation, and growth strategies." },
    { title: "Social Media Management", icon: <Share2 />, desc: "Cross-platform content planning, scheduling, and community engagement." },
    { title: "Online Ad Generator", icon: <Megaphone />, desc: "High-converting ad creatives for Facebook, Instagram, and Google." },
    { title: "Invitation Card Design", icon: <Mail />, desc: "Elegant digital and print-ready invitation designs for any event." },
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Services</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Premium solutions tailored to elevate your brand's digital presence.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass p-6 rounded-2xl group hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition-all duration-300 cursor-pointer overflow-hidden relative"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:text-secondary transition-all duration-300 relative z-10">
                {React.cloneElement(service.icon, { className: 'w-6 h-6' })}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-gradient transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
