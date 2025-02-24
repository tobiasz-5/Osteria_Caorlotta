// /src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/images/scritta.png'; 
// import logoHome from '../assets/images/logo_home.png'; // Aggiunto
import './HomePage.css'; // Assicurati di importare il CSS

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <img src={logoImage} alt="Scritta" className="homepage-logo" />
      <div className="home-buttons">
        <Link to="/prenotazione">
          <button className="btn btn-prenota">{t('prenota')}</button>
        </Link>
      </div>
      {/* <img src={logoHome} alt="Logo" className="homepage-bottom-logo" /> */}
      {/* <img src={logoHome} alt="Logo" className="homepage-bottom-logo2" /> */}
    </div>
  );
}

export default HomePage;
