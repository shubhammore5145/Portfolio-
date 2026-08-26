// ============================================
// SECTION HEADER — Consistent section titles
// ============================================

import { motion } from 'framer-motion';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, align = 'center' }) => {
  return (
    <motion.div
      className={`section-header section-header-${align}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">
        {title}
        <span className="section-title-dot">.</span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-divider">
        <span className="section-divider-line" />
        <span className="section-divider-dot" />
        <span className="section-divider-line" />
      </div>
    </motion.div>
  );
};

export default SectionHeader;
