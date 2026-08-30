import { motion } from 'framer-motion';
import { techCategories } from '../../data/portfolioData';
import './TechOrbit.css';

const TechOrbit = () => {
  const allSkills = techCategories.flatMap(category => category.skills);
  
  const innerSkills = allSkills.slice(0, 4);
  const middleSkills = allSkills.slice(4, 10);
  const outerSkills = allSkills.slice(10, 18);

  const renderOrbitNodes = (skills, orbitClass) => {
    return skills.map((skill, index) => {
      const angle = (360 / skills.length) * index;
      return (
        <div 
          key={skill.name} 
          className={`orbit-node-container ${orbitClass}-node-container`}
          style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
        >
          <div className={`orbit-node ${orbitClass}-node`} style={{ color: skill.color }} title={skill.name}>
            <div className="icon-wrapper" style={{ transform: `rotate(-${angle}deg)` }}>
              <skill.icon />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="tech-orbit-container">
      <div className="orbit-center glass-card neon-border">
        <span>Code</span>
      </div>
      
      <div className="orbit-ring orbit-inner">
        {renderOrbitNodes(innerSkills, 'inner')}
      </div>

      <div className="orbit-ring orbit-middle">
        {renderOrbitNodes(middleSkills, 'middle')}
      </div>

      <div className="orbit-ring orbit-outer">
        {renderOrbitNodes(outerSkills, 'outer')}
      </div>
    </div>
  );
};

export default TechOrbit;
