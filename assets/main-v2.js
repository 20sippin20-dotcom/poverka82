const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

const syncHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('nav-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  document.body.classList.remove('nav-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    document.body.classList.remove('nav-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('[data-year]').forEach(node => {
  node.textContent = String(new Date().getFullYear());
});
