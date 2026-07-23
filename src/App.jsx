import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { WhyChooseUs } from './pages/WhyChooseUs';
import { Technology } from './pages/Technology';
import { AboutUs } from './pages/AboutUs';
import { Team } from './pages/Team';
import { Partners } from './pages/Partners';
import { Facilities } from './pages/Facilities';
import { Documentation } from './pages/Documentation';
import { ActiveTrials } from './pages/ActiveTrials';
import { BecomeVolunteer } from './pages/BecomeVolunteer';
import { Blog } from './pages/Blog';
import { Article } from './pages/Article';
import { Faq } from './pages/Faq';

function App() {
  const location = useLocation();

  useEffect(() => {
    const isHome = location.pathname === '/' || location.pathname === '/index.html';
    if (isHome) {
      document.body.classList.add('home-page');
    } else {
      document.body.classList.remove('home-page');
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/why-choose-us.html" element={<WhyChooseUs />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/technology.html" element={<Technology />} />
        <Route path="/diversity" element={<Navigate to="/about-us" replace />} />
        <Route path="/diversity.html" element={<Navigate to="/about-us" replace />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us.html" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team.html" element={<Team />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/partners.html" element={<Partners />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/facilities.html" element={<Facilities />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/documentation.html" element={<Documentation />} />
        <Route path="/active-trials" element={<ActiveTrials />} />
        <Route path="/active-trials.html" element={<ActiveTrials />} />
        <Route path="/become-volunteer" element={<BecomeVolunteer />} />
        <Route path="/become-volunteer.html" element={<BecomeVolunteer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog.html" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="/understanding-clinical-trials.html" element={<Article overrideSlug="patient-safety" />} />
        <Route path="/copd-treatment-advancements.html" element={<Article overrideSlug="copd-advancements" />} />
        <Route path="/gut-health-and-microbiome.html" element={<Article overrideSlug="gut-health" />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq.html" element={<Faq />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
