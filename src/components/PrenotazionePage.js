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
      <div className="prenotazione-page">
        <div className="form-container">
          <PrenotazioneForm />
        </div>
      </div>
    </>
  );
}

export default PrenotazionePage;
