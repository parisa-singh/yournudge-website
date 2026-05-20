/* ============================================================
   YOUR NUDGE — Main JavaScript
   ============================================================ */

// ---------- Nav: scroll state + burger ----------
const nav = document.getElementById('nav');
const navBurger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

navBurger.addEventListener('click', () => {
  navBurger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navBurger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ---------- Smooth scroll for anchor links ----------
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

// ---------- Scroll Reveal ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---------- Stat number counters ----------
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  if (isNaN(target)) return;
  const duration = 1400;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ---------- FAQ Accordion ----------
document.querySelectorAll('.fq__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.fq');
    const isOpen = item.classList.contains('open');
    // Close all others
    document.querySelectorAll('.fq.open').forEach(open => open.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ---------- Phone mockup: rotating activities ----------
const activities = [
  {
    name: 'Morning Walk',
    instruction: 'Feel the ground beneath each step. Let each footfall be a complete arrival in the present moment.'
  },
  {
    name: 'Making Tea',
    instruction: 'Feel the warmth of the cup in your hands. Let the steam, the scent, the colour — all of it — be your world right now.'
  },
  {
    name: 'Cooking',
    instruction: 'Let the knife become an extension of your hand. Feel every texture, hear every sizzle, breathe every aroma.'
  },
  {
    name: 'Commuting',
    instruction: 'Rather than waiting to arrive, notice what it feels like to be in motion. The body, the breath, the hum.'
  },
  {
    name: 'Deep Work',
    instruction: 'Before diving in, take one breath. Feel your hands on the keyboard. Begin from here — fully here.'
  },
  {
    name: 'Evening Shower',
    instruction: 'Let the water falling on your skin be the only thing that exists right now. Temperature, pressure, sound.'
  }
];

let activityIndex = 0;
const phoneActivity = document.getElementById('phoneActivity');
const phoneInstruction = document.getElementById('phoneInstruction');
const nudgeTimer = document.getElementById('nudgeTimer');
const progressBar = document.getElementById('progressBar');

function fadeActivity(newActivity) {
  if (!phoneActivity) return;
  phoneActivity.style.opacity = '0';
  phoneInstruction.style.opacity = '0';
  setTimeout(() => {
    phoneActivity.textContent = newActivity.name;
    phoneInstruction.textContent = newActivity.instruction;
    phoneActivity.style.opacity = '1';
    phoneInstruction.style.opacity = '1';
    resetProgress();
  }, 400);
}

let progressWidth = 30;
function resetProgress() {
  progressWidth = 0;
  if (progressBar) progressBar.style.width = '0%';
  setTimeout(() => {
    if (progressBar) progressBar.style.width = '65%';
    progressWidth = 65;
  }, 100);
}

let nudgeCountdown = 12;
function tickNudge() {
  nudgeCountdown--;
  if (nudgeCountdown <= 0) {
    nudgeCountdown = 12 + Math.floor(Math.random() * 6);
    activityIndex = (activityIndex + 1) % activities.length;
    fadeActivity(activities[activityIndex]);
  }
  if (nudgeTimer) nudgeTimer.textContent = nudgeCountdown + ' min';
}

resetProgress();
setInterval(tickNudge, 1000);

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === '#' + entry.target.id
        );
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(s => sectionObserver.observe(s));
