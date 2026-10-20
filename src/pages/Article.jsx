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
            descKey: 'blog_c1_desc',
            badgeKey: 'blog_badge_edu',
            dateKey: 'blog_date_1',
            isoDate: '2026-07-10',
            renderBody: () => (
                <>
                    <p className="article-lead">{t('blog_c1_p1')}</p>
                    <h2 className="article-section-title">{t('blog_c1_h1')}</h2>
                    <p>{t('blog_c1_p2')}</p>
                    <h2 className="article-section-title">{t('blog_c1_h2')}</h2>
                    <p>{t('blog_c1_p3')}</p>
                    <h2 className="article-section-title">{t('blog_c1_h3')}</h2>
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
            descKey: 'blog_c2_desc',
            badgeKey: 'blog_badge_resp',
            dateKey: 'blog_date_2',
            isoDate: '2026-06-28',
            renderBody: () => (
                <>
                    <p className="article-lead">{t('blog_c2_p1')}</p>
                    <h2 className="article-section-title">{t('blog_c2_h1')}</h2>
                    <p>{t('blog_c2_p2')}</p>
                    <h2 className="article-section-title">{t('blog_c2_h2')}</h2>
                    <p>{t('blog_c2_p3')}</p>
                </>
            )
        },
        'gut-health': {
            titleKey: 'blog_c3_title',
            descKey: 'blog_c3_desc',
            badgeKey: 'blog_badge_gastro',
            dateKey: 'blog_date_3',
            isoDate: '2026-06-15',
            renderBody: () => (
                <>
                    <p className="article-lead">{t('blog_c3_p1')}</p>
                    <h2 className="article-section-title">{t('blog_c3_h1')}</h2>
                    <p>{t('blog_c3_p2')}</p>
                    <h2 className="article-section-title">{t('blog_c3_h2')}</h2>
                    <p>{t('blog_c3_p3')}</p>
                </>
            )
        }
    };

    const article = articleData[slug];

    if (!article) {
        return (
            <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
                <h1>Article Not Found</h1>
                <p style={{ margin: '1.5rem 0' }}>The insight article you are looking for does not exist.</p>
                <Link to="/blog" className="btn btn-primary">Back to Insights</Link>
            </div>
        );
    }

    return (
        <SubpageLayout categoryKey="nav_blog" titleKey={article.titleKey}>
            <SEO 
                title={t(article.titleKey)}
                description={t(article.descKey)}
                path={`/blog/${slug}`}
                type="article"
                schemaData={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": t(article.titleKey),
                    "description": t(article.descKey),
                    "datePublished": article.isoDate,
                    "inLanguage": "en",
                    "mainEntityOfPage": `https://azulbioresearch.com/blog/${slug}`,
                    "author": { "@type": "Organization", "name": "Azul Bio-Research", "url": "https://azulbioresearch.com" },
                    "publisher": { "@type": "Organization", "name": "Azul Bio-Research", "logo": { "@type": "ImageObject", "url": "https://azulbioresearch.com/assets/azul_logo_high_res.svg" } }
                }}
            />
            <div className="page-content-box">
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <ScrollReveal className="article-meta" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                        <span className="blog-badge" style={{ position: 'static' }}>{t(article.badgeKey)}</span>
                        <span className="article-date" style={{ color: 'var(--text-sub)', fontSize: '0.95rem' }}>
                            <i className="fa-regular fa-calendar-days" style={{ marginRight: '0.5rem' }} aria-hidden="true"></i>
                            <time dateTime={article.isoDate}>{t(article.dateKey)}</time>
                        </span>
                    </ScrollReveal>
                    
                    <ScrollReveal className="article-body-content">
                        {article.renderBody()}
                    </ScrollReveal>
                    
                    <p className="article-disclaimer">This article is general information, not medical advice. Talk to your physician before making decisions about your care or joining a study.</p>
                    <ScrollReveal className="article-footer" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                        <Link to="/blog" className="blog-read-btn" style={{ fontSize: '1rem', fontWeight: '600' }}>
                            <i className="fa-solid fa-chevron-left" style={{ marginRight: '0.5rem' }} aria-hidden="true"></i> Back to Insights
                        </Link>
                        <Link to="/active-trials" className="blog-read-btn" style={{ fontSize: '1rem', fontWeight: '600' }}>
                            See active trials <i className="fa-solid fa-chevron-right" style={{ marginLeft: '0.5rem' }} aria-hidden="true"></i>
                        </Link>
                    </ScrollReveal>
                </div>
            </div>
        </SubpageLayout>
    );
};
