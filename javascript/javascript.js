 const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
  
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    

  let currentSlide = 0;
  const testimonials = document.querySelectorAll('.testimonial-content');

  function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove('active');
      if (i === index) testimonial.classList.add('active');
    });
  }

  function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= testimonials.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = testimonials.length - 1;
    showSlide(currentSlide);
  }

  // Show first slide initially
  showSlide(currentSlide);
