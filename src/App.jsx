// ============================================
// APP — Main application entry
// ============================================

import { useState, useCallback, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Home from './pages/Home';
import './styles/global.css';

// Lazy load admin dashboard
const Admin = lazy(() => import('./pages/Admin/Admin'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <Router>
      <ScrollProgress />
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
      </div>
    </Router>
  );
}

export default App;
