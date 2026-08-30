// ============================================
// PROJECTS SECTION
// ============================================
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Button from '../../components/Button/Button';
import ProjectModal from './ProjectModal';
import { projectsData, featuredProject, projectFilters } from '../../data/portfolioData';
import './Projects.css';

// Premium high-level animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for buttery smooth stop
    }
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
};

const Projects = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'ALL' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <SectionHeader
          title="Things I've Built"
          subtitle="Real projects. Real problems. Real solutions."
        />

        {/* ── Filter Buttons ── */}
        <div className="project-filters">
          {projectFilters.map(f => (
            <button
              key={f}
              className={`filter-btn clickable ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {filter === f && (
                <motion.div layoutId="filterIndicator" className="filter-indicator" />
              )}
              <span className="filter-text">{f}</span>
            </button>
          ))}
        </div>

        {/* ── Featured Project (Only show if filter is ALL or matches category) ── */}
        {(filter === 'ALL' || filter === featuredProject.category) && (
          <motion.div 
            className="featured-project glass-card neon-border"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="featured-visual">
              {/* Animated Traffic Signal Viz */}
              <div className="traffic-viz">
                <div className="signal-box">
                  <motion.div className="light red" animate={{ opacity: [1, 0.3, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
                  <motion.div className="light yellow" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
                  <motion.div className="light green" animate={{ opacity: [0.3, 0.3, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }} />
                </div>
                <motion.div 
                  className="ambulance-icon"
                  animate={{ x: [-50, 250] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  🚑
                </motion.div>
              </div>
              {featuredProject.image && <img src={featuredProject.image} alt={featuredProject.title} className="featured-img" />}
            </div>

            <div className="featured-content">
              <div className="featured-label">Featured Project</div>
              <h3 className="featured-title">{featuredProject.title}</h3>
              <p className="featured-desc">{featuredProject.description}</p>
              
              <div className="featured-tech">
                {featuredProject.technologies.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="featured-actions">
                <Button variant="primary" onClick={() => openModal(featuredProject)} className="clickable">
                  View Project <FaArrowRight />
                </Button>
                {featuredProject.github && featuredProject.github !== "#" && (
                  <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="featured-link clickable">
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Grid Projects ── */}
        <motion.div 
          layout 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                variants={itemVariants}
                exit="exit"
                key={project.id}
                className="project-card glass-card neon-border clickable"
                onClick={() => openModal(project)}
              >
                <div className="project-card-visual">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-img" loading="lazy" />
                  ) : (
                    <div className="project-placeholder">
                      <span>{project.title.charAt(0)}</span>
                    </div>
                  )}
                  <div className="project-overlay">
                    <span className="view-text">View Details <FaArrowRight /></span>
                  </div>
                </div>

                <div className="project-card-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  
                  <div className="project-card-tech">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="mini-tech">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="mini-tech">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default Projects;
