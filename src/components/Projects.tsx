import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  role: string;
}

const projects: Project[] = [
  {
    title: 'SecureHer – Women Safety App',
    description: 'A comprehensive mobile safety application offering SOS alerts, live audio/video streaming, disguised safety tools, safe route navigation, and an AI-powered panic chatbot.',
    technologies: ['Flutter', 'Firebase', 'OpenCV', 'Google Maps API', 'AI'],
    github: 'https://github.com/gm0202/SecureHer',
    role: 'Full-stack Developer, AI Integration & UI/UX Designer'
  },
  {
    title: 'Indian Crime Analysis Dashboard',
    description: 'A data visualization platform to explore crime patterns across India using interactive maps and charts.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'GeoPandas'],
    github: 'https://github.com/gm0202/indiancrimeanalysis',
    demo: 'https://indiancrimeanalysis.streamlit.app/',
    role: 'Data Analyst, Backend Developer'
  },
  {
    title: 'Moodie – Mental Wellness App',
    description: 'A mental health platform with an AI chatbot, emotion recognition using OpenCV, and access to therapists and self-care vlogs.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'OpenCV'],
    demo: 'https://moodies.netlify.app/',
    role: 'Frontend Developer, AI Integration'
  },
  {
    title: 'TrafficController – AI-Based Traffic Control System',
    description: 'An AI-powered system that dynamically adjusts traffic signals based on real-time traffic density using computer vision.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'SSD'],
    github: 'https://github.com/gm0202/TrafficController',
    role: 'ML Engineer, Vision System Developer'
  },
  {
    title: 'Pharmacy Management System',
    description: 'A desktop-based pharmacy system with inventory, billing, and stock management features.',
    technologies: ['Python', 'Tkinter', 'MySQL'],
    github: 'https://github.com/gm0202/VP-project',
    role: 'Full-stack Developer'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card"
              >
                <h3 className="text-xl font-semibold mb-2 text-secondary">{project.title}</h3>
                <p className="text-textSecondary mb-4">{project.description}</p>
                <p className="text-sm text-textSecondary mb-4">Role: {project.role}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-secondary/80 transition-colors duration-300"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-secondary/80 transition-colors duration-300"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 