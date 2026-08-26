// ============================================
// CERTIFICATES SECTION
// ============================================
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { certificatesData } from '../../data/portfolioData';
import './Certificates.css';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="certificates section" id="certificates">
      <div className="container">
        <div className="cert-header-wrapper">
          <SectionHeader
            title="Certifications"
            subtitle="Professional achievements and verified skills"
          />
          
          <div className="cert-nav">
            <button className="cert-nav-btn clickable" onClick={() => scroll('left')}>
              <FaChevronLeft />
            </button>
            <button className="cert-nav-btn clickable" onClick={() => scroll('right')}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="cert-gallery-wrapper">
          <div className="cert-gallery" ref={scrollRef}>
            {certificatesData.map((cert, idx) => (
              <motion.div
                key={cert.id}
                className="cert-card glass-card neon-border clickable"
                onClick={() => setSelectedCert(cert)}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="cert-image-container">
                  {cert.image ? (
                    <img src={cert.image} alt={cert.title} loading="lazy" />
                  ) : (
                    <div className="cert-placeholder">CERTIFICATE</div>
                  )}
                  <div className="cert-overlay">
                    <span>View Full <FaExternalLinkAlt /></span>
                  </div>
                </div>
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer} &bull; {cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Certificate Modal ── */}
      <AnimatePresence>
        {selectedCert && (
          <div className="cert-modal-backdrop">
            <motion.div 
              className="cert-modal-bg"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            />
            <motion.div 
              className="cert-modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              <button className="cert-modal-close clickable" onClick={() => setSelectedCert(null)}>
                <FaTimes />
              </button>
              
              {selectedCert.image ? (
                <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-img" />
              ) : (
                <div className="cert-modal-placeholder">No Image Available</div>
              )}
              
              <div className="cert-modal-details">
                <h3>{selectedCert.title}</h3>
                <p>{selectedCert.issuer} - {selectedCert.date}</p>
                <p className="cert-modal-desc">{selectedCert.description}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
