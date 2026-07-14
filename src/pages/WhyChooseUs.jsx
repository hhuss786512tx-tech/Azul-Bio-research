import React from 'react';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';

export const WhyChooseUs = () => {
    const { t } = useLanguage();
    return (
        <SubpageLayout categoryKey="nav_capabilities_parent" titleKey="nav_why_choose">
            <div className="page-content-box">
                <div className="container">
                    <div className="page-grid-2">
                        <ScrollReveal className="page-text" delay="1">
                            <h2 dangerouslySetInnerHTML={{ __html: t('why_choose_heading') }} />
                            <p>{t('why_choose_desc_p1')}</p>
                            <p>{t('why_choose_desc_p2')}</p>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('why_choose_sub1')}</strong> {t('why_choose_sub1_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('why_choose_sub2')}</strong> {t('why_choose_sub2_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('why_choose_sub3')}</strong> {t('why_choose_sub3_desc')}</span>
                                </li>
                            </ul>
                        </ScrollReveal>
                        <ScrollReveal className="about-image" delay="2">
                            <div className="about-img-box">
                                <img src="/assets/hero.jpg" alt="Why Choose Azul Bio-Research" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
