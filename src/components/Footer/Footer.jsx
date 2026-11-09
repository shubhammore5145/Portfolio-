// ============================================
// FOOTER
// ============================================
import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-gradient-line" />
      
      <div className="container footer-container">
        <div className="footer-top">
          <h2 className="footer-brand">{personalInfo.fullName}</h2>
          <p className="footer-tagline">Building &bull; Learning &bull; Creating</p>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} {personalInfo.fullName}. All rights reserved.
          </p>
          
          <div className="footer-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="clickable" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="clickable" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="clickable" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          
          <p className="footer-made-with">
            Built with <FaHeart className="heart-icon" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
