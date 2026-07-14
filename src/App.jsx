import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { WhyChooseUs } from './pages/WhyChooseUs';
import { Technology } from './pages/Technology';
import { Diversity } from './pages/Diversity';
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
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/diversity" element={<Diversity />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/active-trials" element={<ActiveTrials />} />
        <Route path="/become-volunteer" element={<BecomeVolunteer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
