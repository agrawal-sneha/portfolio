import React, { useEffect } from 'react';
import { setupAnimations } from '../utils/animations';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    setupAnimations();
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title fade-in">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 fade-in">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden h-full">
              <img 
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Sneha Agrawal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-7 fade-in" style={{animationDelay: '100ms'}}>
            <h3 className="text-2xl font-bold mb-4">Software Engineer & Web Developer</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate Software Engineer with expertise in building modern web applications. 
              With a strong foundation in both frontend and backend technologies, I focus on creating 
              efficient, scalable, and user-friendly solutions.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Throughout my career, I've collaborated with cross-functional teams to deliver high-quality 
              software products that solve real-world problems. I'm constantly exploring new technologies 
              and methodologies to enhance my skills and stay at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Name:</h4>
                <p className="text-gray-700 dark:text-gray-300">Sneha Agrawal</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Email:</h4>
                <p className="text-gray-700 dark:text-gray-300">agrawalsnehu16@gmail.com</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Location:</h4>
                <p className="text-gray-700 dark:text-gray-300">India</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Available:</h4>
                <p className="text-gray-700 dark:text-gray-300">For Opportunities</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Contact Me
              </a>
              
              <a 
                href="#" 
                className="btn-outline flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Resume download functionality would be implemented here.');
                }}
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;