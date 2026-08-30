import { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import './MagneticButton.css';

const MagneticButton = ({ children, className = '', onClick, href, ...props }) => {
  const ref = useRef(null);
  
  // Track button position and mouse relative position
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth springs for magnetic pull
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(position.x, springConfig);
  const smoothY = useSpring(position.y, springConfig);

  // Parallax for the text inside the button (moves slightly more than the button)
  const textX = useTransform(smoothX, (v) => v * 0.5);
  const textY = useTransform(smoothY, (v) => v * 0.5);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center of button
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic pull strength (max 20px)
    const pullStrength = 0.4;
    
    const x = (clientX - centerX) * pullStrength;
    const y = (clientY - centerY) * pullStrength;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };
  
  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    setIsHovered(true);
  };

  // Sync state to springs
  useEffect(() => {
    smoothX.set(position.x);
    smoothY.set(position.y);
  }, [position, smoothX, smoothY]);

  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={`magnetic-btn ${className}`}
      style={{
        x: smoothX,
        y: smoothY,
        display: 'inline-block',
        position: 'relative'
      }}
      {...props}
    >
      <motion.div 
        style={{ x: textX, y: textY }}
        className="magnetic-content"
      >
        {children}
      </motion.div>
    </Comp>
  );
};

export default MagneticButton;
