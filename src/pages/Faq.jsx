import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';
import { SEO } from '../components/SEO';

export const Faq = () => {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        { qKey: 'faq_q1', aKey: 'faq_a1' },
        { qKey: 'faq_q2', aKey: 'faq_a2' },
        { qKey: 'faq_q3', aKey: 'faq_a3' },
        { qKey: 'faq_q4', aKey: 'faq_a4' },
        { qKey: 'faq_q5', aKey: 'faq_a5' }
    ];

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <SubpageLayout categoryKey="nav_insights" titleKey="nav_faq">
            <SEO 
                title="Clinical Trial Volunteer FAQ"
                description="Common questions about joining a clinical trial at Azul Bio-Research: what a trial is, how safety is protected, informed consent, eligibility and compensation."
                path="/faq"
            />
            <div className="page-content-box">
                <div className="container">
                    <ScrollReveal className="section-header center" delay="1">
                        <h2>{t('faq_heading')}</h2>
                        <p className="section-desc center">{t('faq_desc')}</p>
                    </ScrollReveal>

                    <div className="faq-accordion-container" style={{ marginTop: '4rem', maxWidth: '800px', margin: '4rem auto 0 auto' }}>
                        {faqItems.map((item, index) => {
                            const isOpen = activeIndex === index;
                            return (
                                <ScrollReveal key={index} className="faq-item-wrapper" delay={(index + 1).toString()} style={{ marginBottom: '1.2rem' }}>
                                    <h3 style={{ margin: 0 }}>
                                        <button 
                                            type="button"
                                            className={`faq-question-panel ${isOpen ? 'active' : ''}`} 
                                            onClick={() => toggleAccordion(index)}
                                            aria-expanded={isOpen}
                                            aria-controls={`faq-answer-${index}`}
                                            id={`faq-question-${index}`}
                                        >
                                            <span>{t(item.qKey)}</span>
                                            <i 
                                                className={`fa-solid fa-chevron-down`} 
                                                aria-hidden="true"
                                                style={{ 
                                                    transition: 'transform 0.3s ease', 
                                                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    color: 'var(--accent-orange)',
                                                    flexShrink: 0
                                                }}
                                            ></i>
                                        </button>
                                    </h3>
                                    {isOpen && (
                                        <div 
                                            className="faq-answer-panel"
                                            id={`faq-answer-${index}`}
                                            role="region"
                                            aria-labelledby={`faq-question-${index}`}
                                            style={{ 
                                                padding: '1.5rem 2rem',
                                                fontSize: '1rem',
                                                lineHeight: 1.7,
                                                borderBottomLeftRadius: '8px',
                                                borderBottomRightRadius: '8px',
                                                border: '1px solid var(--border-color)',
                                                borderTop: 'none',
                                                backgroundColor: 'var(--bg-primary)',
                                                marginTop: '-2px',
                                                animation: 'slideDown 0.3s ease-out',
                                                color: 'var(--text-sub)'
                                            }}
                                        >
                                            {t(item.aKey)}
                                        </div>
                                    )}
                                </ScrollReveal>
                            );
                        })}
                        <p className="page-text-links" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                            Still have questions? See <Link to="/active-trials" className="inline-link">active trials</Link> or <Link to="/become-volunteer" className="inline-link">join the volunteer registry</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
