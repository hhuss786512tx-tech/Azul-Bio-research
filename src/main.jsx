import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles.css';
import App from './App.jsx';
import { LanguageProvider } from './LanguageContext';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <HelmetProvider>
      <Router>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </Router>
    </HelmetProvider>
  </StrictMode>
);

if (container && container.hasChildNodes()) {
  hydrateRoot(container, app);
} else if (container) {
  createRoot(container).render(app);
}
