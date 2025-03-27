import React from 'react';
import './App.css';
import './i18n';
import CookieBanner from './components/CookieBanner';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import HomePage from './components/HomePage';
import PrenotazionePage from './components/PrenotazionePage';
import MenuPage from './components/MenuPage';
import ChiSiamo from './components/ChiSiamo';
import PrivacyPolicy from './components/PrivacyPolicy';
import DoveSiamo from './components/DoveSiamo';
import Recensioni from './components/Recensioni';
import PhotoGallery from './components/Photogallery';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        {location.pathname === '/' && <LanguageSwitcher />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prenotazione" element={<PrenotazionePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/dove-siamo" element={<DoveSiamo />} />
          <Route path="/recensioni" element={<Recensioni />} />
          <Route path="/photogallery" element={<PhotoGallery />} />
        </Routes>
      </header>

      {/* Cookie Banner e Footer */}
      <CookieBanner />
      <Footer />
      <Navbar />
    </div>
  );
}

export default App;
