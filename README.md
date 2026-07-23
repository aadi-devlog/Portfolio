# ADI. — Creative Developer & Designer Portfolio

A portable, modern 3D carousel interactive portfolio application featuring interactive project case studies, custom design systems, and grounded GenAI project demonstrations.

---

## 1. Requirements

- **Node.js**: `v14.0.0` or higher (recommended: `v18+` or `v20+`)
- **Web Browser**: Any modern browser (Chrome, Edge, Firefox, Safari)
- **Operating System**: Windows, macOS, or Linux

---

## 2. Installation & Quick Start

This project is **100% portable** with zero external npm dependencies required for core execution.

1. **Clone or Download** the repository to any folder on your machine:
   ```bash
   git clone https://github.com/aadi-devlog/portfolio.git
   cd portfolio
   ```

2. **Run Locally**:
   ```bash
   npm run dev
   # or
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 3. Environment Variables

You can configure port and environment settings by creating a `.env` file in the root directory (copied from `.env.example`).

```env
# Application Server Configuration
PORT=3000
HOST=localhost

# Contact & Social Links
CONTACT_EMAIL=as59897612@gmail.com
GITHUB_URL=https://github.com/aadi-devlog
LINKEDIN_URL=https://www.linkedin.com/in/aditya-singh-4364663a6/
```

---

## 4. Running Locally

You can launch the application using any of the following standard methods:

### Option A: Standard Node.js Server (Recommended)
```bash
npm run dev
```

### Option B: Python Simple HTTP Server
```bash
python -m http.server 3000
```

### Option C: Any Static Web Server / Static Host
Deploy or open `index.html` directly using standard web hosting (Vercel, Netlify, GitHub Pages).

---

## 5. Production Build & Deployment

Since this project uses Vanilla HTML5, CSS3, and ES6 JavaScript:
- **No compilation or bundling step is required.**
- Deploy the entire repository directory directly to any static web hosting provider (Vercel, Netlify, Cloudflare Pages, GitHub Pages) or run via `server.js` on Node.js hosting (Railway, Render, AWS EC2, DigitalOcean).

---

## 6. Folder Structure

```
portfolio/
├── assets/
│   ├── dragon.png                     # 3D Carousel backdrop element
│   └── projects/                      # Project thumbnails & demo videos
│       ├── client-intelligence-platform.png
│       ├── client-intelligence-platform-demo.mp4
│       ├── daily-grind-landing-page.png
│       ├── kinetix-landing-page.png
│       ├── triage-agent-preview.svg
│       └── youtube-homepage-clone.png
├── .env.example                       # Environment variables template
├── .gitignore                         # Standard git ignore list
├── index.html                         # Core semantic HTML layout
├── package.json                       # Project configuration & npm scripts
├── README.md                          # Documentation & portability guide
├── script.js                          # Portfolio data & 3D carousel engine
├── server.js                          # Zero-dependency portable HTTP server
└── style.css                          # Custom CSS design system & overlay styles
```

---

## 7. Troubleshooting & Common Issues

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **Port 3000 in use** | Another process is using port 3000 | Set `PORT=3001` in your `.env` file or run `PORT=3001 npm start` |
| **Stale CSS/JS in browser** | Browser cached old asset versions | Perform a hard refresh (`Ctrl + Shift + R` or `Cmd + Shift + R`) |
| **Video fails to play** | Missing video codec support | Ensure video is encoded as H.264 / AAC MP4 |

---

## 8. Deployment Options

- **Vercel**: Push to GitHub and import repository. Root directory is static.
- **Netlify**: Set publish directory to `.` (root).
- **GitHub Pages**: Enable Pages on `main` branch.
- **Docker / Node.js**: Run `node server.js` inside container.

---

## 9. Supported Operating Systems

- **Windows**: Windows 10, 11 (PowerShell, Command Prompt, WSL)
- **macOS**: macOS Catalina, Big Sur, Monterey, Ventura, Sonoma (Intel & Apple Silicon)
- **Linux**: Ubuntu, Debian, Fedora, Arch Linux, Alpine

---

## 10. Portability Assurance

- **Zero Absolute Paths**: All asset paths and code references use relative paths (`./assets/...`).
- **Machine Independent**: Works identically regardless of folder name, username, drive letter, or operating system.
- **Zero Heavy Build Chain Required**: Runs out of the box on any fresh clone with `npm start` or `python -m http.server`.
