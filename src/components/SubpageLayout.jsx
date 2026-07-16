import React from 'react';
import { useLanguage } from '../LanguageContext';

export const SubpageLayout = ({ categoryKey, titleKey, subtitle, children }) => {
    const { t } = useLanguage();
    return (
        <main className="page-main">
            <section className="page-header">
                <div className="container">
                    <span className="page-category">{t(categoryKey)}</span>
                    <h1 className="page-title">{t(titleKey)}</h1>
                    {subtitle && <p className="page-subtitle">{subtitle}</p>}
                </div>
            </section>
            {children}
        </main>
    );
};
