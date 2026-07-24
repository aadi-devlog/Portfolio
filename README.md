# ADI. — Creative Developer & Designer Portfolio

A portable, modern 3D carousel interactive portfolio application featuring interactive project case studies, custom design systems, and grounded GenAI project demonstrations.

---

## 1. Static Architecture & Requirements

- **Type**: Pure Static Web Application (Vanilla HTML5, CSS3, ES6 JavaScript)
- **Dependencies**: Zero external build dependencies
- **Web Browser**: Any modern browser (Chrome, Edge, Firefox, Safari)
- **Supported Platforms**: Vercel, GitHub Pages, Netlify, Cloudflare Pages, or any static HTTP server

---

## 2. Quick Start & Local Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aadi-devlog/portfolio.git
   cd portfolio
   ```

2. **Serve locally using Python**:
   ```bash
   python -m http.server 3000
   ```
   Or open `index.html` directly in any web browser.

---

## 3. Production Deployment

This repository is structured as a **pure static site**. No compilation, Node server runtime, or bundling step is required.

- **Vercel**: Push to GitHub and import the repository. Vercel automatically deploys `index.html` from the root directory.
- **GitHub Pages**: Enable Pages on the `main` branch.
- **Netlify**: Set publish directory to `.` (root).

---

## 4. Folder Structure

```
portfolio/
├── assets/
│   ├── dragon.svg                     # 3D Carousel hero SVG illustration
│   └── projects/                      # Project thumbnails & demo videos
│       ├── client-intelligence-platform.png
│       ├── client-intelligence-platform-demo.mp4
│       ├── daily-grind-landing-page.png
│       ├── kinetix-landing-page.png
│       ├── triage-agent-preview.svg
│       └── youtube-homepage-clone.png
├── index.html                         # Core semantic HTML layout
├── package.json                       # Minimal static package manifest
├── README.md                          # Documentation & portability guide
├── script.js                          # Portfolio data & 3D carousel engine
└── style.css                          # Custom CSS design system & overlay styles
```

---

## 5. Portability & Integrity Assurance

- **Zero Absolute Paths**: All asset paths use clean relative URLs (`assets/...`).
- **Machine Independent**: Works identically regardless of folder name, drive letter, username, or operating system.
- **Zero Node Server Lock-in**: Deployable to any static host without server-side function overhead.
