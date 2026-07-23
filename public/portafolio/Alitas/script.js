// ---- Menú móvil ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---- Revelado al hacer scroll ----
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// ---- Brasas ambientales ----
const embersContainer = document.getElementById('embers');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function spawnEmber() {
  if (!embersContainer) return;
  const ember = document.createElement('div');
  ember.className = 'ember';
  const left = Math.random() * 100;
  const duration = 6 + Math.random() * 6;
  const drift = (Math.random() - 0.5) * 80;
  ember.style.left = `${left}vw`;
  ember.style.animationDuration = `${duration}s`;
  ember.style.setProperty('--drift', `${drift}px`);
  embersContainer.appendChild(ember);
  setTimeout(() => ember.remove(), duration * 1000);
}

if (!prefersReducedMotion) {
  setInterval(spawnEmber, 700);
}
