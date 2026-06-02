function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(form)).toString()
  })
    .then(() => {
      btn.textContent = 'Message sent! We\'ll be in touch.';
      btn.style.opacity = '0.7';
      form.reset();
    })
    .catch(() => {
      btn.textContent = 'Something went wrong — please try again.';
      btn.disabled = false;
    });
}

// Smooth active nav highlight on scroll
const sections = document.querySelectorAll('section[id], header');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id ? 'var(--blue)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));
