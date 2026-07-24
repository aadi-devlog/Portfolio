/* ===== PROJECT DATA ===== */
// Add, remove, or reorder portfolio projects here. Each object creates one carousel card and one blog detail page.
// For a new project, add a screenshot to assets/projects and use that relative path in the image field.
const projects = [
  {
    slug: 'youtube-homepage-clone',
    title: 'YouTube Homepage Clone',
    category: 'Frontend Clone',
    description: 'A static YouTube-style homepage built with HTML and CSS.',
    image: 'assets/projects/youtube-homepage-clone.png',
    fullDescription: 'This project recreates the structure and visual rhythm of the YouTube homepage using only HTML and CSS. It focuses on building a large content-driven layout, handling repeated video cards, and organizing a familiar interface into reusable sections.',
    blogIntro: 'The YouTube homepage clone was built as a focused layout practice project. The goal was not to recreate every interactive feature, but to understand how a real content-heavy product is assembled: header, sidebar, video grid, thumbnails, channel metadata, spacing, alignment, and responsive structure.',
    highlights: [
      'Built a desktop-first video browsing layout with header, sidebar, and repeated video cards.',
      'Practiced separating page areas into focused CSS files for header, sidebar, video grid, and global styles.',
      'Used local assets for thumbnails, channel images, and interface icons.',
      'Improved understanding of spacing, alignment, typography, and repeated content blocks.'
    ],
    learnings: [
      'Large UI layouts become easier when the page is broken into clear structural regions.',
      'Repeated card components need consistent spacing and predictable image sizing.',
      'DOM hierarchy strongly affects how cleanly CSS can target each section.'
    ],
    limitations: [
      'No JavaScript interaction is included.',
      'The clone is focused on layout and styling rather than full product behavior.',
      'Interactive features such as real search, subscriptions, and playback are outside the project scope.'
    ],
    techStack: ['HTML5', 'CSS3', 'Responsive Layout', 'Static Assets'],
    role: 'Frontend Developer',
    year: '2026',
    projectPath: './projects/youtube-homepage-clone'
  },
  {
    slug: 'kinetix-landing-page',
    title: 'Kinetix Landing Page',
    category: 'Fitness UI',
    description: 'A bold SaaS-style fitness app landing page.',
    image: 'assets/projects/kinetix-landing-page.png',
    fullDescription: 'Kinetix is a modern fitness app landing page designed around bold typography, dark visual styling, and conversion-focused page sections. It presents a high-energy product experience with a strong hero, feature areas, and responsive layout thinking.',
    blogIntro: 'Kinetix explores how a landing page can make a product feel powerful before the user reads every detail. The page combines a clear call to action, fitness imagery, dark theme contrast, and structured sections that guide visitors through the product story.',
    highlights: [
      'Designed a SaaS-inspired landing page for a fitness product.',
      'Created a hero section with clear CTA and strong visual hierarchy.',
      'Practiced grid-based layout, alternating content blocks, and feature presentation.',
      'Focused on bold typography, dark theme design, and mobile responsiveness.'
    ],
    learnings: [
      'A landing page needs visual hierarchy before decoration.',
      'Strong CTAs work best when spacing and contrast make the action obvious.',
      'Responsive landing pages need sections that stack cleanly without losing energy.'
    ],
    limitations: [
      'No backend or real app functionality is included.',
      'The project is a static UI prototype.',
      'Forms and product actions are presentational.'
    ],
    techStack: ['HTML5', 'CSS3', 'CSS Grid', 'Flexbox', 'Responsive Design'],
    role: 'UI Developer',
    year: '2026',
    projectPath: './projects/kinetix-landing-page'
  },
  {
    slug: 'daily-grind-landing-page',
    title: 'Daily Grind Landing Page',
    category: 'Landing Page UI Design',
    description: 'A warm responsive cafe landing page experience.',
    image: 'assets/projects/daily-grind-landing-page.png',
    fullDescription: 'Daily Grind is a responsive cafe landing page built to feel warm, inviting, and polished. It uses real cafe imagery, structured content sections, and careful typography to create a brand-like experience rather than a plain static page.',
    blogIntro: 'Daily Grind is a UI/UX-focused frontend project about atmosphere. The project uses HTML and CSS to translate the feeling of a cafe into a landing page: hero imagery, menu-style sections, brand visuals, contact flow, and readable content blocks.',
    highlights: [
      'Built a responsive cafe landing page with hero, about, vibe, and contact sections.',
      'Used real imagery to create a stronger brand feeling.',
      'Practiced component-based CSS organization across multiple section files.',
      'Focused on warm color choices, readable content hierarchy, and mobile-first adaptation.'
    ],
    learnings: [
      'Images and typography do most of the emotional work in lifestyle pages.',
      'Section spacing matters when a page needs to feel calm and premium.',
      'Responsive design should preserve the brand mood, not only make elements fit.'
    ],
    limitations: [
      'The site does not include JavaScript functionality.',
      'No booking backend or real form submission is included.',
      'It is a polished frontend concept rather than a full cafe management app.'
    ],
    techStack: ['HTML5', 'CSS3', 'Responsive Design', 'Visual Design'],
    role: 'Frontend Designer',
    year: '2026',
    projectPath: './projects/daily-grind-landing-page'
  },
  {
    slug: 'triage-agent',
    title: 'AI Support Triage System',
    category: 'AI Workflow',
    description: 'A deterministic support-ticket classification pipeline.',
    image: 'assets/projects/triage-agent-preview.svg',
    fullDescription: 'This project is a hybrid AI-based support ticket triage system that classifies, prioritizes, and responds to user queries using retrieval-based logic and rule-based decision making. It was built as a HackerRank Hackathon project with reliability and explainability as the central goal.',
    blogIntro: 'The triage agent is different from the frontend projects: it is a backend-style automation pipeline. Instead of generating random answers, it follows a grounded flow: classify the ticket, detect risk, retrieve the most relevant corpus response, and write the result to an output CSV.',
    highlights: [
      'Classifies support tickets into categories such as billing, account, and technical.',
      'Detects high-priority issues including fraud, hacked accounts, and urgent cases.',
      'Retrieves responses from a small knowledge base using keyword matching.',
      'Avoids hallucination by using deterministic retrieval instead of random answer generation.'
    ],
    learnings: [
      'Explainable systems are easier to debug and trust than opaque random generation.',
      'Risk detection should be separated from basic category classification.',
      'Grounded retrieval keeps support responses consistent and auditable.'
    ],
    limitations: [
      'The corpus is small and retrieval is basic.',
      'No semantic embeddings or trained ML model are currently used.',
      'The project does not yet include a web interface.'
    ],
    techStack: ['Python', 'CSV Pipeline', 'Rule-Based Classification', 'Keyword Retrieval'],
    role: 'AI Workflow Developer',
    year: '2026',
    projectPath: './projects/triage-agent'
  },
  {
    slug: 'client-intelligence-platform',
    title: 'Client Intelligence Platform',
    category: 'GenAI Architecture',
    description: 'Evidence-grounded, human-reviewed AI analysis for conversation PDFs.',
    image: 'assets/projects/client-intelligence-platform.png',
    fullDescription: 'The Client Intelligence Platform is a web application that helps coaches, advisors, and professional services teams turn their client conversation transcripts into clear, organized, and actionable insights using AI. Instead of manually reviewing lengthy coaching session PDFs, a user simply uploads the transcript and the platform reads through the conversation, identifies what the client said, what goals or concerns were mentioned, and what commitments were made — all organized into a structured report. To make sure the AI does not fabricate or misrepresent anything, every insight the system surfaces is automatically cross-checked against the original conversation. If the AI cannot find evidence for a claim in the transcript, the platform flags it and routes it for human review, rather than presenting it as fact. This means the people using the platform can trust what they are reading. The platform also includes a reviewer workspace where team members can approve, edit, or reject each AI-generated insight before the report is finalized, keeping a human in control at every step.',
    blogIntro: 'This project originated as part of the <strong>FUME GenAI Product Intern recruitment assignment</strong>, a challenge that asked candidates to design and build a Client Intelligence Platform capable of transforming coach-client conversations into structured, reliable insights. The assignment was not simply asking for an AI application. It required demonstrating real product thinking: how do you make AI output trustworthy enough to be used in a professional setting where a wrong interpretation of a client conversation could lead to a real mistake?<br/><br/>That question became the foundation of every design decision. The initial goal was to prove that AI could reliably analyze a coaching transcript and surface meaningful insights without inventing information that was not actually said.<br/><br/>During development, the project grew beyond the original assignment scope. Improvements were made to the validation layer, the review workflow was redesigned to make it easier for non-technical users to interact with, the AI analysis was made more consistent across different transcript formats, and additional safeguards were added to catch contradictions in the AI output before a report reached a reviewer.<br/><br/>The result is a platform that reads less like a hackathon submission and more like an early-stage product built with the kind of care you would expect from a professional engineering team.',
    highlights: [
      'Engineered browser-side PDF text extraction using pdfjs-dist, preserving document privacy before transmission.',
      'Implemented schema-validated LLM analysis via Vercel AI SDK generateObject (Zod + TypeScript) with a 2-retry self-repair loop.',
      'Built a deterministic citation verification engine that cross-checks cited message IDs against parsed transcripts and automatically downgrades unverifiable claims.',
      'Created cross-field risk detection rules (e.g. flagging contradiction between high risk flags and positive summary text).',
      'Designed a human review workspace with per-field Approve / Edit / Reject controls, immutable audit trails, and risk-gated report status rollups.',
      'Implemented automatic LLM provider detection supporting OpenAI (gpt-4o-mini default), Gemini, Anthropic, Groq, OpenRouter, and Ollama without code changes.'
    ],
    learnings: [
      'Deterministic evidence grounding is far more reliable for corporate risk prevention than relying solely on raw LLM prompts.',
      'Appending Zod validation errors to retry prompts enables LLMs to self-correct schema violations within 1-2 attempts.',
      'Separating raw AI extraction from post-generation confidence calibration ensures auditable and predictable risk scoring.',
      'Human-in-the-loop workflows benefit immensely from cross-field sanity checks that highlight contradictions before approval.'
    ],
    limitations: [
      'Transcript parsing currently expects speaker-labeled line formats (Speaker: text).',
      'Long transcripts operating beyond single-call context window fit require full chunking and merge reconciliation passes.',
      'PII anonymization layer sits as a production prerequisite before multi-tenant enterprise deployment.',
      'The platform depends on third-party AI model APIs. Free-tier keys carry daily or rate limits, meaning analysis requests may temporarily fail when a quota is exhausted. This is an infrastructure constraint, not an architectural one — in production, it would be addressed through paid API plans, usage monitoring, automatic fallback to an alternative model provider, or rotating key management.'
    ],
    techStack: ['React 19', 'TypeScript', 'Vite', 'TanStack Start', 'Tailwind CSS', 'Zustand', 'Zod', 'Vercel AI SDK', 'Groq', 'Gemini'],
    role: 'GenAI Architect & Full Stack Developer',
    year: '2026',
    demoVideo: 'assets/projects/client-intelligence-platform-demo.mp4',
    projectPath: './projects/client-intelligence-platform'
  }
];

// These labels are rendered in the Skills section near the bottom of the page.
const skills = ['HTML5', 'CSS3', 'JavaScript', 'Python', 'AI Product Builder', 'Responsive Design', 'UI/UX'];

/* ===== 3D CAROUSEL ===== */
// RADIUS controls how far cards sit from the center. Larger = wider/deeper carousel.
const RADIUS = 340;
let rotation = 0, isDragging = false, lastX = 0, dragDistance = 0, activeCardSlug = null, didOpenFromPointer = false, velocity = 0, animFrame = null;

const ring  = document.getElementById('carouselRing');
const scene = document.getElementById('carouselScene');

projects.forEach((p, i) => {
  // 45 degrees matches the original card spacing. Change this only if cards feel too tight or too far apart.
  const angle = 45 * i;
  const card  = document.createElement('div');
  card.className = 'carousel-card';
  // The slug connects the clicked carousel card to its blog detail content below.
  card.dataset.slug = p.slug;
  card.style.transform = `rotateY(${angle}deg) translateZ(${RADIUS}px)`;
  card.innerHTML = `
    <div class="card-thumbnail"><img src="${p.image}" alt="${p.title}" loading="lazy"/></div>
    <div class="card-body">
      <span class="card-num">0${i + 1}</span>
      <div class="card-line"></div>
      <p class="card-cat">${p.category}</p>
      <h3 class="card-title">${p.title}</h3>
      <p class="card-desc">${p.description}</p>
    </div>`;
  ring.appendChild(card);
});

const particlesEl = document.getElementById('particles');
for (let i = 0; i < 15; i++) {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `left:${10 + Math.random() * 80}%;top:${30 + Math.random() * 40}%;animation-delay:${Math.random() * 3}s;animation-duration:${2 + Math.random() * 2}s;width:${2 + Math.random() * 3}px;height:${2 + Math.random() * 3}px`;
  particlesEl.appendChild(el);
}

function applyRotation() { ring.style.transform = `rotateY(${rotation}deg)`; }

scene.addEventListener('pointerdown', e => {
  const card = e.target.closest('.carousel-card');
  activeCardSlug = card?.dataset.slug || null;
  didOpenFromPointer = false;
  isDragging = true;
  lastX = e.clientX;
  dragDistance = 0;
  velocity = 0;
  cancelAnimationFrame(animFrame);
  scene.classList.add('grabbing');
  scene.setPointerCapture(e.pointerId);
});

scene.addEventListener('pointermove', e => {
  if (!isDragging) return;
  const dx = e.clientX - lastX;
  dragDistance += Math.abs(dx);
  velocity = velocity * 0.5 + (dx * 0.28) * 0.5;
  rotation += dx * 0.28;
  lastX = e.clientX;
  applyRotation();
});

scene.addEventListener('pointerup', e => stopDrag(e));
scene.addEventListener('pointercancel', e => stopDrag(e));
scene.addEventListener('pointerleave', e => { if (isDragging) stopDrag(e); });

scene.addEventListener('click', e => {
  if (didOpenFromPointer || dragDistance > 6) return;
  const card = e.target.closest('.carousel-card');
  if (card?.dataset.slug) openProject(card.dataset.slug);
});

function stopDrag(e) {
  if (e && scene.hasPointerCapture && scene.hasPointerCapture(e.pointerId)) {
    try { scene.releasePointerCapture(e.pointerId); } catch (_) {}
  }
  if (!isDragging) return;
  const shouldOpen = activeCardSlug && dragDistance <= 6;
  isDragging = false;
  scene.classList.remove('grabbing');

  if (shouldOpen) {
    didOpenFromPointer = true;
    openProject(activeCardSlug);
    activeCardSlug = null;
    return;
  }
  activeCardSlug = null;

  const dec = () => {
    velocity *= 0.94;
    if (Math.abs(velocity) > 0.02) {
      rotation += velocity;
      applyRotation();
      animFrame = requestAnimationFrame(dec);
    }
  };
  animFrame = requestAnimationFrame(dec);
}

/* ===== SKILLS PILLS ===== */
const pillsEl = document.getElementById('skillsPills');
skills.forEach((s, i) => {
  const el = document.createElement('span');
  el.className = 'skill-pill reveal-scale';
  el.style.transitionDelay = `${i * 0.05}s`;
  el.textContent = s;
  pillsEl.appendChild(el);
});

/* ===== SCROLL REVEAL ===== */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);
document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale')
        .forEach(el => observer.observe(el));

/* ===== HAMBURGER MENU ===== */
document.getElementById('hamburgerBtn').addEventListener('click', () =>
  document.getElementById('mobileMenu').classList.toggle('open')
);
document.querySelectorAll('.nav-mobile .nav-link').forEach(l =>
  l.addEventListener('click', () => document.getElementById('mobileMenu').classList.remove('open'))
);

/* ===== PROJECT BLOG OVERLAY ===== */
// This section turns a project object from the array above into the full-screen blog page.
const overlay        = document.getElementById('projectOverlay');
const overlayContent = document.getElementById('projectOverlayContent');

// Called when a carousel card is clicked/tapped.
function openProject(slug) {
  const p = projects.find(x => x.slug === slug);
  if (!p) return;
  try {
    renderProject(p);
  } catch (err) {
    console.error('[openProject] renderProject threw for slug "' + slug + '":', err);
  }
  overlay.classList.add('open');
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function renderList(items) {
  return items.map(item => `<li>${item}</li>`).join('');
}

// Edit this template if you want to change the layout of every project blog page.
function renderProject(p) {
  const idx  = projects.findIndex(x => x.slug === p.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  overlayContent.innerHTML = `
    <article class="project-blog">
      <section>
        <div class="project-hero-wrap">
          <img src="${p.image}" alt="${p.title} interface screenshot" class="project-hero-img"/>
        </div>
      </section>
      <section class="project-content">
        <div class="project-kicker">${p.category}</div>
        <h1 class="syne project-title">${p.title}</h1>
        <p class="project-blog-lede">${p.fullDescription}</p>

        ${p.demoVideo ? `
        <div class="project-demo-wrap">
          <h2 class="syne project-overview-title">Project Demo</h2>
          <p class="project-demo-sub">Watch the ${p.title} in action.</p>
          <div class="project-video-container">
            <video
              class="project-demo-video"
              src="${p.demoVideo}"
              controls
              preload="metadata"
              playsinline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>` : ''}
        <div class="project-grid project-blog-grid">
          <div class="project-article">
            <h2 class="syne project-overview-title">Project Story</h2>
            <p class="project-overview-text">${p.blogIntro}</p>

            <h2 class="syne project-overview-title">What I Built</h2>
            <ul class="project-bullets">${renderList(p.highlights)}</ul>

            <h2 class="syne project-overview-title">What I Learned</h2>
            <ul class="project-bullets">${renderList(p.learnings)}</ul>

            <h2 class="syne project-overview-title">Current Limitations</h2>
            <ul class="project-bullets">${renderList(p.limitations)}</ul>
          </div>

          <aside class="project-sidebar">
            <div class="project-meta-item"><p class="project-meta-label">Role</p><p class="project-meta-value">${p.role}</p></div>
            <div class="project-meta-item"><p class="project-meta-label">Year</p><p class="project-meta-value">${p.year}</p></div>
            <div class="project-meta-item">
              <p class="project-meta-label">Tech Stack</p>
              <div class="tech-tags">${p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
            </div>
            <div class="project-meta-item">
              <p class="project-meta-label">Local Project Path</p>
              <p class="project-path">${p.projectPath}</p>
            </div>
          </aside>
        </div>

        <div class="project-nav">
          <button class="project-nav-link prev" data-slug="${prev.slug}">
            <span class="project-nav-sub">&#8592; Previous</span>
            <span class="project-nav-title">${prev.title}</span>
          </button>
          <button class="project-nav-link next" data-slug="${next.slug}">
            <span class="project-nav-sub">Next &#8594;</span>
            <span class="project-nav-title">${next.title}</span>
          </button>
        </div>
      </section>
    </article>`;

  overlayContent.querySelectorAll('.project-nav-link').forEach(btn =>
    btn.addEventListener('click', () => {
      const proj = projects.find(x => x.slug === btn.dataset.slug);
      if (proj) { renderProject(proj); overlay.scrollTop = 0; }
    })
  );
}

document.getElementById('overlayBackBtn').addEventListener('click', closeProject);
document.getElementById('overlayBackLogo').addEventListener('click', closeProject);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProject(); });






