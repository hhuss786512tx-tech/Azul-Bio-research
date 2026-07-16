import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col footer-brand">
                        <Link to="/" className="logo">
                            <img 
                                src="/assets/azul_logo_dark_bg.png" 
                                alt="azul Bio-Research" 
                                className="logo-img" 
                            />
                        </Link>
                        <p className="footer-about-text" dangerouslySetInnerHTML={{ __html: t('footer_desc') }} />
                    </div>
                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>{t('footer_nav')}</h4>
                            <Link to="/">{t('nav_home')}</Link>
                            <Link to="/about-us">{t('nav_about')}</Link>
                            <Link to="/active-trials">{t('nav_active_trials')}</Link>
                            <Link to="/facilities">{t('nav_facilities')}</Link>
                            <Link to="/documentation">{t('nav_docs')}</Link>
                        </div>
                        <div className="footer-col">
                            <h4>{t('footer_contact')}</h4>
                            <p className="foot-info-text">
                                <i className="fa-solid fa-location-dot"></i> 
                                <a href="https://www.google.com/maps/search/?api=1&query=3531+Town+Center+Blvd+Suite+101+Sugar+Land+TX+77479" target="_blank" rel="noopener noreferrer" className="foot-map-link">
                                    3531 Town Center Blvd., Suite 101, Sugar Land, TX 77479
                                </a>
                            </p>
                            <p className="foot-info-text"><i className="fa-solid fa-phone"></i> (800) 555-AZUL</p>
                            <p className="foot-info-text">
                                <i className="fa-solid fa-envelope"></i> 
                                <a href="mailto:info@azulbioresearch.com">info@azulbioresearch.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 azul Bio-Research. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
