// ============================================
// ACHIEVEMENTS SECTION
// ============================================
import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaMedal, FaAward } from 'react-icons/fa';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { achievementsData } from '../../data/portfolioData';
import './Achievements.css';

const icons = [FaTrophy, FaStar, FaMedal, FaAward];

const Achievements = () => {
  return (
    <section className="achievements section" id="achievements">
      <div className="container">
        <SectionHeader
          title="Achievements"
          subtitle="Milestones and recognitions"
        />

        <div className="achievements-grid">
          {achievementsData.map((achievement, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={achievement.id}
                className="achievement-card glass-card neon-border"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="achievement-icon-wrapper">
                  <Icon className="achievement-icon" />
                </div>
                <div className="achievement-content">
                  <span className="achievement-category">{achievement.category}</span>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-desc">{achievement.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
