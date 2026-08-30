import { useEffect, useState } from 'react';

const useHackerMode = () => {
  const [isHackerMode, setIsHackerMode] = useState(false);
  const secretCode = ['h', 'a', 'c', 'k'];
  const [inputBuffer, setInputBuffer] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const key = e.key.toLowerCase();
      
      setInputBuffer((prev) => {
        const newBuffer = [...prev, key].slice(-secretCode.length);
        
        // Check if buffer matches secret code
        if (newBuffer.join('') === secretCode.join('')) {
          setIsHackerMode(curr => !curr); // Toggle mode
          return []; // Reset buffer
        }
        
        return newBuffer;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isHackerMode) {
      document.body.classList.add('hacker-mode');
    } else {
      document.body.classList.remove('hacker-mode');
    }
  }, [isHackerMode]);

  return isHackerMode;
};

export default useHackerMode;
