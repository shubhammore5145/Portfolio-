<div align="center">
  <img src="https://raw.githubusercontent.com/shubhammore5145/shubhammore5145/main/header.png" alt="Shubham More Portfolio" width="100%" />
  
  <br />
  
  <h1>🚀 Shubham More | Premium Interactive Portfolio</h1>
  <p><strong>A Next-Generation Developer Portfolio featuring AI, IoT integrations, and hidden Easter Eggs!</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  </p>
</div>

---

## 🌟 About The Project

This is not just a standard web portfolio—it's an interactive, high-performance experience built to showcase technical depth, creativity, and modern web development skills. It serves as the digital home for **Shubham More**, an IT student and full-stack developer with a passion for IoT, AI, and scalable systems.

## ✨ "Crazy" Interactive Features

This portfolio is packed with unique interactive features and hidden Easter eggs:

- **🤖 "Ask Shubham AI" Widget**: A floating chatbot built directly into the site. Users can ask the AI questions about my skills, projects, and background.
- **🕶️ Secret "Hacker Mode"**: Type `h a c k` anywhere on the screen to trigger a Matrix-style cyberpunk glitch overlay that takes over the entire website!
- **🎮 Playable Retro Snake Game**: Tucked away inside the interactive Terminal section! Just type `play snake` to start playing.
- **🔴 Live IoT "Room Status" Dashboard**: A real-time hardware simulation dashboard displaying live CPU load, Room Temperature, and an interactive desk lamp you can toggle on/off.
- **🌌 Interactive Particle Engine**: The entire website background features a dynamic neural-network particle system that physically reacts and bounces away from your mouse cursor.
- **📱 3D "Tilt" Workspace Cards**: The Workspace section uses advanced 3D motion tracking so the cards physically tilt as you move your mouse over them.

## 🛠️ Built With

- **Frontend Core**: React.js 18, Vite
- **Styling**: Pure modern CSS (Glassmorphism, Neon glow, CSS Grid/Flexbox)
- **Animations**: Framer Motion (Scroll reveals, 3D tilt, orchestrations)
- **Background Engine**: tsParticles v3
- **Icons**: React Icons (Fa, Si, Vsc)
- **Backend / DB**: Firebase Firestore (for the Contact form & Admin panel)

## 📂 Project Structure

All data is centrally configured in `src/data/portfolioData.js` so it can be updated instantly without touching UI code.

```bash
├── public/                 # Static assets (Resume, Images, Favicon)
├── src/
│   ├── components/         # Reusable UI elements (Navbar, AI Chat, Orbit, Cards)
│   ├── context/            # Global state (Theme Context)
│   ├── data/               # Centralized Data (portfolioData.js)
│   ├── hooks/              # Custom React Hooks (useHackerMode)
│   ├── sections/           # Major page sections (Hero, Projects, Terminal, etc.)
│   ├── styles/             # Global CSS variables and utility classes
│   └── App.jsx             # Main Application routing and wrappers
└── package.json
```

## 🚀 Getting Started

To run this masterpiece on your local machine:

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shubhammore5145/Portfolio-.git
   cd Portfolio-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   *(Note: The project specifically relies on `@tsparticles/react` v3 for the background engine).*

3. **Start the development server**
   ```bash
   npm run dev
   ```

## 📡 Firebase Setup (For Contact Form)

The contact form simulates a successful send by default. To make it actually store messages in a database:

1. Create a Firebase project and enable Firestore.
2. Rename `.env.example` to `.env.local`.
3. Add your Firebase keys into `.env.local`.

## 📱 Mobile Responsiveness

The entire architecture is built "mobile-first". Everything from the interactive Terminal to the 3D Orbit components gracefully degrades and reorganizes on smaller screens.

---
<div align="center">
  <p>Built with ❤️ and an unhealthy amount of coffee by <strong>Shubham More</strong>.</p>
  <a href="https://github.com/shubhammore5145">GitHub</a> • 
  <a href="https://www.linkedin.com/in/shubham-more-50a2a7428">LinkedIn</a>
</div>
