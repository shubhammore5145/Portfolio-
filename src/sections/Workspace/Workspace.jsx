import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { liveWorkData } from '../../data/portfolioData';
import './Workspace.css';

const Workspace = () => {
  const [cards, setCards] = useState(liveWorkData);

  const moveCardToEnd = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const firstCard = newCards.shift();
      newCards.push(firstCard);
      return newCards;
    });
  };

  return (
    <section className="workspace section" id="workspace">
      <div className="container">
        <SectionHeader
          title="My Workspace & Gallery"
          subtitle="Where the magic happens"
        />
        
        <div className="workspace-content-grid">
          {/* ── Left Side: 3D Spline ── */}
          <motion.div 
            className="workspace-visual-square glass-card neon-border"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <iframe 
              src="https://my.spline.design/maw6softgreenminimalworkspace-7aca15889fc75c53cc1b7e5aebf4ec30/" 
              frameBorder="0" 
              width="100%" 
              height="100%" 
              title="Minimal Workspace 3D"
              loading="lazy"
            ></iframe>
          </motion.div>
          
          {/* ── Right Side: Info & Photo Stack ── */}
          <div className="workspace-right-column">
            <motion.div 
              className="workspace-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Behind The Scenes</h3>
              <p>
                From testing IoT hardware to late-night coding sessions, here is a glimpse into my actual workspace and recent activities.
              </p>
            </motion.div>

            {/* ── Photo Stack Gallery ── */}
            <motion.div 
              className="workspace-gallery-stack"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="stack-container" onClick={moveCardToEnd}>
                <AnimatePresence>
                  {cards.map((card, index) => {
                    const isTop = index === 0;
                    return (
                      <motion.div
                        key={card.id}
                        className={`gallery-card ${isTop ? 'gallery-card-top' : ''}`}
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ 
                          opacity: 1 - index * 0.15, 
                          scale: 1 - index * 0.05, 
                          y: index * 20,
                          rotateZ: index === 0 ? 0 : (index % 2 === 0 ? index * 2 : -index * 3),
                          zIndex: cards.length - index 
                        }}
                        exit={{ opacity: 0, scale: 0.5, x: 100, transition: { duration: 0.3 } }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 20 }}
                        layout
                      >
                        <img src={card.image} alt={card.title} className="gallery-card-image" />
                        <div className="gallery-card-content glass-overlay">
                          <h4>{card.title}</h4>
                          <p>{card.description}</p>
                          <span className="gallery-card-date">{card.date}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
                <div className="stack-hint">
                  <span className="pulse-dot"></span> Click photo to cycle gallery
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workspace;
