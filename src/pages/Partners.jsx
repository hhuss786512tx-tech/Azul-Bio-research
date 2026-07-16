import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';

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
        <SubpageLayout categoryKey="nav_about" titleKey="nav_partners">
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
                        
                        {/* Streamlined Feasibility Form */}
                        <ScrollReveal className="contact-form-container reveal-right" delay="2" style={{
                            border: '1px solid var(--border-color)',
                            borderRadius: '12px',
                            padding: '2.5rem',
                            backgroundColor: 'var(--bg-card)',
                            boxShadow: '0 10px 35px rgba(0,0,0,0.02)'
                        }}>
                            <h3 style={{ color: 'var(--primary-blue)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Feasibility Inquiry</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', marginBottom: '1.8rem' }}>
                                Sponsors & CROs: Submit study parameters below. Our operations team will respond with a completed feasibility questionnaire within 24 hours.
                            </p>

                            {submitStatus === 'success' ? (
                                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                                    <div style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '50%',
                                        backgroundColor: '#dcfce7',
                                        color: '#166534',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.8rem',
                                        margin: '0 auto 1rem auto'
                                    }}>
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>Inquiry Submitted</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: '1.5' }}>
                                        Thank you! A completed site feasibility profile will be sent to your email. You can also send protocols directly to <strong>info@azulbioresearch.com</strong>.
                                    </p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleFormSubmit}>
                                    <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                                        <label htmlFor="croName" style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-sub)' }}>Sponsor / CRO Company Name *</label>
                                        <input type="text" id="croName" required value={formData.croName} onChange={handleInputChange} placeholder="e.g. Vertex Pharmaceuticals" style={{ width: '100%', padding: '0.65rem' }} />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                                        <label htmlFor="contactName" style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-sub)' }}>Contact Name *</label>
                                        <input type="text" id="contactName" required value={formData.contactName} onChange={handleInputChange} placeholder="Name" style={{ width: '100%', padding: '0.65rem' }} />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                                        <label htmlFor="email" style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-sub)' }}>Work Email *</label>
                                        <input type="email" id="email" required value={formData.email} onChange={handleInputChange} placeholder="name@company.com" style={{ width: '100%', padding: '0.65rem' }} />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                                        <label htmlFor="protocolId" style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-sub)' }}>Protocol Number / Phase</label>
                                        <input type="text" id="protocolId" value={formData.protocolId} onChange={handleInputChange} placeholder="e.g. Study Phase II" style={{ width: '100%', padding: '0.65rem' }} />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                                        <label htmlFor="therapeuticArea" style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-sub)' }}>Therapeutic Specialty</label>
                                        <select id="therapeuticArea" value={formData.therapeuticArea} onChange={handleInputChange} style={{ width: '100%', padding: '0.65rem' }}>
                                            <option value="internal_medicine">Internal Medicine</option>
                                            <option value="pulmonary">Pulmonology (COPD / LAM)</option>
                                            <option value="gastroenterology">Gastroenterology</option>
                                            <option value="nephrology">Nephrology</option>
                                            <option value="other">Other Indication</option>
                                        </select>
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                                        <label htmlFor="message" style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-sub)' }}>Brief Protocol Summary / Notes</label>
                                        <textarea id="message" value={formData.message} onChange={handleInputChange} rows="3" placeholder="Enter basic inclusion/exclusion highlights or target startup timeline..." style={{ width: '100%', padding: '0.65rem' }}></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="btn btn-submit"
                                        disabled={submitStatus === 'loading'}
                                        style={{
                                            width: '100%',
                                            borderRadius: '50px',
                                            padding: '0.75rem',
                                            fontSize: '0.9rem',
                                            fontWeight: '700',
                                            marginTop: '0.5rem'
                                        }}
                                    >
                                        {submitStatus === 'loading' ? 'Sending...' : 'Request Feasibility'}
                                    </button>
                                </form>
                            )}
                        </ScrollReveal>

                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
