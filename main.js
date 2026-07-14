document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
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

        // Close mobile menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    // Contact Form Submission (Mock)
    const contactForm = document.getElementById('azulContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const lname = document.getElementById('lname').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const specialty = document.getElementById('specialty').value;
            const message = document.getElementById('message').value;

            // Simple visual response
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.style.backgroundColor = '#10b981'; // Green status color
            submitBtn.innerHTML = 'Inquiry Submitted <i class="fa-solid fa-check"></i>';

            setTimeout(() => {
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
                submitBtn.innerHTML = originalText;
            }, 3000);
        });
    }
});
