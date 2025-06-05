
document.getElementById('btnViewWork').addEventListener('click', function () {
  document.getElementById('build').scrollIntoView({ behavior: 'smooth' });
});

// Fixed navbar indicator using Intersection Observer API
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.floating-link');

// Create an observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Get the corresponding nav link
      const id = entry.target.getAttribute('id');
      const activeLink = document.querySelector(`.floating-link[href="#${id}"]`);
      
      // Add active class to the corresponding link
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, {
  threshold: 0.5, // Trigger when 50% of section is visible
  rootMargin: '0px 0px -50% 0px' // Adjust for better accuracy
});

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});

// Set home as active on initial load
document.querySelector('.floating-link[href="#home"]').classList.add('active');

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.fade-in, .fade-up');
  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      el.classList.add('visible');
    }
  });
};

// Initial check
animateOnScroll();

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

const arrow = document.getElementById('scrollArrow');
if (arrow) {
    arrow.addEventListener('click', () => {
    document.getElementById('build')?.scrollIntoView({ behavior: 'smooth' });
    });
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const closeMenu = document.querySelector('.close-menu');

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Close menu when close button is clicked
  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });

  // Close menu when any link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
});