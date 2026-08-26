// ============================================
// SKILL CARD COMPONENT
// ============================================

import { motion } from 'framer-motion';
import './SkillCard.css';

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      className="skill-card glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <div className="skill-card-icon-wrap" style={{ '--skill-color': skill.color }}>
        <Icon className="skill-card-icon" />
      </div>
      <h4 className="skill-card-name">{skill.name}</h4>
      <p className="skill-card-desc">{skill.description}</p>
      <div className="skill-card-glow" style={{ background: skill.color }} />
    </motion.div>
  );
};

export default SkillCard;
