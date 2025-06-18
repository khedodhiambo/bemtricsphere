
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Add to JS
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;
    
    if(count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(animateCounters, 1);
    } else {
      counter.innerText = target;
    }
  });
}

// Trigger when section is visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      animateCounters();
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.5});

const heroSection = document.querySelector('.hero');
observer.observe(heroSection);