// ============================================
// GITHUB SECTION
// ============================================
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaRegDotCircle } from 'react-icons/fa';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Button from '../../components/Button/Button';
import { personalInfo } from '../../data/portfolioData';
import './GitHub.css';

// Fallback repositories if API fails or rate-limits
const fallbackRepos = [
  { name: 'portfolio-website', description: 'My premium futuristic developer portfolio', stars: 5, forks: 2, language: 'JavaScript' },
  { name: 'ambulance-traffic-system', description: 'Smart Ambulance Traffic Management System using ESP32', stars: 12, forks: 4, language: 'C++' },
  { name: 'ai-career-trackr', description: 'AI-powered career guidance platform', stars: 8, forks: 1, language: 'Python' }
];

const GitHub = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const username = personalInfo.githubUsername;
        if (!username || username === 'your-username') throw new Error("No username configured");
        
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`)
        ]);

        if (profileRes.ok && reposRes.ok) {
          const profileData = await profileRes.json();
          const reposData = await reposRes.json();
          setProfile(profileData);
          setRepos(reposData.length > 0 ? reposData : fallbackRepos);
        } else {
          throw new Error("API Limit reached or user not found");
        }
      } catch (error) {
        console.warn("Using fallback GitHub data:", error.message);
        setProfile({
          login: personalInfo.githubUsername !== 'your-username' ? personalInfo.githubUsername : 'Developer',
          public_repos: '10+',
          followers: '...',
          avatar_url: personalInfo.profileImage
        });
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section className="github section" id="github">
      <div className="container">
        <SectionHeader
          title="Building in Public"
          subtitle="A glimpse into my open-source contributions and code activity"
        />

        <div className="github-content">
          {/* ── Profile Stats ── */}
          <motion.div 
            className="github-profile glass-card neon-border"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            {loading ? (
              <div className="loading-spinner" />
            ) : (
              <>
                <div className="github-avatar-wrapper">
                  <img src={profile?.avatar_url} alt="GitHub Avatar" className="github-avatar" onError={(e) => { e.target.src = '/images/profile.jpg'; }} />
                </div>
                <h3 className="github-username">@{profile?.login}</h3>
                <div className="github-stats">
                  <div className="github-stat">
                    <span className="stat-val">{profile?.public_repos}</span>
                    <span className="stat-label">Repositories</span>
                  </div>
                  <div className="github-stat">
                    <span className="stat-val">{profile?.followers}</span>
                    <span className="stat-label">Followers</span>
                  </div>
                </div>
                <Button 
                  variant="primary" 
                  href={personalInfo.github} 
                  target="_blank"
                  iconRight={<FaGithub />}
                  className="mt-4 w-full clickable"
                >
                  Follow on GitHub
                </Button>
              </>
            )}
          </motion.div>

          {/* ── Featured Repos ── */}
          <div className="github-repos">
            {loading ? (
              <div className="loading-spinner" />
            ) : (
              repos.map((repo, idx) => (
                <motion.a
                  key={repo.name}
                  href={`https://github.com/${personalInfo.githubUsername}/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-card glass-card clickable"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="repo-header">
                    <h4 className="repo-name"><FaRegDotCircle className="repo-icon" /> {repo.name}</h4>
                  </div>
                  <p className="repo-desc">{repo.description || 'No description available'}</p>
                  <div className="repo-meta">
                    <span className="repo-meta-item"><FaStar /> {repo.stargazers_count || repo.stars}</span>
                    <span className="repo-meta-item"><FaCodeBranch /> {repo.forks_count || repo.forks}</span>
                    {repo.language && <span className="repo-lang">{repo.language}</span>}
                  </div>
                </motion.a>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
