import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';
import { SEO } from '../components/SEO';

export const Technology = () => {
    const { t } = useLanguage();
    return (
        <SubpageLayout categoryKey="nav_capabilities" titleKey="nav_tech" subtitle="Explore the advanced diagnostics, data entry portals, and clinical integrations enabling GCP compliance and rapid trial execution.">
            <SEO 
                title="eSource & Clinical Trial Technology"
                description="How Azul Bio-Research runs trials on digital systems: eSource documentation, eRegulatory site files, and secure patient records under GCP and HIPAA guidelines."
                path="/technology"
            />
            <div className="page-content-box">
                <div className="container">
                    <div className="page-grid-2">
                        <ScrollReveal className="page-text" delay="1">
                            <h2 dangerouslySetInnerHTML={{ __html: t('tech_heading') }} />
                            <p>{t('tech_desc_p1')}</p>
                            <p>{t('tech_desc_p2')}</p>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('tech_sub1')}</strong> {t('tech_sub1_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('tech_sub2')}</strong> {t('tech_sub2_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('tech_sub3')}</strong> {t('tech_sub3_desc')}</span>
                                </li>
                            </ul>
                            <p className="page-text-links">
                                Related: <Link to="/facilities" className="inline-link">facility and equipment</Link> and <Link to="/documentation" className="inline-link">regulatory documentation</Link>.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal className="about-image" delay="2">
                            <div className="about-img-box">
                                <img src="/assets/medical_technology_portal.jpg" alt="Clinical data dashboard on screen at Azul Bio-Research" width="1376" height="768" loading="lazy" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
