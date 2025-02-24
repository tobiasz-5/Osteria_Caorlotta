// Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import './Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation(); // Inizializza la traduzione
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{t('footer')}</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer">
            <FaTripadvisor className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
