import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { SEO } from '../components/SEO';

export const NotFound = () => {
    const { t } = useLanguage();
    return (
        <main className="page-main">
            <SEO
                title="Page Not Found"
                description="The page you were looking for doesn't exist or has moved."
            />
            <section className="page-header">
                <div className="container">
                    <span className="page-category">404</span>
                    <h1 className="page-title">Page not found</h1>
                    <p className="page-subtitle">The page you were looking for doesn't exist or has moved.</p>
                </div>
            </section>
            <div className="page-content-box">
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    <Link to="/" className="btn btn-primary">{t('nav_home')}</Link>
                    <Link to="/active-trials" className="btn btn-secondary">{t('nav_active_trials')}</Link>
                </div>
            </div>
        </main>
    );
};
