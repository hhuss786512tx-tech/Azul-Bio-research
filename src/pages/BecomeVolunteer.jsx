import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';

export const BecomeVolunteer = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        study: 'internal_medicine',
        notes: ''
    });
    const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success

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
                study: 'internal_medicine',
                notes: ''
            });

            setTimeout(() => {
                setSubmitStatus('idle');
            }, 3000);
        }, 1000);
    };

    return (
        <SubpageLayout categoryKey="nav_active_trials" titleKey="nav_volunteer">
            <div className="page-content-box">
                <div className="container">
                    <div className="page-grid-2">
                        <ScrollReveal className="page-text" delay="1">
                            <h2 dangerouslySetInnerHTML={{ __html: t('volunteer_heading') }}></h2>
                            <p>{t('volunteer_desc')}</p>
                            <p>{t('volunteer_text')}</p>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-hand-holding-heart"></i> 
                                    <span><strong>{t('volunteer_sub1')}</strong> {t('volunteer_sub1_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-wallet"></i> 
                                    <span><strong>{t('volunteer_sub2')}</strong> {t('volunteer_sub2_desc')}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-shield-check"></i> 
                                    <span><strong>{t('volunteer_sub3')}</strong> {t('volunteer_sub3_desc')}</span>
                                </li>
                            </ul>
                        </ScrollReveal>
                        <ScrollReveal className="contact-form-container reveal-right" style={{ border: '1px solid var(--border-color)', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                            <h4 className="form-title">{t('volunteer_form_title')}</h4>
                            <form id="volunteerForm" className="contact-form" onSubmit={handleFormSubmit}>
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
                                <div className="form-group">
                                    <label htmlFor="email">{t('form_email')}</label>
                                    <input type="email" id="email" required value={formData.email} onChange={handleInputChange} placeholder="johndoe@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">{t('form_phone')}</label>
                                    <input type="tel" id="phone" required value={formData.phone} onChange={handleInputChange} placeholder="(555) 555-5555" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="study">{t('volunteer_study_label')}</label>
                                    <select id="study" value={formData.study} onChange={handleInputChange}>
                                        <option value="internal_medicine">{t('spec_im')}</option>
                                        <option value="gastroenterology">{t('spec_gi')}</option>
                                        <option value="rheumatology">{t('spec_rh')}</option>
                                        <option value="nephrology">{t('spec_np')}</option>
                                        <option value="mental_health">{t('spec_mh')}</option>
                                        <option value="general">Other / General Pre-Screening</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="notes">{t('volunteer_notes_label')}</label>
                                    <textarea id="notes" rows="3" value={formData.notes} onChange={handleInputChange} placeholder="List any specific medical details or questions..."></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-submit"
                                    disabled={submitStatus !== 'idle'}
                                    style={submitStatus === 'success' ? { backgroundColor: '#10b981' } : {}}
                                >
                                    {submitStatus === 'idle' && (
                                        <>{t('volunteer_submit')} <i className="fa-solid fa-chevron-right"></i></>
                                    )}
                                    {submitStatus === 'loading' && 'Submitting...'}
                                    {submitStatus === 'success' && (
                                        <>Request Submitted <i className="fa-solid fa-check"></i></>
                                    )}
                                </button>
                            </form>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
