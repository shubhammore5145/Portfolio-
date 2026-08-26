// ============================================
// PROJECT DETAIL MODAL
// ============================================
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop">
        <motion.div 
          className="modal-backdrop-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        
        <motion.div 
          className="modal-content glass-card neon-border"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <button className="modal-close clickable" onClick={onClose}>
            <FaTimes />
          </button>

          <div className="modal-scroll-area">
            {/* Header Image */}
            <div className="modal-image-wrapper">
              {project.image ? (
                <img src={project.image} alt={project.title} className="modal-image" />
              ) : (
                <div className="modal-image-placeholder">
                  <span className="modal-initials">{project.title.charAt(0)}</span>
                </div>
              )}
              {project.isFeatured && (
                <div className="modal-featured-badge">Featured Project</div>
              )}
            </div>

            {/* Content */}
            <div className="modal-body">
              <div className="modal-header">
                <h2 className="modal-title">{project.title}</h2>
                <h3 className="modal-subtitle">{project.subtitle}</h3>
              </div>

              <div className="modal-tech-stack">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>

              {/* Storytelling Content */}
              <div className="modal-sections">
                {project.problem && (
                  <div className="modal-section">
                    <h4>The Problem</h4>
                    <p>{project.problem}</p>
                  </div>
                )}
                
                {project.idea && (
                  <div className="modal-section">
                    <h4>The Idea</h4>
                    <p>{project.idea}</p>
                  </div>
                )}
                
                <div className="modal-section">
                  <h4>Overview</h4>
                  <p>{project.description}</p>
                </div>
                
                {project.solution && (
                  <div className="modal-section">
                    <h4>The Solution</h4>
                    <p>{project.solution}</p>
                  </div>
                )}
                
                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="modal-features">
                    {project.features?.map((feature, idx) => (
                      <li key={idx}><FaCheckCircle className="feature-icon" /> {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="modal-actions">
                {project.liveDemo && project.liveDemo !== "#" && (
                  <Button 
                    variant="primary" 
                    href={project.liveDemo} 
                    target="_blank"
                    iconRight={<FaExternalLinkAlt />}
                    className="clickable"
                  >
                    View Live Demo
                  </Button>
                )}
                
                {project.github && project.github !== "#" && (
                  <Button 
                    variant="outline" 
                    href={project.github} 
                    target="_blank"
                    icon={<FaGithub />}
                    className="clickable"
                  >
                    Source Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
