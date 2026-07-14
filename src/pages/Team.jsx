import React from 'react';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';

export const Team = () => {
    const { t } = useLanguage();
    return (
        <SubpageLayout categoryKey="nav_about" titleKey="nav_team">
            <div className="page-content-box">
                <div className="container">
                    <ScrollReveal className="section-header center" delay="1">
                        <h2>{t('team_title')}</h2>
                        <p className="section-desc center">{t('team_desc')}</p>
                    </ScrollReveal>
                    <div className="team-grid">
                        <ScrollReveal className="team-card" delay="1">
                            <div className="team-img-placeholder">
                                <i className="fa-solid fa-user-tie"></i>
                            </div>
                            <div className="team-info">
                                <h3>Aman Ali Jafri, MD</h3>
                                <span className="team-role">Finance / Business Head</span>
                                <p className="team-cert">Board Certified in Internal Medicine</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal className="team-card" delay="2">
                            <div className="team-img-placeholder">
                                <i className="fa-solid fa-user-doctor"></i>
                            </div>
                            <div className="team-info">
                                <h3>Syed Ather Hussain, MD, MS</h3>
                                <span className="team-role">Medical Affairs Head</span>
                                <p className="team-cert">Board Certified in Nephrology & Internal Medicine</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal className="team-card" delay="3">
                            <div className="team-img-placeholder">
                                <i className="fa-solid fa-hospital-user"></i>
                            </div>
                            <div className="team-info">
                                <h3>S. Riaz Jafri, MD, CCRP</h3>
                                <span className="team-role">Operation Head</span>
                                <p className="team-cert">Certified Clinical Research Professional (CCRP)</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
