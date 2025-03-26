import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/images/scritta.png';
import './HomePage.css';

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
      </Helmet>
      <div className="home-page">
        <img src={logoImage} alt="Scritta" className="homepage-logo" />
        <p className="homepage-subtitle">FIRENZE</p>
        <div className="home-buttons">
          <Link to="/prenotazione">
            <button className="btn btn-prenota">{t('prenota')}</button>
          </Link>
        </div>
        <div className="home-schedule">
          <p>
            Lungarno Amerigo Vespucci - 34r <br />
            {t('giorni_schedule_weekend')}: 12.00 - 14.00 | 19.00 - 22.30 <br />
            {t('giorni_schedule_infraset')}: 19.00 - 22.30<br />
            📞 +39 345 169 1689 <br /> 📧 osteriacaorlotta@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
