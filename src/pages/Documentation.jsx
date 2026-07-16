import React from 'react';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';

export const Documentation = () => {
    const { t } = useLanguage();
    return (
        <SubpageLayout categoryKey="nav_facilities_parent" titleKey="nav_docs" subtitle="Direct access to our regulatory files, local licenses, GCP certification logs, and standard study initiation agreements.">
            <div className="page-content-box">
                <div className="container">
                    <div className="page-grid-2">
                        <ScrollReveal className="page-text" delay="1">
                            <h2 dangerouslySetInnerHTML={{ __html: t('docs_heading') }} />
                            <p>{t('docs_desc')}</p>
                            <p>{t('docs_text')}</p>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('docs_sub1')}</strong> {t('docs_sub1_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('docs_sub2')}</strong> {t('docs_sub2_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('docs_sub3')}</strong> {t('docs_sub3_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('docs_sub4')}</strong> {t('docs_sub4_desc')}</span>
                                </li>
                            </ul>
                        </ScrollReveal>
                        <ScrollReveal className="about-image" delay="2">
                            <div className="about-img-box">
                                <img src="/assets/subpage_docs.jpg" alt="Documentation availability" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
