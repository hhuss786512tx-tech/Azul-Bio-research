import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';
import { SEO } from '../components/SEO';

export const Documentation = () => {
    const { t } = useLanguage();
    return (
        <SubpageLayout categoryKey="nav_facilities_parent" titleKey="nav_docs" subtitle="Direct access to our regulatory files, local licenses, GCP certification logs, and standard study initiation agreements.">
            <SEO 
                title="Regulatory Documentation & SOPs"
                description="Regulatory documentation Azul Bio-Research keeps ready for sponsors: FDA Form 1572s and CVs, CDAs and CTAs, GCP and IATA training logs, and calibration logs."
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
                            <p className="page-text-links">
                                To request documents or submit a protocol, visit <Link to="/partners" className="inline-link">Sponsor Partnerships</Link>.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal className="about-image" delay="2">
                            <div className="about-img-box">
                                <img src="/assets/regulatory_compliance_officer.jpg" alt="Regulatory binders and study files at Azul Bio-Research" width="1376" height="768" loading="lazy" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
