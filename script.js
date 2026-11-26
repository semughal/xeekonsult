const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const languageToggle = document.querySelector('.language-toggle');

function setLanguage(language) {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-sv][data-en]').forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  if (languageToggle) {
    const nextLanguage = language === 'sv' ? 'English' : 'svenska';
    languageToggle.setAttribute('aria-label', `Switch language to ${nextLanguage}`);
  }
  try { localStorage.setItem('xee-language', language); } catch { /* Storage may be unavailable. */ }
}

let currentLanguage = 'sv';
try {
  const savedLanguage = localStorage.getItem('xee-language');
  if (savedLanguage === 'sv' || savedLanguage === 'en') currentLanguage = savedLanguage;
} catch { /* Use Swedish when storage is unavailable. */ }
setLanguage(currentLanguage);

languageToggle?.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'sv' ? 'en' : 'sv';
  setLanguage(currentLanguage);
});

menuToggle?.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  menuToggle.setAttribute('aria-label', isExpanded ? 'Öppna meny / Open menu' : 'Stäng meny / Close menu');
  navLinks?.classList.toggle('open', !isExpanded);
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Öppna meny / Open menu');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
