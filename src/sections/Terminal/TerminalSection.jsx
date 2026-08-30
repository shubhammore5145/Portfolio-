import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { techCategories } from '../../data/portfolioData';
import SnakeGame from '../../components/SnakeGame/SnakeGame';
import './TerminalSection.css';

const TerminalSection = () => {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Shubham OS v1.0.0' },
    { type: 'output', text: 'Type "help" for a list of available commands.' }
  ]);
  const [input, setInput] = useState('');
  const [isPlayingGame, setIsPlayingGame] = useState(false);
  const terminalEndRef = useRef(null);

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    const newHistory = [...history, { type: 'input', text: `guest@shubham-os:~$ ${cmd}` }];

    switch (trimmedCmd) {
      case 'help':
        newHistory.push({ type: 'output', text: 'Available commands:' });
        newHistory.push({ type: 'output', text: '  about      - Learn more about me' });
        newHistory.push({ type: 'output', text: '  skills     - List my technical skills' });
        newHistory.push({ type: 'output', text: '  contact    - How to reach me' });
        newHistory.push({ type: 'output', text: '  play snake - 🎮 Play retro snake game' });
        newHistory.push({ type: 'output', text: '  clear      - Clear terminal output' });
        newHistory.push({ type: 'output', text: '  sudo       - ???' });
        break;
      case 'about':
        newHistory.push({ type: 'output', text: 'I am Shubham More, a passionate developer creating elegant solutions and crafting robust applications. Driven by curiosity and coffee.' });
        break;
      case 'skills':
        const skillsList = techCategories.flatMap(c => c.skills).map(s => s.name).join(', ');
        newHistory.push({ type: 'output', text: `My skills include: ${skillsList}` });
        break;
      case 'contact':
        newHistory.push({ type: 'output', text: 'Email: yourmail@example.com (update in real life!)' });
        newHistory.push({ type: 'output', text: 'GitHub: /snapin2006' });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'play snake':
        setIsPlayingGame(true);
        newHistory.push({ type: 'output', text: 'Initializing snake game subsystem...' });
        break;
      case 'sudo':
        newHistory.push({ type: 'error', text: 'Permission denied: User "guest" is not in the sudoers file. This incident will be reported.' });
        break;
      default:
        newHistory.push({ type: 'error', text: `Command not found: ${trimmedCmd}. Type "help" for available commands.` });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <section className="terminal-section section" id="terminal">
      <div className="container">
        <SectionHeader
          title="Interactive Terminal"
          subtitle="Prefer the command line? Try it out!"
        />
        
        <motion.div 
          className="terminal-window glass-card neon-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-btn close"></span>
              <span className="terminal-btn minimize"></span>
              <span className="terminal-btn maximize"></span>
            </div>
            <div className="terminal-title">guest@shubham-os:~</div>
          </div>
          
          <div className="terminal-body" onClick={() => document.getElementById('terminal-input')?.focus()}>
          
            {history.map((line, idx) => (
              <div key={idx} className={`terminal-line ${line.type === 'error' ? 'terminal-error' : ''} ${line.type === 'input' ? 'terminal-input-echo' : ''}`}>
                {line.text}
              </div>
            ))}
            
            {isPlayingGame && (
              <SnakeGame onGameOver={(score) => {
                setIsPlayingGame(false);
                setHistory(prev => [...prev, { type: 'output', text: `Game exited. Final Score: ${score}` }]);
                setTimeout(() => document.getElementById('terminal-input')?.focus(), 100);
              }} />
            )}
            
            {!isPlayingGame && (
              <div className="terminal-input-line">
                <span className="terminal-prompt">guest@shubham-os:~$</span>
                <input 
                  id="terminal-input"
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="terminal-input"
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
            )}
            <div ref={terminalEndRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
