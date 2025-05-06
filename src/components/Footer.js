// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Cookies, resetCookieConsentValue } from 'react-cookie-consent';
import './Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  const gestisciCookie = () => {
    // Rimuove il consenso e fa riapparire il banner
    Cookies.remove('acceptCookies');
    resetCookieConsentValue();
    window.location.reload(); // Ricarica per riattivare il banner
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Colonna sinistra */}
        <div className="footer-left">
          {/* <p>Lungarno Amerigo Vespucci – 34r</p> */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/privacy-policy" className="footer-link">
              Privacy & Cookie Policy
            </Link>
            <button type="button" onClick={gestisciCookie} className="footer-link btn-reset">
              Gestisci cookie
            </button>
          </div>
        </div>

        {/* Colonna centrale */}
        <div className="footer-center">
          <p>{t('footer')}</p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/p/Osteria-Caorlotta-Firenze-100088978474662/"
              aria-label="Facebook Osteria Caorlotta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/osteriacaorlottafirenze/"
              target="_blank"
              aria-label="Instagram Osteria Caorlotta"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://www.tripadvisor.it/Restaurant_Review-g187895-d25226040-Reviews-Osteria_Caorlotta-Florence_Tuscany.html"
              aria-label="Trip advisor Osteria Caorlotta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTripadvisor className="social-icon" />
            </a>
          </div>
        </div>

        {/* Colonna destra */}
        <div className="footer-right">
          <p>
            Credits:{' '}
            <a
              href="https://my-website-indol-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link"
            >
              T. Schettini
            </a>{' '}
            | T.N.T Media & Communication
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
