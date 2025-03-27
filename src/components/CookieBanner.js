import React, { useEffect, useState } from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';
import './CookieBanner.css';

function CookieBanner() {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);

  // Ritarda la visualizzazione per non influenzare il LCP
  useEffect(() => {
    const timer = setTimeout(() => setShowBanner(true), 3000); // Ritardo di 2 secondi
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    Cookies.set("acceptCookies", "true", { expires: 150 });
    // Ricarica posticipata per evitare blocchi immediati (opzionale)
    setTimeout(() => window.location.reload(), 500);
  };

  const handleReject = () => {
    Cookies.remove("acceptCookies");
    console.log("Cookie non essenziali rifiutati");
  };

  return (
    showBanner && (
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
          <a
            href="/privacy-policy"
            style={{ color: "#d0d0c9", textDecoration: 'underline' }}
          >
            {t('leggiDiPiu')}
          </a>
        </CookieConsent>
      </div>
    )
  );
}

export default CookieBanner;
