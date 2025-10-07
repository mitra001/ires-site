document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#navToggle');
  const nav = document.querySelector('#navMenu');
  if (btn && nav){
    btn.addEventListener('click', () => nav.classList.toggle('show'));
  }
  // current year
  const yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
