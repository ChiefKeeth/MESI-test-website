/** @type {import('tailwindcss').Config} */
module.exports = {
  // js/**/*.js is REQUIRED: nav/footer/mobile-menu markup is injected by
  // js/components.js (e.g. it toggles `hidden`/`flex`), so those utilities must
  // be scanned or they get purged from the production build. See PROGRESS.md.
  content: ['./*.html', './js/**/*.js'],
  theme: {
    // Brand tokens (gold/green, Rajdhani/Inter) live as CSS variables in
    // css/style.css and are applied via custom classes there — not as Tailwind
    // theme tokens. Left empty on purpose so the CLI build is a like-for-like
    // replacement for the default-config Play CDN it replaces.
    extend: {},
  },
  plugins: [],
};
