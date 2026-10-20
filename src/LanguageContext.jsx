import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

const readInitialLang = () => {
    try {
        // ?lang=es (the URL advertised in hreflang/sitemap) wins over the saved preference
        if (typeof window !== 'undefined') {
            const fromUrl = new URLSearchParams(window.location.search).get('lang');
            if (fromUrl === 'es' || fromUrl === 'en') return fromUrl;
        }
        const saved = localStorage.getItem('lang');
        return saved === 'es' ? 'es' : 'en';
    } catch (e) {
        return 'en';
    }
};

export const LanguageProvider = ({ children }) => {
    // Always start in English so client hydration matches the prerendered HTML,
    // then switch to the saved / ?lang= language right after mount.
    const [lang, setLangState] = useState('en');
    const hydratedRef = useRef(false);

    useEffect(() => {
        const initial = readInitialLang();
        hydratedRef.current = true;
        if (initial !== 'en') setLangState(initial);
    }, []);

    useEffect(() => {
        if (!hydratedRef.current) return;
        try {
            localStorage.setItem('lang', lang);
        } catch (e) {}
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', 'ltr');
    }, [lang]);

    const setLang = (newLang) => {
        const validLang = newLang === 'es' ? 'es' : 'en';
        setLangState(validLang);
    };

    const t = (key) => {
        return translations[lang]?.[key] || translations['en']?.[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
