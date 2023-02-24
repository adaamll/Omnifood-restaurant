// Make mobile navigation work
function mobileNav() {
  const btnNavEl = document.querySelector('.btn-mobile-nav');
  const headerEl = document.querySelector('.header');

  btnNavEl.addEventListener('click', () => headerEl.classList.toggle('nav-open'));
}
mobileNav();

// Sticky navigation
function stickyNav() {
  const sectionHeroEl = document.querySelector('.section-hero');

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      if (ent.isIntersecting === false) {
        document.body.classList.add('sticky');
      }
      if (ent.isIntersecting === true) document.body.classList.remove('sticky');
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '-80px',
    }
  );
  obs.observe(sectionHeroEl);
}
stickyNav();

// Smooth scrolling animation
function smoothScrolling() {
  const allLinks = document.querySelectorAll('a:link');

  allLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = link.getAttribute('href');

      // Scroll back to top
      if (href === '#')
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });

      // Scroll to other links
      if (href !== '#' && href.startsWith('#')) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: 'smooth' });
      }

      // Close mobile navigation
      if (link.classList.contains('main-nav-link')) headerEl.classList.toggle('nav-open');
    });
  });
}
smoothScrolling();

// Set current year in footer
function setCurrentYear() {
  const yearEl = document.querySelector('.year');
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  yearEl.textContent = currentYear;
}
setCurrentYear();
