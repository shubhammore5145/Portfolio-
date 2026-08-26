// ============================================
// TECH STACK WALL (SKILLS SECTION)
// ============================================
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
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

        <div className="tech-wall">
          {techCategories.map((category, catIndex) => (
            <div key={category.id} className="tech-category">
              <h3 className="tech-category-title">{category.title}</h3>
              <div className="tech-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="tech-card glass-card neon-border clickable"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
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
    </section>
  );
};

export default Skills;
