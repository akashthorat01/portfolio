import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black/80 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold tracking-wider text-white">
          AKASH<span className="text-primary">.</span>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Akash Thorat. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a>
          <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
