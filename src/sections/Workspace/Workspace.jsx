import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './Workspace.css';

const Workspace = () => {
  return (
    <section className="workspace section" id="workspace">
      {/* ── 3D Fullscreen Background ── */}
      <div className="workspace-visual">
        <iframe 
          src="https://my.spline.design/maw6softgreenminimalworkspace-7aca15889fc75c53cc1b7e5aebf4ec30/" 
          frameBorder="0" 
          width="100%" 
          height="100%" 
          title="Minimal Workspace 3D"
          loading="lazy"
        ></iframe>
      </div>

      <div className="container workspace-container">
        {/* Text removed as per user request */}
      </div>
    </section>
  );
};

export default Workspace;
