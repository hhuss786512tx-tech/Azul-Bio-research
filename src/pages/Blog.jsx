import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';
import { SEO } from '../components/SEO';

export const Blog = () => {
    const { t } = useLanguage();

    const posts = [
        {
            id: 1,
            path: '/blog/patient-safety',
            badgeKey: 'blog_badge_edu',
            dateKey: 'blog_date_1',
            titleKey: 'blog_c1_title',
            descKey: 'blog_c1_desc',
            img: '/assets/regulatory_compliance_officer.jpg'
        },
        {
            id: 2,
            path: '/blog/copd-advancements',
            badgeKey: 'blog_badge_resp',
            dateKey: 'blog_date_2',
            titleKey: 'blog_c2_title',
            descKey: 'blog_c2_desc',
            img: '/assets/hero_physicians_consult.jpg'
        },
        {
            id: 3,
            path: '/blog/gut-health',
            badgeKey: 'blog_badge_gastro',
            dateKey: 'blog_date_3',
            titleKey: 'blog_c3_title',
            descKey: 'blog_c3_desc',
            img: '/assets/patient_volunteer_care.jpg'
        }
    ];

    return (
        <SubpageLayout categoryKey="nav_insights" titleKey="nav_blog">
            <SEO 
                title="Clinical Research Blog & Articles"
                description="Read articles, insights, and patient guides on clinical trial participation, medical safety, and therapeutic advancements at Azul Bio-Research."
                path="/blog"
            />
            <div className="page-content-box">
                <div className="container">
                    <ScrollReveal className="section-header center" delay="1">
                        <h2>{t('blog_heading')}</h2>
                        <p className="section-desc center">{t('blog_desc')}</p>
                    </ScrollReveal>

                    <div className="blog-grid" style={{ marginTop: '3.5rem' }}>
                        {posts.map((post, index) => (
                            <ScrollReveal key={post.id} className="blog-card" delay={(index + 1).toString()}>
                                <div className="blog-card-img">
                                    <img src={post.img} alt={t(post.titleKey)} />
                                    <span className="blog-badge">{t(post.badgeKey)}</span>
                                </div>
                                <div className="blog-card-content">
                                    <div className="blog-date">{t(post.dateKey)}</div>
                                    <h3 className="blog-card-title">{t(post.titleKey)}</h3>
                                    <p className="blog-card-desc">{t(post.descKey)}</p>
                                    <Link to={post.path} className="blog-read-btn">
                                        {t('read_more')} <i className="fa-solid fa-chevron-right"></i>
                                    </Link>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </SubpageLayout>
    );
};
