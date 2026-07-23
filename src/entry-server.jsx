import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import { LanguageProvider } from './LanguageContext';

export function render(url, helmetContext = {}) {
  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
  return { html };
}
