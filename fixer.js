const fs = require('fs');
const path = require('path');

const root = 'C:\\Users\\Vishal girase\\OneDrive\\Desktop\\Arogya_mind';
const files = [
  'client/src/components/Navbar.jsx',
  'client/src/components/MoodSelector.jsx',
  'client/src/components/Chatbot.jsx',
  'client/src/pages/Landing.jsx',
  'client/src/pages/Login.jsx',
  'client/src/pages/Register.jsx',
  'client/src/pages/Home.jsx',
  'client/src/pages/Analytics.jsx',
  'client/src/App.jsx',
  'client/src/services/api.js',
  'client/src/context/AuthContext.jsx',
  'server/index.js',
  'server/models/User.js',
  'server/models/MoodLog.js',
  'server/routes/authRoutes.js',
  'server/routes/moodRoutes.js',
  'server/routes/chatRoutes.js',
  'server/controllers/authController.js',
  'server/controllers/moodController.js',
  'server/controllers/chatController.js',
  'server/middleware/authMiddleware.js',
  'server/.env'
];

files.forEach(f => {
  const p = path.join(root, f);
  if (fs.existsSync(p)) {
    try {
      const buffer = fs.readFileSync(p);
      let content = '';
      if (buffer.length >= 2 && buffer[0] === 0xff && buffer[1] === 0xfe) {
        content = buffer.toString('utf16le');
      } else {
        content = buffer.toString('utf8');
        content = content.replace(/\0/g, '');
      }
      fs.writeFileSync(p, content, 'utf8');
      console.log('Fixed:', f);
    } catch(err) {
      console.error('Error on', f, err);
    }
  }
});

// Fix CSS
const cssPath = path.join(root, 'client/src/index.css');
if (fs.existsSync(cssPath)) {
  let css = fs.readFileSync(cssPath, 'utf8');
  css = css.replace('.glassmorphism {\n    @apply bg-white/10 backdrop-blur-md border border-white/20;\n  }', '.glassmorphism {\n    background-color: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(12px);\n    -webkit-backdrop-filter: blur(12px);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n  }');
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Fixed: index.css');
}
