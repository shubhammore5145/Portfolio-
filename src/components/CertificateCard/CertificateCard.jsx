// ============================================
// CERTIFICATE CARD COMPONENT
// ============================================

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import './CertificateCard.css';

const CertificateCard = ({ certificate, index, onView }) => {
  return (
    <motion.div
      className="cert-card glass-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="cert-card-image">
        {certificate.image ? (
          <img
            src={certificate.image}
            alt={certificate.title}
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        ) : (
          <div className="cert-card-placeholder">
            <FaAward />
          </div>
        )}
      </div>
      <div className="cert-card-content">
        <h4 className="cert-card-title">{certificate.title}</h4>
        <p className="cert-card-issuer">{certificate.issuer}</p>
        <p className="cert-card-date">{certificate.date}</p>
        {certificate.credentialUrl && (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card-link"
          >
            <FaExternalLinkAlt /> View Certificate
          </a>
        )}
        {!certificate.credentialUrl && onView && (
          <button className="cert-card-link" onClick={() => onView(certificate)}>
            <FaExternalLinkAlt /> View Details
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default CertificateCard;
