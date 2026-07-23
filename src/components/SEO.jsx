import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../LanguageContext';

export const SEO = ({ title, description, path = '', canonicalUrl, image, type = 'website' }) => {
  const { lang } = useLanguage();
  const siteName = 'Azul Bio-Research';
  const fullTitle = title 
    ? `${title} | ${siteName}` 
    : `${siteName} | Premier Clinical Trial & Research Site`;
  
  const defaultDescription = "Azul Bio-Research is a premier clinical trial research site dedicated to protocol adherence, authenticated quality data, and patient well-being.";
  const metaDescription = description || defaultDescription;
  const baseUrl = 'https://azulbioresearch.com';
  const pageUrl = path ? `${baseUrl}${path}` : baseUrl;

  const defaultImage = `${baseUrl}/assets/azul_logo_light_bg.png`;
  const metaImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : defaultImage;

  return (
    <Helmet>
      <html lang={lang === 'ur' ? 'ur' : 'en'} dir={lang === 'ur' ? 'rtl' : 'ltr'} />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl || pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};
