import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLangState] = useState(() => {
        try {
            const saved = localStorage.getItem('lang');
            return saved === 'es' ? 'es' : 'en';
        } catch (e) {
            return 'en';
        }
    });

    useEffect(() => {
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
