# Palmetto Cards Website

A production-ready static website for **Palmetto Cards** — sports cards & collectibles shop located at 107 W. Main Street, Lexington, SC 29072.

---

## Tech Stack

- HTML5 (semantic)
- Tailwind CSS v3
- Vanilla JavaScript (ES Modules)
- Vite (build tool)
- Node + npm

---

## Local Development

### Prerequisites
- Node.js v18+
- npm v9+

### Install & Run

```bash
git clone https://github.com/YOUR_USERNAME/palmettocards.git
cd palmettocards
npm install
npm run dev
```

Opens at `http://localhost:5173`

---

## Production Build

```bash
npm run build    # outputs to /dist
npm run preview  # preview production build locally
```

---

## Adding Real Images

Place actual images in `/public/assets/images/` using these exact filenames:

| Filename | Usage |
|---|---|
| `logo.png` | Header logo |
| `team-photo.jpg` | About / Breaks section (use Image 1 from photos) |
| `cards-collage-1.jpg` | Hero card collage (Image 2) |
| `cards-collage-2.jpg` | Gallery image (Image 3) |
| `cards-collage-3.jpg` | Gallery image (Image 4) |
| `cards-collage-4.jpg` | Gallery image (Image 5) |
| `cards-baseball.jpg` | Baseball inventory card |
| `cards-football.jpg` | Football inventory card |
| `cards-basketball.jpg` | Basketball inventory card |
| `cards-soccer.jpg` | Soccer inventory card |
| `cards-graded.jpg` | Graded cards inventory card |
| `supplies.jpg` | Supplies inventory card |
| `og-image.jpg` | Open Graph social share image |
| `favicon.ico` | Favicon |

---

## Deployment

### Netlify
1. Connect GitHub repo → Build: `npm run build` → Publish: `dist`

### Vercel
1. Import GitHub repo → auto-detects Vite

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## Replit Import

1. Open [Replit](https://replit.com) → **Create Repl** → **Import from GitHub**
2. Paste repository URL
3. In Shell:
```bash
npm install
npm run dev
```

---

## Project Structure

```
palmettocards/
├── public/
│   ├── index.html          ← Main single-page site
│   ├── favicon.ico
│   └── assets/
│       ├── images/         ← Drop all images here
│       └── fonts/
├── src/
│   ├── css/
│   │   └── styles.css      ← Tailwind + custom styles
│   ├── js/
│   │   └── main.js         ← Navigation, forms, scroll reveal
│   └── components/
│       ├── header.html     ← Header reference component
│       ├── footer.html     ← Footer reference component
│       └── navigation.js   ← Navigation logic module
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md
```

---

## Customization Notes

- **Phone number**: Update `(803) 400-1234` to the real number throughout `index.html`
- **Email**: Update `info@palmettocards.com` to the real email
- **Social links**: Update `href="#"` on footer social icons to real URLs
- **Store hours**: Verify and update in Contact section and footer
- **Colors**: Brand palette is in `tailwind.config.js` under `brand.*`

---

© 2024 Palmetto Cards. All rights reserved.
