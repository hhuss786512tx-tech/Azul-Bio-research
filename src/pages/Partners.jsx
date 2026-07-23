import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';
import { SEO } from '../components/SEO';

export const Partners = () => {
    const { t } = useLanguage();
    const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success
    const [formData, setFormData] = useState({
        croName: '',
        contactName: '',
        email: '',
        protocolId: '',
        therapeuticArea: 'internal_medicine',
        message: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmitStatus('loading');

        setTimeout(() => {
            setSubmitStatus('success');
            setFormData({
                croName: '',
                contactName: '',
                email: '',
                protocolId: '',
                therapeuticArea: 'internal_medicine',
                message: ''
            });
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        }, 1200);
    };

    return (
        <SubpageLayout categoryKey="nav_about" titleKey="nav_partners" subtitle="Partner with a clinical network committed to protocol adherence, database-backed patient enrollment, and rapid local/central IRB validation.">
            <SEO 
                title="Sponsor & CRO Clinical Trial Partnerships"
                description="Partner with Azul Bio-Research for rapid IRB submission, fast study startup, rapid site feasibility, and reliable patient recruitment."
                path="/partners"
            />
            <div className="page-content-box">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'start' }}>
                        
                        {/* CRO Content Side */}
                        <ScrollReveal className="page-text" delay="1">
                            <h2 style={{ color: 'var(--primary-blue)', fontSize: '2rem', marginBottom: '1.5rem' }}>
                                CRO & Sponsor Clinical Research Partnerships
                            </h2>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-sub)' }}>
                                Azul BioResearch is a physician-led network conducting high-quality Phase II - IV clinical trials. 
                                We are structured to act as a highly efficient site partner for global Contract Research Organizations (CROs) and pharmaceutical sponsors.
                            </p>
                            
                            <h3 style={{ color: 'var(--primary-blue)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.35rem' }}>
                                Site Capabilities & Benchmarks
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '1.5rem 0' }}>
                                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                    <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.4rem', fontSize: '1.05rem' }}>
                                        <i className="fa-solid fa-clock-rotate-left" style={{ color: 'var(--accent-orange)', marginRight: '0.5rem' }}></i>
                                        Rapid Start-Up
                                    </h4>
                                    <p style={{ fontSize: '0.88rem', margin: 0, color: 'var(--text-sub)' }}>
                                        CDA and contract execution completed in 5-7 days. Central IRB approval accepted.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                    <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.4rem', fontSize: '1.05rem' }}>
                                        <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-orange)', marginRight: '0.5rem' }}></i>
                                        Quality Data
                                    </h4>
                                    <p style={{ fontSize: '0.88rem', margin: 0, color: 'var(--text-sub)' }}>
                                        Strict adherence to ALCOA+ data guidelines and certified GCP/ICH research coordinators.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                    <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.4rem', fontSize: '1.05rem' }}>
                                        <i className="fa-solid fa-users-viewfinder" style={{ color: 'var(--accent-orange)', marginRight: '0.5rem' }}></i>
                                        Patient Recruitment
                                    </h4>
                                    <p style={{ fontSize: '0.88rem', margin: 0, color: 'var(--text-sub)' }}>
                                        Direct access to a proprietary network database of 15,000+ localized patients for active enrollment.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                    <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.4rem', fontSize: '1.05rem' }}>
                                        <i className="fa-solid fa-snowflake" style={{ color: 'var(--accent-orange)', marginRight: '0.5rem' }}></i>
                                        Cold Chain & Equipment
                                    </h4>
                                    <p style={{ fontSize: '0.88rem', margin: 0, color: 'var(--text-sub)' }}>
                                        CLIA lab, PBMC centrifuges, -70°C/-20°C freezers with 24/7 digital excursion alerts.
                                    </p>
                                </div>
                            </div>

                            <h3 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.35rem' }}>
                                Clinical Trials Directory & Sourcing
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-sub)' }}>
                                We recruit for indications in Internal Medicine, Nephrology, Respiratory (COPD, Asthma), Gastroenterology (IBD, Crohn's), Rheumatology, Cardiology, and Metabolic Disorders. Sponsors can audit our regulatory binder templates, SOP index, and site equipment log on our <a href="/documentation" style={{ color: 'var(--primary-blue)', fontWeight: '700', textDecoration: 'none' }}>Documentation page</a>.
                            </p>
                        </ScrollReveal>
                        
                        {/* Sponsor & CRO Medical Operations Contact Card */}
                        <ScrollReveal className="contact-form-container reveal-right" delay="2" style={{
                            border: '1px solid var(--border-color)',
                            borderRadius: '12px',
                            padding: '2.5rem',
                            backgroundColor: 'var(--bg-card)',
                            boxShadow: '0 10px 35px rgba(0,0,0,0.02)'
                        }}>
                            <h3 style={{ color: 'var(--primary-blue)', fontSize: '1.4rem', marginBottom: '0.8rem' }}>
                                Sponsor & CRO Operations Office
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                Azul Bio-Research regularly submits completed site feasibility profiles and regulatory binders directly to CROs and Sponsors. To submit a protocol or request site capabilities:
                            </p>

                            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.2rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
                                <p style={{ fontSize: '0.88rem', margin: '0 0 0.8rem 0', color: 'var(--text-main)', fontWeight: '600' }}>
                                    <i className="fa-solid fa-envelope" style={{ color: 'var(--accent-orange)', marginRight: '0.5rem' }}></i>
                                    Direct Protocol Submission:
                                </p>
                                <a href="mailto:info@azulbioresearch.com" style={{ color: 'var(--primary-blue)', fontWeight: '700', fontSize: '0.95rem', textDecoration: 'none' }}>
                                    info@azulbioresearch.com
                                </a>
                            </div>

                            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.2rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
                                <p style={{ fontSize: '0.88rem', margin: '0 0 0.4rem 0', color: 'var(--text-main)', fontWeight: '600' }}>
                                    <i className="fa-solid fa-phone" style={{ color: 'var(--accent-orange)', marginRight: '0.5rem' }}></i>
                                    Site Operations Hotline:
                                </p>
                                <span style={{ color: 'var(--text-sub)', fontWeight: '600', fontSize: '0.95rem' }}>(800) 555-AZUL</span>
                            </div>

                            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                <p style={{ fontSize: '0.88rem', margin: '0 0 0.4rem 0', color: 'var(--text-main)', fontWeight: '600' }}>
                                    <i className="fa-solid fa-file-contract" style={{ color: 'var(--accent-orange)', marginRight: '0.5rem' }}></i>
                                    Regulatory Binders & SOPs:
                                </p>
                                <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-sub)' }}>
                                    Review FDA Form 1572s, GCP logs, and site SOPs on our <a href="/documentation" style={{ color: 'var(--primary-blue)', fontWeight: '700' }}>Documentation page</a>.
                                </p>
                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
