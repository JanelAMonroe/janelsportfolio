document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const connectButton = document.querySelector('.content button');
  const contactForm = document.getElementById('contactForm');
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

  // Modal functionality
  if (aboutButton && aboutModal && closeButton) {
    aboutButton.addEventListener('click', () => {
      aboutModal.classList.add('show');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close modal when clicking the close button
    closeButton.addEventListener('click', () => {
      closeModal();
    });

    // Close modal when clicking outside
    aboutModal.addEventListener('click', (e) => {
      if (e.target === aboutModal) {
        closeModal();
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && aboutModal.classList.contains('show')) {
        closeModal();
      }
    });
  }

  // Function to close modal
  function closeModal() {
    aboutModal.classList.remove('show');
    document.body.style.overflow = ''; // Restore background scrolling
  }

  // Reset form if it exists
  if (contactForm) {
    const sendButton = contactForm.querySelector('.send-button');
    if (sendButton) {
      setTimeout(() => {
        contactForm.reset();
        sendButton.classList.remove('sent');
      }, 2000);
    }
  }
});
