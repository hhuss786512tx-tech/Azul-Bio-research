import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';

export const Facilities = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('storage');

    const facilityTabs = {
        storage: {
            title: "Cold Chain & IP Storage",
            icon: "fa-solid fa-temperature-arrow-down",
            desc: "Secure, temperature-controlled environment for clinical trials IP (Investigational Product) and specimen storage. Standardized monitoring ensures compliance with ICH/GCP standards.",
            specs: [
                { name: "Ultra-Low Temperature Freezer", detail: "-80°C to -70°C storage for specialized biological specimens (PHCBi Brand)." },
                { name: "Standard Deep Freezer", detail: "-20°C storage for standard frozen lab specimens." },
                { name: "Pharmacy Refrigerator", detail: "2°C to 8°C storage with digital alarm limits for IP." },
                { name: "Locked IP Storage Room", detail: "Double-locked restricted access room with limited entry logs." },
                { name: "Continuous Monitoring", detail: "24/7 digital data loggers (Elpro Libero) with automated excursion email/SMS alerts." }
            ]
        },
        lab: {
            title: "Processing Lab & Diagnostics",
            icon: "fa-solid fa-flask-vial",
            desc: "CLIA-certified processing lab prepared for immediate sample separation, aliquotting, packaging, and shipping under international regulations.",
            specs: [
                { name: "Refrigerated Centrifuges", detail: "Eppendorf 5810R centrifuge for precise sample processing at 4°C." },
                { name: "Ambient Centrifuges", detail: "High-speed laboratory centrifuges for immediate serum/plasma prep." },
                { name: "Biological Safety Cabinet", detail: "Class II Biosafety Cabinet for sample preparation and clean handling." },
                { name: "IATA Certified Shipping", detail: "Full capabilities for ambient, refrigerated, and dry ice shipping." },
                { name: "Spirometry & ECG", detail: "KoKo PFT Spirometer and Welch Allyn ECG machines on-site." }
            ]
        },
        suites: {
            title: "Clinical & Infusion Suites",
            icon: "fa-solid fa-bed-pulse",
            desc: "Patient-centered clinic rooms designed for participant comfort, safety monitoring, and optimal execution of infusion protocols.",
            specs: [
                { name: "Infusion Bays", detail: "Reclining medical lounge chairs with dedicated cardiac monitors." },
                { name: "Private Exam Rooms", detail: "4 fully equipped medical examination rooms for private consultations." },
                { name: "Draw Stations", detail: "Dedicated double-draw stations to streamline high-volume study days." },
                { name: "Emergency Readiness", detail: "On-site crash cart, oxygen tanks, AED devices, and ACLS-certified staff." },
                { name: "Symptom Monitoring", detail: "Automated vitals monitoring systems integrated into infusion suites." }
            ]
        },
        operations: {
            title: "Operations & Security",
            icon: "fa-solid fa-laptop-medical",
            desc: "Back-office and physical security infrastructure to protect data integrity, facilitate monitor reviews, and prevent utility failure.",
            specs: [
                { name: "Backup Power Generator", detail: "Commercial generator supporting all refrigeration and labs during outages." },
                { name: "CRA Monitoring Suite", detail: "Private workspace with high-speed internet, printers, and document shredding." },
                { name: "Locked Records Archive", detail: "Fireproof, double-locked room for long-term source document storage." },
                { name: "Fiber Optic Network", detail: "Secured high-speed network for electronic data entry (EDC) portals." },
                { name: "Keycard Access Control", detail: "Building-wide restricted access logs for patient and document safety." }
            ]
        }
    };

    return (
        <SubpageLayout categoryKey="nav_facilities_parent" titleKey="nav_facilities" subtitle="Our Sugar Land research facility is equipped with state-of-the-art diagnostic infrastructure, continuous monitoring, and secure storage to support Phase II–IV trials.">
            <div className="page-content-box">
                <div className="container">
                    <div className="facilities-intro" style={{ marginBottom: '3rem' }}>
                        <ScrollReveal className="intro-text" delay="1">
                            <h2 dangerouslySetInnerHTML={{ __html: t('facilities_heading') }} style={{ fontSize: '2.5rem', marginBottom: '1.2rem', color: 'var(--primary-blue)' }} />
                            <p className="intro-desc" style={{ fontSize: '1.1rem', color: 'var(--text-sub)', maxWidth: '800px', lineHeight: '1.6' }}>{t('facilities_desc')}</p>
                        </ScrollReveal>
                    </div>

                    {/* Tabs Selector */}
                    <ScrollReveal className="facilities-tab-container" delay="2">
                        <div className="facilities-tabs">
                            {Object.keys(facilityTabs).map((key) => (
                                <button
                                    key={key}
                                    className={`facility-tab-btn ${activeTab === key ? 'active' : ''}`}
                                    onClick={() => setActiveTab(key)}
                                >
                                    <i className={facilityTabs[key].icon}></i>
                                    <span>{facilityTabs[key].title}</span>
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Interactive Tab Showcase Content */}
                    <div className="facilities-showcase-box">
                        <ScrollReveal className="showcase-grid" delay="3">
                            <div className="showcase-details">
                                <div className="showcase-header">
                                    <div className="showcase-icon-box">
                                        <i className={facilityTabs[activeTab].icon}></i>
                                    </div>
                                    <div>
                                        <h3>{facilityTabs[activeTab].title}</h3>
                                        <p className="showcase-desc-text">{facilityTabs[activeTab].desc}</p>
                                    </div>
                                </div>

                                <div className="showcase-specs-list">
                                    {facilityTabs[activeTab].specs.map((spec, index) => (
                                        <div className="spec-card" key={index}>
                                            <div className="spec-bullet">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </div>
                                            <div className="spec-content">
                                                <h4>{spec.name}</h4>
                                                <p>{spec.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="showcase-actions">
                                    <a 
                                        href="/partners.html" 
                                        className="btn btn-primary"
                                        style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                                    >
                                        Inquire About Site Capabilities <i className="fa-solid fa-chevron-right"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="showcase-image-panel">
                                <div className="facility-visual-wrapper">
                                    <img 
                                        src="/assets/facility_lab.jpg" 
                                        alt={facilityTabs[activeTab].title} 
                                        className="facility-visual-img"
                                    />
                                    <div className="visual-badge">
                                        <i className="fa-solid fa-shield-halved"></i> GXP & FDA Compliant Site
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
