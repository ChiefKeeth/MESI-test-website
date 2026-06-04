/* ═══════════════════════════════════════════
   MESI — Shared Components & Effects
   ═══════════════════════════════════════════ */

/* ── Image asset map ── */
const IMG = {
  logo:       'brand_assets/Images/MESI Cropped logo.png',
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
    <a href="index.html" class="nav-brand">
      <div class="nav-logo-wrap">
        <img src="brand_assets/Images/MESI Cropped logo.png" alt="MESI" class="nav-logo-img">
      </div>
      <div>
        <div class="nav-brand-name">MESI</div>
        <div class="nav-brand-sub">Engineering &amp; Industrial Solutions</div>
      </div>
    </a>
    <div class="nav-links">${desktop}</div>
    <div class="nav-actions">
      <a href="contact.html" class="btn-gold btn-sm nav-cta">Get a Quote</a>
      <button class="nav-hamburger" aria-label="Toggle menu" onclick="toggleMobileMenu()">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
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
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1.25rem;">
          <div class="nav-logo-wrap"><img src="brand_assets/Images/MESI Cropped logo.png" alt="MESI" class="nav-logo-img"></div>
          <div>
            <div class="nav-brand-name">MESI</div>
            <div style="font-size:0.5rem;letter-spacing:0.12em;color:#2E2A26;text-transform:uppercase;">Integrated Engineering &amp; Industrial Solutions</div>
          </div>
        </div>
        <p style="color:#2E2A26;font-size:0.875rem;line-height:1.75;max-width:340px;font-weight:300;">
          Multidisciplinary engineering and industrial solutions for mining, automation, mechanical, logistics, and infrastructure sectors throughout Southern Africa.
        </p>
        <div style="display:flex;flex-direction:column;gap:0.625rem;margin-top:1.5rem;">
          <div class="contact-item">
            <svg width="16" height="16" viewBox="0 0 17 17" fill="none" stroke="#C9941A" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="3.5" width="13" height="10" rx="1.5"/><path d="M2 6l6.5 4L15 6"/></svg>
            <a href="mailto:sales@mesi.co.za" style="color:#4A4540;text-decoration:none;transition:color 0.2s" onmouseover="this.style.color='#C9941A'" onmouseout="this.style.color='#4A4540'">sales@mesi.co.za</a>
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
          <a href="about.html#hse" class="footer-link">HSE Commitment</a>
          <a href="contact.html" class="footer-link">Contact Us</a>
        </div>
      </div>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.04);padding-top:1.5rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;">
      <p style="color:#222018;font-size:0.8rem;">© 2026 MESI. All rights reserved. Serving Southern Africa.</p>
      <div style="display:flex;gap:1.5rem;">
        <a href="#" class="footer-link" style="font-size:0.8rem;">Privacy Policy</a>
        <a href="#" class="footer-link" style="font-size:0.8rem;">Terms of Use</a>
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
}

/* ── Mobile menu ── */
function toggleMobileMenu() {
  const m = document.getElementById('mobile-menu');
  if (!m) return;
  m.hasAttribute('hidden') ? m.removeAttribute('hidden') : m.setAttribute('hidden', '');
}
function closeMobileMenu() {
  const m = document.getElementById('mobile-menu');
  if (m) m.setAttribute('hidden', '');
}

/* ── Scroll Reveal ── */
function _initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
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
