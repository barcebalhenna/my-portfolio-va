# Henna Marie S. Barcebal — Portfolio

A modern, animated single-page portfolio built with **React + Vite**.

## 🚀 Run Locally

```bash
npm install
npm run dev
# Open: http://localhost:5173
```

## 🏗 Production Build

```bash
npm run build
# Output: /dist  (deploy this folder anywhere)
```

## 🌐 Deploy to Vercel

1. Push folder to a GitHub repo
2. Go to vercel.com → New Project → Import repo
3. Framework preset: **Vite** → Deploy ✅
   (`vercel.json` handles SPA routing automatically)

## ✏️ Editing Content

Everything lives in **`src/portfolioData.js`** — update values there and the whole site reflects instantly.

## 📸 Adding Your Assets (TODO)

| File | Where to put it |
|---|---|
| Resume PDF | `public/resume.pdf` |
| Profile photo | `public/assets/profile.jpg` |
| Project screenshots | `public/assets/projects/*.png` |
| OG social image | `public/og-image.png` (1200×630px) |
| LinkedIn URL | `src/portfolioData.js` → `identity.linkedin` |

To use project screenshots, open `src/components/Projects.jsx` and replace the `.project-img-placeholder` block with:
```jsx
<img src={project.image} alt={project.title} className="project-img" />
```
Then add the image path to each project in `portfolioData.js`.

## 🎨 Changing Colors / Fonts

Edit the CSS variables in `src/index.css` under `:root {}` (light mode) and `.dark {}` (dark mode).

## ⚙️ How the Animations Work

- **Scroll-reveal**: `useScrollReveal.js` runs an `IntersectionObserver` that adds `.visible` to every `.reveal` element as it enters the viewport, triggering the CSS fade/slide transition.
- **Stagger**: Wrap children in `.stagger-parent` + give each child `.reveal` → they animate in with increasing `transition-delay`.
- **Marquee**: Skills ticker doubles its list and uses `animation: marquee` (infinite translate) for a seamless loop.
- **Proficiency bars**: Each `.prof-bar` has `--w` set to its percentage. Width transitions from `0` → `var(--w)` when the parent `.reveal` gets `.visible`.
- **Dark mode**: Toggling `.dark` on `<html>` instantly swaps all CSS custom properties — no JS repaints needed.
