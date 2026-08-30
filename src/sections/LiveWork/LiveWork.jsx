import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import IoTWidget from '../../components/IoTWidget/IoTWidget';
import './LiveWork.css';

const TiltCard = ({ media, index, onClick }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation (-15 to +15 degrees)
    const rotateYValue = ((mouseX / width) - 0.5) * 30;
    const rotateXValue = ((mouseY / height) - 0.5) * -30;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="live-card glass-card neon-border tilt-card"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 10) * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        z: rotateX || rotateY ? 50 : 0
      }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
    >
      <div className="live-image-container">
        {media.isVideo ? (
          <video src={media.url} autoPlay loop muted playsInline loading="lazy" />
        ) : (
          <img src={media.url} alt={`Workspace media ${index + 1}`} loading="lazy" />
        )}
        {/* Dynamic glare effect based on mouse position */}
        <div 
          className="card-glare" 
          style={{
            background: `radial-gradient(circle at ${rotateY * 2 + 50}% ${rotateX * -2 + 50}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
            opacity: (rotateX !== 0 || rotateY !== 0) ? 1 : 0
          }} 
        />
      </div>
    </motion.div>
  );
};

const LiveWork = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Dynamically import all media files from the directory
  const mediaModules = import.meta.glob('../../realtime work images/*.{jpg,jpeg,png,mp4}', { eager: true });
  const mediaFiles = Object.keys(mediaModules).map((path) => {
    return {
      path,
      url: mediaModules[path].default,
      isVideo: path.endsWith('.mp4')
    };
  });

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const nextMedia = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % mediaFiles.length);
  };
  const prevMedia = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + mediaFiles.length) % mediaFiles.length);
  };

  return (
    <section className="live-work section" id="livework">
      <div className="container">
        <SectionHeader
          title="Real-Time Showcase"
          subtitle="A glimpse into my actual setups, hackathons, and late-night coding"
        />

        <IoTWidget />

        <div className="live-work-masonry">
          {mediaFiles.map((media, index) => (
            <TiltCard 
              key={index} 
              media={media} 
              index={index} 
              onClick={() => openLightbox(index)} 
            />
          ))}
        </div>
      </div>

      {/* Lightbox Slider */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <button className="lightbox-nav left" onClick={prevMedia}>
              <FaChevronLeft />
            </button>
            
            <motion.div
              className="lightbox-content"
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {mediaFiles[selectedIndex].isVideo ? (
                <video src={mediaFiles[selectedIndex].url} autoPlay controls loop playsInline />
              ) : (
                <img src={mediaFiles[selectedIndex].url} alt="Expanded media" />
              )}
            </motion.div>

            <button className="lightbox-nav right" onClick={nextMedia}>
              <FaChevronRight />
            </button>
            
            <div className="lightbox-counter">
              {selectedIndex + 1} / {mediaFiles.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LiveWork;
