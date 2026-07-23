import React from 'react';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';
import { SEO } from '../components/SEO';

export const AboutUs = () => {
    const { t } = useLanguage();
    return (
        <SubpageLayout categoryKey="nav_about" titleKey="nav_about" subtitle="Azul BioResearch is a physician-led network conducting high-fidelity clinical trials with a primary commitment to data integrity and patient safety.">
            <SEO 
                title="About Our Clinical Research Center & Mission"
                description="Learn about Azul Bio-Research's physician-led network, mission, state-of-the-art facility, and commitment to data integrity and patient safety."
                path="/about-us"
            />
            <div className="page-content-box">
                <div className="container">
                    <div className="page-grid-2">
                        <ScrollReveal className="page-text" delay="1">
                            <h2 dangerouslySetInnerHTML={{ __html: t('about_heading') }} />
                            <p>{t('about_desc')}</p>
                            <p>{t('about_text')}</p>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('about_hl1')}</strong> {t('about_hl1_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('about_hl2')}</strong> {t('about_hl2_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('about_hl3')}</strong> {t('about_hl3_desc')}</span>
                                </li>
                            </ul>
                        </ScrollReveal>
                        <ScrollReveal className="about-image" delay="2">
                            <div className="about-img-box">
                                <img src="/assets/physician_patient_consult.jpg" alt="About Azul Bio-Research Physician and Patient Consultation" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
