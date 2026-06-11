/* ═══════════════════════════════════════════
   MESI — Shared Components & Effects
   ═══════════════════════════════════════════ */

/* ── Image asset map ── */
const IMG = {
  logo:       'brand_assets/Images/MESI Name TB trimmed.png',
  symbol:     'brand_assets/Images/Mesi Symbol TB.png',
  heroAbout:  'brand_assets/Images/WhatsApp Image 2026-06-04 at 05.58.44.jpeg',
  automation: 'brand_assets/Images/WhatsApp Image 2026-06-04 at 05.58.47 (2).jpeg',
  mechanical: 'brand_assets/Images/WhatsApp Image 2026-06-04 at 05.58.47 (1).jpeg',
  payload:    'brand_assets/Images/WhatsApp Image 2026-06-04 at 05.58.48.jpeg',
  logistics:  'brand_assets/Images/WhatsApp Image 2026-06-04 at 05.58.44 (1).jpeg',
  supplies:   'brand_assets/Images/WhatsApp Image 2026-06-04 at 05.58.47.jpeg',
  projects:   'brand_assets/Images/WhatsApp Image 2026-06-04 at 05.58.46 (2).jpeg',
  hse:        'brand_assets/Images/WhatsApp Image 2026-06-04 at 05.58.46.jpeg',
  teamwork:   'brand_assets/Images/WhatsApp Image 2026-06-04 at 05.58.46 (1).jpeg',
  handshake:  'brand_assets/Images/WhatsApp Image 2026-06-04 at 05.58.45 (3).jpeg',
};

/* ── Nav HTML ── */
function _getNavHTML(currentPage) {
  const links = [
    { page: 'home',      href: 'index.html',     label: 'Home' },
    { page: 'about',     href: 'about.html',      label: 'About' },
    { page: 'divisions', href: 'divisions.html',  label: 'Divisions' },
    { page: 'contact',   href: 'contact.html',    label: 'Contact' },
  ];

  const desktop = links.map(l =>
    `<a href="${l.href}" class="nav-link${currentPage === l.page ? ' active' : ''}">${l.label}</a>`
  ).join('');

  const mobile = links.map(l =>
    `<a href="${l.href}" class="mobile-nav-link${currentPage === l.page ? ' active' : ''}" onclick="closeMobileMenu()">${l.label}</a>`
  ).join('');

  return `<nav id="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-brand" aria-label="MESI — Home">
      <img src="brand_assets/Images/MESI Name TB trimmed.png" alt="MESI" class="nav-wordmark">
      <span class="nav-brand-sub">Engineering &amp; Industrial Solutions</span>
    </a>
    <div class="nav-links">${desktop}</div>
    <div class="nav-actions">
      <a href="contact.html" class="btn-gold btn-sm nav-cta">Get a Quote</a>
      <button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu" onclick="toggleMobileMenu()">
        <svg class="ham-open" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
        </svg>
        <svg class="ham-close" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
  <div id="mobile-menu" class="mobile-menu" hidden>
    <div class="mobile-menu-links">
      ${mobile}
      <a href="contact.html" class="btn-gold" style="text-align:center" onclick="closeMobileMenu()">Get a Quote</a>
    </div>
  </div>
</nav>`;
}

/* ── Footer HTML ── */
function _getFooterHTML() {
  return `<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-col">
        <div style="margin-bottom:1.25rem;">
          <img src="brand_assets/Images/MESI Name TB trimmed.png" alt="MESI" class="footer-wordmark">
          <div style="font-size:0.55rem;letter-spacing:0.14em;color:var(--text-faint);text-transform:uppercase;margin-top:0.5rem;">Integrated Engineering &amp; Industrial Solutions</div>
        </div>
        <p style="color:var(--text-dim);font-size:0.875rem;line-height:1.75;max-width:340px;font-weight:300;">
          Multidisciplinary engineering and industrial solutions for mining, automation, mechanical, logistics, and infrastructure sectors throughout Southern Africa.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:1.25rem;">
          <span class="chip chip-lit">Level 1 BBBEE</span>
          <span class="chip chip-lit chip-lit-green">100% Black Women-Owned</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.625rem;margin-top:1.5rem;">
          <div class="contact-item">
            <svg width="16" height="16" viewBox="0 0 17 17" fill="none" stroke="#C9941A" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="3.5" width="13" height="10" rx="1.5"/><path d="M2 6l6.5 4L15 6"/></svg>
            <a href="mailto:sales@mesi.co.za" class="footer-link" style="display:inline;font-size:0.875rem;">sales@mesi.co.za</a>
          </div>
          <div class="contact-item">
            <svg width="16" height="16" viewBox="0 0 17 17" fill="none" stroke="#22A845" stroke-width="1.5" stroke-linecap="round"><path d="M14.5 10.8l-2.1-.24a1.5 1.5 0 00-1.23.44l-1.53 1.53a11.25 11.25 0 01-4.9-4.9l1.54-1.54a1.5 1.5 0 00.43-1.23L6.47 2.77A1.5 1.5 0 005 1.5H3a1.5 1.5 0 00-1.5 1.6A14 14 0 0015 16.75a1.5 1.5 0 001.6-1.5v-3a1.5 1.5 0 00-2.1-1.45z"/></svg>
            <span>+27 71 853 4802</span>
          </div>
        </div>
      </div>
      <div class="footer-col">
        <div style="font-family:'Rajdhani',sans-serif;font-weight:600;font-size:0.7rem;letter-spacing:0.16em;text-transform:uppercase;color:#C9941A;margin-bottom:1.25rem;">Divisions</div>
        <div style="display:flex;flex-direction:column;gap:0.75rem;">
          <a href="divisions.html#automation" class="footer-link">Automation &amp; Electrical</a>
          <a href="divisions.html#mechanical" class="footer-link">Mechanical &amp; Mining</a>
          <a href="divisions.html#payload" class="footer-link">Payload &amp; Weighing</a>
          <a href="divisions.html#logistics" class="footer-link">Logistics &amp; Transport</a>
          <a href="divisions.html#supplies" class="footer-link">Industrial Supplies</a>
          <a href="divisions.html#projects" class="footer-link">Projects &amp; Engineering</a>
        </div>
      </div>
      <div class="footer-col">
        <div style="font-family:'Rajdhani',sans-serif;font-weight:600;font-size:0.7rem;letter-spacing:0.16em;text-transform:uppercase;color:#C9941A;margin-bottom:1.25rem;">Company</div>
        <div style="display:flex;flex-direction:column;gap:0.75rem;">
          <a href="about.html" class="footer-link">About MESI</a>
          <a href="about.html#vision" class="footer-link">Vision &amp; Mission</a>
          <a href="about.html#values" class="footer-link">Core Values</a>
          <a href="about.html#bee" class="footer-link">Transformation &amp; BBBEE</a>
          <a href="about.html#hse" class="footer-link">HSE Commitment</a>
          <a href="contact.html" class="footer-link">Contact Us</a>
        </div>
      </div>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.04);padding-top:1.5rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;">
      <p style="color:var(--text-faint);font-size:0.8rem;">© 2026 MESI. All rights reserved. Serving Southern Africa.</p>
      <div style="display:flex;gap:1.5rem;">
        <a href="privacy.html" class="footer-link" style="font-size:0.8rem;">Privacy Policy</a>
        <a href="terms.html" class="footer-link" style="font-size:0.8rem;">Terms of Use</a>
      </div>
    </div>
  </div>
</footer>`;
}

/* ── Init ── */
function initPage(currentPage) {
  // Inject nav
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = _getNavHTML(currentPage);

  // Inject footer
  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = _getFooterHTML();

  // Nav shadow on scroll
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (nav) nav.style.boxShadow = window.scrollY > 30 ? '0 4px 32px rgba(0,0,0,0.5)' : 'none';
  }, { passive: true });

  // Smooth scroll for anchor links
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });

  // Scroll reveal (IntersectionObserver)
  _initReveal();

  // Card tilt on hover
  _initTilt();

  // Legal-page table of contents scrollspy (no-op on pages without one)
  _initLegalTOC();
}

/* ── Legal TOC scrollspy ── */
function _initLegalTOC() {
  const links = document.querySelectorAll('.legal-toc-link');
  if (!links.length) return;
  const byId = new Map();
  links.forEach(l => {
    const id = (l.getAttribute('href') || '').slice(1);
    const section = document.getElementById(id);
    if (section) byId.set(section, l);
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.remove('active'));
      const link = byId.get(entry.target);
      if (link) link.classList.add('active');
    });
  // Band across the upper-middle of the viewport decides the "current" section
  }, { rootMargin: '-15% 0px -65% 0px' });
  byId.forEach((_, section) => io.observe(section));
}

/* ── Mobile menu ── */
function _setMenuState(open) {
  const m = document.getElementById('mobile-menu');
  const btn = document.querySelector('.nav-hamburger');
  if (!m) return;
  open ? m.removeAttribute('hidden') : m.setAttribute('hidden', '');
  if (btn) btn.setAttribute('aria-expanded', String(open));
}
function toggleMobileMenu() {
  const m = document.getElementById('mobile-menu');
  if (m) _setMenuState(m.hasAttribute('hidden'));
}
function closeMobileMenu() { _setMenuState(false); }

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileMenu();
});
document.addEventListener('click', (e) => {
  const m = document.getElementById('mobile-menu');
  if (m && !m.hasAttribute('hidden') && !e.target.closest('#nav')) closeMobileMenu();
});

/* ── Scroll Reveal ── */
function _initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  // Trigger as soon as 1% of the element is near the viewport — fires before it's fully on screen
  }, { threshold: 0.01, rootMargin: '0px 0px 60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Fallback: after 2.5s reveal anything still hidden (catches edge cases on iOS)
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible'));
  }, 2500);
}

/* ── Card Tilt (image tilt on hover) ── */
function _initTilt() {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 768) return;
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) scale(1.025)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}
