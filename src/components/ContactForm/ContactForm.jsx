// ============================================
// CONTACT FORM COMPONENT
// ============================================

import { useState } from 'react';
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import { submitContactMessage } from '../../firebase/services';
import { isFirebaseConfigured } from '../../firebase/config';
import Button from '../Button/Button';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message should be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!isFirebaseConfigured) {
      setStatus('no-firebase');
      return;
    }

    setStatus('sending');
    try {
      await submitContactMessage(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-group">
        <label htmlFor="contact-name" className="contact-label">Name</label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={`contact-input ${errors.name ? 'contact-input-error' : ''}`}
          autoComplete="name"
        />
        {errors.name && <span className="contact-error">{errors.name}</span>}
      </div>

      <div className="contact-form-group">
        <label htmlFor="contact-email" className="contact-label">Email</label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={`contact-input ${errors.email ? 'contact-input-error' : ''}`}
          autoComplete="email"
        />
        {errors.email && <span className="contact-error">{errors.email}</span>}
      </div>

      <div className="contact-form-group">
        <label htmlFor="contact-message" className="contact-label">Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project or just say hello..."
          className={`contact-input contact-textarea ${errors.message ? 'contact-input-error' : ''}`}
          rows="5"
        />
        {errors.message && <span className="contact-error">{errors.message}</span>}
      </div>

      {status === 'no-firebase' && (
        <div className="contact-notice">
          <FaExclamationTriangle />
          <span>Firebase is not configured. Please set up environment variables to enable message submission.</span>
        </div>
      )}

      {status === 'success' && (
        <div className="contact-success">
          <FaCheck />
          <span>Message sent successfully! I'll get back to you soon.</span>
        </div>
      )}

      {status === 'error' && (
        <div className="contact-error-msg">
          <FaExclamationTriangle />
          <span>Something went wrong. Please try again or email me directly.</span>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'sending'}
        icon={status === 'sending' ? null : <FaPaperPlane />}
        id="contact-submit"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
