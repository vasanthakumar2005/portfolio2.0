/* ==========================================================================
   INTERACTIVE JAVASCRIPT FOR VASANTHAKUMAR D PORTFOLIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Particle Canvas Background Animation
    initParticleBackground();

    // 2. Typewriter Effect (Student & AI Product Builder Titles)
    initTypewriter();

    // 3. Navbar Sticky & Scroll Active
    initNavbar();

    // 4. Mobile Menu Toggle
    initMobileMenu();

    // 5. Skills & Projects Filter
    initFilters();

    // 6. Intersection Observer Scroll Fade-In
    initScrollAnimations();

    // 7. Contact Form Handler & Toast
    initContactForm();
});

/* ==========================================================================
   PARTICLE CANVAS BACKGROUND
   ========================================================================== */
function initParticleBackground() {
    const canvas = document.getElementById('canvas-particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.floor(width / 22);

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            alpha: Math.random() * 0.5 + 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(37, 99, 235, ${p.alpha * 0.6})`;
            ctx.fill();
        }

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 110) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(37, 99, 235, ${0.12 * (1 - dist / 110)})`;
                    ctx.strokeWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

/* ==========================================================================
   TYPEWRITER EFFECT (Student Focus)
   ========================================================================== */
function initTypewriter() {
    const typewriterEl = document.getElementById('typewriter');
    if (!typewriterEl) return;

    const words = [
        "AI & Data Science Student",
        "Final-Year B.Tech Student @ Dr. MCET",
        "Machine Learning Student",
        "AI-Powered Product Builder"
    ];

    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIdx];
        
        if (isDeleting) {
            typewriterEl.textContent = currentWord.substring(0, charIdx - 1) + '|';
            charIdx--;
        } else {
            typewriterEl.textContent = currentWord.substring(0, charIdx + 1) + '|';
            charIdx++;
        }

        let typeSpeed = isDeleting ? 35 : 75;

        if (!isDeleting && charIdx === currentWord.length) {
            typeSpeed = 2200;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            wordIdx = (wordIdx + 1) % words.length;
            typeSpeed = 400;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

/* ==========================================================================
   NAVBAR ACTIVE SCROLL
   ========================================================================== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        let currentSection = '';
        sections.forEach(sec => {
            const secTop = sec.offsetTop - 120;
            if (window.scrollY >= secTop) {
                currentSection = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================================================
   MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    });
}

/* ==========================================================================
   SKILLS & PROJECTS FILTER
   ========================================================================== */
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterVal = btn.getAttribute('data-filter');

            skillCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterVal === 'all' || category === filterVal) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================================================
   SCROLL INTERSECTION OBSERVER ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
    const animateEls = document.querySelectorAll('.glass-card, .timeline-card, .section-header');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    animateEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
}

/* ==========================================================================
   CONTACT FORM & TOAST NOTIFICATION
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const toast = document.getElementById('toast');

    if (!form || !toast) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        toast.classList.add('show');
        form.reset();

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    });
}
