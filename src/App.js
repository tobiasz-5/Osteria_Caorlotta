// src/App.js
import React, { Suspense, lazy } from 'react';
import './App.css';
import './i18n';
import CookieBanner from './components/CookieBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import { Route, Routes, useLocation } from 'react-router-dom';

// Route-based code splitting:
const HomePage = lazy(() => import('./components/HomePage'));
const PrenotazionePage = lazy(() => import('./components/PrenotazionePage'));
const MenuPage = lazy(() => import('./components/MenuPage'));
const ChiSiamo = lazy(() => import('./components/ChiSiamo'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const DoveSiamo = lazy(() => import('./components/DoveSiamo'));
const Recensioni = lazy(() => import('./components/Recensioni'));
const PhotoGallery = lazy(() => import('./components/Photogallery'));

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />

      <header className="App-header">
        {location.pathname === '/' && <LanguageSwitcher />}
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Caricamento...</div>}>
                <HomePage />
              </Suspense>
            }
          />

          {/* Prenotazione */}
          <Route
            path="/prenotazione"
            element={
              <Suspense fallback={<div>Caricamento...</div>}>
                <PrenotazionePage />
              </Suspense>
            }
          />

          {/* Altre pagine */}
          <Route
            path="/chi-siamo"
            element={
              <Suspense fallback={<div>Caricamento...</div>}>
                <ChiSiamo />
              </Suspense>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <Suspense fallback={<div>Caricamento...</div>}>
                <PrivacyPolicy />
              </Suspense>
            }
          />
          <Route
            path="/menu"
            element={
              <Suspense fallback={<div>Caricamento...</div>}>
                <MenuPage />
              </Suspense>
            }
          />
          <Route
            path="/dove-siamo"
            element={
              <Suspense fallback={<div>Caricamento...</div>}>
                <DoveSiamo />
              </Suspense>
            }
          />
          <Route
            path="/recensioni"
            element={
              <Suspense fallback={<div>Caricamento...</div>}>
                <Recensioni />
              </Suspense>
            }
          />
          <Route
            path="/photogallery"
            element={
              <Suspense fallback={<div>Caricamento...</div>}>
                <PhotoGallery />
              </Suspense>
            }
          />
        </Routes>
      </header>

      <CookieBanner />
      <Footer />
    </div>
  );
}

export default App;
