import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../Assets/WhatsApp Image 2025-05-29 at 16.45.25_a75f613d.jpg'; // Import the image

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title text-center">About Me</h2>

          {/* Updated grid to 3 columns on medium screens and above */}
          <div className="grid md:grid-cols-3 gap-8 items-start mt-8">
            {/* Image Column - First Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start" // Adjust alignment on md+
            >
              <motion.img
                src={myPhoto}
                alt="Gaurang Mishra"
                className="w-64 h-64 object-cover rounded-lg shadow-lg" // Keep consistent image styling
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </motion.div>

            {/* About Me Text Column - Second Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Adjusted animation for this column
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }} // Stagger delay slightly
              viewport={{ once: true }}
              className="space-y-4 md:col-span-1" // Ensure it spans one column
            >
              <p className="text-textSecondary">
                I'm a passionate Computer Science undergraduate specializing in Software Engineering at SRM University.
                I thrive at the intersection of AI, web development, and cybersecurity, and enjoy building impactful
                software solutions.
              </p>
              <p className="text-textSecondary">
                From AI-powered traffic systems to mental health and safety apps, my projects reflect my commitment
                to solving real-world problems using technology. I'm always eager to learn, collaborate, and contribute
                to innovative projects that make a difference.
              </p>
              <div className="pt-4">
                <a
                  href="https://github.com/gm0202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border border-secondary text-secondary rounded hover:bg-secondary/10 transition-colors duration-300 mr-4"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/gaurang-mishra-952069278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border border-secondary text-secondary rounded hover:bg-secondary/10 transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Education Column - Third Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Adjusted animation for this column
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }} // Stagger delay slightly more
              viewport={{ once: true }}
              className="bg-tertiary p-6 rounded-lg md:col-span-1" // Ensure it spans one column
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">B.Tech in Computer Science Engineering</h4>
                  <p className="text-textSecondary">SRM University, Chennai</p>
                  <p className="text-textSecondary">2022 – Present | CGPA: 8.80/10</p>
                </div>
                <div>
                  <h4 className="font-medium">12th (HSC)</h4>
                  <p className="text-textSecondary">Shiv Jyoti Senior Secondary School, Kota</p>
                  <p className="text-textSecondary">Score: 75%</p>
                </div>
                <div>
                  <h4 className="font-medium">10th (SSC)</h4>
                  <p className="text-textSecondary">Aditya Birla Public School, Nagda</p>
                  <p className="text-textSecondary">Score: 90%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 