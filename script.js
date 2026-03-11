
const revealElements = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;
  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    if (top < triggerBottom) element.classList.add('active');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const counters = document.querySelectorAll('.counter');
let started = false;
function startCounters() {
  if (started) return;
  const section = document.querySelector('.stats-section');
  const top = section.getBoundingClientRect().top;
  if (top < window.innerHeight * 0.9) {
    started = true;
    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      let current = 0;
      const increment = Math.max(1, Math.ceil(target / 80));
      function updateCounter() {
        current += increment;
        if (current >= target) {
          counter.textContent = `+${target}`;
        } else {
          counter.textContent = `+${current}`;
          requestAnimationFrame(updateCounter);
        }
      }
      updateCounter();
    });
  }
}
window.addEventListener('scroll', startCounters);
window.addEventListener('load', startCounters);

const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => menu.classList.toggle('active'));
  document.querySelectorAll('.menu a').forEach((link) => {
    link.addEventListener('click', () => menu.classList.remove('active'));
  });
}
