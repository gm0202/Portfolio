import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C++', 'JavaScript']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Node.js', 'Express.js', 'Flutter', 'Streamlit', 'TensorFlow', 'OpenCV', 'Keras', 'Tkinter']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Firebase', 'Git', 'MySQL', 'GitHub', 'AWS', 'Google Maps API']
  },
  {
    title: 'Other Skills',
    skills: ['Machine Learning', 'Deep Learning', 'Web Development', 'UI/UX Design', 'Cybersecurity', 'REST APIs', 'Data Visualization']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-tertiary p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-secondary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 