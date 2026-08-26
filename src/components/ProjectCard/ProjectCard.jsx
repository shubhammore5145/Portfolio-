// ============================================
// PROJECT CARD COMPONENT
// ============================================

import { motion } from 'framer-motion';
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

  return (
    <motion.article
      className="project-card glass-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className="project-card-image"
        style={{ background: placeholderGradients[index % placeholderGradients.length] }}
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

      <div className="project-card-content">
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
      </div>
    </motion.article>
  );
};

export default ProjectCard;
