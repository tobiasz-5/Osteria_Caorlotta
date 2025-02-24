// src/components/CookieBanner.js
import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';
import './CookieBanner.css';

function CookieBanner() {
  const { t } = useTranslation();

  const handleAccept = () => {
    Cookies.set("acceptCookies", "true", { expires: 150 });
    window.location.reload(); // Ricarica la pagina per attivare Google Maps
  };

  const handleReject = () => {
    Cookies.remove("acceptCookies");
    console.log("Cookie non essenziali rifiutati");
  };

  return (
    <div className="cookie-banner">
      <CookieConsent
        location="bottom"
        buttonText={t('accettaCookie')}
        declineButtonText={t('rifiutaCookie')}
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={handleReject}
        cookieName="acceptCookies"
        expires={150}
      >
        {t('messaggioCookie')}{" "}
        <a href="/privacy-policy" style={{ color: "#d0d0c9", textDecoration: 'underline' }}>
          {t('leggiDiPiu')}
        </a>
      </CookieConsent>
    </div>
  );
}

export default CookieBanner;
