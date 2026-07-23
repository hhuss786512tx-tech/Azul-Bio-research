import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';
import { SEO } from '../components/SEO';

export const ActiveTrials = () => {
    const { t } = useLanguage();
    const [selectedTrial, setSelectedTrial] = useState(null); // the trial being pre-screened
    const [filterCategory, setFilterCategory] = useState('all');
    const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        age: '',
        q1: '', // Yes/No questions based on trial
        q2: '',
        q3: '',
        q4: '',
        consent: false
    });

    const trialsList = [
        {
            id: 'LAM-001',
            code: 'LAM-001',
            title: 'Inhaled Therapeutics for Lymphangioleiomyomatosis (LAM)',
            condition: 'Lymphangioleiomyomatosis & Pulmonary Fibrosis',
            category: 'pulmonary',
            phase: 'Phase II',
            status: 'Recruiting',
            brief: 'Evaluate the safety, tolerability, and pharmacokinetics of inhaled LAM-001 in patients diagnosed with LAM or progressive pulmonary fibrosis.',
            details: 'This study aims to assess how a new inhaled formulation (LAM-001) helps prevent the progression of fibrotic tissue in the lungs. It involves 6 monthly clinic visits, pulmonary function testing, and non-invasive monitoring.',
            questions: [
                { id: 'q1', text: 'Have you been diagnosed by a physician with LAM or Pulmonary Fibrosis?' },
                { id: 'q2', text: 'Are you currently receiving continuous oxygen therapy?' },
                { id: 'q3', text: 'Are you between the ages of 18 and 75?' },
                { id: 'q4', text: 'Are you pregnant, nursing, or planning a pregnancy during the study?' }
            ],
            expectedAnswers: { q1: 'yes', q2: 'no', q3: 'yes', q4: 'no' } // just to give immediate feedback or save
        },
        {
            id: 'COPD-002',
            code: 'COPD-002',
            title: 'Bronchodilator Therapy Optimization Study',
            condition: 'Chronic Obstructive Pulmonary Disease (COPD)',
            category: 'pulmonary',
            phase: 'Phase III',
            status: 'Recruiting',
            brief: 'A randomized, double-blind study testing the efficacy of a novel combination inhaler treatment for patients with moderate-to-severe COPD.',
            details: 'This trial compares a new combination bronchodilator against standard-of-care treatments to evaluate reductions in daily exacerbations and overall improvement in quality of life.',
            questions: [
                { id: 'q1', text: 'Have you had a clinical diagnosis of COPD for at least 12 months?' },
                { id: 'q2', text: 'Are you a current smoker or a former smoker with at least 10 pack-years?' },
                { id: 'q3', text: 'Have you experienced a COPD flare-up requiring antibiotics/steroids in the past year?' },
                { id: 'q4', text: 'Are you currently using any other experimental inhalers?' }
            ],
            expectedAnswers: { q1: 'yes', q2: 'yes', q3: 'yes', q4: 'no' }
        },
        {
            id: 'GUT-301',
            code: 'GUT-301',
            title: 'Microbiome Restoration Therapy in IBD',
            condition: 'Crohn\'s Disease & Ulcerative Colitis',
            category: 'gastroenterology',
            phase: 'Phase II',
            status: 'Recruiting',
            brief: 'Investigating the impact of microbiome-targeted capsules (GUT-301) on mucosal healing and inflammation in patients with active IBD.',
            details: 'This trial evaluates whether targeted microbial transplantations delivered in capsule form can improve gut lining health and reduce the inflammatory markers in the bloodstream.',
            questions: [
                { id: 'q1', text: 'Do you have a biopsy-confirmed diagnosis of Crohn\'s Disease or Ulcerative Colitis?' },
                { id: 'q2', text: 'Are you currently experiencing active mild-to-moderate symptoms (flare-up)?' },
                { id: 'q3', text: 'Are you willing to provide blood and stool samples during the clinic visits?' },
                { id: 'q4', text: 'Have you taken oral antibiotics in the last 14 days?' }
            ],
            expectedAnswers: { q1: 'yes', q2: 'yes', q3: 'yes', q4: 'no' }
        },
        {
            id: 'NEPH-402',
            code: 'NEPH-402',
            title: 'Cardiovascular Risk Management in CKD Patients',
            condition: 'Chronic Kidney Disease (CKD) - Phase IV',
            category: 'nephrology',
            phase: 'Phase IV',
            status: 'Upcoming',
            brief: 'Observational safety study monitoring long-term cardiovascular profiles in patients receiving novel renal-protective therapeutic agents.',
            details: 'A post-market study focused on tracking cardiac safety indexes and renal filtration rate stability over a 24-month period in patients diagnosed with Stage 3 CKD.',
            questions: [
                { id: 'q1', text: 'Have you been diagnosed with Stage 3 Chronic Kidney Disease (CKD)?' },
                { id: 'q2', text: 'Are you currently undergoing dialysis treatments?' },
                { id: 'q3', text: 'Are you 18 years of age or older?' },
                { id: 'q4', text: 'Have you had a prior cardiovascular event (such as a heart attack) in the past 6 months?' }
            ],
            expectedAnswers: { q1: 'yes', q2: 'no', q3: 'yes', q4: 'no' }
        }
    ];

    const filteredTrials = filterCategory === 'all' 
        ? trialsList 
        : trialsList.filter(t => t.category === filterCategory);

    const handleOpenModal = (trial) => {
        setSelectedTrial(trial);
        setFormData({
            fname: '',
            lname: '',
            email: '',
            phone: '',
            age: '',
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            consent: false
        });
        setSubmitStatus('idle');
    };

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmitPreScreening = (e) => {
        e.preventDefault();
        setSubmitStatus('loading');
        
        // Simulate API call to register screening
        setTimeout(() => {
            setSubmitStatus('success');
        }, 1500);
    };

    return (
        <SubpageLayout categoryKey="nav_active_trials" titleKey="nav_active_trials" subtitle="View our directory of open, enrolling, and active clinical studies. Patients can complete eligibility screens online to connect with our clinical teams.">
            <SEO 
                title="Active Clinical Trials & Enrolling Research Studies"
                description="Explore active clinical trial studies at Azul Bio-Research for NASH, COPD, Type 2 Diabetes, Asthma, and cardiovascular indications. Pre-screen online today."
                path="/active-trials"
            />
            <div className="page-content-box">
                <div className="container">
                    <ScrollReveal className="section-header center" delay="1">
                        <span className="section-tag">Clinical Trials</span>
                        <h2>Explore Active Clinical Studies</h2>
                        <p className="section-desc center">
                            Browse our current and upcoming Phase II - IV clinical research studies. 
                            Select a study to review details and submit an online pre-screening questionnaire to check your initial eligibility.
                        </p>
                    </ScrollReveal>

                    {/* Filter Tabs */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0 3rem 0', flexWrap: 'wrap' }}>
                        {['all', 'pulmonary', 'gastroenterology', 'nephrology'].map(cat => (
                            <button 
                                key={cat}
                                onClick={() => setFilterCategory(cat)}
                                style={{
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '50px',
                                    padding: '0.6rem 1.6rem',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    backgroundColor: filterCategory === cat ? 'var(--primary-blue)' : 'var(--bg-card)',
                                    color: filterCategory === cat ? 'var(--text-light)' : 'var(--text-main)',
                                    transition: 'var(--transition-smooth)',
                                    textTransform: 'capitalize'
                                }}
                            >
                                {cat === 'all' ? 'All Areas' : cat}
                            </button>
                        ))}
                    </div>

                    {/* Trials Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2rem' }}>
                        {filteredTrials.map((trial, index) => (
                            <ScrollReveal 
                                key={trial.id} 
                                className="spec-card" 
                                delay={String(index + 1)}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                    position: 'relative',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '12px',
                                    padding: '2rem',
                                    backgroundColor: 'var(--bg-card)',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.02)'
                                }}
                            >
                                <div>
                                    {/* Phase & Status Badges */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                                        <span style={{ 
                                            backgroundColor: 'var(--bg-light-blue)', 
                                            color: 'var(--primary-blue)', 
                                            fontWeight: '700', 
                                            fontSize: '0.78rem', 
                                            padding: '0.35rem 0.8rem', 
                                            borderRadius: '50px',
                                            border: '1px solid rgba(13, 148, 136, 0.2)'
                                        }}>
                                            {trial.phase}
                                        </span>
                                        <span style={{ 
                                            backgroundColor: trial.status === 'Recruiting' ? '#dcfce7' : '#f1f5f9', 
                                            color: trial.status === 'Recruiting' ? '#166534' : '#475569', 
                                            fontWeight: '700', 
                                            fontSize: '0.78rem', 
                                            padding: '0.35rem 0.8rem', 
                                            borderRadius: '50px'
                                        }}>
                                            <i className={`fa-solid ${trial.status === 'Recruiting' ? 'fa-circle-dot' : 'fa-clock'}`} style={{ marginRight: '0.4rem' }}></i>
                                            {trial.status}
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>{trial.code}</h3>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-main)', lineHeight: '1.4' }}>{trial.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{trial.brief}</p>
                                </div>

                                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>
                                        <i className="fa-solid fa-notes-medical" style={{ color: 'var(--accent-orange)', marginRight: '0.4rem' }}></i>
                                        {trial.condition.split(' & ')[0]}
                                    </span>
                                    <button 
                                        onClick={() => handleOpenModal(trial)}
                                        style={{
                                            backgroundColor: trial.status === 'Recruiting' ? 'var(--accent-orange)' : 'var(--border-color)',
                                            color: trial.status === 'Recruiting' ? 'var(--text-light)' : 'var(--text-sub)',
                                            border: 'none',
                                            borderRadius: '50px',
                                            padding: '0.55rem 1.2rem',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            cursor: trial.status === 'Recruiting' ? 'pointer' : 'default',
                                            transition: 'var(--transition-smooth)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.4rem'
                                        }}
                                        disabled={trial.status !== 'Recruiting'}
                                    >
                                        {trial.status === 'Recruiting' ? 'Pre-Screen Now' : 'Upcoming'} <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
                                    </button>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Pre-Screening info banner */}
                    <div style={{
                        marginTop: '4rem',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '12px',
                        padding: '2.5rem',
                        textAlign: 'center',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.01)'
                    }}>
                        <i className="fa-solid fa-circle-question" style={{ fontSize: '2.5rem', color: 'var(--accent-orange)', marginBottom: '1rem' }}></i>
                        <h3>Not sure which trial fits you?</h3>
                        <p style={{ maxWidth: '650px', margin: '0.5rem auto 1.5rem auto', color: 'var(--text-sub)' }}>
                            You can fill out our general clinical trial pre-screening registry form. 
                            Our clinical coordinators will review your health profile and contact you as soon as a trial matching your history becomes available.
                        </p>
                        <a href="/become-volunteer" className="btn btn-primary" style={{ padding: '0.7rem 2rem', fontSize: '0.95rem' }}>
                            General Volunteer Form <i className="fa-solid fa-clipboard-list" style={{ marginLeft: '0.5rem' }}></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Eligibility Pre-Screening Modal Overlay */}
            {selectedTrial && (
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
                    backdropFilter: 'blur(4px)',
                    overflowY: 'auto'
                }}>
                    <div style={{
                        backgroundColor: 'var(--bg-card)',
                        borderRadius: '16px',
                        width: '100%',
                        maxWidth: '680px',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
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
                                    Trial Screening &bull; {selectedTrial.code}
                                </span>
                                <h3 style={{ fontSize: '1.25rem', marginTop: '0.3rem', marginBottom: 0, color: 'var(--primary-blue)', lineHeight: '1.3' }}>
                                    {selectedTrial.title}
                                </h3>
                            </div>
                            <button 
                                onClick={() => setSelectedTrial(null)}
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

                        {/* Modal Content */}
                        <div style={{ padding: '2rem' }}>
                            {submitStatus === 'success' ? (
                                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                                    <div style={{ 
                                        width: '72px', 
                                        height: '72px', 
                                        borderRadius: '50%', 
                                        backgroundColor: '#dcfce7', 
                                        color: '#15803d', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        fontSize: '2.2rem',
                                        margin: '0 auto 1.5rem auto'
                                    }}>
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '0.8rem' }}>Screening Received!</h3>
                                    <p style={{ color: 'var(--text-sub)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                        Thank you for submitting your pre-screening eligibility form for the <strong>{selectedTrial.code}</strong> study.
                                    </p>
                                    <div style={{
                                        backgroundColor: 'var(--bg-secondary)',
                                        border: '1px solid var(--border-color)',
                                        padding: '1.5rem',
                                        borderRadius: '8px',
                                        fontSize: '0.9rem',
                                        color: 'var(--text-sub)',
                                        textAlign: 'left',
                                        lineHeight: '1.6',
                                        marginBottom: '2rem'
                                    }}>
                                        <strong>Next Steps:</strong>
                                        <ol style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                                            <li>Our clinical trial recruitment coordinators will review your responses.</li>
                                            <li>We will contact you via email at <strong>{formData.email}</strong> or phone at <strong>{formData.phone}</strong> within 1-2 business days.</li>
                                            <li>If eligible, we will schedule a formal in-clinic consultation with Dr. Hussain or Dr. Jafar to review the study consent documents.</li>
                                        </ol>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedTrial(null)}
                                        className="btn btn-primary"
                                        style={{ padding: '0.65rem 2rem', fontSize: '0.95rem' }}
                                    >
                                        Close Window
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmitPreScreening} className="contact-form">
                                    <p style={{ fontSize: '0.92rem', color: 'var(--text-sub)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                        {selectedTrial.details}
                                    </p>
                                    
                                    <div style={{ borderBottom: '1px solid var(--border-color)', margin: '1.5rem 0' }}></div>
                                    
                                    <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                                        1. {lang === 'es' ? 'Información de Contacto' : 'Contact Information'}
                                    </h4>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="fname">{t('form_fname')}</label>
                                            <input type="text" id="fname" required value={formData.fname} onChange={handleInputChange} placeholder={lang === 'es' ? 'Nombre' : 'First Name'} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lname">{t('form_lname')}</label>
                                            <input type="text" id="lname" required value={formData.lname} onChange={handleInputChange} placeholder={lang === 'es' ? 'Apellido' : 'Last Name'} />
                                        </div>
                                    </div>
                                    <div className="form-row" style={{ marginTop: '1rem' }}>
                                        <div className="form-group">
                                            <label htmlFor="email">{t('form_email')}</label>
                                            <input type="email" id="email" required value={formData.email} onChange={handleInputChange} placeholder="email@example.com" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">{t('form_phone')}</label>
                                            <input type="tel" id="phone" required value={formData.phone} onChange={handleInputChange} placeholder="(832) 555-0100" />
                                        </div>
                                    </div>
                                    <div className="form-group" style={{ marginTop: '1rem', width: '50%' }}>
                                        <label htmlFor="age">{lang === 'es' ? 'Edad del Paciente *' : 'Patient Age *'}</label>
                                        <input type="number" id="age" required value={formData.age} onChange={handleInputChange} placeholder={lang === 'es' ? 'ej. 45' : 'e.g. 45'} min="1" max="120" />
                                    </div>

                                    <div style={{ borderBottom: '1px solid var(--border-color)', margin: '1.8rem 0' }}></div>

                                    <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                                        2. {lang === 'es' ? 'Criterios Clínicos Preliminares' : 'Preliminary Clinical Criteria'}
                                    </h4>
                                    
                                    {selectedTrial.questions.map((q, qIndex) => {
                                        const questionText = (lang === 'es' && selectedTrial.questions_es) 
                                            ? selectedTrial.questions_es[qIndex]?.text || q.text 
                                            : q.text;
                                        return (
                                            <div key={q.id} style={{ marginBottom: '1.2rem' }}>
                                                <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: '500' }}>
                                                    {qIndex + 1}. {questionText}
                                                </p>
                                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                                                        <input 
                                                            type="radio" 
                                                            name={q.id} 
                                                            id={q.id} 
                                                            value="yes" 
                                                            required 
                                                            checked={formData[q.id] === 'yes'} 
                                                            onChange={handleInputChange} 
                                                        />
                                                        <span>{lang === 'es' ? 'Sí' : 'Yes'}</span>
                                                    </label>
                                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                                                        <input 
                                                            type="radio" 
                                                            name={q.id} 
                                                            id={q.id} 
                                                            value="no" 
                                                            required 
                                                            checked={formData[q.id] === 'no'} 
                                                            onChange={handleInputChange} 
                                                        />
                                                        <span>{lang === 'es' ? 'No' : 'No'}</span>
                                                    </label>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div style={{ borderBottom: '1px solid var(--border-color)', margin: '1.8rem 0' }}></div>

                                    <div className="form-group" style={{ flexDirection: 'row', alignItems: 'flex-start', gap: '0.6rem' }}>
                                        <input 
                                            type="checkbox" 
                                            id="consent" 
                                            required 
                                            checked={formData.consent} 
                                            onChange={handleInputChange} 
                                            style={{ marginTop: '0.2rem', cursor: 'pointer' }}
                                        />
                                        <label htmlFor="consent" style={{ fontSize: '0.82rem', color: 'var(--text-sub)', cursor: 'pointer', lineHeight: '1.4' }}>
                                            {lang === 'es' 
                                                ? 'Doy mi consentimiento para que los coordinadores clínicos revisen mi información médica para determinar la elegibilidad. Entiendo que esto no garantiza la admisión al estudio y que se requerirá un examen médico formal.'
                                                : 'I consent to having clinical coordinators review my health information for eligibility determination. I understand that this does not guarantee study admission and that a formal medical screening will be required.'
                                            }
                                        </label>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
                                        <button 
                                            type="button" 
                                            onClick={() => setSelectedTrial(null)}
                                            style={{
                                                background: 'none',
                                                border: '1px solid var(--border-color)',
                                                borderRadius: '50px',
                                                padding: '0.7rem 1.8rem',
                                                cursor: 'pointer',
                                                fontSize: '0.9rem',
                                                fontWeight: '600',
                                                color: 'var(--text-sub)',
                                                transition: 'var(--transition-smooth)'
                                            }}
                                        >
                                            {lang === 'es' ? 'Cancelar' : 'Cancel'}
                                        </button>
                                        <button 
                                            type="submit" 
                                            className="btn btn-submit"
                                            disabled={submitStatus === 'loading'}
                                            style={{
                                                borderRadius: '50px',
                                                padding: '0.7rem 1.8rem',
                                                fontSize: '0.9rem',
                                                fontWeight: '700',
                                                marginTop: 0
                                            }}
                                        >
                                            {submitStatus === 'loading' 
                                                ? (lang === 'es' ? 'Enviando...' : 'Submitting...') 
                                                : (lang === 'es' ? 'Enviar Preselección' : 'Submit Pre-Screening')
                                            }
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </SubpageLayout>
    );
};
