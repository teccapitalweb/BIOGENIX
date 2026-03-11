const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;
  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    if (top < triggerBottom) element.classList.add('active');
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const counters = document.querySelectorAll('.counter');
let countersStarted = false;

function startCounters() {
  if (countersStarted) return;
  const stats = document.querySelector('.stats');
  if (!stats) return;

  const top = stats.getBoundingClientRect().top;
  if (top < window.innerHeight * 0.92) {
    countersStarted = true;
    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      let current = 0;
      const increment = Math.max(1, Math.ceil(target / 80));

      function update() {
        current += increment;
        if (current >= target) {
          counter.textContent = `+${target}`;
        } else {
          counter.textContent = `+${current}`;
          requestAnimationFrame(update);
        }
      }

      update();
    });
  }
}

window.addEventListener('scroll', startCounters);
window.addEventListener('load', startCounters);

const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(menu.classList.contains('active')));
  });

  document.querySelectorAll('.menu a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
