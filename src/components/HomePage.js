// /src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/images/scritta.png';
// import firenzeNero from '../assets/images/auto_firenze_bianco.png';
// import logoHome from '../assets/images/logo_home.png'; // Aggiunto
import './HomePage.css'; // Assicurati di importare il CSS

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <img src={logoImage} alt="Scritta" className="homepage-logo" />
      {/* <img src={firenzeNero} alt="Firenze Nero" className="homepage-subtext" /> */}
      <p className="homepage-subtitle">FIRENZE</p>
      <div className="home-buttons">
        <Link to="/prenotazione">
          <button className="btn btn-prenota">{t('prenota')}</button>
        </Link>
      </div>
      <div className="home-schedule">
        <p>
          Lungarno Amerigo Vespucci - 34r <br></br>
          {t('giorni_schedule_weekend')}: 12.30 - 13.45 | 19.00 - 21.45 <br></br>
          {t('giorni_schedule_infraset')}: 19.00 - 21.45<br></br>
          📞 +39 345 169 1689 <br></br> 📧 osteriacaorlotta@gmail.com
        </p>
      </div>
      {/* <img src={logoHome} alt="Logo" className="homepage-bottom-logo" /> */}
      {/* <img src={logoHome} alt="Logo" className="homepage-bottom-logo2" /> */}
    </div>
  );
}

export default HomePage;
