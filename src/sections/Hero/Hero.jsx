import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight, FaDownload } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20; 
      const y = (clientY / window.innerHeight - 0.5) * 20; 
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
        <div className="hero-glow-blob blob-1" />
        <div className="hero-glow-blob blob-2" />
        <div className="hero-particles">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`particle p-${i}`} />
          ))}
        </div>
      </div>

      <div className="container hero-container-grid">
        {/* ── Left Content: Details ── */}
        <motion.div 
          className="hero-text-content glass-card neon-border"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <span className="hero-badge-dot" /> AVAILABLE FOR OPPORTUNITIES
          </div>

          <h1 className="hero-heading">
            Hi, I'm <br/>
            <span className="gradient-text">{personalInfo.fullName}</span>.
          </h1>

          <div className="hero-roles">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="hero-role-text glitch-text"
                data-text={personalInfo.roles[roleIndex]}
              >
                {personalInfo.roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="hero-description">
            {personalInfo.shortBio}
          </p>

          <div className="hero-cta">
            <MagneticButton className="clickable">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                iconRight={<FaArrowRight />}
              >
                Explore My Work
              </Button>
            </MagneticButton>
            
            <MagneticButton className="clickable">
              <a 
                href="/Shubham_More_Resume.pdf" 
                className="btn btn-outline neon-border"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload />
                Download Resume
              </a>
            </MagneticButton>
          </div>

          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero-social-link clickable" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link clickable" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero-social-link clickable" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* ── Right Content: 3D Spline in a Square ── */}
        <motion.div 
          className="hero-spline-square glass-card neon-border"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe 
            src="https://my.spline.design/week4-7b7d5f3a79e606f3ddbe8f7b937b7935/" 
            frameBorder="0" 
            width="100%" 
            height="100%" 
            title="Spline 3D Character"
            loading="lazy"
          ></iframe>
        </motion.div>
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
