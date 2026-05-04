(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('#siteNav');
  const toTopBtn = document.querySelector('#toTopBtn');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  if (toTopBtn) {
    toTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
