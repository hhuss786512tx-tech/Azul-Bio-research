import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';

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
                                    <div 
                                        className={`faq-question-panel ${isOpen ? 'active' : ''}`} 
                                        onClick={() => toggleAccordion(index)}
                                        style={{ 
                                            display: 'flex', 
                                            justifyContent: 'space-between', 
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            padding: '1.4rem 2rem',
                                            backgroundColor: 'var(--bg-secondary)',
                                            borderRadius: '8px',
                                            border: '1px solid var(--border-color)',
                                            transition: 'var(--transition-smooth)'
                                        }}
                                    >
                                        <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 600, color: 'var(--primary-blue)', fontFamily: 'var(--font-heading)' }}>
                                            {t(item.qKey)}
                                        </h3>
                                        <i 
                                            className={`fa-solid fa-chevron-down`} 
                                            style={{ 
                                                transition: 'transform 0.3s ease', 
                                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                color: 'var(--accent-orange)'
                                            }}
                                        ></i>
                                    </div>
                                    {isOpen && (
                                        <div 
                                            className="faq-answer-panel"
                                            style={{ 
                                                padding: '1.5rem 2rem',
                                                fontSize: '1rem',
                                                lineHeight: 1.7,
                                                borderTop: 'none',
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
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
