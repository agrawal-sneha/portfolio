import React, { useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { setupAnimations } from '../utils/animations';

const Hero: React.FC = () => {
  useEffect(() => {
    setupAnimations();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-7/12 mb-12 md:mb-0">
            <p className="text-blue-600 font-medium mb-2 fade-in">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 fade-in" style={{animationDelay: '100ms'}}>
              Sneha Agrawal
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 fade-in" style={{animationDelay: '200ms'}}>
              Software Engineer & Web Developer
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg max-w-xl fade-in" style={{animationDelay: '300ms'}}>
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            </p>
            
            <div className="flex space-x-4 mb-8 fade-in" style={{animationDelay: '350ms'}}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/agrawal--sneha/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:agrawalsnehu16@gmail.com" 
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 fade-in" style={{animationDelay: '400ms'}}>
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn-outline">
                View My Work
              </a>
            </div>
          </div>
          
          <div className="md:w-5/12 relative fade-in" style={{animationDelay: '500ms'}}>
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-xl flex items-center justify-center p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sneha Agrawal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[28rem] md:h-[28rem] bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors">
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;