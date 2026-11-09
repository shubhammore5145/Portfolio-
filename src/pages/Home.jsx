// ============================================
// HOME PAGE — Clean Authentic Developer Sections
// ============================================
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Skills from '../sections/Skills/Skills';
import Projects from '../sections/Projects/Projects';
import Journey from '../sections/Journey/Journey';
import GitHub from '../sections/GitHub/GitHub';
import Contact from '../sections/Contact/Contact';

const Home = () => {
  return (
    <main className="main-content">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <GitHub />
      <Contact />
    </main>
  );
};

export default Home;
