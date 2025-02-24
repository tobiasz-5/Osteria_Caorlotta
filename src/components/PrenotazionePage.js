import React from 'react';
import PrenotazioneForm from './PrenotazioneForm';
import { useTranslation } from 'react-i18next';
import './PrenotazionePage.css'; // Importa il file CSS separato

function PrenotazionePage() {
  const { t } = useTranslation(); // Inizializza la traduzione

  return (
    <div className="prenotazione-page">
      <div className="form-container">
        <PrenotazioneForm />
      </div>
    </div>
  );
}

export default PrenotazionePage;
