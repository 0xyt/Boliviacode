/* ==========================================================================
   BoliviaCode — Scripts
   Agencia de Experiencias Digitales
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     Scroll Reveal (Intersection Observer)
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* ------------------------------------------------------------------------
     Navigation
     ------------------------------------------------------------------------ */
  const nav = document.querySelector('.nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  let lastScroll = 0;

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  const toggleMenu = () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isOpen);
  };

  navToggle.addEventListener('click', toggleMenu);

  document.querySelectorAll('.nav__links a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ------------------------------------------------------------------------
     FAQ Accordion
     ------------------------------------------------------------------------ */
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq__question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach((other) => other.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      } else {
        question.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* ------------------------------------------------------------------------
     Smooth Scroll for Anchor Links
     ------------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');

      if (targetId === '#') return;

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        const navHeight = nav.offsetHeight;
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  /* ------------------------------------------------------------------------
     Counter Animation (Trust Section)
     ------------------------------------------------------------------------ */
  const counters = document.querySelectorAll('.trust__number[data-count]');

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const count = parseInt(target.getAttribute('data-count'), 10);

          if (!count || isNaN(count)) return;

          let current = 0;
          const duration = 1500;
          const startTime = performance.now();

          const updateCounter = (timestamp) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const eased = 1 - Math.pow(1 - progress, 3);
            current = Math.floor(eased * count);

            target.textContent = '+' + current;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              target.textContent = '+' + count;
            }
          };

          requestAnimationFrame(updateCounter);
          counterObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));

  /* ------------------------------------------------------------------------
     Parallax Gradient on Hero
     ------------------------------------------------------------------------ */
  const heroGradients = document.querySelectorAll('.hero__gradient');

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (clientX - centerX) * 0.02;
    const moveY = (clientY - centerY) * 0.02;

    heroGradients.forEach((gradient, index) => {
      const factor = index === 0 ? 1 : -1;
      gradient.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
    });
  };

  document.addEventListener('mousemove', handleMouseMove, { passive: true });

  /* ------------------------------------------------------------------------
     Performance: will-change optimization
     ------------------------------------------------------------------------ */
  const animatedElements = document.querySelectorAll(
    '.hero__gradient, .faq__icon, .process__number'
  );

  animatedElements.forEach((el) => {
    el.style.willChange = 'transform';
  });

  /* ------------------------------------------------------------------------
     Console Identity
     ------------------------------------------------------------------------ */
  console.log(
    '%c BoliviaCode ',
    'background:#3B82F6;color:#fff;font-size:12px;font-weight:700;padding:4px 8px;border-radius:4px;font-family:system-ui;'
  );
  console.log(
    '%c Experiencias digitales que convierten.',
    'color:#94A3B8;font-size:11px;font-family:system-ui;'
  );
})();
