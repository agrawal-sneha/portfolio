import React, { useEffect } from 'react';
import { setupAnimations } from '../utils/animations';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'softSkills';
};

const Skills: React.FC = () => {
  useEffect(() => {
    setupAnimations();
    
    // Add animation for skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    setTimeout(() => {
      skillBars.forEach((bar) => {
        if (bar instanceof HTMLElement) {
          bar.style.width = bar.dataset.width || '0%';
        }
      });
    }, 500);
  }, []);

  const skills: Record<string, Skill[]> = {
    frontend: [
      { name: 'HTML/CSS', level: 90, category: 'frontend' },
      { name: 'JavaScript', level: 85, category: 'frontend' },
      { name: 'React', level: 85, category: 'frontend' },
      { name: 'TypeScript', level: 80, category: 'frontend' },
      { name: 'Tailwind CSS', level: 90, category: 'frontend' },
      { name: 'Next.js', level: 75, category: 'frontend' },
    ],
    backend: [
      { name: 'Node.js', level: 75, category: 'backend' },
      { name: 'Express', level: 75, category: 'backend' },
      { name: 'MongoDB', level: 70, category: 'backend' },
      { name: 'SQL', level: 65, category: 'backend' },
      { name: 'RESTful APIs', level: 80, category: 'backend' },
    ],
    tools: [
      { name: 'Git', level: 85, category: 'tools' },
      { name: 'Webpack', level: 70, category: 'tools' },
      { name: 'Docker', level: 60, category: 'tools' },
      { name: 'CI/CD', level: 65, category: 'tools' },
      { name: 'Jest', level: 75, category: 'tools' },
    ],
    softSkills: [
      { name: 'Problem Solving', level: 90, category: 'softSkills' },
      { name: 'Communication', level: 85, category: 'softSkills' },
      { name: 'Teamwork', level: 90, category: 'softSkills' },
      { name: 'Adaptability', level: 85, category: 'softSkills' },
      { name: 'Time Management', level: 80, category: 'softSkills' },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title fade-in">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Frontend Skills */}
          <div className="fade-in" style={{ animationDelay: '100ms' }}>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Frontend Development</h3>
              <div className="space-y-4">
                {skills.frontend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        data-width={`${skill.level}%`} 
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="fade-in" style={{ animationDelay: '200ms' }}>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Backend Development</h3>
              <div className="space-y-4">
                {skills.backend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        data-width={`${skill.level}%`} 
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Tools */}
          <div className="fade-in" style={{ animationDelay: '300ms' }}>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Tools & Technologies</h3>
              <div className="space-y-4">
                {skills.tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        data-width={`${skill.level}%`} 
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="fade-in" style={{ animationDelay: '400ms' }}>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Soft Skills</h3>
              <div className="space-y-4">
                {skills.softSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        data-width={`${skill.level}%`} 
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;