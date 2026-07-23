import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { SubpageLayout } from '../components/SubpageLayout';
import { ScrollReveal } from '../components/ScrollReveal';
import { SEO } from '../components/SEO';

export const Article = ({ overrideSlug }) => {
    const { slug: routeSlug } = useParams();
    const slug = overrideSlug || routeSlug;
    const { t } = useLanguage();

    // Map slug to translation keys and custom structure
    const articleData = {
        'patient-safety': {
            titleKey: 'blog_c1_title',
            badgeKey: 'blog_badge_edu',
            dateKey: 'blog_date_1',
            renderBody: () => (
                <>
                    <p className="article-lead">{t('blog_c1_p1')}</p>
                    <h3 className="article-section-title">{t('blog_c1_h1')}</h3>
                    <p>{t('blog_c1_p2')}</p>
                    <h3 className="article-section-title">{t('blog_c1_h2')}</h3>
                    <p>{t('blog_c1_p3')}</p>
                    <h3 className="article-section-title">{t('blog_c1_h3')}</h3>
                    <ul className="article-list">
                        <li><i className="fa-solid fa-circle-check"></i> <span><strong>Informed Consent:</strong> {t('blog_c1_l1').replace('Informed Consent:', '')}</span></li>
                        <li><i className="fa-solid fa-circle-check"></i> <span><strong>Constant Monitoring:</strong> {t('blog_c1_l2').replace('Constant Monitoring:', '')}</span></li>
                        <li><i className="fa-solid fa-circle-check"></i> <span><strong>Standard Operating Procedures (SOPs):</strong> {t('blog_c1_l3').replace('Standard Operating Procedures (SOPs):', '')}</span></li>
                    </ul>
                </>
            )
        },
        'copd-advancements': {
            titleKey: 'blog_c2_title',
            badgeKey: 'blog_badge_resp',
            dateKey: 'blog_date_2',
            renderBody: () => (
                <>
                    <p className="article-lead">{t('blog_c2_p1')}</p>
                    <h3 className="article-section-title">{t('blog_c2_h1')}</h3>
                    <p>{t('blog_c2_p2')}</p>
                    <h3 className="article-section-title">{t('blog_c2_h2')}</h3>
                    <p>{t('blog_c2_p3')}</p>
                </>
            )
        },
        'gut-health': {
            titleKey: 'blog_c3_title',
            badgeKey: 'blog_badge_gastro',
            dateKey: 'blog_date_3',
            renderBody: () => (
                <>
                    <p className="article-lead">{t('blog_c3_p1')}</p>
                    <h3 className="article-section-title">{t('blog_c3_h1')}</h3>
                    <p>{t('blog_c3_p2')}</p>
                    <h3 className="article-section-title">{t('blog_c3_h2')}</h3>
                    <p>{t('blog_c3_p3')}</p>
                </>
            )
        }
    };

    const article = articleData[slug];

    if (!article) {
        return (
            <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
                <h2>Article Not Found</h2>
                <p style={{ margin: '1.5rem 0' }}>The insight article you are looking for does not exist.</p>
                <Link to="/blog" className="btn btn-primary">Back to Insights</Link>
            </div>
        );
    }

    return (
        <SubpageLayout categoryKey="nav_blog" titleKey={article.titleKey}>
            <SEO 
                title={t(article.titleKey)}
                description={`Read ${t(article.titleKey)} on Azul Bio-Research insights and medical updates.`}
                path={`/blog/${slug}`}
                type="article"
            />
            <div className="page-content-box">
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <ScrollReveal className="article-meta" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                        <span className="blog-badge" style={{ position: 'static' }}>{t(article.badgeKey)}</span>
                        <span className="article-date" style={{ color: 'var(--text-sub)', fontSize: '0.95rem' }}>
                            <i className="fa-regular fa-calendar-days" style={{ marginRight: '0.5rem' }}></i>
                            {t(article.dateKey)}
                        </span>
                    </ScrollReveal>
                    
                    <ScrollReveal className="article-body-content">
                        {article.renderBody()}
                    </ScrollReveal>
                    
                    <ScrollReveal className="article-footer" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Link to="/blog" className="blog-read-btn" style={{ fontSize: '1rem', fontWeight: '600' }}>
                            <i className="fa-solid fa-chevron-left" style={{ marginRight: '0.5rem' }}></i> Back to Insights
                        </Link>
                    </ScrollReveal>
                </div>
            </div>
        </SubpageLayout>
    );
};
