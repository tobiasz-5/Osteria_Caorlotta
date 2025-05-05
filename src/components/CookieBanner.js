// src/components/CookieBanner.js
import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';
import './CookieBanner.css';

function CookieBanner() {
  const { t } = useTranslation();

  const handleAccept = () => {
    Cookies.set("acceptCookies", "true", { expires: 150 });
    window.location.reload(); // ricarica per attivare mappa
  };

  const handleReject = () => {
    Cookies.set("acceptCookies", "false", { expires: 150 }); // esplicita scelta rifiuto
    console.log("Cookie non essenziali rifiutati");
    // non serve reload, ma chiude il banner
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
        style={{ background: "#222" }}
        buttonStyle={{ background: "#dbcfa1", color: "#222", fontWeight: "bold" }}
        declineButtonStyle={{ background: "#fff", color: "#222", fontWeight: "bold" }}
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
