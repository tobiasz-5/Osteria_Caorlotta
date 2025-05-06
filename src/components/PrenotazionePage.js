import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PrenotazioneForm from './PrenotazioneForm';
import './PrenotazionePage.css';

function PrenotazionePage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.prenotazione_title')}</title>
        <meta name="description" content={t('seo.prenotazione_description')} />
        
        {/* Pre-connect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />

        {/* Pre-load Montserrat */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          crossorigin="anonymous"
        />

        {/* Pre-load Cormorant Garamond */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap"
          crossorigin="anonymous"
        />

        
        <noscript>
          {`
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap">
          `}
        </noscript>
      </Helmet>
      <div className="prenotazione-page">
        <div className="form-container">
          <PrenotazioneForm />
        </div>
      </div>
    </>
  );
}

export default PrenotazionePage;
