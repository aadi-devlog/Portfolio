/**
 * Portable Cross-Platform Static HTTP Server
 * Standard Node.js implementation (zero external dependencies).
 * Works on Windows, macOS, and Linux out of the box.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// 1. Environment & Configuration Resolution
const projectRoot = __dirname;
const envPath = path.join(projectRoot, '.env');

// Simple .env parser if available
if (fs.existsSync(envPath)) {
  try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...vals] = trimmed.split('=');
        if (key && vals.length > 0) {
          process.env[key.trim()] = vals.join('=').trim();
        }
      }
    });
  } catch (err) {
    console.warn('[Startup] Warning: Could not read .env file:', err.message);
  }
}

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '0.0.0.0';

// 2. Startup Asset & Environment Validation
function validateStartupEnvironment() {
  console.log('\n==================================================');
  console.log('      PORTABLE APPLICATION STARTUP VALIDATION     ');
  console.log('==================================================');
  
  const requiredPaths = [
    { relative: 'index.html', label: 'Main HTML Template' },
    { relative: 'script.js', label: 'Application Logic & Data' },
    { relative: 'style.css', label: 'Design System & Styles' },
    { relative: 'assets/dragon.svg', label: 'Carousel Hero Asset' },
    { relative: 'assets/projects', label: 'Projects Asset Directory' }
  ];

  let missingCount = 0;
  requiredPaths.forEach(item => {
    const fullPath = path.join(projectRoot, item.relative);
    if (fs.existsSync(fullPath)) {
      console.log(`  ✓ [OK] ${item.label} -> ./${item.relative}`);
    } else {
      console.error(`  ✗ [MISSING] ${item.label} -> ./${item.relative}`);
      missingCount++;
    }
  });

  if (missingCount > 0) {
    console.warn(`\n[Startup Warning] ${missingCount} required asset(s) are missing.`);
  } else {
    console.log('\n  ✓ All critical project assets verified successfully.');
  }
  console.log('==================================================\n');
}

// 3. MIME Types Definition
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

// 4. Request Handler
const server = http.createServer((req, res) => {
  // Prevent path traversal attacks
  const safeUrl = path.normalize(req.url.split('?')[0]).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(projectRoot, safeUrl === '/' || safeUrl === '\\' ? 'index.html' : safeUrl);

  // Security check to ensure requested path is within project root
  if (!filePath.startsWith(projectRoot)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 Not Found</h1><p>The requested file does not exist.</p>');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Headers preventing stale browser caching across environments
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    const stream = fs.createReadStream(filePath);
    stream.on('error', (streamErr) => {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
      }
      res.end('500 Internal Server Error: ' + streamErr.message);
    });
    stream.pipe(res);
  });
});

// Run startup checks and start listening
validateStartupEnvironment();
server.listen(PORT, HOST, () => {
  console.log(`🚀 Portfolio Server running at: http://localhost:${PORT}`);
  console.log(`📁 Root Directory: ${projectRoot}`);
  console.log('Press Ctrl+C to stop.\n');
});
