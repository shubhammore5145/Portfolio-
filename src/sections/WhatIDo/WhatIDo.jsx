// ============================================
// WHAT I DO SECTION
// ============================================
import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { whatIDo } from '../../data/portfolioData';
import './WhatIDo.css';

const WhatIDo = () => {
  return (
    <section className="what-i-do section" id="whatido">
      <div className="container">
        <SectionHeader
          title="What I Do"
          subtitle="My core areas of expertise and services"
        />

        <div className="services-grid">
          {whatIDo.map((service, idx) => (
            <motion.div
              key={service.title}
              className="service-card glass-card neon-border clickable"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon-wrapper">
                <service.icon className="service-icon" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
