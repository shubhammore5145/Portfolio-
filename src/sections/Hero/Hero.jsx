// ============================================
// HERO SECTION — Premium Redesign
// ============================================
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight, FaDownload } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  // Motion values for ultra-smooth parallax without re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const xTrans = useTransform(smoothX, [-10, 10], [10, -10]);
  const yTrans = useTransform(smoothY, [-10, 10], [10, -10]);

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
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero section" id="home">
      {/* ── 3D Fullscreen Background ── */}
      <div className="hero-visual">
        <div className="hero-spline-container">
          <iframe 
            src="https://my.spline.design/week4-7b7d5f3a79e606f3ddbe8f7b937b7935/" 
            frameBorder="0" 
            width="100%" 
            height="100%" 
            title="Spline 3D Character"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* ── Animated Background ── */}
      <motion.div 
        className="hero-bg"
        style={{
          x: xTrans,
          y: yTrans
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
      </motion.div>

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
