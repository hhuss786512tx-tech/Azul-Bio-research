document.addEventListener('DOMContentLoaded', () => {
    // Navigation Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileNav.classList.contains('open');
            if (isOpen) {
                mobileNav.classList.remove('open');
                mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            } else {
                mobileNav.classList.add('open');
                mobileMenuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            }
        });

        // Close mobile nav when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    // Number Counter Animation
    const stats = document.querySelectorAll('.stat-number');
    const animateCounters = () => {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const current = +stat.innerText;
            const increment = target / 50; // speed of increment

            if (current < target) {
                stat.innerText = Math.ceil(current + increment);
                setTimeout(animateCounters, 30);
            } else {
                stat.innerText = target;
                // Add suffix where appropriate
                if (target === 14) stat.innerText = target + '';
                if (target === 4) stat.innerText = target + '';
                if (target === 98) stat.innerText = target + '%';
                if (target === 50) stat.innerText = '$' + target + 'M';
            }
        });
    };

    // Intersection Observer for Counter Animation
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target); // Run once
                }
            });
        }, { threshold: 0.5 });
        observer.observe(statsSection);
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const interest = document.getElementById('interest').value;
            const message = document.getElementById('message').value;

            // Simple visual response
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            submitBtn.innerHTML = 'Message Sent <i class="fa-solid fa-circle-check"></i>';

            setTimeout(() => {
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                submitBtn.innerHTML = originalText;
            }, 3000);
        });
    }

    // Interactive pipeline rows hover decoration
    const rows = document.querySelectorAll('.pipeline-row');
    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'scale(1.005) translateX(4px)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'none';
        });
    });
});
