import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { ScrollReveal } from '../components/ScrollReveal';

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
                                <div className="blob-image circle-image" style={{ backgroundImage: "url('/assets/hero_team_circle.jpg')" }}></div>
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
                            <div className="stat-icon"><i className="fa-solid fa-award"></i></div>
                            <h3 className="stat-number">{t('stats_title_1')}</h3>
                            <p className="stat-desc">{t('stats_desc_1')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="stat-card" delay="2">
                            <div className="stat-icon"><i className="fa-solid fa-users-gear"></i></div>
                            <h3 className="stat-number">{t('stats_title_2')}</h3>
                            <p className="stat-desc">{t('stats_desc_2')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="stat-card" delay="3">
                            <div className="stat-icon"><i className="fa-solid fa-microscope"></i></div>
                            <h3 className="stat-number">{t('stats_title_3')}</h3>
                            <p className="stat-desc">{t('stats_desc_3')}</p>
                        </ScrollReveal>
                        <ScrollReveal className="stat-card" delay="4">
                            <div className="stat-icon"><i className="fa-solid fa-hospital-user"></i></div>
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
                                <img src="/assets/hero.jpg" alt="Clinical trial collaboration" />
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
                        <ScrollReveal className="team-card" delay="1">
                            <div className="team-img-placeholder">
                                <i className="fa-solid fa-user-tie"></i>
                            </div>
                            <div className="team-info">
                                <h3>Aman Ali Jafar, MD</h3>
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
                                <h3>S. Riaz Jafar, MD, CCRP</h3>
                                <span className="team-role">Operation Head</span>
                                <p className="team-cert">Certified Clinical Research Professional (CCRP)</p>
                            </div>
                        </ScrollReveal>
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
                            <div className="blog-card-image" style={{ backgroundImage: "url('/assets/hero.jpg')" }}>
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
                            <div className="blog-card-image" style={{ backgroundImage: "url('/assets/facility_lab.jpg')" }}>
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
                            <div className="blog-card-image" style={{ backgroundImage: "url('/assets/about.jpg')" }}>
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
                                        <div className="info-icon"><i className="fa-solid fa-user-tie"></i></div>
                                        <div>
                                            <h5>S. Riaz Jafar, MD, CCRP</h5>
                                            <p>{t('contact_role')}</p>
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
