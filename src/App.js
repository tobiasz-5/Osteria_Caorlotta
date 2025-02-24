import React from 'react';
import './App.css';
import './i18n';
import CookieBanner from './components/CookieBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importa il Footer
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

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
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
      <CookieBanner />
      <Footer /> {/* Aggiungi il Footer qui */}
    </div>
  );
}

export default App;
