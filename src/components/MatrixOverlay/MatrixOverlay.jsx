import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MatrixOverlay.css';

const MatrixOverlay = () => {
  const [isActive, setIsActive] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    let keyBuffer = '';
    const secretCode = 'matrix';

    const handleKeyDown = (e) => {
      // Allow escape to close it
      if (isActive && e.key === 'Escape') {
        setIsActive(false);
        return;
      }

      keyBuffer += e.key.toLowerCase();
      if (keyBuffer.length > secretCode.length) {
        keyBuffer = keyBuffer.slice(1);
      }

      if (keyBuffer === secretCode) {
        setIsActive(true);
        keyBuffer = '';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive]);

  useEffect(() => {
    if (!isActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div 
          className="matrix-overlay-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <canvas ref={canvasRef} className="matrix-canvas" />
          <div className="matrix-close-hint">
            Press <span>ESC</span> to exit the Matrix
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MatrixOverlay;
