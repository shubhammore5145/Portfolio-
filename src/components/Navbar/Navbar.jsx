// ============================================
// NAVBAR COMPONENT — Sticky glassmorphic navigation
// ============================================

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { navLinks, personalInfo } from '../../data/portfolioData';
import { useActiveSection } from '../../hooks/useActiveSection';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    window.open('/Shubham_More_Resume.pdf', '_blank');
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} id="navbar">
      <nav className="navbar-container container" aria-label="Main navigation">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="navbar-logo-text">SHUBHAM</span>
          <span className="navbar-logo-accent">MORE</span>
        </a>

        <ul className={`navbar-links ${isMobileOpen ? 'navbar-links-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`navbar-link ${activeSection === link.id ? 'navbar-link-active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar-mobile-socials">
            <div className="navbar-socials">
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="navbar-social-link" aria-label="GitHub">
                  <FaGithub />
                </a>
              )}
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="navbar-social-link" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              )}
              <button className="navbar-resume-btn" onClick={handleResumeClick} aria-label="Download Resume">
                <FaDownload />
                <span>Resume</span>
              </button>
            </div>
          </li>
        </ul>

        <div className="navbar-actions">
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="navbar-social-link" aria-label="GitHub">
              <FaGithub />
            </a>
          )}
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="navbar-social-link" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          )}
          <button className="navbar-resume-btn" onClick={handleResumeClick} aria-label="Download Resume">
            <FaDownload />
            <span>Resume</span>
          </button>
          <button
            className="navbar-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {isMobileOpen && (
        <div
          className="navbar-overlay"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;
