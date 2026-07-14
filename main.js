document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme on load
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            }
        });
    }

    // Language Translation Logic with Dropdown & RTL support
    const langDropdownBtn = document.getElementById('langDropdownBtn');
    const langDropdownMenu = document.getElementById('langDropdownMenu');
    const currentLangLabel = document.getElementById('currentLangLabel');
    const savedLang = localStorage.getItem('lang') || 'en';

    function setLanguage(lang) {
        localStorage.setItem('lang', lang);
        document.documentElement.setAttribute('lang', lang);
        
        // Handle RTL alignment for Urdu
        if (lang === 'ur') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
        
        // Update elements with data-i18n
        const translatableElements = document.querySelectorAll('[data-i18n]');
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update placeholders
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Update active label
        if (currentLangLabel) {
            currentLangLabel.textContent = lang.toUpperCase();
        }

        // Close dropdown
        if (langDropdownMenu) {
            langDropdownMenu.classList.remove('open');
        }
    }

    // Apply saved language on load
    setLanguage(savedLang);

    // Dropdown toggle
    if (langDropdownBtn && langDropdownMenu) {
        langDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdownMenu.classList.toggle('open');
        });

        // Language selection
        const langOptions = langDropdownMenu.querySelectorAll('button[data-lang]');
        langOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                const lang = opt.getAttribute('data-lang');
                setLanguage(lang);
            });
        });

        // Close when clicking outside
        document.addEventListener('click', () => {
            langDropdownMenu.classList.remove('open');
        });
    }

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

    // Volunteer Form Submission (Mock)
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = volunteerForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.style.backgroundColor = '#10b981'; // Green status color
            submitBtn.innerHTML = 'Volunteer Request Sent <i class="fa-solid fa-check"></i>';

            setTimeout(() => {
                volunteerForm.reset();
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
                submitBtn.innerHTML = originalText;
            }, 3000);
        });
    }

    // Scroll Reveal Observer
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target); // Trigger once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px' // Offset triggers slightly before entering full viewport
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
