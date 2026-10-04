// ============================================
// PROJECTS SECTION (Human-Crafted Scroll-Driven Showcase)
// ============================================
import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { 
  FaSearch, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight,
  FaBolt,
  FaServer,
  FaShieldAlt,
  FaBroadcastTower,
  FaArrowRight,
  FaGithub
} from 'react-icons/fa';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from './ProjectModal';
import Button from '../../components/Button/Button';
import { projectsData, featuredProject, projectFilters } from '../../data/portfolioData';
import './Projects.css';

// ── Tasteful, Editorial Studio Ambient Palettes (Apple / Linear Quality) ──
const projectAuraMap = {
  IOT: {
    primary: '#10b981',      // Refined Emerald
    secondary: '#0d9488',    // Deep Teal
    glow: 'rgba(16, 185, 129, 0.28)',
    tag: 'IoT & Embedded Systems'
  },
  AI: {
    primary: '#f43f5e',      // Editorial Rose
    secondary: '#9333ea',    // Royal Purple
    glow: 'rgba(244, 63, 94, 0.28)',
    tag: 'AI & Machine Learning'
  },
  WEB: {
    primary: '#8b5cf6',      // Clean Violet
    secondary: '#3b82f6',    // Deep Cobalt
    glow: 'rgba(139, 92, 246, 0.28)',
    tag: 'Full-Stack Web Platform'
  },
  PYTHON: {
    primary: '#0ea5e9',      // Ocean Sky Blue
    secondary: '#6366f1',    // Indigo
    glow: 'rgba(14, 165, 233, 0.28)',
    tag: 'Python Intelligence'
  },
  JAVA: {
    primary: '#f59e0b',      // Warm Golden Amber
    secondary: '#ea580c',    // Deep Orange
    glow: 'rgba(245, 158, 11, 0.28)',
    tag: 'Enterprise Architecture'
  }
};

const filterDisplayNames = {
  ALL: 'All Projects',
  WEB: 'Web Apps',
  AI: 'AI & ML',
  IOT: 'IoT & Edge',
  PYTHON: 'Python',
  JAVA: 'Java'
};

const Projects = () => {
  const [filter, setFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  // Compute filtered projects with category & search
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesCategory = filter === 'ALL' || project.category === filter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        project.title.toLowerCase().includes(q) ||
        project.subtitle?.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some(t => t.toLowerCase().includes(q))
      );
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  const getFilterCount = (cat) => {
    if (cat === 'ALL') return projectsData.length;
    return projectsData.filter(p => p.category === cat).length;
  };

  // Currently active project & corresponding dynamic aura
  const activeProject = filteredProjects[activeCardIndex] || filteredProjects[0];
  const activeAura = projectAuraMap[activeProject?.category] || projectAuraMap.WEB;

  // Measure horizontal scroll distance required so all cards scroll across viewport
  useEffect(() => {
    const calculateDistance = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const dist = Math.max(0, trackWidth - viewportWidth + 100);
        setScrollDistance(dist);
      }
    };

    calculateDistance();
    const t1 = setTimeout(calculateDistance, 150);
    const t2 = setTimeout(calculateDistance, 600);

    window.addEventListener('resize', calculateDistance);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', calculateDistance);
    };
  }, [filteredProjects]);

  // Framer Motion useScroll tied to the outer pin container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // 1:1 translation from vertical page scroll to horizontal track movement
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  // Progress line width
  const progressPercent = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Track active project index as user scrolls
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (filteredProjects.length === 0) return;
    const idx = Math.min(
      filteredProjects.length - 1,
      Math.max(0, Math.floor(latest * filteredProjects.length))
    );
    setActiveCardIndex(idx);
  });

  // Filter change resets scroll to the top of the projects section
  const handleFilterChange = (cat) => {
    setFilter(cat);
    if (sectionRef.current) {
      if (window.__lenis) {
        window.__lenis.scrollTo(sectionRef.current, { offset: 0, duration: 0.6 });
      } else {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Smooth step scroll via buttons
  const scrollStep = (direction) => {
    const cardStep = 440;
    const scrollAmount = direction === 'left' ? -cardStep : cardStep;
    if (window.__lenis) {
      window.__lenis.scrollTo(window.scrollY + scrollAmount, { duration: 0.5 });
    } else {
      window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  };

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section 
      ref={sectionRef} 
      className="projects-pin-section" 
      id="projects"
      style={{ height: scrollDistance > 0 ? `calc(100vh + ${scrollDistance}px)` : '100vh' }}
    >
      <div className="projects-sticky-viewport">
        {/* ── Soft Cinematic Ambient Aura (Bespoke Studio Lighting) ── */}
        <div className="projects-reactive-ambient-aura" aria-hidden="true">
          <div 
            className="aura-glow-orb orb-primary"
            style={{
              background: `radial-gradient(circle at 45% 45%, ${activeAura.primary}40 0%, ${activeAura.secondary}20 50%, transparent 75%)`,
            }}
          />
          <div 
            className="aura-glow-orb orb-secondary"
            style={{
              background: `radial-gradient(circle at 70% 50%, ${activeAura.secondary}30 0%, ${activeAura.primary}12 55%, transparent 70%)`,
            }}
          />
        </div>

        {/* ── Sticky Top Bar: Title + Category Pills + Search + Counter ── */}
        <header className="projects-sticky-header">
          <div className="projects-header-left">
            <div className="projects-eyebrow">
              <span className="eyebrow-accent-line" style={{ backgroundColor: activeAura.primary }} />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="projects-sticky-title">
              Engineering <span className="title-gradient">Projects</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="projects-filter-pills">
            {projectFilters.map(f => (
              <button
                key={f}
                className={`filter-pill-btn clickable ${filter === f ? 'active' : ''}`}
                onClick={() => handleFilterChange(f)}
              >
                {filter === f && (
                  <motion.div layoutId="activeFilterTab" className="filter-pill-active-bg" />
                )}
                <span className="pill-label">{filterDisplayNames[f] || f}</span>
                <span className="pill-count">{getFilterCount(f)}</span>
              </button>
            ))}
          </div>

          {/* Right Controls: Search + Counter + Step Arrows */}
          <div className="projects-header-right">
            <div className="projects-quick-search glass-card">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  className="search-clear-btn clickable"
                  onClick={() => setSearchQuery('')}
                  title="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            <div className="projects-active-counter glass-card">
              <span className="curr-count" style={{ color: activeAura.primary }}>{String(activeCardIndex + 1).padStart(2, '0')}</span>
              <span className="sep">/</span>
              <span className="total-count">{String(filteredProjects.length).padStart(2, '0')}</span>
            </div>

            <div className="projects-step-arrows">
              <button
                type="button"
                className="step-arrow-btn prev clickable"
                onClick={() => scrollStep('left')}
                title="Previous project"
                aria-label="Previous project"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                className="step-arrow-btn next clickable"
                onClick={() => scrollStep('right')}
                title="Next project"
                aria-label="Next project"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </header>

        {/* ── Center Stage: Scroll-Driven Horizontal Motion Track ── */}
        <div className="projects-track-stage">
          {filteredProjects.length > 0 ? (
            <motion.div
              ref={trackRef}
              className="projects-horizontal-scroll-track"
              style={{ x }}
            >
              {/* Flagship Showcase Card Slot (LifeLane) */}
              {(!searchQuery && filter === 'ALL') && (
                <div 
                  className={`projects-flagship-card-slot ${activeCardIndex === 0 ? 'slot-focused' : ''}`}
                  style={{ '--slot-glow': 'rgba(16, 185, 129, 0.35)' }}
                >
                  <div className="flagship-mini-banner glass-card">
                    <div className="flagship-banner-header">
                      <div className="flagship-badge">
                        <FaBroadcastTower className="badge-icon" /> ★ FEATURED SYSTEM ARCHITECTURE
                      </div>
                      <span className="flagship-status-live">ESP32 • Real-Time Firebase Sync</span>
                    </div>

                    <div className="flagship-banner-body">
                      <div className="flagship-visual">
                        <img 
                          src="/images/projects/lifelane.jpg" 
                          alt="LifeLane Smart Corridor"
                          className="flagship-img"
                        />
                        <div className="flagship-telemetry-overlay">
                          <div className="flagship-telemetry-tag">
                            <FaBolt className="bolt-icon" /> &lt; 50ms Signal Response
                          </div>
                          <div className="flagship-telemetry-tag">
                            <FaServer className="server-icon" /> Automated Green Wave
                          </div>
                        </div>
                      </div>

                      <div className="flagship-info">
                        <h3 className="flagship-title">{featuredProject.title}</h3>
                        <p className="flagship-subtitle">{featuredProject.subtitle}</p>
                        <p className="flagship-desc">
                          An automated emergency traffic management system engineered with ESP32 microcontrollers 
                          and real-time cloud database synchronization. It dynamically senses approaching ambulances 
                          using GPS coordinates to preemptively clear traffic intersections, drastically cutting emergency response times.
                        </p>

                        <div className="flagship-highlights-bar">
                          <div className="hl-item">
                            <FaBolt className="hl-icon" />
                            <div>
                              <div className="hl-val">Sub-50ms</div>
                              <div className="hl-txt">Signal Delay</div>
                            </div>
                          </div>
                          <div className="hl-item">
                            <FaServer className="hl-icon" />
                            <div>
                              <div className="hl-val">Zero-Queue</div>
                              <div className="hl-txt">Green Corridor</div>
                            </div>
                          </div>
                          <div className="hl-item">
                            <FaShieldAlt className="hl-icon" />
                            <div>
                              <div className="hl-val">Fail-Safe</div>
                              <div className="hl-txt">Auto Recovery</div>
                            </div>
                          </div>
                        </div>

                        <div className="flagship-tech-list">
                          {featuredProject.technologies.slice(0, 5).map(t => (
                            <span key={t} className="flagship-tech-chip">{t}</span>
                          ))}
                        </div>

                        <div className="flagship-actions">
                          <Button 
                            variant="primary" 
                            onClick={() => openModal(featuredProject)} 
                            className="clickable"
                            iconRight={<FaArrowRight />}
                          >
                            Explore Full Case Study
                          </Button>
                          {featuredProject.github && (
                            <a 
                              href={featuredProject.github} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="btn btn-outline clickable"
                            >
                              <FaGithub /> Source Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* All Individual Project Cards */}
              {filteredProjects.map((project, idx) => {
                const isCardActive = idx === activeCardIndex;
                const cardAura = projectAuraMap[project.category] || projectAuraMap.WEB;

                return (
                  <div 
                    key={project.id} 
                    className={`projects-card-slot ${isCardActive ? 'slot-focused' : ''}`}
                    style={{ '--slot-glow': cardAura.glow }}
                  >
                    <div className="card-slot-inner">
                      <ProjectCard
                        project={project}
                        index={idx}
                        onViewDetails={openModal}
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <div className="projects-empty-stage glass-card">
              <div className="empty-icon">🔍</div>
              <h3>No projects found</h3>
              <p>No projects match your filter "{filter}" and search "{searchQuery}".</p>
              <button 
                className="btn btn-outline clickable"
                onClick={() => { setFilter('ALL'); setSearchQuery(''); }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* ── Sticky Bottom Bar: Scroll Hint + Real-time Reactive Progress Bar + Stats ── */}
        <footer className="projects-sticky-footer">
          <div className="projects-scroll-hint">
            <span 
              className="mouse-wheel-icon"
              style={{ borderColor: `${activeAura.primary}66` }}
            >
              <span 
                className="mouse-wheel-dot" 
                style={{ backgroundColor: activeAura.primary }}
              />
            </span>
            <span className="hint-text">Scroll down to explore projects</span>
          </div>

          <div className="projects-progress-track">
            <motion.div 
              className="projects-progress-fill" 
              style={{ 
                width: progressPercent,
                background: `linear-gradient(90deg, ${activeAura.secondary}, ${activeAura.primary})`,
                boxShadow: `0 0 12px ${activeAura.primary}`
              }} 
            />
          </div>

          <div className="projects-category-badge glass-card">
            <span className="cat-dot" style={{ backgroundColor: activeAura.primary }} />
            <span className="cat-label" style={{ color: activeAura.primary }}>{activeAura.tag}</span>
            <span className="dot">•</span>
            <span>{projectsData.length} Total</span>
          </div>
        </footer>
      </div>

      {/* Case Study Storytelling Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default Projects;
