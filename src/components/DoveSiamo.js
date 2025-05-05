import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Cookies } from 'react-cookie-consent';

import './DoveSiamo.css';

function DoveSiamo() {
  const { t } = useTranslation();
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("acceptCookies");
    if (consent === "true") {
      setShowMap(true);
    } else {
      // Ascolta eventuali cambiamenti dopo il primo caricamento
      const interval = setInterval(() => {
        const updatedConsent = Cookies.get("acceptCookies");
        if (updatedConsent === "true") {
          setShowMap(true);
          clearInterval(interval); // Evita loop infinito
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);
  

  return (
    <>
      <Helmet>
        <title>{t('seo.dove_siamo_title')}</title>
        <meta name="description" content={t('seo.dove_siamo_description')} />
        
        {/* Preconnect per Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload dei fogli di stile dei font */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />

        <noscript>
          {`
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap">
          `}
        </noscript>
      </Helmet>
      
      <div className="dove-siamo">
        <div className="additional-layer"></div>
        <div className="additional-layer2"></div>
        <p className="address-text">
          📍 Lungarno Amerigo Vespucci, 34r, 50123 Firenze FI, Italia
        </p>
        {showMap ? (
          <iframe
            title="Mappa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.566816589088!2d11.242021275952308!3d43.77493087111205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56a787f9c0a5%3A0x5f9148a5b5ae95c1!2sLungarno%20Amerigo%20Vespucci%2C%2034r%2C%2050123%20Firenze%20FI%2C%20Italia!5e0!3m2!1sit!2sit!4v1692389083947!5m2!1sit!2sit"
            width="100%"
            height="525"
            style={{ border: '2px solid #dbcfa1', borderRadius: '24px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        ) : (
          <p>
            {t('impostazioniPrivacy')}
            <a href="/privacy-policy" style={{ color: "#007bff", textDecoration: 'underline' }}>
              {t('privacyLink')}
            </a>.
          </p>
        )}
      </div>
    </>
  );
}

export default DoveSiamo;
