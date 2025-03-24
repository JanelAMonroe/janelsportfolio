document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const connectButton = document.querySelector('.content button');
  const contactForm = document.getElementById('contactForm');
  const sendButton = contactForm.querySelector('.send-button');
  const aboutModal = document.getElementById('aboutModal');
  const aboutButton = document.querySelector('.about-button');
  const closeButton = document.querySelector('.close-button');

  // Smooth scroll navigation for nav links
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Smooth scroll for "Let's connect" button
  if (connectButton) {
    connectButton.addEventListener('click', () => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Handle contact form submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendButton.classList.add('sent');

    // Reset form and button after 2 seconds
    setTimeout(() => {
      contactForm.reset();
      sendButton.classList.remove('sent');
    }, 2000);
  });

  // Modal functionality
  aboutButton.addEventListener('click', () => {
    aboutModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  });

  closeButton.addEventListener('click', () => {
    aboutModal.classList.remove('show');
    document.body.style.overflow = '';
  });

  // Close modal when clicking outside
  aboutModal.addEventListener('click', (e) => {
    if (e.target === aboutModal) {
      aboutModal.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
});
