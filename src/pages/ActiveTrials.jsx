import React from 'react';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';

export const ActiveTrials = () => {
    const { t } = useLanguage();
    return (
        <SubpageLayout categoryKey="nav_active_trials" titleKey="nav_active_trials">
            <div className="page-content-box">
                <div className="container">
                    <ScrollReveal className="section-header center" delay="1">
                        <span className="section-tag">{t('spec_tag')}</span>
                        <h2>{t('spec_title')}</h2>
                        <p className="section-desc center">{t('spec_desc')}</p>
                    </ScrollReveal>
                    
                    <div className="specialties-grid" style={{ marginTop: '4rem' }}>
                        <ScrollReveal className="spec-card" delay="1">
                            <div className="spec-icon"><i className="fa-solid fa-house-medical"></i></div>
                            <h3>{t('spec_im')}</h3>
                            <p>{t('spec_im_desc')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="spec-card" delay="2">
                            <div className="spec-icon"><i className="fa-solid fa-stomach"></i></div>
                            <h3>{t('spec_gi')}</h3>
                            <p>{t('spec_gi_desc')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="spec-card" delay="3">
                            <div className="spec-icon"><i className="fa-solid fa-hand-holding-hand"></i></div>
                            <h3>{t('spec_rh')}</h3>
                            <p>{t('spec_rh_desc')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="spec-card" delay="4">
                            <div className="spec-icon"><i className="fa-solid fa-kidneys"></i></div>
                            <h3>{t('spec_np')}</h3>
                            <p>{t('spec_np_desc')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="spec-card" delay="5">
                            <div className="spec-icon"><i className="fa-solid fa-brain"></i></div>
                            <h3>{t('spec_mh')}</h3>
                            <p>{t('spec_mh_desc')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="spec-card spec-more-card" delay="6" style={{ backgroundColor: 'var(--primary-blue)', color: 'var(--text-light)' }}>
                            <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
                                <i className="fa-solid fa-shield-virus" style={{ color: 'var(--accent-orange)', fontSize: '1.5rem', marginRight: '0.5rem' }}></i> 
                                <span>{t('spec_more')}</span>
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '0.5rem' }}><i className="fa-solid fa-check" style={{ color: 'var(--accent-orange)' }}></i> {t('spec_cd')}</p>
                            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '0.5rem' }}><i className="fa-solid fa-check" style={{ color: 'var(--accent-orange)' }}></i> {t('spec_id')}</p>
                            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '0.5rem' }}><i className="fa-solid fa-check" style={{ color: 'var(--accent-orange)' }}></i> {t('spec_em')}</p>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
