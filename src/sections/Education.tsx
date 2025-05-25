import React, { useEffect } from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { setupAnimations } from '../utils/animations';

type EducationItemProps = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  delay: number;
};

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  location,
  period,
  description,
  delay
}) => {
  return (
    <div className="timeline-item fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="timeline-dot"></div>
      <div className="ml-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{degree}</h3>
        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">{institution}</h4>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  useEffect(() => {
    setupAnimations();
  }, []);

  const educations = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Institute of Engineering & Management",
      location: "Kolkata, India",
      period: "2017 - 2020",
      description: "Specialized in software development and web technologies. Completed coursework in algorithms, data structures, database management, and software engineering principles.",
      delay: 100
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Calcutta University",
      location: "Kolkata, India",
      period: "2014 - 2017",
      description: "Focused on computer science fundamentals, programming languages, and system design. Graduated with distinction and completed several notable projects.",
      delay: 200
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "React Advanced Concepts",
      issuer: "Meta",
      year: "2023",
      delay: 100
    },
    {
      id: 2,
      name: "Full Stack Web Development",
      issuer: "Udemy",
      year: "2022",
      delay: 150
    },
    {
      id: 3,
      name: "Modern JavaScript",
      issuer: "FreeCodeCamp",
      year: "2021",
      delay: 200
    },
    {
      id: 4,
      name: "UI/UX Design Fundamentals",
      issuer: "Google",
      year: "2021",
      delay: 250
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title fade-in">Education</h2>
        
        <div className="mt-12 mb-16">
          {educations.map((edu) => (
            <EducationItem
              key={edu.id}
              degree={edu.degree}
              institution={edu.institution}
              location={edu.location}
              period={edu.period}
              description={edu.description}
              delay={edu.delay}
            />
          ))}
        </div>
        
        <h3 className="text-2xl font-bold mb-6 fade-in">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="card p-5 flex flex-col items-center text-center fade-in"
              style={{ animationDelay: `${cert.delay}ms` }}
            >
              <div className="mb-3 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold mb-1">{cert.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer} • {cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;