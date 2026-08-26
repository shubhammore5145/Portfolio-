// ============================================
// MY JOURNEY SECTION (TIMELINE)
// ============================================
import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { journeyData } from '../../data/portfolioData';
import './Journey.css';

const Journey = () => {
  return (
    <section className="journey section" id="journey">
      <div className="container">
        <SectionHeader
          title="My Journey"
          subtitle="A timeline of my academic and technical evolution"
        />

        <div className="timeline">
          <div className="timeline-line" />
          
          {journeyData.map((item, index) => (
            <motion.div 
              key={item.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot" />
              
              <div className="timeline-content glass-card neon-border">
                <div className="timeline-header">
                  <span className="timeline-category">{item.category}</span>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-org">{item.organization}</h4>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
