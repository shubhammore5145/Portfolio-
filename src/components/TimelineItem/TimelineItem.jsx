// ============================================
// TIMELINE ITEM COMPONENT
// ============================================

import { motion } from 'framer-motion';
import './TimelineItem.css';

const TimelineItem = ({ item, index, isLeft }) => {
  return (
    <motion.div
      className={`timeline-item ${isLeft ? 'timeline-item-left' : 'timeline-item-right'}`}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="timeline-dot">
        <span className="timeline-dot-inner">{item.icon}</span>
      </div>
      <div className="timeline-card glass-card">
        <div className="timeline-card-header">
          <h4 className="timeline-card-title">{item.title}</h4>
          <span className="timeline-card-period">{item.period}</span>
        </div>
        <p className="timeline-card-org">{item.organization}</p>
        <p className="timeline-card-desc">{item.description}</p>
        {item.highlights && item.highlights.length > 0 && (
          <ul className="timeline-card-highlights">
            {item.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
        {item.technologies && (
          <div className="timeline-card-tech">
            {item.technologies.map((tech) => (
              <span key={tech} className="timeline-tech-tag">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
