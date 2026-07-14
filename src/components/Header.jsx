import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

export const Header = () => {
    const { lang, setLang, t } = useLanguage();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const langMenuRef = useRef(null);

    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Initial run
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Apply theme
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
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

    return (
        <>
            {/* Header Top Bar */}
            <div className="top-bar">
                <div className="top-container">
                    <div className="top-info">
                        <span><i className="fa-solid fa-phone"></i> (512) 731-0786</span>
                        <span><i className="fa-solid fa-envelope"></i> sjafri@AzulBioResearch.com</span>
                    </div>
                    <div className="top-social">
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>

            {/* Main Navigation Header */}
            <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
                <div className="nav-container">
                    <Link to="/" className="logo">
                        <span className="logo-blue">azul</span> <span className="logo-orange">Bio-Research</span>
                    </Link>
                    <nav className="nav-links-wrapper">
                        <ul className="nav-links">
                            <li><Link to="/" className="nav-link">{t('nav_home')}</Link></li>
                            <li>
                                <a href="#" className="nav-link" onClick={e => e.preventDefault()}>
                                    <span>{t('nav_capabilities')}</span> <i className="fa-solid fa-chevron-down nav-arrow"></i>
                                </a>
                                <ul className="nav-dropdown">
                                    <li><Link to="/why-choose-us" className="nav-dropdown-item">{t('nav_why_choose')}</Link></li>
                                    <li><Link to="/technology" className="nav-dropdown-item">{t('nav_tech')}</Link></li>
                                    <li><Link to="/diversity" className="nav-dropdown-item">{t('nav_diversity')}</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="nav-link" onClick={e => e.preventDefault()}>
                                    <span>{t('nav_about')}</span> <i className="fa-solid fa-chevron-down nav-arrow"></i>
                                </a>
                                <ul className="nav-dropdown">
                                    <li><Link to="/about-us" className="nav-dropdown-item">{t('nav_about')}</Link></li>
                                    <li><Link to="/team" className="nav-dropdown-item">{t('nav_team')}</Link></li>
                                    <li><Link to="/partners" className="nav-dropdown-item">{t('nav_partners')}</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="nav-link" onClick={e => e.preventDefault()}>
                                    <span>{t('nav_facilities_parent')}</span> <i className="fa-solid fa-chevron-down nav-arrow"></i>
                                </a>
                                <ul className="nav-dropdown">
                                    <li><Link to="/facilities" className="nav-dropdown-item">{t('nav_facilities')}</Link></li>
                                    <li><Link to="/documentation" className="nav-dropdown-item">{t('nav_docs')}</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="nav-link" onClick={e => e.preventDefault()}>
                                    <span>{t('nav_active_trials')}</span> <i className="fa-solid fa-chevron-down nav-arrow"></i>
                                </a>
                                <ul className="nav-dropdown">
                                    <li><Link to="/active-trials" className="nav-dropdown-item">{t('nav_active_trials')}</Link></li>
                                    <li><Link to="/become-volunteer" className="nav-dropdown-item">{t('nav_volunteer')}</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="nav-link" onClick={e => e.preventDefault()}>
                                    <span>{t('nav_insights')}</span> <i className="fa-solid fa-chevron-down nav-arrow"></i>
                                </a>
                                <ul className="nav-dropdown">
                                    <li><Link to="/blog" className="nav-dropdown-item">{t('nav_blog')}</Link></li>
                                    <li><Link to="/faq" className="nav-dropdown-item">{t('nav_faq')}</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="nav-cta-container">
                        <button id="themeToggle" className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle dark/light mode">
                            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                        <div className="lang-dropdown-wrapper" ref={langMenuRef}>
                            <button className="lang-dropdown-btn" id="langDropdownBtn" onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} aria-label="Select Language">
                                <i className="fa-solid fa-globe"></i> <span>{lang.toUpperCase()}</span> <i className="fa-solid fa-chevron-down nav-arrow"></i>
                            </button>
                            <ul className={`lang-dropdown-menu ${isLangMenuOpen ? 'open' : ''}`} id="langDropdownMenu">
                                <li><button onClick={() => handleLangSelect('en')}>English</button></li>
                                <li><button onClick={() => handleLangSelect('es')}>Español</button></li>
                                <li><button onClick={() => handleLangSelect('ur')}>اردو (Urdu)</button></li>
                            </ul>
                        </div>
                        <Link to="/become-volunteer" className="nav-btn">
                            {t('nav_cta')} <i className="fa-solid fa-chevron-right"></i>
                        </Link>
                        <button className="mobile-menu-btn" id="mobileMenuBtn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Nav Menu */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`} id="mobileNav">
                <Link to="/" className="mobile-link">{t('nav_home')}</Link>
                <Link to="/why-choose-us" className="mobile-link">{t('nav_why_choose')}</Link>
                <Link to="/technology" className="mobile-link">{t('nav_tech')}</Link>
                <Link to="/diversity" className="mobile-link">{t('nav_diversity')}</Link>
                <Link to="/about-us" className="mobile-link">{t('nav_about')}</Link>
                <Link to="/team" className="mobile-link">{t('nav_team')}</Link>
                <Link to="/partners" className="mobile-link">{t('nav_partners')}</Link>
                <Link to="/facilities" className="mobile-link">{t('nav_facilities')}</Link>
                <Link to="/documentation" className="mobile-link">{t('nav_docs')}</Link>
                <Link to="/active-trials" className="mobile-link">{t('nav_active_trials')}</Link>
                <Link to="/become-volunteer" className="mobile-link">{t('nav_volunteer')}</Link>
                <Link to="/blog" className="mobile-link">{t('nav_blog')}</Link>
                <Link to="/faq" className="mobile-link">{t('nav_faq')}</Link>
            </div>
        </>
    );
};
