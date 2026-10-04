// ============================================
// PROJECT CARD COMPONENT (Ultra-Premium 3D)
// ============================================

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye, FaCode, FaMicrochip, FaBrain, FaCoffee } from 'react-icons/fa';
import Button from '../Button/Button';
import './ProjectCard.css';

const categoryConfig = {
  WEB: { color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.15)', border: 'rgba(139, 92, 246, 0.3)', icon: FaCode },
  AI: { color: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)', border: 'rgba(236, 72, 153, 0.3)', icon: FaBrain },
  IOT: { color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.3)', icon: FaMicrochip },
  JAVA: { color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.3)', icon: FaCoffee },
  PYTHON: { color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', border: 'rgba(56, 189, 248, 0.3)', icon: FaCode },
};

const ProjectCard = ({ project, index = 0, onViewDetails }) => {
  const cardRef = useRef(null);

  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Map mouse position to subtle rotation degrees
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const catStyle = categoryConfig[project.category] || categoryConfig.WEB;
  const CategoryIcon = catStyle.icon;

  return (
    <motion.article
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="project-card-inner glass-card neon-border"
        style={{ 
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Visual Banner */}
        <div className="project-card-image" onClick={() => onViewDetails(project)}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          ) : (
            <div className="project-placeholder">
              <span>{project.title.charAt(0)}</span>
            </div>
          )}

          <div className="project-card-image-overlay">
            {/* Category Badge */}
            <span 
              className="project-card-category"
              style={{
                color: catStyle.color,
                background: catStyle.bg,
                borderColor: catStyle.border
              }}
            >
              <CategoryIcon style={{ marginRight: '5px', fontSize: '11px' }} />
              {project.category}
            </span>

            {/* Badges on Top Right */}
            <div className="project-card-top-badges">
              {project.liveDemo && project.liveDemo !== "#" && (
                <span className="project-card-live-badge">
                  <span className="live-ping" />
                  Live App
                </span>
              )}
              {project.isFeatured && (
                <span className="project-card-featured-badge">★ Featured</span>
              )}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="project-card-content">
          <div className="project-card-header" onClick={() => onViewDetails(project)}>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-subtitle">{project.subtitle}</p>
          </div>

          <p className="project-card-description">{project.description}</p>

          {/* Tech Stack Chips */}
          <div className="project-card-tech">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="project-card-tech-tag">{tech}</span>
            ))}
            {project.technologies.length > 4 && (
              <span className="project-card-tech-tag project-card-tech-more">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="project-card-actions">
            {project.liveDemo && project.liveDemo !== "#" && (
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm clickable"
                title="View Live Website"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            
            {project.github && project.github !== "#" && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline btn-sm clickable"
                title="View Source Code on GitHub"
              >
                <FaGithub /> Code
              </a>
            )}

            <button
              type="button"
              className="btn btn-ghost btn-sm clickable"
              onClick={() => onViewDetails(project)}
              title="View Complete Project Case Study"
            >
              <FaEye /> Details
            </button>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default ProjectCard;
