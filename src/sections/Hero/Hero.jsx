// ============================================
// HERO SECTION — Cinematic Scroll Image Sequence (Minimal)
// ============================================
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

const TOTAL_FRAMES = 240;

const getFramePath = (index) => {
  const frameNum = String(index + 1).padStart(3, '0');
  return `/hero-frames/ezgif-frame-${frameNum}.jpg`;
};

const Hero = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef(0);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotating roles (relaxed, readable timing)
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Frame rendering on canvas with aspect-ratio cover
  const renderFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Find the best available frame (exact or closest loaded)
    let img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = imagesRef.current[frameIdx - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIdx + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const targetW = Math.round(rect.width * dpr);
    const targetH = Math.round(rect.height * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    // Object-fit: cover logic
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = w / h;
    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawW = w;
      drawH = w / imgRatio;
      drawX = 0;
      drawY = (h - drawH) / 2;
    } else {
      drawH = h;
      drawW = h * imgRatio;
      drawX = (w - drawW) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    ctx.restore();
  }, []);

  // Progressive preloading of frames
  useEffect(() => {
    let isCancelled = false;

    // 1. Immediately load frame 0
    const firstImg = new Image();
    firstImg.src = getFramePath(0);
    firstImg.onload = () => {
      if (isCancelled) return;
      imagesRef.current[0] = firstImg;
      renderFrame(0);
    };

    // 2. Immediately preload anchor frames (every 4th frame) so scrubbing is never empty
    for (let i = 0; i < TOTAL_FRAMES; i += 4) {
      if (i === 0) continue;
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        if (isCancelled) return;
        imagesRef.current[i] = img;
        if (currentFrameRef.current === i) {
          renderFrame(i);
        }
      };
    }

    // 3. Background load remaining frames in batches
    const remainingIndices = [];
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      if (i % 4 !== 0) remainingIndices.push(i);
    }

    let currentIndex = 0;
    const batchSize = 12;

    const loadNextBatch = () => {
      if (isCancelled || currentIndex >= remainingIndices.length) return;

      const batch = remainingIndices.slice(currentIndex, currentIndex + batchSize);
      currentIndex += batchSize;

      let pending = batch.length;
      batch.forEach((idx) => {
        const img = new Image();
        img.src = getFramePath(idx);
        const onDone = () => {
          if (isCancelled) return;
          imagesRef.current[idx] = img;
          if (currentFrameRef.current === idx) {
            renderFrame(idx);
          }
          pending--;
          if (pending === 0) {
            loadNextBatch();
          }
        };
        img.onload = onDone;
        img.onerror = onDone;
      });
    };

    // Small delay to let initial frame render first
    const timer = setTimeout(loadNextBatch, 100);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [renderFrame]);

  // Handle scroll progress — direct & responsive
  useEffect(() => {
    let ticking = false;

    const updateFrame = () => {
      if (!sectionRef.current) {
        ticking = false;
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) {
        ticking = false;
        return;
      }

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setScrollProgress(progress);

      const frameIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
      );

      if (frameIdx !== currentFrameRef.current) {
        currentFrameRef.current = frameIdx;
        renderFrame(frameIdx);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateFrame);
        ticking = true;
      }
    };

    // Window scroll and resize
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Connect with Lenis smooth scroll instance
    let lenisUnbind = null;
    const attachLenis = () => {
      if (window.__lenis && typeof window.__lenis.on === 'function') {
        window.__lenis.on('scroll', handleScroll);
        lenisUnbind = () => window.__lenis?.off('scroll', handleScroll);
        return true;
      }
      return false;
    };

    if (!attachLenis()) {
      const interval = setInterval(() => {
        if (attachLenis()) {
          clearInterval(interval);
        }
      }, 50);
      setTimeout(() => clearInterval(interval), 3000);
    }

    // Initial render
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (lenisUnbind) lenisUnbind();
    };
  }, [renderFrame]);

  // Content fades out smoothly as user scrolls into the sequence
  const contentOpacity = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.05) / 0.18));
  const contentY = scrollProgress * -60;

  return (
    <section className="hero-scroll-wrapper" id="home" ref={sectionRef}>
      {/* ── Sticky Viewport Container ── */}
      <div className="hero-sticky-container">
        
        {/* Canvas Background Sequence */}
        <canvas ref={canvasRef} className="hero-canvas" />

        {/* Cinematic Vignette & Atmospheric Mask */}
        <div className="hero-canvas-overlay" />
        
        {/* Background Ambient Glow Accents */}
        <div className="hero-ambient-lights" aria-hidden="true">
          <div className="hero-glow-crimson" />
          <div className="hero-glow-purple" />
          <div className="hero-grid-subtle" />
        </div>

        {/* ── Minimal Content Layer ── */}
        <div 
          className="hero-content-stage"
          style={{
            pointerEvents: contentOpacity > 0.05 ? 'auto' : 'none',
          }}
        >
          <div 
            className="hero-content-inner"
            style={{
              opacity: contentOpacity,
              transform: `translateY(${contentY}px)`,
            }}
          >
            {/* Available badge */}
            <div className="hero-status-badge">
              <span className="status-dot-pulse" />
              <span>Available for Opportunities</span>
            </div>

            {/* Name */}
            <h1 className="hero-name">
              Shubham <span className="hero-name-accent">More</span>
            </h1>

            {/* Role rotator */}
            <div className="hero-role-line">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="hero-role-text"
                >
                  {personalInfo.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-row">
              <MagneticButton className="clickable">
                <Button
                  variant="primary"
                  size="lg"
                  href="#projects"
                  iconRight={<FaArrowRight />}
                >
                  View Projects
                </Button>
              </MagneticButton>
              
              <MagneticButton className="clickable">
                <a 
                  href="/Shubham_More_Resume.pdf" 
                  className="btn btn-outline hero-resume-btn clickable"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload />
                  Resume
                </a>
              </MagneticButton>
            </div>

            {/* Scroll prompt */}
            <div className="hero-scroll-prompt">
              <div className="scroll-mouse-icon">
                <span className="scroll-wheel-dot" />
              </div>
              <span className="scroll-prompt-text">Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
