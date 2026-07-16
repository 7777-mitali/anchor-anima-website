# Anima Gehlot — Portfolio Website
## Tech Stack: React 19 + Vite + Tailwind CSS v4

### 🚀 Run Locally
```bash
npm install
npm run dev
```
Open http://localhost:5173

### 🏗️ Build for Production
```bash
npm run build
```
Output goes to `/dist` folder.

### 🌐 Deploy FREE on Netlify
1. Go to https://netlify.com → Sign up free
2. Click "Add new site" → "Deploy manually"
3. Drag & drop the `/dist` folder
4. Get your live URL instantly! (e.g. anima-gehlot.netlify.app)

### 📁 Project Structure
```
src/
  components/
    Navbar.jsx       ← Top navigation bar
    Hero.jsx         ← Landing hero section
    About.jsx        ← About Me section
    Services.jsx     ← Services cards
    Portfolio.jsx    ← Showreel + brands
    Gallery.jsx      ← Photo gallery grid
    Testimonials.jsx ← Client reviews
    Contact.jsx      ← Contact form + info
    Footer.jsx       ← Site footer
    SocialFloat.jsx  ← Floating social buttons
  hooks/
    useReveal.js     ← Scroll animation hook
  index.css          ← Global styles + Tailwind
  App.jsx            ← Root component
  main.jsx           ← Entry point
```

### 📸 Adding Real Photos
Replace the Unsplash URLs in `Gallery.jsx` and `Hero.jsx` with real image paths or URLs.

### 🎬 Adding Showreel Video
In `Portfolio.jsx`, replace the placeholder div with:
```jsx
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  style={{ width: "100%", height: "100%", border: "none" }}
  allowFullScreen
/>
```
