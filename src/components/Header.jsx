import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

export const Header = () => {
    const { lang, setLang, t } = useLanguage();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('theme') || 'light';
        } catch (e) {
            return 'light';
        }
    });
    const langMenuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {}
    }, [theme]);

    useEffect(() => {
        // Close menus when location changes
        setIsMobileMenuOpen(false);
        setIsLangMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
                setIsLangMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const handleLangSelect = (newLang) => {
        setLang(newLang);
        setIsLangMenuOpen(false);
    };

    const isHome = location.pathname === '/' || location.pathname === '/index.html';

    return (
        <>
            {/* Header Top Bar */}
            <div className={`top-bar ${isHome && !isScrolled ? 'transparent-top' : ''}`}>
                <div className="top-container">
                    <div className="top-info">
                        <span><i className="fa-solid fa-location-dot" aria-hidden="true"></i> 3531 Town Center Blvd., Suite 101, Sugar Land, TX 77479</span>
                        <span><i className="fa-solid fa-envelope" aria-hidden="true"></i> <a href="mailto:info@azulbioresearch.com">info@azulbioresearch.com</a></span>
                    </div>
                    <div className="top-links">
                        <Link to="/blog">{t('nav_blog')}</Link>
                        <span className="top-links-separator" aria-hidden="true">|</span>
                        <Link to="/active-trials">{t('nav_active_trials')}</Link>
                        <span className="top-links-separator" aria-hidden="true">|</span>
                        <Link to="/team">{t('nav_team')}</Link>
                        <span className="top-links-separator" aria-hidden="true">|</span>
                        <Link to="/partners">{t('nav_partners')}</Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation Header */}
            <header className={`navbar ${isScrolled ? 'scrolled' : (isHome ? 'transparent-nav' : '')}`} id="navbar">
                <div className="nav-container">
                    <Link to="/" className="logo" aria-label="Azul Bio-Research home">
                        <img 
                            src={isHome && !isScrolled || theme === 'dark' ? '/assets/azul_logo_dark_bg.png' : '/assets/azul_logo_light_bg.png'} 
                            alt="Azul Bio-Research" 
                            className="logo-img" 
                            width="110"
                            height="110"
                        />
                    </Link>
                    <nav className="nav-links-wrapper" aria-label="Main">
                        <ul className="nav-links">
                            <li><Link to="/" className="nav-link">{t('nav_home')}</Link></li>
                            
                            {/* Our Company Dropdown */}
                            <li>
                                <a href="#" className="nav-link" onClick={e => e.preventDefault()}>
                                    <span>{t('nav_group_company')}</span> <i className="fa-solid fa-chevron-down nav-arrow" aria-hidden="true"></i>
                                </a>
                                <ul className="nav-dropdown">
                                    <li><Link to="/about-us" className="nav-dropdown-item">{t('nav_about')}</Link></li>
                                    <li><Link to="/team" className="nav-dropdown-item">{t('nav_team')}</Link></li>
                                </ul>
                            </li>

                            {/* Our Science Dropdown */}
                            <li>
                                <a href="#" className="nav-link" onClick={e => e.preventDefault()}>
                                    <span>{t('nav_group_science')}</span> <i className="fa-solid fa-chevron-down nav-arrow" aria-hidden="true"></i>
                                </a>
                                <ul className="nav-dropdown">
                                    <li><Link to="/technology" className="nav-dropdown-item">{t('nav_tech')}</Link></li>
                                    <li><Link to="/facilities" className="nav-dropdown-item">{t('nav_facilities')}</Link></li>
                                </ul>
                            </li>

                            {/* Patients Dropdown */}
                            <li>
                                <a href="#" className="nav-link" onClick={e => e.preventDefault()}>
                                    <span>{t('nav_group_patients')}</span> <i className="fa-solid fa-chevron-down nav-arrow" aria-hidden="true"></i>
                                </a>
                                <ul className="nav-dropdown">
                                    <li><Link to="/active-trials" className="nav-dropdown-item">{t('nav_active_trials')}</Link></li>
                                    <li><Link to="/become-volunteer" className="nav-dropdown-item">{t('nav_volunteer')}</Link></li>
                                    <li><Link to="/faq" className="nav-dropdown-item">{t('nav_faq')}</Link></li>
                                </ul>
                            </li>

                            {/* Sponsors & CROs Dropdown */}
                            <li>
                                <a href="#" className="nav-link" onClick={e => e.preventDefault()}>
                                    <span>{t('nav_partners')}</span> <i className="fa-solid fa-chevron-down nav-arrow" aria-hidden="true"></i>
                                </a>
                                <ul className="nav-dropdown">
                                    <li><Link to="/why-choose-us" className="nav-dropdown-item">{t('nav_why_choose')}</Link></li>
                                    <li><Link to="/documentation" className="nav-dropdown-item">{t('nav_docs')}</Link></li>
                                    <li><Link to="/partners" className="nav-dropdown-item">{t('nav_partnerships')}</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="nav-cta-container">
                        <button id="themeToggle" className="theme-toggle-btn" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={theme === 'dark'}>
                            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true"></i>
                        </button>
                        <div className="lang-dropdown-wrapper" ref={langMenuRef}>
                            <button className="lang-dropdown-btn" id="langDropdownBtn" onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} aria-label="Select language" aria-haspopup="true" aria-expanded={isLangMenuOpen}>
                                <i className="fa-solid fa-globe" aria-hidden="true"></i> <span>{lang.toUpperCase()}</span> <i className="fa-solid fa-chevron-down nav-arrow" aria-hidden="true"></i>
                            </button>
                            <ul className={`lang-dropdown-menu ${isLangMenuOpen ? 'open' : ''}`} id="langDropdownMenu">
                                <li><button onClick={() => handleLangSelect('en')}>English</button></li>
                                <li><button onClick={() => handleLangSelect('es')}>Español</button></li>
                            </ul>
                        </div>
                        <Link to="/become-volunteer" className="nav-btn">
                            {t('nav_cta')} <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                        </Link>
                        <button className="mobile-menu-btn" id="mobileMenuBtn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMobileMenuOpen} aria-controls="mobileNav">
                            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                {/* Mobile Nav Menu */}
                <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`} id="mobileNav" aria-label="Mobile" aria-hidden={!isMobileMenuOpen}>
                    <Link to="/" className="mobile-link">{t('nav_home')}</Link>
                    
                    <div className="mobile-nav-group">{t('nav_group_patients')}</div>
                    <Link to="/active-trials" className="mobile-link mobile-link-sub">{t('nav_active_trials')}</Link>
                    <Link to="/become-volunteer" className="mobile-link mobile-link-sub">{t('nav_volunteer')}</Link>
                    <Link to="/faq" className="mobile-link mobile-link-sub">{t('nav_faq')}</Link>
                    
                    <div className="mobile-nav-group">{t('nav_group_company')}</div>
                    <Link to="/about-us" className="mobile-link mobile-link-sub">{t('nav_about')}</Link>
                    <Link to="/team" className="mobile-link mobile-link-sub">{t('nav_team')}</Link>
                    <Link to="/technology" className="mobile-link mobile-link-sub">{t('nav_tech')}</Link>
                    
                    <div className="mobile-nav-group">{t('nav_partners')}</div>
                    <Link to="/why-choose-us" className="mobile-link mobile-link-sub">{t('nav_why_choose')}</Link>
                    <Link to="/facilities" className="mobile-link mobile-link-sub">{t('nav_facilities')}</Link>
                    <Link to="/documentation" className="mobile-link mobile-link-sub">{t('nav_docs')}</Link>
                    <Link to="/partners" className="mobile-link mobile-link-sub">{t('nav_partnerships')}</Link>
                    
                    <div className="mobile-nav-group">{t('nav_insights')}</div>
                    <Link to="/blog" className="mobile-link mobile-link-sub">{t('nav_blog')}</Link>

                    <Link to="/become-volunteer" className="mobile-link btn-mobile">
                        {t('nav_cta')} <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </Link>
                </nav>
            </header>

        </>
    );
};
