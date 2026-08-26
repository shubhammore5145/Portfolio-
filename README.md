# Premium Developer Portfolio

A futuristic, premium, dark-themed personal portfolio website built with React, Vite, and Firebase. 

## Features

- **Futuristic Dark Theme**: Premium styling with glassmorphism, gradient accents, and subtle glow effects.
- **Smooth Animations**: Uses `framer-motion` for scroll reveals, hover effects, and page transitions (respects `prefers-reduced-motion`).
- **Interactive Project Showcase**: Filterable project gallery with detailed modal views.
- **Centralized Data Configuration**: Easily update all content (skills, projects, experience, certificates) from the `src/data/` folder without touching UI components.
- **Firebase Integration**: Working contact form and an optional protected admin dashboard.
- **Fully Responsive**: Optimized for mobile, tablet, and desktop viewing.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Configuration

### Firebase Setup (Optional but recommended)
To enable the contact form and admin dashboard, you need to configure Firebase.

1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable Firestore Database.
3. Enable Authentication (Email/Password).
4. Copy your Firebase config object.
5. Rename `.env.example` to `.env.local` and add your keys:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

*Note: The website will work fine without Firebase configured, but the contact form will show a warning message.*

### Customizing Content

All content is managed in the `src/data/` directory.

- **`personal.js`**: Update your name, bio, social links, resume path, and site meta config.
- **`projects.js`**: Add or remove your projects.
- **`skills.js`**: Update your technical skills.
- **`experience.js`**: Update your professional/academic journey and hackathons.
- **`certificates.js`**: Add your certifications.
- **`achievements.js`**: Update your key metrics/achievements.

### Adding Assets

1. **Profile Image**: Place your image at `public/images/profile.jpg`.
2. **Resume**: Place your PDF at `public/resume/Shubham_More_Resume.pdf`.
3. **Project/Certificate Images**: Add them to `public/images/projects/` and `public/images/certificates/` respectively.

## Deployment

This project is optimized for deployment on platforms like Netlify or Vercel.

### Vercel / Netlify
1. Connect your GitHub repository.
2. Ensure the build command is set to `npm run build` and the output directory is `dist`.
3. Add your Firebase Environment Variables in the platform's settings.

---
Built with ❤️ using React and Vite.
