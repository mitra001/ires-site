/* Mobile nav toggle */
(function () {
  const btn  = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

/* Mark current page in all navs (header & sidebar) */
(function () {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[href]').forEach(a => {
    const target = a.getAttribute('href');
    if (!target) return;
    if (target === here) a.setAttribute('aria-current', 'page');
  });
})();

/* Footer year */
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
