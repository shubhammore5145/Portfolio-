// ============================================
// CONTACT SECTION
// ============================================
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../../firebase/config';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Button from '../../components/Button/Button';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in all fields.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    
    if (!isFirebaseConfigured) {
      // Simulate successful network request
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        timestamp: serverTimestamp(),
        read: false
      });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error("Error sending message:", err);
      setErrorMsg('Failed to send message. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <SectionHeader
          title="Have an Idea? Let's Build It."
          subtitle="Whether it's a project, collaboration or opportunity, I'd love to hear from you."
        />

        <div className="contact-content">
          {/* ── Left: Contact Info ── */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-cards">
              <a href={`mailto:${personalInfo.email}`} className="contact-card glass-card neon-border clickable">
                <div className="contact-icon"><FaEnvelope /></div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>{personalInfo.email}</p>
                </div>
              </a>
              
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card glass-card neon-border clickable">
                <div className="contact-icon"><FaLinkedinIn /></div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <p>Connect professionally</p>
                </div>
              </a>
              
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-card glass-card neon-border clickable">
                <div className="contact-icon"><FaGithub /></div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <p>Explore my code</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* ── Right: Contact Form ── */}
          <motion.div 
            className="contact-form-wrapper glass-card neon-border"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                  disabled={status === 'submitting'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-input"
                  disabled={status === 'submitting'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="form-input form-textarea"
                  rows="5"
                  disabled={status === 'submitting'}
                />
              </div>

              {status === 'error' && (
                <div className="form-msg error">
                  <FaExclamationCircle /> {errorMsg}
                </div>
              )}

              {status === 'success' && (
                <div className="form-msg success">
                  <FaCheckCircle /> Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full mt-4 clickable"
                disabled={status === 'submitting'}
                iconRight={status === 'submitting' ? null : <FaPaperPlane />}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
