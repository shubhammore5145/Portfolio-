// ============================================
// ADMIN DASHBOARD
// ============================================

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaEnvelope, FaBriefcase, FaCode, FaTrophy, FaAward } from 'react-icons/fa';
import { auth } from '../../firebase/config';
import { adminLogin, adminLogout, getCollection } from '../../firebase/services';
import Button from '../../components/Button/Button';
import './Admin.css';

const Admin = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('messages');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth?.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        fetchData();
      }
    });
    
    // Fallback if Firebase is not configured or auth fails to initialize
    if (!auth) {
        setLoading(false);
    }

    return () => unsubscribe?.();
  }, []);

  const fetchData = async () => {
    try {
      const msgs = await getCollection('contactMessages');
      setMessages(msgs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      await adminLogin(email, password);
    } catch (error) {
      setLoginError('Invalid credentials or Firebase not configured properly.');
    }
  };

  const handleLogout = async () => {
    await adminLogout();
    navigate('/');
  };

  if (loading) {
    return <div className="admin-loading"><div className="loading-spinner"></div></div>;
  }

  if (!user) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-card glass-card">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="admin-input"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="admin-input"
              />
            </div>
            {loginError && <p className="admin-error">{loginError}</p>}
            <Button type="submit" variant="primary">Login</Button>
            <Button variant="ghost" onClick={() => navigate('/')}>Back to Site</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar glass-card">
        <div className="admin-sidebar-header">
          <h3>Admin Panel</h3>
        </div>
        <nav className="admin-nav">
          <button 
            className={`admin-nav-item ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <FaEnvelope /> Messages
          </button>
          <button 
            className={`admin-nav-item ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <FaBriefcase /> Projects
          </button>
          {/* Add more tabs for Skills, Experience, etc. as needed */}
        </nav>
        <div className="admin-sidebar-footer">
          <Button variant="ghost" onClick={handleLogout} icon={<FaSignOutAlt />}>
            Logout
          </Button>
        </div>
      </aside>
      
      <main className="admin-content">
        <header className="admin-header glass-card">
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</h2>
        </header>
        
        <div className="admin-content-area">
          {activeTab === 'messages' && (
            <div className="admin-messages">
              {messages.length === 0 ? (
                <p>No messages found.</p>
              ) : (
                messages.map(msg => (
                  <div key={msg.id} className="admin-message-card glass-card">
                    <h4>{msg.name} ({msg.email})</h4>
                    <p className="msg-date">{msg.createdAt?.toDate().toLocaleDateString()}</p>
                    <p className="msg-content">{msg.message}</p>
                  </div>
                ))
              )}
            </div>
          )}
          
          {activeTab === 'projects' && (
            <div className="admin-projects-placeholder">
              <p>Project management CRUD interface would go here.</p>
              <Button variant="outline">Add New Project</Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
