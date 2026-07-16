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
                        <span><i className="fa-solid fa-phone"></i> (800) 555-AZUL</span>
                        <span><i className="fa-solid fa-envelope"></i> patients@azulbioresearch.com</span>
                    </div>
                    <div className="top-links">
                        <Link to="/blog">News <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.65rem' }}></i></Link>
                        <span className="top-links-separator">|</span>
                        <Link to="/active-trials">Clinical Trials <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.65rem' }}></i></Link>
                        <span className="top-links-separator">|</span>
                        <Link to="/team">Investigator Research <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.65rem' }}></i></Link>
                        <span className="top-links-separator">|</span>
                        <Link to="/partners">Partners</Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation Header */}
            <header className={`navbar ${isScrolled ? 'scrolled' : (isHome ? 'transparent-nav' : '')}`} id="navbar">
                <div className="nav-container">
                    <Link to="/" className="logo">
                        <img 
                            src={isHome && !isScrolled || theme === 'dark' ? '/assets/azul_logo_dark_bg.png' : '/assets/azul_logo_light_bg.png'} 
                            alt="azul Bio-Research" 
                            className="logo-img" 
                        />
                    </Link>
                    <nav className="nav-links-wrapper">
                        <ul className="nav-links">
                            <li><Link to="/" className="nav-link">{t('nav_home')}</Link></li>
                            
                            {/* Our Company Dropdown */}
                            <li>
                                <a href="#" className="nav-link" onClick={e => e.preventDefault()}>
                                    <span>Our Company</span> <i className="fa-solid fa-chevron-down nav-arrow"></i>
                                </a>
                                <ul className="nav-dropdown">
                                    <li><Link to="/about-us" className="nav-dropdown-item">About Us</Link></li>
                                    <li><Link to="/team" className="nav-dropdown-item">Our PIs & Team</Link></li>
                                    <li><Link to="/diversity" className="nav-dropdown-item">Diversity & Inclusion</Link></li>
                                </ul>
                            </li>

                            {/* Our Science Dropdown */}
                            <li>
                                <a href="#" className="nav-link" onClick={e => e.preventDefault()}>
                                    <span>Our Science</span> <i className="fa-solid fa-chevron-down nav-arrow"></i>
                                </a>
                                <ul className="nav-dropdown">
                                    <li><Link to="/technology" className="nav-dropdown-item">Research Technology</Link></li>
                                    <li><Link to="/facilities" className="nav-dropdown-item">Diagnostic Facilities</Link></li>
                                </ul>
                            </li>

                            {/* Patients Dropdown */}
                            <li>
                                <a href="#" className="nav-link" onClick={e => e.preventDefault()}>
                                    <span>Patients</span> <i className="fa-solid fa-chevron-down nav-arrow"></i>
                                </a>
                                <ul className="nav-dropdown">
                                    <li><Link to="/active-trials" className="nav-dropdown-item">Active Clinical Trials</Link></li>
                                    <li><Link to="/become-volunteer" className="nav-dropdown-item">Volunteer Registry</Link></li>
                                    <li><Link to="/faq" className="nav-dropdown-item">Patient FAQs</Link></li>
                                </ul>
                            </li>

                            {/* Sponsors & CROs Dropdown */}
                            <li>
                                <a href="#" className="nav-link" onClick={e => e.preventDefault()}>
                                    <span>Sponsors & CROs</span> <i className="fa-solid fa-chevron-down nav-arrow"></i>
                                </a>
                                <ul className="nav-dropdown">
                                    <li><Link to="/why-choose-us" className="nav-dropdown-item">Clinical Capabilities</Link></li>
                                    <li><Link to="/documentation" className="nav-dropdown-item">Regulatory Docs</Link></li>
                                    <li><Link to="/partners" className="nav-dropdown-item">Feasibility Inquiry</Link></li>
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
                
                <div style={{ padding: '0.5rem 0', fontWeight: 'bold', color: 'var(--accent-orange)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Patients</div>
                <Link to="/active-trials" className="mobile-link" style={{ paddingLeft: '1rem' }}>Active Trials</Link>
                <Link to="/become-volunteer" className="mobile-link" style={{ paddingLeft: '1rem' }}>Become a Volunteer</Link>
                <Link to="/faq" className="mobile-link" style={{ paddingLeft: '1rem' }}>Volunteer FAQ</Link>
                
                <div style={{ padding: '0.5rem 0', fontWeight: 'bold', color: 'var(--accent-orange)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Investigators</div>
                <Link to="/team" className="mobile-link" style={{ paddingLeft: '1rem' }}>Our PIs & Team</Link>
                <Link to="/why-choose-us" className="mobile-link" style={{ paddingLeft: '1rem' }}>Specialties & Expertise</Link>
                
                <div style={{ padding: '0.5rem 0', fontWeight: 'bold', color: 'var(--accent-orange)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Partners & CROs</div>
                <Link to="/facilities" className="mobile-link" style={{ paddingLeft: '1rem' }}>Facilities & Sites</Link>
                <Link to="/documentation" className="mobile-link" style={{ paddingLeft: '1rem' }}>Regulatory Documentation</Link>
                <Link to="/partners" className="mobile-link" style={{ paddingLeft: '1rem' }}>Feasibility Inquiry</Link>
                
                <div style={{ padding: '0.5rem 0', fontWeight: 'bold', color: 'var(--accent-orange)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Insights</div>
                <Link to="/blog" className="mobile-link" style={{ paddingLeft: '1rem' }}>Research News</Link>
            </div>
        </>
    );
};
