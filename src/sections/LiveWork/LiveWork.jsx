import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { FaCameraRetro, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './LiveWork.css';

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
    <section className="live-work section" id="workspace">
      <div className="container">
        <SectionHeader
          title="My Workspace & Gallery"
          subtitle="Real-time work, IoT setups, Hackathons, and late-night coding"
        />

        <div className="live-work-grid">
          {mediaFiles.map((media, index) => (
            <motion.div
              key={index}
              className="live-card glass-card neon-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
              onClick={() => openLightbox(index)}
              style={{ cursor: 'pointer' }}
            >
              <div className="live-image-container">
                {media.isVideo ? (
                  <video src={media.url} autoPlay loop muted playsInline loading="lazy" />
                ) : (
                  <img src={media.url} alt={`Workspace media ${index + 1}`} loading="lazy" />
                )}
              </div>
            </motion.div>
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
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
