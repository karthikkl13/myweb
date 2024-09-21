 document.addEventListener('DOMContentLoaded', function() {
     // Create stars
     const starsContainer = document.getElementById('stars');
     for (let i = 0; i < 200; i++) {
         const star = document.createElement('div');
         star.className = 'star';
         star.style.width = '2px';
         star.style.height = '2px';
         star.style.backgroundColor = '#fff';
         star.style.position = 'absolute';
         star.style.left = `${Math.random() * 100}%`;
         star.style.top = `${Math.random() * 100}%`;
         star.style.animation = `twinkle ${Math.random() * 4 + 1}s infinite`;
         starsContainer.appendChild(star);
     }

     // Planet hover effect
     const planets = document.querySelectorAll('.planet');
     planets.forEach(planet => {
         planet.addEventListener('mouseover', () => {
             planet.style.boxShadow = '0 0 20px #00ffff';
         });
         planet.addEventListener('mouseout', () => {
             planet.style.boxShadow = 'none';
         });
     });

     // Smooth scrolling for navigation
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
             e.preventDefault();
             document.querySelector(this.getAttribute('href')).scrollIntoView({
                 behavior: 'smooth'
             });
         });
     });

     // Form submission
     const contactForm = document.getElementById('contact-form');
     contactForm.addEventListener('submit', function(e) {
         e.preventDefault();
         alert('Message sent! (This is a demo)');
         contactForm.reset();
     });
 });
