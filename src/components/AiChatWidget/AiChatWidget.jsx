import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { personalInfo, techCategories, whatIDo } from '../../data/portfolioData';
import './AiChatWidget.css';

const AiChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: `Hi! I am an AI clone of ${personalInfo.firstName}. Ask me anything about his skills, projects, or background!`, isBot: true }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput('');

    // Simulate AI thinking delay
    setTimeout(() => {
      const response = generateAIResponse(userMsg.toLowerCase());
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 800);
  };

  const generateAIResponse = (query) => {
    if (query.includes('skill') || query.includes('tech') || query.includes('stack')) {
      const allSkills = techCategories.flatMap(cat => cat.skills.map(s => s.name)).join(', ');
      return `${personalInfo.firstName} is proficient in many technologies, including: ${allSkills}.`;
    }
    if (query.includes('project')) {
      return `He has built over 10+ real-world applications including an AI Career Trackr, Smart Ambulance Traffic System (IoT), and various full-stack web platforms! Check out the Projects section.`;
    }
    if (query.includes('who are you') || query.includes('about')) {
      return personalInfo.aboutText;
    }
    if (query.includes('contact') || query.includes('email') || query.includes('hire')) {
      return `You can reach out to him directly at ${personalInfo.email} or connect via LinkedIn!`;
    }
    if (query.includes('education') || query.includes('study') || query.includes('college')) {
      return `He is currently pursuing a ${personalInfo.education.degree} at ${personalInfo.education.university}.`;
    }
    if (query.includes('hackathon')) {
      return `He loves hackathons! He recently built a real-time IoT traffic management system for ambulances using ESP32.`;
    }
    if (query.includes('hello') || query.includes('hi ') || query.includes('hey')) {
      return `Hello there! How can I help you learn more about ${personalInfo.firstName}?`;
    }
    return `That's a great question! I'm just a simple AI clone so I might not know everything. Feel free to email ${personalInfo.firstName} directly at ${personalInfo.email} for more details.`;
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button 
        className="ai-chat-fab"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <FaRobot className="ai-icon" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="ai-chat-window glass-card neon-border"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="ai-chat-header">
              <FaRobot className="ai-header-icon" />
              <div>
                <h4>Ask {personalInfo.firstName} AI</h4>
                <span className="online-status">● Online</span>
              </div>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>

            <div className="ai-chat-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`chat-message ${msg.isBot ? 'bot-message' : 'user-message'}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form className="ai-chat-input-area" onSubmit={handleSend}>
              <input 
                type="text" 
                placeholder="Ask about my skills..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" disabled={!input.trim()}>
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiChatWidget;
