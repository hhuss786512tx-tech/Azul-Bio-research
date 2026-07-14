import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLangState] = useState(() => {
        try {
            return localStorage.getItem('lang') || 'en';
        } catch (e) {
            return 'en';
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('lang', lang);
        } catch (e) {}
        document.documentElement.setAttribute('lang', lang);
        if (lang === 'ur') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
    }, [lang]);

    const setLang = (newLang) => {
        setLangState(newLang);
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
