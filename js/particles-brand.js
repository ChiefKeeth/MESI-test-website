// Brand-adapted particles — gold, no onclick push, disabled on mobile
(function () {
  function initMesiParticles(containerId) {
    window.particlesJS(containerId, {
      particles: {
        number: { value: 70, density: { enable: true, value_area: 900 } },
        color: { value: '#C9941A' },
        shape: { type: 'circle', stroke: { width: 0, color: '#8A6412' } },
        opacity: {
          value: 0.28,
          random: true,
          anim: { enable: true, speed: 0.5, opacity_min: 0.05, sync: false }
        },
        size: {
          value: 1.8,
          random: true,
          anim: { enable: true, speed: 1, size_min: 0.3, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 130,
          color: '#C9941A',
          opacity: 0.09,
          width: 0.6
        },
        move: {
          enable: true, speed: 0.9, random: true,
          straight: false, out_mode: 'bounce',
          attract: { enable: false }
        }
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: false },
          resize: true
        },
        modes: {
          grab: { distance: 160, line_linked: { opacity: 0.3 } }
        }
      },
      retina_detect: true
    });
  }

  function loadAndInit(containerId) {
    // Skip on mobile — save battery/CPU
    if (window.innerWidth < 900) return;
    if (typeof window.particlesJS === 'function') {
      initMesiParticles(containerId);
      return;
    }
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    script.onload = function () { initMesiParticles(containerId); };
    document.body.appendChild(script);
  }

  window.initMesiParticles = loadAndInit;
})();
