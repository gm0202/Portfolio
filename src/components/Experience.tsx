import React from 'react';
import { motion } from 'framer-motion';
// Import the certification logos
import awsLogo from '../Assets/AWS.png';
import ciscoLogo from '../Assets/cisco.png';
import ibmLogo from '../Assets/IBM.png';
import nvidiaLogo from '../Assets/NVIDIA.png';

interface Certification {
  title: string;
  issuer: string;
  link: string;
  date?: string;
  image?: string; // Add image property
}

const certifications: Certification[] = [
  {
    title: 'Cisco Ethical Hacker',
    issuer: 'Cisco',
    link: 'https://www.credly.com/badges/c6f4baf7-cac3-4c38-8714-2012f37c3fd6',
    image: ciscoLogo, // Add the imported logo
  },
  {
    title: 'Deep Learning',
    issuer: 'NVIDIA Deep Learning Institute',
    link: 'https://learn.nvidia.com/certificates?id=JUuBr8TbSdCemAs3i3rHPQ',
    image: nvidiaLogo, // Add the imported logo
  },
  {
    title: 'AWS Academy Machine Learning Foundations',
    issuer: 'Amazon Web Services',
    link: 'https://www.credly.com/badges/001f0652-a4f7-4bd1-812e-5df5ba662e3f/print',
    image: awsLogo, // Add the imported logo
  },
  {
    title: 'IBM Data Science Methodology',
    issuer: 'IBM (Cognitive Class)',
    link: 'https://courses.cognitiveclass.ai/certificates/b41d7b65ed1c47f09a2ace6c3126141a',
    image: ibmLogo, // Add the imported logo
  },
  {
    title: 'Cisco Introduction to Data Science',
    issuer: 'Cisco',
    link: 'https://www.credly.com/badges/d0a7c0fd-4c29-4009-84a3-37cafc2b7047',
    image: ciscoLogo, // Add the imported logo
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Certifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-tertiary p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">{cert.title}</h3>
                    <p className="text-textSecondary">{cert.issuer}</p>
                  </div>
                  {cert.image && (
                    <img
                      src={cert.image}
                      alt={`${cert.issuer} logo`}
                      className="h-10 w-auto object-contain ml-4"
                    />
                  )}
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary/80 transition-colors duration-300 inline-flex items-center self-end"
                >
                  View Certificate
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 