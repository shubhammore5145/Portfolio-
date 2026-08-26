// ============================================
// ABOUT & QUICK STATS SECTION
// ============================================
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaServer, FaBrain } from 'react-icons/fa';
import { personalInfo, statistics } from '../../data/portfolioData';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Button from '../../components/Button/Button';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionHeader
          title="About Me"
          subtitle="A closer look at who I am and what I do"
        />

        <div className="about-content">
          {/* ── Left: Image Visual ── */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-wrapper neon-border">
              <div className="about-image-placeholder">
                <span className="about-image-initials">
                  {personalInfo.firstName[0]}{personalInfo.lastName[0]}
                </span>
              </div>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.fullName}
                className="about-image-img"
                loading="lazy"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              
              {/* Floating Tech Badges */}
              <motion.div 
                className="about-badge badge-1 glass-card"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <FaCode /> Web
              </motion.div>
              <motion.div 
                className="about-badge badge-2 glass-card"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <FaServer /> Backend
              </motion.div>
              <motion.div 
                className="about-badge badge-3 glass-card"
                animate={{ y: [-3, 6, -3] }}
                transition={{ duration: 4.5, repeat: Infinity }}
              >
                <FaBrain /> AI
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Text Content ── */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="about-heading">{personalInfo.aboutIntro}</h3>
            <p className="about-description">{personalInfo.aboutText}</p>

            <div className="about-interests">
              <h4 className="about-interests-title">Core Focus Areas:</h4>
              <div className="about-interest-tags">
                {personalInfo.interests.map((interest) => (
                  <span key={interest} className="about-interest-tag">{interest}</span>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              href="#journey"
              iconRight={<FaArrowRight />}
              className="mt-6 clickable"
            >
              My Journey
            </Button>
          </motion.div>
        </div>

        {/* ── Quick Stats ── */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {statistics.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="about-stat glass-card"
              whileHover={{ y: -5, borderColor: 'rgba(99, 102, 241, 0.4)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="about-stat-value">{stat.value}</h3>
              <p className="about-stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
