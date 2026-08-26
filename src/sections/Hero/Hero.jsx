// ============================================
// HERO SECTION — Premium Redesign
// ============================================
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight, FaDownload, FaTerminal, FaCodeBranch } from 'react-icons/fa';
import { SiFirebase, SiReact, SiPython } from 'react-icons/si';
import Button from '../../components/Button/Button';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Rotate roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Subtle Mouse Parallax
  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20; // -10 to 10
      const y = (clientY / window.innerHeight - 0.5) * 20; // -10 to 10
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero section" id="home">
      {/* ── Animated Background ── */}
      <div 
        className="hero-bg"
        style={{
          transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`
        }}
      >
        <div className="hero-grid-pattern" />
        <div className="hero-glow-blob blob-1" />
        <div className="hero-glow-blob blob-2" />
        <div className="hero-particles">
          {/* Subtle floating particles via CSS */}
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`particle p-${i}`} />
          ))}
        </div>
      </div>

      <div className="container hero-container">
        {/* ── Left Content ── */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="hero-badge">
              <span className="hero-badge-dot" /> AVAILABLE FOR OPPORTUNITIES
            </div>
          </motion.div>

          <motion.h1 
            className="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <br/>
            <span className="gradient-text">{personalInfo.fullName}</span>.
          </motion.h1>

          <motion.div 
            className="hero-roles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="hero-role-text"
              >
                {personalInfo.roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {personalInfo.shortBio}
          </motion.p>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              variant="primary"
              size="lg"
              href="#projects"
              iconRight={<FaArrowRight />}
              className="clickable"
            >
              Explore My Work
            </Button>
            <a 
              href="/Shubham_More_Resume.pdf" 
              className="btn btn-outline neon-border"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero-social-link clickable" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link clickable" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero-social-link clickable" aria-label="Email">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* ── Right Visual Workspace ── */}
        <div className="hero-visual">
          <motion.div
            className="hero-hologram"
            style={{
              transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${mousePosition.y * -0.5}deg)`
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Holographic Window */}
            <div className="hologram-window glass-card neon-border">
              <div className="hologram-header">
                <div className="hologram-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="hologram-title">developer_profile.exe</div>
              </div>
              <div className="hologram-body" style={{ textAlign: 'center', padding: '2rem' }}>
                <h3 style={{ color: 'var(--color-accent-blue)', marginBottom: '1rem' }}>SYSTEM ONLINE</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>Ready to build scalable web applications, deploy AI models, and engineer real-time IoT solutions.</p>
              </div>
            </div>

            {/* Floating Terminal */}
            <motion.div 
              className="floating-terminal glass-card"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaTerminal className="term-icon" />
              <span>&gt; system optimized...</span>
            </motion.div>

            {/* Currently Building Card */}
            <motion.div 
              className="building-card glass-card"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="building-badge">Currently Building</div>
              <h4>Smart Ambulance Traffic Management</h4>
              <p>ESP32 • Firebase • Web • IoT</p>
            </motion.div>

            {/* Tech Nodes */}
            <motion.div className="tech-node node-1" animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}><SiReact color="#61dafb" /></motion.div>
            <motion.div className="tech-node node-2" animate={{ y: [0, 5, 0] }} transition={{ duration: 3.5, repeat: Infinity }}><SiPython color="#3776ab" /></motion.div>
            <motion.div className="tech-node node-3" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}><SiFirebase color="#ffca28" /></motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div 
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="scroll-text">SCROLL TO EXPLORE</span>
        <motion.div 
          className="scroll-arrow"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
