import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../LanguageContext';

export const SEO = ({ 
  title, 
  description, 
  path = '', 
  canonicalUrl, 
  image, 
  type = 'website',
  schemaData = null
}) => {
  const { lang } = useLanguage();
  const siteName = 'Azul Bio-Research';
  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | Clinical Trial Site in Sugar Land, TX`;

  const defaultDescription = "Physician-led clinical trial site in Sugar Land, Texas, running Phase II-IV studies in nephrology, gastroenterology, pulmonology and internal medicine.";
  const metaDescription = description || defaultDescription;
  const baseUrl = 'https://azulbioresearch.com';
  const pageUrl = path && path !== '/' ? `${baseUrl}${path}` : `${baseUrl}/`;

  const defaultImage = `${baseUrl}/assets/hero_physicians_consult.jpg`;
  const metaImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : defaultImage;

  // Default MedicalBusiness & MedicalOrganization Schema.org JSON-LD
  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "MedicalOrganization"],
        "@id": `${baseUrl}/#organization`,
        "name": "Azul Bio-Research",
        "alternateName": ["Azul Bio Research", "Azul BioResearch Network"],
        "url": baseUrl,
        "logo": `${baseUrl}/assets/azul_logo_high_res.svg`,
        "image": `${baseUrl}/assets/hero_physicians_consult.jpg`,
        "description": metaDescription,
        "medicalSpecialty": [
          "Nephrology",
          "Pulmonology",
          "Gastroenterology",
          "Internal Medicine",
          "Clinical Research"
        ],
        "email": "info@azulbioresearch.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3531 Town Center Blvd., Suite 101",
          "addressLocality": "Sugar Land",
          "addressRegion": "TX",
          "postalCode": "77479",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Clinical Trial Admissions & Protocol Inquiries",
          "email": "info@azulbioresearch.com",
          "availableLanguage": ["English", "Spanish"]
        },
        "knowsLanguage": ["en", "es"]
      },
      {
        "@type": "Physician",
        "@id": `${baseUrl}/#dr-ather-hussain`,
        "name": "Dr. Syed Ather Hussain, MD, MS",
        "jobTitle": "Chief Medical Officer & Principal Investigator",
        "medicalSpecialty": ["Nephrology", "Internal Medicine"],
        "worksFor": { "@id": `${baseUrl}/#organization` }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
          },
          ...(path ? [{
            "@type": "ListItem",
            "position": 2,
            "name": title || "Page",
            "item": pageUrl
          }] : [])
        ]
      }
    ]
  };

  const activeSchema = schemaData || defaultSchema;

  return (
    <Helmet>
      <html lang={lang === 'es' ? 'es' : 'en'} dir="ltr" />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical and Alternate Hreflang Tags */}
      <link rel="canonical" href={canonicalUrl || pageUrl} />
      <link rel="alternate" hrefLang="en" href={pageUrl} />
      <link rel="alternate" hrefLang="es" href={`${pageUrl}?lang=es`} />
      <link rel="alternate" hrefLang="x-default" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1376" />
      <meta property="og:image:height" content="768" />
      <meta property="og:locale" content={lang === 'es' ? 'es_US' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(activeSchema)}
      </script>
    </Helmet>
  );
};
