// ============================================
// APP — Main application entry
// ============================================

import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';
import Home from './pages/Home';
import AiChatWidget from './components/AiChatWidget/AiChatWidget';
import useHackerMode from './hooks/useHackerMode';
import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/global.css';

// Lazy load admin dashboard
const Admin = lazy(() => import('./pages/Admin/Admin'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useHackerMode(); // Activate global listener

  useEffect(() => {
    // Disable browser's automatic scroll restoration to ensure it always starts at top
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
        <SmoothScroll />
        <ScrollProgress />
        <ParticleBackground />
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
        <div className={`app ${isLoading ? 'app-loading' : ''}`}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                  <Footer />
                  <ScrollToTop />
                </>
              }
            />
            <Route
              path="/admin/*"
              element={
                <Suspense fallback={
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--color-bg-primary)' }}>
                    <div className="loading-spinner" />
                  </div>
                }>
                  <Admin />
                </Suspense>
              }
            />
          </Routes>
          <AiChatWidget />
        </div>
      </Router>
    </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
