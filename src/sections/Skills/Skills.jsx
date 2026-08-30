// ============================================
// TECH STACK WALL (SKILLS SECTION)
// ============================================
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import TechOrbit from '../../components/TechOrbit/TechOrbit';
import { techCategories } from '../../data/portfolioData';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <SectionHeader
          title="Technologies I Work With"
          subtitle="The tools and frameworks I use to build scalable applications"
        />

        <div className="skills-content">
          <div className="skills-orbit-wrapper">
            <motion.div 
              className="orbit-square-card glass-card neon-border"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <TechOrbit />
            </motion.div>
            <motion.div 
              className="orbit-info"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3>Interactive Tech Ecosystem</h3>
              <p>Explore my technical stack. The core represents my passion for coding, surrounded by layers of languages, frameworks, and tools I use to bring ideas to life.</p>
            </motion.div>
          </div>

          <div className="tech-wall">
            {techCategories.map((category, catIndex) => (
            <div key={category.id} className="tech-category">
              <h3 className="tech-category-title">{category.title}</h3>
              <div className="tech-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="tech-card glass-card neon-border clickable"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.8, 
                      delay: (catIndex * 0.1) + (skillIndex * 0.05),
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="tech-card-icon" style={{ color: skill.color }}>
                      <skill.icon />
                    </div>
                    <div className="tech-card-info">
                      <h4 className="tech-name">{skill.name}</h4>
                      <p className="tech-desc">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
