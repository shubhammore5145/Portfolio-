// ============================================
// CUSTOM CURSOR
// ============================================
import { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const particleId = useRef(0);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add particle
      const id = particleId.current++;
      setParticles(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);

      // Remove particle after animation duration
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== id));
      }, 500); // 500ms matches the CSS animation duration
    };

    const updateHoverState = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('clickable');
        
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {particles.map(p => (
        <div 
          key={p.id}
          className="custom-cursor-particle"
          style={{ left: `${p.x}px`, top: `${p.y}px` }}
        />
      ))}
      <div 
        className={`custom-cursor-dot ${isHovering ? 'hover' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`custom-cursor-ring ${isHovering ? 'hover' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default CustomCursor;
