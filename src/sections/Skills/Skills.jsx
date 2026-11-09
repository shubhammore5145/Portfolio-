// ============================================
// TECH STACK (SKILLS SECTION)
// ============================================
import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { techCategories } from '../../data/portfolioData';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Core programming languages, frameworks, databases, and engineering tools"
        />

        <div className="skills-content">
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
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ 
                        duration: 0.4, 
                        delay: (catIndex * 0.05) + (skillIndex * 0.03),
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{ y: -4 }}
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
