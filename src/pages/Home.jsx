// ============================================
// HOME PAGE
// ============================================
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import WhatIDo from '../sections/WhatIDo/WhatIDo';
import Skills from '../sections/Skills/Skills';
import Projects from '../sections/Projects/Projects';
import LiveWork from '../sections/LiveWork/LiveWork';
import Journey from '../sections/Journey/Journey';
import Certificates from '../sections/Certificates/Certificates';
import Achievements from '../sections/Achievements/Achievements';
import GitHub from '../sections/GitHub/GitHub';
import Contact from '../sections/Contact/Contact';

const Home = () => {
  return (
    <main className="main-content">
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Projects />
      <LiveWork />
      <Journey />
      <Certificates />
      <Achievements />
      <GitHub />
      <Contact />
    </main>
  );
};

export default Home;
