// ============================================
// PREMIUM LOADING SCREEN
// ============================================
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('initial'); // 'initial', 'full', 'exit'

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase('full');
    }, 800);

    const timer2 = setTimeout(() => {
      setPhase('exit');
    }, 2000);

    const timer3 = setTimeout(() => {
      onComplete?.();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="loading-content">
            <motion.div 
              className="loading-text-wrapper"
              layout
            >
              <AnimatePresence mode="wait">
                {phase === 'initial' ? (
                  <motion.h1
                    key="sm"
                    className="loading-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: 'blur(5px)' }}
                    transition={{ duration: 0.5 }}
                  >
                    SM
                  </motion.h1>
                ) : (
                  <motion.h1
                    key="full"
                    className="loading-full"
                    initial={{ opacity: 0, filter: 'blur(10px)', letterSpacing: '10px' }}
                    animate={{ opacity: 1, filter: 'blur(0px)', letterSpacing: '4px' }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    SHUBHAM MORE
                  </motion.h1>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="loading-progress-bar"
              initial={{ width: 0 }}
              animate={{ width: phase === 'initial' ? '40%' : '100%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
