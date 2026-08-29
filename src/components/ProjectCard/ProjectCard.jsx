// ============================================
// PROJECT CARD COMPONENT
// ============================================

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import Button from '../Button/Button';
import './ProjectCard.css';

const ProjectCard = ({ project, index, onViewDetails }) => {
  const placeholderGradients = [
    'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
    'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%)',
    'linear-gradient(135deg, #06b6d4 0%, #22c55e 50%, #6366f1 100%)',
    'linear-gradient(135deg, #ec4899 0%, #6366f1 50%, #06b6d4 100%)',
    'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)',
    'linear-gradient(135deg, #22c55e 0%, #06b6d4 50%, #8b5cf6 100%)',
    'linear-gradient(135deg, #6366f1 0%, #06b6d4 50%, #22c55e 100%)',
    'linear-gradient(135deg, #a78bfa 0%, #6366f1 50%, #ec4899 100%)',
  ];

  const cardRef = useRef(null);

  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Map mouse position to rotation degrees
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="project-card-inner glass-card"
        style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}
      >
      <div
        className="project-card-image"
        style={{ background: placeholderGradients[index % placeholderGradients.length], transform: 'translateZ(40px)' }}
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        )}
        <div className="project-card-image-overlay">
          <span className="project-card-category">{project.category}</span>
        </div>
        {project.featured && (
          <span className="project-card-featured">★ Featured</span>
        )}
      </div>

      <div className="project-card-content" style={{ transform: 'translateZ(30px)' }}>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-subtitle">{project.subtitle}</p>
        <p className="project-card-description">{project.description}</p>

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

        <div className="project-card-actions">
          {project.github && (
            <Button
              variant="outline"
              size="sm"
              href={project.github}
              target="_blank"
              icon={<FaGithub />}
              id={`github-${project.id}`}
            >
              Code
            </Button>
          )}
          {project.liveDemo && (
            <Button
              variant="primary"
              size="sm"
              href={project.liveDemo}
              target="_blank"
              icon={<FaExternalLinkAlt />}
              id={`demo-${project.id}`}
            >
              Live Demo
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewDetails(project)}
            icon={<FaEye />}
            id={`details-${project.id}`}
          >
            Details
          </Button>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default ProjectCard;
