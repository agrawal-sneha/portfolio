import React, { useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { setupAnimations } from '../utils/animations';

type ExperienceItemProps = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  delay: number;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  description,
  delay
}) => {
  return (
    <div className="timeline-item fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="timeline-dot"></div>
      <div className="ml-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">{company}</h4>
        
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
        
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  useEffect(() => {
    setupAnimations();
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "Bangalore, India",
      period: "January 2022 - Present",
      description: [
        "Led a team of 5 developers in building and maintaining a complex SaaS platform serving over 50,000 users",
        "Implemented modern React architecture utilizing hooks, context API, and custom reusable components",
        "Reduced page load time by 40% through code splitting, lazy loading, and optimized rendering",
        "Collaborated with UI/UX team to implement pixel-perfect designs and improve user experience"
      ],
      delay: 100
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "WebInnovate",
      location: "Mumbai, India",
      period: "June 2020 - December 2021",
      description: [
        "Developed responsive web applications using React, Redux, and Tailwind CSS",
        "Built RESTful API integrations for handling data fetching and state management",
        "Implemented automated testing with Jest and React Testing Library, achieving 85% code coverage",
        "Participated in agile development processes, including daily standups and sprint planning"
      ],
      delay: 200
    },
    {
      id: 3,
      title: "Web Developer Intern",
      company: "CodeCraft Studios",
      location: "Kolkata, India",
      period: "January 2020 - May 2020",
      description: [
        "Assisted in developing frontend features for client websites using HTML, CSS, and JavaScript",
        "Created responsive layouts and implemented cross-browser compatibility fixes",
        "Collaborated with senior developers to learn best practices in modern web development",
        "Participated in code reviews and implemented feedback to improve code quality"
      ],
      delay: 300
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title fade-in">Work Experience</h2>
        
        <div className="mt-12">
          {experiences.map((exp) => (
            <ExperienceItem
              key={exp.id}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              description={exp.description}
              delay={exp.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;