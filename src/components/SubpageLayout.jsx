import React from 'react';
import { useLanguage } from '../LanguageContext';

export const SubpageLayout = ({ categoryKey, titleKey, children }) => {
    const { t } = useLanguage();
    return (
        <main className="page-main">
            <section className="page-header">
                <div className="container">
                    <span className="page-category">{t(categoryKey)}</span>
                    <h1 className="page-title">{t(titleKey)}</h1>
                </div>
            </section>
            {children}
        </main>
    );
};
