"use strict";

// =====================================================
// CV MODERNE - SCRIPT
// =====================================================

// Theme Toggle
const themeToggle = document.querySelector('.btn-theme');
const themeIcon = themeToggle.querySelector('.theme-icon');

// Check for saved theme preference or default to light
const savedTheme = localStorage.getItem('cv-theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('cv-theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  themeIcon.setAttribute('name', theme === 'light' ? 'moon-outline' : 'sunny-outline');
}

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Intersection Observer for animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-on-scroll');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.expertise-card, .skill-category, .conference-card, .publication-card, .stat-card').forEach(el => {
  observer.observe(el);
});

// Timeline animation with staggered delay
const timeline = document.querySelector('.timeline');
let timelineAnimated = false;

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animate the timeline line
      if (!timelineAnimated && timeline) {
        timeline.classList.add('animate');
        timelineAnimated = true;
      }

      // Get the index of this timeline item for staggered animation
      const item = entry.target;
      const items = document.querySelectorAll('.timeline-item');
      const index = Array.from(items).indexOf(item);

      // Add visible class with staggered delay
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 150); // 150ms delay between each item

      timelineObserver.unobserve(item);
    }
  });
}, {
  root: null,
  rootMargin: '0px 0px -50px 0px',
  threshold: 0.1
});

document.querySelectorAll('.timeline-item').forEach(el => {
  timelineObserver.observe(el);
});

// Language Switcher is handled by i18n.js

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    // Form will be handled by Netlify
    // Add any client-side validation here if needed
  });
}

// =====================================================
// MODALES (Expertise cards)
// =====================================================

const modalOverlay = document.querySelector('.modal-overlay');
let lastFocusedElement = null;

// Fonction pour ouvrir une modale
function openModal(modalType) {
  const modal = document.getElementById(`modal-${modalType}`);
  if (!modal) return;

  // Sauvegarder l'élément qui avait le focus
  lastFocusedElement = document.activeElement;

  // Afficher la modale et l'overlay
  modal.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');

  // Mettre le focus sur le bouton de fermeture
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.focus();
  }

  // Empêcher le scroll du body
  document.body.style.overflow = 'hidden';
}

// Fonction pour fermer une modale
function closeModal(modal) {
  modal.classList.add('hidden');
  modalOverlay.classList.add('hidden');

  // Restaurer le scroll du body
  document.body.style.overflow = '';

  // Restaurer le focus
  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

// Fonction pour fermer toutes les modales
function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.add('hidden');
  });
  modalOverlay.classList.add('hidden');
  document.body.style.overflow = '';

  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

// Attacher les événements aux cartes d'expertise
document.querySelectorAll('.expertise-card').forEach(card => {
  card.addEventListener('click', () => {
    const modalType = card.getAttribute('data-modal');
    openModal(modalType);
  });
});

// Attacher les événements aux boutons de fermeture
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    closeModal(modal);
  });
});

// Fermer en cliquant sur l'overlay
if (modalOverlay) {
  modalOverlay.addEventListener('click', closeAllModals);
}

// Fermer avec la touche Échap
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllModals();
  }
});

// Piège du focus dans les modales (focus trap)
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  });
});

// Update year in footer dynamically
const yearElement = document.querySelector('.footer');
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
}

// =====================================================
// CONFERENCES TOGGLE (Voir plus / Masquer)
// =====================================================

const conferencesToggleBtn = document.querySelector('.btn-conferences-toggle');
const conferencesHidden = document.querySelector('.conferences-hidden');

if (conferencesToggleBtn && conferencesHidden) {
  conferencesToggleBtn.addEventListener('click', () => {
    const isVisible = conferencesHidden.classList.toggle('visible');

    // Mettre à jour le texte du bouton selon la langue actuelle
    const lang = localStorage.getItem('cv-lang-v2') || 'fr';
    if (isVisible) {
      conferencesToggleBtn.textContent = lang === 'fr' ? 'Masquer' : 'Show less';
    } else {
      conferencesToggleBtn.textContent = lang === 'fr' ? 'Voir toutes les interventions' : 'View all presentations';
    }
  });
}

// =====================================================
// ANIMATED COUNTERS (Statistics)
// =====================================================

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const suffix = element.getAttribute('data-suffix') || '';
  const duration = 2000; // 2 secondes
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Fonction d'easing (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);

    const currentValue = Math.floor(easeOut * target);
    element.textContent = currentValue + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + suffix;
    }
  }

  requestAnimationFrame(updateCounter);
}

// Observer pour déclencher l'animation des compteurs
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumber = entry.target.querySelector('.stat-number');
      if (statNumber && statNumber.hasAttribute('data-target')) {
        animateCounter(statNumber);
      }
      counterObserver.unobserve(entry.target);
    }
  });
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
});

// Observer les stat-cards pour l'animation des compteurs
document.querySelectorAll('.stat-card').forEach(card => {
  counterObserver.observe(card);
});
