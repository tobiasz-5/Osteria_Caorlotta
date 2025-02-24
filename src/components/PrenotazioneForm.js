import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function PrenotazioneForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    telefono: '',
    email: '',
    coperti: '',
    data: '',
    orario: '',
    note: '',
  });

  // Funzione per gestire i giorni di chiusura
  const giorniChiusura = (date) => {
    const giorno = date.getDay(); // 0 = Domenica, 1 = Lunedì, ..., 6 = Sabato
    return giorno !== 1; // Lunedì chiuso tutto il giorno
  };

  // Funzione per gestire gli orari disponibili in base al giorno
  const orariDisponibili = () => {
    const orariPranzo = ['12:30', '12:45', '13:00', '13:15', '13:30', '13:45'];
    const orariCena = [
      '19:00', '19:15', '19:30', '19:45', '20:00',
      '20:15', '20:30', '20:45', '21:00', '21:15', '21:30', '21:45'
    ];

    const dataSelezionata = formData.data ? new Date(formData.data) : null;
    if (!dataSelezionata) return []; // Se non è stata selezionata una data, ritorna un array vuoto

    const giorno = dataSelezionata.getDay();

    // Martedì, mercoledì, giovedì chiuso a pranzo, mostra solo cena
    if (giorno >= 2 && giorno <= 4) {
      return orariCena;  // Solo cena in questi giorni
    }

    // Mostra pranzo e cena negli altri giorni
    return orariPranzo.concat(orariCena);
  };

  // Funzione per filtrare orari passati nel giorno corrente
  const orariFiltratiPerOggi = (orari) => {
    const oggi = new Date();
    const oggiString = oggi.toLocaleDateString();
    
    const dataSelezionata = formData.data instanceof Date ? formData.data : new Date(formData.data);
    const dataSelezionataString = dataSelezionata.toLocaleDateString();

    if (oggiString === dataSelezionataString) {
      const oraCorrente = oggi.getHours() * 60 + oggi.getMinutes(); // Ora attuale in minuti
      // Filtra gli orari che sono già passati per il giorno corrente
      return orari.filter(orario => {
        const [ore, minuti] = orario.split(':').map(Number);
        const orarioMinuti = ore * 60 + minuti;
        return orarioMinuti > oraCorrente;
      });
    }

    return orari; // Se non è oggi, restituisci tutti gli orari
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(formData.coperti, 10) < 1) {
      alert('Il numero di coperti deve essere almeno 1.');
      return;
    }
    if (parseInt(formData.coperti, 10) > 4) {
      alert(t('contattaRistorante'));
      return;
    }
    console.log('Dati del form:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="nome"
          placeholder={t('nome')}
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="cognome"
          placeholder={t('cognome')}
          value={formData.cognome}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="tel"
          name="telefono"
          placeholder={t('telefono')}
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder={t('email')}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="number"
          name="coperti"
          placeholder={t('coperti')}
          value={formData.coperti}
          onChange={handleChange}
          required
          min="1" 
        />
      </div>
      <div>
        <DatePicker
          selected={formData.data}
          onChange={(date) => setFormData({ ...formData, data: date })}
          filterDate={giorniChiusura}
          minDate={new Date()}
          placeholderText={t('selezionaData')}
          dateFormat="dd/MM/yyyy"
          required
        />
      </div>
      <div>
        <select
          name="orario"
          value={formData.orario}
          onChange={handleChange}
          required
        >
          {/* Mostra sempre il messaggio iniziale */}
          <option value="">{t('selezionaOrario')}</option>

          {!formData.data ? (
            <option disabled>{t('scegliPrimaLaData')}</option>  // Mostra il messaggio informativo
          ) : (
            <>
              {/* Mostra pranzo solo nei giorni in cui è aperto */}
              {formData.data && ![2, 3, 4].includes(new Date(formData.data).getDay()) && (
                <optgroup label={t('pranzo')}>
                  {orariFiltratiPerOggi(orariDisponibili().slice(0, 6)).map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </optgroup>
              )}

              <option disabled>──────────</option>

              {/* Mostra sempre gli orari di cena */}
              <optgroup label={t('cena')}>
                {orariFiltratiPerOggi(orariDisponibili().slice(6)).map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </optgroup>
            </>
          )}
        </select>
      </div>
      <div style={{ flex: '1 1 100%' }}>  {/* Il campo note occupa tutta la larghezza */}
        <textarea
          name="note"
          placeholder={t('note')}
          value={formData.note}
          onChange={handleChange}
        />
      </div>
      <div style={{ flex: '1 1 100%' }}>  {/* Il pulsante occupa tutta la larghezza */}
        <button type="submit" className="btn btn-submit">{t('prenota')}</button>
      </div>
    </form>
  );
}

export default PrenotazioneForm;
