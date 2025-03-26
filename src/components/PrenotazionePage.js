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
