(() => {
  'use strict';

  /* ---------- Preloader ---------- */
  window.addEventListener('load', () => {
    const pre = document.getElementById('preloader');
    setTimeout(() => pre.classList.add('hidden'), 700);
  });

  /* ---------- Year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Particle network background ---------- */
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let w, h, particles, meteors = [];
  const PARTICLE_COUNT = window.innerWidth < 700 ? 40 : 100;
  const LINK_DIST = 155;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function initParticles() {
    particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.6 + 0.6
    }));
  }
  initParticles();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function spawnMeteor() {
    const fromLeft = Math.random() > 0.5;
    const startY = Math.random() * h * 0.6;
    meteors.push({
      x: fromLeft ? -50 : w + 50,
      y: startY,
      vx: (fromLeft ? 1 : -1) * (6 + Math.random() * 4),
      vy: 2 + Math.random() * 2,
      life: 1
    });
  }
  if (!reduceMotion) setInterval(() => { if (Math.random() > 0.4) spawnMeteor(); }, 3500);

  function drawParticles() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(34, 211, 238, 0.6)';

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = `rgba(168, 85, 247, ${0.16 * (1 - dist / LINK_DIST)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    meteors.forEach((m) => {
      m.x += m.vx;
      m.y += m.vy;
      m.life -= 0.012;
      const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 6, m.y - m.vy * 6);
      grad.addColorStop(0, `rgba(255,255,255,${0.9 * m.life})`);
      grad.addColorStop(1, 'rgba(34,211,238,0)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(m.x - m.vx * 6, m.y - m.vy * 6);
      ctx.stroke();
    });
    meteors = meteors.filter((m) => m.life > 0 && m.x > -80 && m.x < w + 80 && m.y < h + 80);

    if (!reduceMotion) requestAnimationFrame(drawParticles);
  }
  drawParticles();

  /* ---------- Hero orbit parallax tilt ---------- */
  const orbitWrap = document.getElementById('orbitWrap');
  const heroEl = document.getElementById('home');
  if (orbitWrap && heroEl && !reduceMotion) {
    heroEl.addEventListener('pointermove', (e) => {
      const rect = heroEl.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      orbitWrap.style.transform = `rotateY(${relX * 16}deg) rotateX(${-relY * 16}deg)`;
    });
    heroEl.addEventListener('pointerleave', () => {
      orbitWrap.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  }

  /* ---------- Cursor glow ---------- */
  const glow = document.getElementById('cursorGlow');
  window.addEventListener('pointermove', (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
  });

  /* ---------- Scroll progress bar ---------- */
  const progressBar = document.getElementById('progressBar');
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  /* ---------- Navbar state + active link ---------- */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  function updateNav() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    let current = sections[0]?.id;
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    sections.forEach((sec) => {
      if (scrollPos >= sec.offsetTop) current = sec.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }

  window.addEventListener('scroll', () => {
    updateProgress();
    updateNav();
  }, { passive: true });
  updateProgress();
  updateNav();

  /* ---------- Mobile menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinksWrap = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksWrap.classList.toggle('open');
  });
  navLinksWrap.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinksWrap.classList.remove('open');
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));

  /* ---------- Typed text effect ---------- */
  const roles = [
    'Data Engineer',
    'Full Stack Software Developer',
    'ETL / ELT Specialist',
    'Backend Developer · Python & FastAPI'
  ];
  const typedEl = document.getElementById('typed');
  let roleIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1600);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 35 : 65);
  }
  typeLoop();

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('.stat-num');
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const tick = () => {
        cur = Math.min(target, cur + step);
        el.textContent = cur;
        if (cur < target) requestAnimationFrame(tick);
      };
      tick();
      counterIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => counterIO.observe(c));

  /* ---------- Toast on contact click ---------- */
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }
  document.querySelectorAll('.contact-card, .social-btn').forEach((el) => {
    el.addEventListener('click', () => {
      const label = el.querySelector('h4')?.textContent || el.title || 'Abriendo…';
      showToast(`Abriendo ${label}…`);
    });
  });

  /* ---------- Back to top ---------- */
  document.getElementById('toTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

})();
