import React, { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { setupAnimations } from '../utils/animations';

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  delay: number;
};

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  image, 
  tags, 
  liveLink, 
  githubLink,
  delay 
}) => {
  return (
    <div className="card overflow-hidden fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative overflow-hidden group h-48 md:h-60">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-blue-600/80 dark:bg-blue-800/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-100 transition-colors"
              aria-label={`View ${title} live site`}
            >
              <ExternalLink size={20} />
            </a>
          )}
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-100 transition-colors"
              aria-label={`View ${title} code on GitHub`}
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  useEffect(() => {
    setupAnimations();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart, checkout, and user authentication.",
      image: "https://images.pexels.com/photos/6169/woman-hand-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      delay: 100
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Firebase", "Tailwind CSS", "Context API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      delay: 200
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current and forecasted weather data for multiple locations.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["JavaScript", "OpenWeather API", "Chart.js", "Geolocation"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      delay: 300
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A content management system for publishing and managing blog articles with rich text editing.",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Next.js", "TypeScript", "MongoDB", "Draft.js"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      delay: 400
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title fade-in">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              delay={project.delay}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in" style={{ animationDelay: '500ms' }}>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={18} />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;