import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';
import { SEO } from '../components/SEO';

export const Team = () => {
    const { t } = useLanguage();
    const [selectedMember, setSelectedMember] = useState(null);

    const teamMembers = [
        {
            id: 'ather-hussain',
            name: 'Dr. Syed Ather Hussain, MD, MS',
            role: 'Chief Medical Officer & Principal Investigator',
            specialty: 'Nephrology & Internal Medicine',
            experience: '30+ Years of Clinical Research Experience',
            certifications: 'Board Certified in Nephrology & Internal Medicine | Certified GCP Investigator',
            bio: 'Dr. Hussain is a pioneer in clinical research with over three decades of clinical practice and research oversight. As our Chief Medical Officer and lead Principal Investigator, he directs the medical oversight and safety protocols for all clinical trials conducted in our network. He has served as Principal Investigator (PI) on over 80 clinical trials spanning Phase II to Phase IV.',
            details: {
                education: 'MD, Dow Medical College; MS in Clinical Research, UT Health Science Center.',
                focus: 'Renal pharmacokinetics, diabetic nephropathy, chronic kidney disease (CKD) progression, hypertension, and metabolic syndromes.',
                trialsGov: 'https://clinicaltrials.gov/search?term=Syed%20Ather%20Hussain',
                cvHighlights: [
                    'Over 30 years of medical practice and active clinical trial experience.',
                    'Principal Investigator on 80+ sponsor-initiated Phase II-IV trials.',
                    'Published researcher in major international nephrology journals.',
                    'Maintains active certifications in GCP, ICH E6 (R2), and Human Subject Protection.',
                    'Directs patient safety oversight and clinical review committees.'
                ]
            }
        },
        {
            id: 'aman-jafar',
            name: 'Dr. Aman Ali Jafar, MD',
            role: 'Director of Healthcare Operations & Administration',
            specialty: 'Healthcare Administration & Internal Medicine',
            experience: '25+ Years in Healthcare Operations & Administration',
            certifications: 'Board Certified in Internal Medicine',
            bio: 'Dr. Aman Ali Jafar manages site feasibility, corporate partnerships, and sponsor contracting. He serves as the primary liaison between Azul BioResearch, CROs, and pharmaceutical sponsors, coordinating study start-up times and operational efficiency across all network clinics.',
            details: {
                education: 'MD, Internal Medicine Residency Program.',
                focus: 'Site feasibility assessments, investigator network coordination, budgeting, and legal compliance.',
                trialsGov: 'https://clinicaltrials.gov',
                cvHighlights: [
                    '25+ years in medical administration and private practice operations.',
                    'Coordinates rapid CTA and CDA execution for incoming studies.',
                    'Maintains on-site regulatory binder compliance and financial audits.',
                    'Expert in clinical trials site feasibility and therapeutic mapping.'
                ]
            }
        }
    ];

    return (
        <SubpageLayout categoryKey="nav_about" titleKey="nav_team" subtitle="Meet the physician leaders, clinical operations experts, and SoCRA-certified research coordinators directing our network sites.">
            <SEO 
                title="Our Medical Directors & Principal Investigators"
                description="Meet the board-certified Principal Investigators and experienced clinical research coordinators directing studies at Azul Bio-Research."
                path="/team"
            />
            <div className="page-content-box">
                <div className="container">
                    <ScrollReveal className="section-header center" delay="1">
                        <span className="section-tag">Physician-Led Leadership</span>
                        <h2>Meet Our Principal Investigators</h2>
                        <p className="section-desc center">
                            Our team is led by board-certified physicians with over 30 years of clinical trial experience, 
                            ensuring safety, scientific integrity, and outstanding protocol compliance. 
                            Click on any investigator to view their CV highlights, specialties, and ClinicalTrials.gov profile.
                        </p>
                    </ScrollReveal>

                    <div className="team-grid" style={{ marginTop: '3rem' }}>
                        {teamMembers.map((member, index) => (
                            <ScrollReveal 
                                key={member.id} 
                                className="team-card" 
                                delay={String(index + 1)}
                                style={{ cursor: 'pointer', transition: 'var(--transition-smooth)' }}
                                onClick={() => setSelectedMember(member)}
                            >
                                <div className="team-img-placeholder" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
                                    <i className={member.id === 'ather-hussain' ? "fa-solid fa-user-doctor" : "fa-solid fa-user-tie"} style={{ color: 'var(--primary-blue)', opacity: 0.8 }}></i>
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        right: '10px',
                                        backgroundColor: 'var(--accent-orange)',
                                        color: '#fff',
                                        borderRadius: '50%',
                                        width: '32px',
                                        height: '32px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.9rem',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                                    }}>
                                        <i className="fa-solid fa-expand"></i>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h3 style={{ color: 'var(--primary-blue)', fontSize: '1.25rem' }}>{member.name}</h3>
                                    <span className="team-role" style={{ color: 'var(--accent-orange)', fontWeight: '600' }}>{member.role}</span>
                                    <p className="team-cert" style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>{member.experience}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* CTA section */}
                    <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                        <h4 style={{ color: 'var(--primary-blue)' }}>Want to collaborate with our PIs on an upcoming study?</h4>
                        <p style={{ color: 'var(--text-sub)', maxWidth: '600px', margin: '0.5rem auto 1.5rem auto' }}>
                            We respond to Sponsor and CRO feasibility requests within 24 hours. Contact our medical affairs office directly.
                        </p>
                        <div style={{ display: 'inline-flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <a href="mailto:info@azulbioresearch.com" className="btn btn-primary" style={{ padding: '0.7rem 1.8rem', fontSize: '0.95rem' }}>
                                <i className="fa-solid fa-envelope" style={{ marginRight: '0.5rem' }}></i> Email Operations
                            </a>
                            <a href="/partners" className="btn btn-secondary" style={{ padding: '0.7rem 1.8rem', fontSize: '0.95rem' }}>
                                Sponsor Partnerships
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile Detail Modal */}
            {selectedMember && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(15, 23, 42, 0.75)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 2000,
                    padding: '2rem',
                    backdropFilter: 'blur(4px)'
                }}>
                    <div style={{
                        backgroundColor: 'var(--bg-card)',
                        borderRadius: '16px',
                        width: '100%',
                        maxWidth: '750px',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        position: 'relative'
                    }}>
                        {/* Modal Header */}
                        <div style={{
                            padding: '2rem',
                            borderBottom: '1px solid var(--border-color)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            backgroundColor: 'var(--bg-secondary)',
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px'
                        }}>
                            <div>
                                <span style={{
                                    backgroundColor: 'var(--bg-light-blue)',
                                    color: 'var(--primary-blue)',
                                    fontWeight: '700',
                                    fontSize: '0.75rem',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '50px',
                                    textTransform: 'uppercase',
                                    border: '1px solid rgba(13, 148, 136, 0.15)'
                                }}>
                                    Principal Investigator
                                </span>
                                <h3 style={{ fontSize: '1.5rem', marginTop: '0.7rem', marginBottom: '0.2rem', color: 'var(--primary-blue)' }}>
                                    {selectedMember.name}
                                </h3>
                                <p style={{ margin: 0, fontWeight: '600', color: 'var(--text-sub)', fontSize: '0.95rem' }}>
                                    {selectedMember.role}
                                </p>
                            </div>
                            <button 
                                onClick={() => setSelectedMember(null)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    color: 'var(--text-sub)',
                                    cursor: 'pointer',
                                    padding: '0.2rem',
                                    lineHeight: 1
                                }}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div style={{ padding: '2rem' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>Credentials & Experience</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', margin: 0, fontWeight: '600' }}>
                                    {selectedMember.certifications}
                                </p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--accent-orange)', margin: '0.2rem 0 0 0', fontWeight: '700' }}>
                                    <i className="fa-solid fa-award"></i> {selectedMember.experience}
                                </p>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>Biography</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>
                                    {selectedMember.bio}
                                </p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>Clinical Focus</h4>
                                    <p style={{ fontSize: '0.92rem', color: 'var(--text-sub)', lineHeight: '1.5', margin: 0 }}>
                                        {selectedMember.details.focus}
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>Education & Training</h4>
                                    <p style={{ fontSize: '0.92rem', color: 'var(--text-sub)', lineHeight: '1.5', margin: 0 }}>
                                        {selectedMember.details.education}
                                    </p>
                                </div>
                            </div>

                            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-blue)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <i className="fa-solid fa-file-waveform" style={{ color: 'var(--accent-orange)' }}></i> Research & CV Highlights
                                </h4>
                                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-sub)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                    {selectedMember.details.cvHighlights.map((highlight, idx) => (
                                        <li key={idx} style={{ marginBottom: '0.5rem' }}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Buttons */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                                <a 
                                    href={selectedMember.details.trialsGov} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'var(--primary-blue)',
                                        fontSize: '0.9rem',
                                        fontWeight: '700',
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.4rem'
                                    }}
                                >
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i> ClinicalTrials.gov Registry Profile
                                </a>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button 
                                        onClick={() => setSelectedMember(null)}
                                        style={{
                                            background: 'none',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '50px',
                                            padding: '0.6rem 1.6rem',
                                            cursor: 'pointer',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            color: 'var(--text-sub)',
                                            transition: 'var(--transition-smooth)'
                                        }}
                                    >
                                        Close
                                    </button>
                                    <a 
                                        href={`mailto:info@azulbioresearch.com?subject=Inquiry for ${selectedMember.name}`}
                                        className="btn btn-primary"
                                        style={{
                                            borderRadius: '50px',
                                            padding: '0.6rem 1.6rem',
                                            fontSize: '0.9rem',
                                            fontWeight: '700',
                                            marginTop: 0
                                        }}
                                    >
                                        Email PI Office
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </SubpageLayout>
    );
};
