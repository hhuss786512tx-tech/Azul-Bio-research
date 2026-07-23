import React from 'react';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';
import { SEO } from '../components/SEO';

export const Documentation = () => {
    const { t } = useLanguage();
    return (
        <SubpageLayout categoryKey="nav_facilities_parent" titleKey="nav_docs" subtitle="Direct access to our regulatory files, local licenses, GCP certification logs, and standard study initiation agreements.">
            <SEO 
                title="Documentation, SOPs & GCP Compliance"
                description="Review Azul Bio-Research regulatory documentation, GCP certifications, standard operating procedures, and FDA inspection readiness."
                path="/documentation"
            />
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
                                <img src="/assets/regulatory_affairs_compliance.jpg" alt="Documentation and Regulatory Compliance Binders" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
