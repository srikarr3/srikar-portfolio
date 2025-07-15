# Srikar Mandava - Portfolio Website

[Live Site](https://srikar-portfolio-4evs.vercel.app/)

A pixel-perfect, responsive portfolio website built with React, Tailwind CSS, and modern web technologies.

## 🚀 Features

- **Pixel-perfect design** inspired by modern portfolio websites
- **Fully responsive** - works perfectly on desktop, tablet, and mobile
- **Smooth animations** using GSAP and Framer Motion
- **Accessibility compliant** with ARIA labels and keyboard navigation
- **Interactive navigation** with smooth scrolling
- **Mobile-first approach** with dedicated mobile menu
- **Modern tech stack** - React, Tailwind CSS, Vite

## 🛠️ Technologies Used

- **Frontend**: React 19, JavaScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm


## 🎮 Playground: 2048 Tech Stack Edition

The Playground section features a custom 2048 game themed around your tech stack!

- **Terminal Boot-Up Splash Screen:** When you visit the Playground, you'll see a simulated terminal booting up, with each tech in your stack "loading" one by one. At the end, a green terminal-style "Start Game" button appears.
- **2048: Tech Stack Edition:**
  - Classic 2048 gameplay, but each tile is a technology from your stack (JavaScript → TypeScript → React.js → Redux → Node.js → MongoDB → Git → GitHub → Vercel).
  - Merge matching tech tiles to build your ultimate stack!
  - Fully responsive, modern UI, and keyboard/touch controls.
  - Visual progression bar shows the merge order for all techs.

## 📱 Sections

1. **Hero** - Eye-catching introduction with animated name
2. **About** - Personal information and background
3. **Stack** - Technologies and tools used
4. **Experience** - Work experience and education
5. **Projects** - Showcase of selected projects
6. **Playground** - 2048: Tech Stack Edition game
7. **Contact** - Contact information and call-to-action

## 🎨 Customization

### Colors
Edit the color palette in `src/App.css` - look for CSS custom properties:
- `--color-primary`: Main accent color (currently green)
- `--color-secondary`: Secondary colors
- Update Tailwind classes throughout components

### Fonts
- Update font families in `src/App.css`
- Modify typography classes in components

### Content
- **Personal Info**: Update in respective component files
- **Projects**: Modify `src/components/Projects.jsx`
- **Experience**: Update `src/components/Experience.jsx`
- **Skills**: Edit `src/components/Stack.jsx`
- **Contact**: Update `src/components/Contact.jsx`

## 📁 Project Structure

```
srikar-portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and static files
│   ├── components/        # React components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Stack.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Navigation.jsx
│   │   ├── MobileMenu.jsx
│   │   └── AccessibilityEnhancements.jsx
│   ├── App.jsx           # Main App component
│   ├── App.css           # Global styles
│   └── main.jsx          # Entry point
├── package.json          # Dependencies and scripts
└── README.md            # This file
```



---

**Built with ❤️ by Srikar Mandava**

