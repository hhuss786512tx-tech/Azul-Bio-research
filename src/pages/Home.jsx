import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { SEO } from '../components/SEO';

export const Home = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        specialty: 'internal',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success
    const [activeSlide, setActiveSlide] = useState(0);
    const [selectedMember, setSelectedMember] = useState(null);

    const teamMembers = [
        {
            id: 'ather-hussain',
            name: 'Dr. Syed Ather Hussain, MD, MS',
            role: 'Medical Affairs Head & Lead Principal Investigator',
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

    const newsSlides = [
        {
            text: "We are excited to announce the expansion of our Sugar Land clinical research facilities, adding advanced PBMC processing capabilities and low-temperature storage.",
            link: "/facilities"
        },
        {
            text: "Azul BioResearch begins site feasibility assessment for upcoming multi-center Phase II clinical studies in respiratory care (LAM-001 study).",
            link: "/active-trials"
        },
        {
            text: "Dr. Syed Ather Hussain and our clinical compliance leads complete standard GCP/ICH audits with zero deviations across our investigator network.",
            link: "/documentation"
        },
        {
            text: "New patient registry database features are now online, streamlining volunteer screening for nephrology and gastroenterology cohorts.",
            link: "/become-volunteer"
        }
    ];

    const handleNextSlide = () => {
        setActiveSlide(prev => (prev + 1) % newsSlides.length);
    };

    const handlePrevSlide = () => {
        setActiveSlide(prev => (prev - 1 + newsSlides.length) % newsSlides.length);
    };

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
                fname: '',
                lname: '',
                email: '',
                phone: '',
                specialty: 'internal',
                message: ''
            });

            setTimeout(() => {
                setSubmitStatus('idle');
            }, 3000);
        }, 1000);
    };

    return (
        <div className="home-page-content">
            <SEO 
                title="Clinical Research Site & Medical Trial Center"
                description="Azul Bio-Research is a premier clinical trial site in Texas delivering protocol adherence, high subject retention, and clean data for sponsors and CROs."
                path="/"
            />
            {/* Hero Section */}
            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <span className="hero-badge">{t('hero_badge')}</span>
                        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t('hero_title') }} />
                        <p className="hero-subtitle">{t('hero_subtitle')}</p>
                        <div className="hero-actions">
                            <Link to="/why-choose-us" className="btn btn-primary">
                                {t('hero_btn_1')} <i className="fa-solid fa-chevron-right"></i>
                            </Link>
                            <a href="#contact" className="btn btn-secondary">{t('hero_btn_2')}</a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="hero-image-wrapper reveal-right revealed">
                            <div className="blob-frame circle-frame">
                                <div className="blob-image circle-image" style={{ backgroundImage: "url('/assets/hero_physicians_consult.jpg')" }}></div>
                                <div className="particle-ring">
                                    <div className="particle p1"></div>
                                    <div className="particle p2"></div>
                                    <div className="particle p3"></div>
                                    <div className="particle p4"></div>
                                    <div className="particle p5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator-wrapper">
                    <a href="#about" className="scroll-indicator">
                        <span>Scroll for more</span>
                        <i className="fa-solid fa-chevron-down scroll-arrow"></i>
                    </a>
                </div>
            </section>

            {/* Stats Cards Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <ScrollReveal className="stat-card" delay="1">
                            <div className="stat-icon"><i className="fa-solid fa-hospital-user"></i></div>
                            <h3 className="stat-number">{t('stats_title_1')}</h3>
                            <p className="stat-desc">{t('stats_desc_1')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="stat-card" delay="2">
                            <div className="stat-icon"><i className="fa-solid fa-user-doctor"></i></div>
                            <h3 className="stat-number">{t('stats_title_2')}</h3>
                            <p className="stat-desc">{t('stats_desc_2')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="stat-card" delay="3">
                            <div className="stat-icon"><i className="fa-solid fa-award"></i></div>
                            <h3 className="stat-number">{t('stats_title_3')}</h3>
                            <p className="stat-desc">{t('stats_desc_3')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="stat-card" delay="4">
                            <div className="stat-icon"><i className="fa-solid fa-stethoscope"></i></div>
                            <h3 className="stat-number">{t('stats_title_4')}</h3>
                            <p className="stat-desc">{t('stats_desc_4')}</p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
            <section id="about" className="about">
                <div className="container">
                    <div className="about-grid">
                        <ScrollReveal className="about-content" delay="1">
                            <span className="section-tag">{t('about_tag')}</span>
                            <h2 className="section-title">{t('about_title')}</h2>
                            <p className="about-lead">{t('about_desc')}</p>
                            <p className="about-text">{t('about_text')}</p>
                            
                            <div className="about-highlights">
                                <div className="highlight-item">
                                    <div className="highlight-icon"><i className="fa-solid fa-circle-check"></i></div>
                                    <div>
                                        <h4>{t('about_hl_1')}</h4>
                                        <p>{t('about_hl_1_sub')}</p>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <div className="highlight-icon"><i className="fa-solid fa-circle-check"></i></div>
                                    <div>
                                        <h4>{t('about_hl_2')}</h4>
                                        <p>{t('about_hl_2_sub')}</p>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <div className="highlight-icon"><i className="fa-solid fa-circle-check"></i></div>
                                    <div>
                                        <h4>{t('about_hl_3')}</h4>
                                        <p>{t('about_hl_3_sub')}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal className="about-image" delay="2">
                            <div className="about-img-box">
                                <img src="/assets/patient_volunteer_care.jpg" alt="Clinical trial patient volunteer care and consultation" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Specialties Section */}
            <section id="specialties" className="specialties">
                <div className="container">
                    <ScrollReveal className="section-header center">
                        <span className="section-tag">{t('spec_tag')}</span>
                        <h2>{t('spec_title')}</h2>
                        <p className="section-desc center">{t('spec_desc')}</p>
                    </ScrollReveal>
                    <div className="specialties-grid">
                        <ScrollReveal className="spec-card" delay="1">
                            <div className="spec-icon"><i className="fa-solid fa-capsules"></i></div>
                            <h3>{t('spec_im')}</h3>
                            <p>{t('spec_im_desc')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="spec-card" delay="2">
                            <div className="spec-icon"><i className="fa-solid fa-stomach"></i></div>
                            <h3>{t('spec_gi')}</h3>
                            <p>{t('spec_gi_desc')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="spec-card" delay="3">
                            <div className="spec-icon"><i className="fa-solid fa-bone"></i></div>
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
                        <ScrollReveal className="spec-card spec-more-card" delay="6">
                            <div className="spec-icon"><i className="fa-solid fa-plus"></i></div>
                            <h3>{t('spec_more')}</h3>
                            <div className="more-list">
                                <span><i className="fa-solid fa-shield-virus"></i> {t('spec_id')}</span>
                                <span><i className="fa-solid fa-heart-pulse"></i> {t('spec_cd')}</span>
                                <span><i className="fa-solid fa-syringe"></i> {t('spec_em')}</span>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section id="facilities" className="facilities-section-home">
                <div className="container">
                    <ScrollReveal className="section-header center">
                        <span className="section-tag">{t('fac_tag')}</span>
                        <h2>{t('fac_title')}</h2>
                        <p className="section-desc center">{t('fac_desc')}</p>
                    </ScrollReveal>
                    <div className="facilities-grid">
                        <ScrollReveal className="facility-left" delay="1">
                            <div className="fac-list-item">
                                <div className="fac-list-icon"><i className="fa-solid fa-microscope"></i></div>
                                <div>
                                    <h4>{t('fac_hl_1')}</h4>
                                    <p>{t('fac_hl_1_sub')}</p>
                                </div>
                            </div>
                            <div className="fac-list-item">
                                <div className="fac-list-icon"><i className="fa-solid fa-plane-departure"></i></div>
                                <div>
                                    <h4>{t('fac_hl_2')}</h4>
                                    <p>{t('fac_hl_2_sub')}</p>
                                </div>
                            </div>
                            <div className="fac-list-item">
                                <div className="fac-list-icon"><i className="fa-solid fa-snowflake"></i></div>
                                <div>
                                    <h4>{t('fac_hl_3')}</h4>
                                    <p>{t('fac_hl_3_sub')}</p>
                                </div>
                            </div>
                            <div className="fac-list-item">
                                <div className="fac-list-icon"><i className="fa-solid fa-bell"></i></div>
                                <div>
                                    <h4>{t('fac_hl_4')}</h4>
                                    <p>{t('fac_hl_4_sub')}</p>
                                </div>
                            </div>
                            <div className="fac-list-item">
                                <div className="fac-list-icon"><i className="fa-solid fa-spinner"></i></div>
                                <div>
                                    <h4>{t('fac_hl_5')}</h4>
                                    <p>{t('fac_hl_5_sub')}</p>
                                </div>
                            </div>
                            <div className="fac-list-item">
                                <div className="fac-list-icon"><i className="fa-solid fa-hospital"></i></div>
                                <div>
                                    <h4>{t('fac_hl_6')}</h4>
                                    <p>{t('fac_hl_6_sub')}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal className="facility-right" delay="2">
                            <div className="facility-card">
                                <h3>{t('fac_card_1_title')}</h3>
                                <p>{t('fac_card_1_desc')}</p>
                            </div>
                            <div className="facility-card">
                                <h3>{t('fac_card_2_title')}</h3>
                                <p>{t('fac_card_2_desc')}</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Documentation Section */}
            <section id="documentation" className="docs-section">
                <div className="container">
                    <ScrollReveal className="section-header center">
                        <span className="section-tag">{t('doc_tag')}</span>
                        <h2>{t('doc_title')}</h2>
                        <p className="section-desc center">{t('doc_desc')}</p>
                    </ScrollReveal>
                    <div className="docs-grid">
                        <ScrollReveal className="doc-card" delay="1">
                            <div className="doc-icon"><i className="fa-solid fa-file-invoice"></i></div>
                            <h3>{t('doc_c1_title')}</h3>
                            <p>{t('doc_c1_desc')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="doc-card" delay="2">
                            <div className="doc-icon"><i className="fa-solid fa-file-contract"></i></div>
                            <h3>{t('doc_c2_title')}</h3>
                            <p>{t('doc_c2_desc')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="doc-card" delay="3">
                            <div className="doc-icon"><i className="fa-solid fa-graduation-cap"></i></div>
                            <h3>{t('doc_c3_title')}</h3>
                            <p>{t('doc_c3_desc')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="doc-card" delay="4">
                            <div className="doc-icon"><i className="fa-solid fa-sitemap"></i></div>
                            <h3>{t('doc_c4_title')}</h3>
                            <p>{t('doc_c4_desc')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="doc-card" delay="5">
                            <div className="doc-icon"><i className="fa-solid fa-gauge-high"></i></div>
                            <h3>{t('doc_c5_title')}</h3>
                            <p>{t('doc_c5_desc')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="doc-card" delay="6">
                            <div className="doc-icon"><i className="fa-solid fa-clipboard-user"></i></div>
                            <h3>{t('doc_c6_title')}</h3>
                            <p>{t('doc_c6_desc')}</p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section id="locations" className="locations-section">
                <div className="container">
                    <ScrollReveal className="section-header center">
                        <span className="section-tag">{t('nav_facilities')}</span>
                        <h2>{t('locations_title')}</h2>
                        <p className="section-desc center">{t('locations_desc')}</p>
                    </ScrollReveal>
                    <div className="locations-grid">
                        <ScrollReveal className="location-card">
                            <a href="https://www.google.com/maps/search/?api=1&query=3531+Town+Center+Blvd+Suite+101+Sugar+Land+TX+77479" target="_blank" rel="noopener noreferrer" className="location-card-image" style={{ display: 'block' }}>
                                <img src="/assets/location_sugarland.jpg" alt="Sugar Land Research Center" />
                            </a>
                            <div className="location-card-content">
                                <div className="location-header">
                                    <span className="location-city">Sugar Land, TX</span>
                                    <i className="fa-solid fa-location-dot location-marker"></i>
                                </div>
                                <h3 className="location-name">
                                    <a href="https://www.google.com/maps/search/?api=1&query=3531+Town+Center+Blvd+Suite+101+Sugar+Land+TX+77479" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        Azul Bio-Research Center
                                    </a>
                                </h3>
                                <div className="location-details-list">
                                    <p>
                                        <i className="fa-solid fa-map-location-dot"></i> 
                                        <a href="https://www.google.com/maps/search/?api=1&query=3531+Town+Center+Blvd+Suite+101+Sugar+Land+TX+77479" target="_blank" rel="noopener noreferrer" className="location-map-link">
                                            3531 Town Center Blvd., Suite 101, Sugar Land, TX 77479
                                        </a>
                                    </p>
                                    <p>
                                        <i className="fa-solid fa-envelope"></i> 
                                        <a href="mailto:info@azulbioresearch.com">info@azulbioresearch.com</a>
                                    </p>
                                    <p><i className="fa-solid fa-phone"></i> <span>(800) 555-AZUL</span></p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="team-section">
                <div className="container">
                    <ScrollReveal className="section-header center">
                        <span className="section-tag">{t('nav_team')}</span>
                        <h2>{t('team_title')}</h2>
                        <p className="section-desc center">{t('team_desc')}</p>
                    </ScrollReveal>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <ScrollReveal 
                                key={member.id} 
                                className="team-card" 
                                delay={(index + 1).toString()}
                                style={{ cursor: 'pointer' }}
                                onClick={() => setSelectedMember(member)}
                            >
                                <div className="team-img-placeholder">
                                    <i className={index === 0 ? "fa-solid fa-user-doctor" : index === 1 ? "fa-solid fa-hospital-user" : "fa-solid fa-user-tie"}></i>
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <span className="team-role">{member.role}</span>
                                    <p className="team-cert">{member.certifications.split('|')[0]}</p>
                                    <span style={{ display: 'inline-block', marginTop: '0.6rem', fontSize: '0.8rem', color: 'var(--accent-orange)', fontWeight: '600' }}>
                                        View Full Profile <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem', marginLeft: '0.3rem' }}></i>
                                    </span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* PI Profile Popup Modal */}
            {selectedMember && (
                <div className="modal-backdrop" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(11, 25, 44, 0.75)',
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem',
                    backdropFilter: 'blur(4px)',
                    overflowY: 'auto'
                }}>
                    <div style={{
                        backgroundColor: 'var(--bg-card)',
                        borderRadius: '16px',
                        width: '100%',
                        maxWidth: '720px',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
                        position: 'relative'
                    }}>
                        {/* Modal Header */}
                        <div style={{
                            padding: '1.8rem 2rem',
                            borderBottom: '1px solid var(--border-color)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            backgroundColor: 'var(--bg-secondary)',
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px'
                        }}>
                            <div>
                                <span style={{ color: 'var(--accent-orange)', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', trackingLetter: '1px' }}>
                                    {selectedMember.specialty}
                                </span>
                                <h3 style={{ fontSize: '1.35rem', marginTop: '0.3rem', marginBottom: '0.2rem', color: 'var(--primary-blue)', lineHeight: '1.3' }}>
                                    {selectedMember.name}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', margin: 0, fontWeight: '500' }}>
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
                            <div style={{
                                backgroundColor: 'rgba(0, 229, 229, 0.08)',
                                borderLeft: '4px solid var(--accent-orange)',
                                padding: '1rem 1.2rem',
                                borderRadius: '4px',
                                marginBottom: '1.5rem',
                                fontSize: '0.92rem',
                                color: 'var(--primary-blue)',
                                fontWeight: '600'
                            }}>
                                <i className="fa-solid fa-award" style={{ marginRight: '0.5rem', color: 'var(--accent-orange)' }}></i>
                                {selectedMember.experience}
                            </div>

                            <h4 style={{ fontSize: '1rem', color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>Biography & Background</h4>
                            <p style={{ fontSize: '0.92rem', color: 'var(--text-sub)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                                {selectedMember.bio}
                            </p>

                            <h4 style={{ fontSize: '1rem', color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>Specialty & Clinical Focus</h4>
                            <p style={{ fontSize: '0.92rem', color: 'var(--text-sub)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                                {selectedMember.details.focus}
                            </p>

                            <h4 style={{ fontSize: '1rem', color: 'var(--primary-blue)', marginBottom: '0.8rem' }}>Clinical Experience & GCP Highlights</h4>
                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.8rem' }}>
                                {selectedMember.details.cvHighlights.map((item, idx) => (
                                    <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-sub)', marginBottom: '0.5rem', lineHeight: '1.5' }}>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <a 
                                    href={selectedMember.details.trialsGov}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem', borderRadius: '50px' }}
                                >
                                    View ClinicalTrials.gov Record <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '0.3rem', fontSize: '0.75rem' }}></i>
                                </a>
                                <button 
                                    onClick={() => setSelectedMember(null)}
                                    className="btn btn-primary"
                                    style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem', borderRadius: '50px' }}
                                >
                                    Close Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Interactive News Slider Section */}
            <section className="news-slider-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <ScrollReveal className="section-header center" delay="1">
                        <span className="section-tag" style={{ color: 'var(--accent-orange)' }}>News</span>
                        <h2 className="section-title">Latest Announcements</h2>
                        <p className="section-desc center">Discover the latest updates, network milestones, and clinical research developments at Azul BioResearch.</p>
                    </ScrollReveal>
                    
                    <ScrollReveal className="news-slider-card" delay="2">
                        <div className="news-slider-content">
                            <h3>"{newsSlides[activeSlide].text}"</h3>
                            <Link to={newsSlides[activeSlide].link} className="news-slider-btn">
                                Learn more <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
                            </Link>
                        </div>
                    </ScrollReveal>
                    
                    <div className="news-slider-controls">
                        <button className="news-slider-arrow" onClick={handlePrevSlide} aria-label="Previous slide">
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <span className="news-slider-counter">
                            {activeSlide + 1} / {newsSlides.length}
                        </span>
                        <button className="news-slider-arrow" onClick={handleNextSlide} aria-label="Next slide">
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* Blog & News Section */}
            <section className="home-blog-section">
                <div className="container">
                    <ScrollReveal className="section-header center">
                        <span className="section-tag">{t('home_blog_badge')}</span>
                        <h2>{t('home_blog_title')}</h2>
                        <p className="section-desc center">{t('home_blog_subtitle')}</p>
                    </ScrollReveal>
                    <div className="home-blog-grid">
                        <ScrollReveal className="blog-card" delay="1">
                            <div className="blog-card-image" style={{ backgroundImage: "url('/assets/regulatory_compliance_officer.jpg')" }}>
                                <span className="blog-badge">{t('blog_badge_edu')}</span>
                            </div>
                            <div className="blog-card-content">
                                <span className="blog-date">{t('blog_date_1')}</span>
                                <h3>{t('blog_c1_title')}</h3>
                                <p>{t('blog_c1_p1').slice(0, 120)}...</p>
                                <Link to="/understanding-clinical-trials.html" className="blog-card-link">
                                    {t('read_more')} <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal className="blog-card" delay="2">
                            <div className="blog-card-image" style={{ backgroundImage: "url('/assets/hero_physicians_consult.jpg')" }}>
                                <span className="blog-badge">{t('blog_badge_resp')}</span>
                            </div>
                            <div className="blog-card-content">
                                <span className="blog-date">{t('blog_date_2')}</span>
                                <h3>{t('blog_c2_title')}</h3>
                                <p>{t('blog_c2_p1').slice(0, 120)}...</p>
                                <Link to="/copd-treatment-advancements.html" className="blog-card-link">
                                    {t('read_more')} <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal className="blog-card" delay="3">
                            <div className="blog-card-image" style={{ backgroundImage: "url('/assets/patient_volunteer_care.jpg')" }}>
                                <span className="blog-badge">{t('blog_badge_gastro')}</span>
                            </div>
                            <div className="blog-card-content">
                                <span className="blog-date">{t('blog_date_3')}</span>
                                <h3>{t('blog_c3_title')}</h3>
                                <p>{t('blog_c3_p1').slice(0, 120)}...</p>
                                <Link to="/gut-health-and-microbiome.html" className="blog-card-link">
                                    {t('read_more')} <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="container">
                    <div className="contact-box">
                        <div className="contact-grid">
                            <ScrollReveal className="contact-details reveal-left">
                                <h2 style={{ color: '#ffffff', fontSize: '2.2rem', marginBottom: '1.2rem', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>{t('contact_title') || 'Get In Touch'}</h2>
                                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.98rem', marginBottom: '3rem' }}>{t('contact_desc')}</p>
                                
                                <div className="contact-info-list">
                                    <div className="info-item">
                                        <div className="info-icon"><i className="fa-solid fa-user-doctor"></i></div>
                                        <div>
                                            <h5>Dr. Syed Ather Hussain, MD, MS</h5>
                                            <p>Chief Medical Officer & Principal Investigator</p>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
                                        <div>
                                            <h5>{t('contact_addr_title')}</h5>
                                            <p>
                                                <a href="https://www.google.com/maps/search/?api=1&query=3531+Town+Center+Blvd+Suite+101+Sugar+Land+TX+77479" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                                    3531 Town Center Blvd., Suite 101<br />Sugar Land, TX 77479
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
                                        <div>
                                            <h5>{t('contact_phone')}</h5>
                                            <p>(800) 555-AZUL</p>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="info-icon"><i className="fa-solid fa-envelope"></i></div>
                                        <div>
                                            <h5>{t('contact_email')}</h5>
                                            <p><a href="mailto:info@azulbioresearch.com">info@azulbioresearch.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal className="contact-form-container reveal-right">
                                <h4 className="form-title">{t('form_title')}</h4>
                                <form id="azulContactForm" className="contact-form" onSubmit={handleFormSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="fname">{t('form_fname')}</label>
                                            <input type="text" id="fname" required value={formData.fname} onChange={handleInputChange} placeholder="John" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lname">{t('form_lname')}</label>
                                            <input type="text" id="lname" required value={formData.lname} onChange={handleInputChange} placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email">{t('form_email')}</label>
                                            <input type="email" id="email" required value={formData.email} onChange={handleInputChange} placeholder="john.doe@example.com" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">{t('form_phone')}</label>
                                            <input type="tel" id="phone" required value={formData.phone} onChange={handleInputChange} placeholder="(555) 555-5555" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="specialty">{t('form_area')}</label>
                                        <select id="specialty" value={formData.specialty} onChange={handleInputChange}>
                                            <option value="internal">{t('spec_im')}</option>
                                            <option value="gastro">{t('spec_gi')}</option>
                                            <option value="rheuma">{t('spec_rh')}</option>
                                            <option value="nephro">{t('spec_np')}</option>
                                            <option value="mental">{t('spec_mh')}</option>
                                            <option value="other">{t('spec_more')}</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">{t('form_message')}</label>
                                        <textarea id="message" rows="4" required value={formData.message} onChange={handleInputChange} placeholder="How can we help you?"></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary btn-submit"
                                        disabled={submitStatus !== 'idle'}
                                        style={submitStatus === 'success' ? { backgroundColor: '#10b981' } : {}}
                                    >
                                        {submitStatus === 'idle' && t('form_submit')}
                                        {submitStatus === 'loading' && 'Submitting...'}
                                        {submitStatus === 'success' && (
                                            <>Inquiry Submitted <i className="fa-solid fa-check"></i></>
                                        )}
                                    </button>
                                </form>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
