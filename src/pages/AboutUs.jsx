import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';
import { SEO } from '../components/SEO';

export const AboutUs = () => {
    const { t } = useLanguage();
    return (
        <SubpageLayout categoryKey="nav_about" titleKey="nav_about" subtitle="Azul BioResearch is a physician-led network conducting high-fidelity clinical trials with a primary commitment to data integrity and patient safety.">
            <SEO 
                title="About Our Clinical Research Site"
                description="Azul Bio-Research is a physician-led clinical research network in Sugar Land, Texas. Our mission, our investigators, and how we protect data and patient safety."
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
                            <p className="page-text-links">
                                Meet <Link to="/team" className="inline-link">our investigators</Link>, tour <Link to="/facilities" className="inline-link">our facility</Link>, or see <Link to="/active-trials" className="inline-link">active trials</Link>.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal className="about-image" delay="2">
                            <div className="about-img-box">
                                <img src="/assets/physician_patient_consult.jpg" alt="Physician consulting with a patient at Azul Bio-Research" width="1376" height="768" loading="lazy" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
