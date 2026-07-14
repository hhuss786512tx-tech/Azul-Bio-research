import React from 'react';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';

export const Facilities = () => {
    const { t } = useLanguage();
    return (
        <SubpageLayout categoryKey="nav_facilities_parent" titleKey="nav_facilities">
            <div className="page-content-box">
                <div className="container">
                    <div className="page-grid-2">
                        <ScrollReveal className="page-text" delay="1">
                            <h2 dangerouslySetInnerHTML={{ __html: t('facilities_heading') }} />
                            <p>{t('facilities_desc')}</p>
                            <p>{t('facilities_text')}</p>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('facilities_sub1')}</strong> {t('facilities_sub1_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('facilities_sub2')}</strong> {t('facilities_sub2_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('facilities_sub3')}</strong> {t('facilities_sub3_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('facilities_sub4')}</strong> {t('facilities_sub4_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-chevron-right"></i> 
                                    <span><strong>{t('facilities_sub5')}</strong> {t('facilities_sub5_desc')}</span>
                                </li>
                            </ul>
                        </ScrollReveal>
                        <ScrollReveal className="about-image" delay="2">
                            <div className="about-img-box">
                                <img src="/assets/facility_lab.jpg" alt="Clinical trial facilities" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
