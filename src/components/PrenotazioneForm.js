import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/* Utility: stringa “YYYY-MM-DD” nel fuso locale */
const toLocalDateString = (date) => {
  if (!date) return '';
  const tzOffsetMs = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - tzOffsetMs).toISOString().slice(0, 10);
};

function PrenotazioneForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nome:     '',
    cognome:  '',
    telefono: '',
    email:    '',
    coperti:  '',
    data:     null,
    orario:   '',
    note:     '',
  });

  const orariPranzo = ['12:30', '12:45', '13:00', '13:15', '13:30', '13:45'];
  const orariCena   = [
    '19:00','19:15','19:30','19:45','20:00',
    '20:15','20:30','20:45','21:00','21:15','21:30','21:45'
  ];
  const giorniChiusura = (d) => d.getDay() !== 1;

  const orariFiltratiPerOggi = (orari) => {
    if (!formData.data) return orari;
    const oggi = new Date();
    if (oggi.toDateString() !== formData.data.toDateString()) return orari;
    const minNow = oggi.getHours() * 60 + oggi.getMinutes();
    return orari.filter(time => {
      const [h, m] = time.split(':').map(Number);
      return h * 60 + m > minNow;
    });
  };

  const handleChange = ({ target:{ name,value }}) =>
    setFormData(prev => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    const n = parseInt(formData.coperti,10);
    if (isNaN(n) || n < 1) { alert('Il numero di coperti deve essere almeno 1.'); e.preventDefault(); return; }
    if (n > 4) { alert(t('contattaRistorante')); e.preventDefault(); }
  };

  return (
    <form action="https://formspree.io/f/xoqgozly" method="POST" onSubmit={handleSubmit}>
      {/* —— colonne/flessibili come nell’originale ———————————— */}
      <div><input type="text" name="nome" placeholder={t('nome')}
                  value={formData.nome} onChange={handleChange} required /></div>

      <div><input type="text" name="cognome" placeholder={t('cognome')}
                  value={formData.cognome} onChange={handleChange} required /></div>

      <div><input type="tel" name="telefono" placeholder={t('telefono')}
                  value={formData.telefono} onChange={handleChange} required /></div>

      <div><input type="email" name="email" placeholder={t('email')}
                  value={formData.email} onChange={handleChange} required /></div>

      <div><input type="number" name="coperti" placeholder={t('coperti')}
                  value={formData.coperti} onChange={handleChange} required min="1" /></div>

      {/* —— datepicker + hidden yyyy-MM-dd ———————————————— */}
      <div>
        <DatePicker
          selected={formData.data}
          onChange={date => setFormData(prev => ({ ...prev, data: date }))}
          filterDate={giorniChiusura}
          minDate={new Date()}
          placeholderText={t('selezionaData')}
          dateFormat="dd/MM/yyyy"
          required
        />
        <input type="hidden" name="data" value={toLocalDateString(formData.data)} />
      </div>

      {/* —— select orario (identico a prima) ———————————————— */}
      <div>
        <select name="orario" value={formData.orario} onChange={handleChange} required>
          <option value="">{t('selezionaOrario')}</option>
          {!formData.data ? (
            <option disabled>{t('scegliPrimaLaData')}</option>
          ) : (
            <>
              {![2,3,4].includes(formData.data.getDay()) && (
                <optgroup label={t('pranzo')}>
                  {orariFiltratiPerOggi(orariPranzo).map(ti =>
                    <option key={ti} value={ti}>{ti}</option>)}
                </optgroup>
              )}
              <option disabled>──────────</option>
              <optgroup label={t('cena')}>
                {orariFiltratiPerOggi(orariCena).map(ti =>
                  <option key={ti} value={ti}>{ti}</option>)}
              </optgroup>
            </>
          )}
        </select>
      </div>

      <div style={{ flex:'1 1 100%' }}>
        <textarea name="note" placeholder={t('note')}
                  value={formData.note} onChange={handleChange} />
      </div>

      <div style={{ flex:'1 1 100%' }}>
        <button type="submit" className="btn btn-submit">{t('prenota')}</button>
      </div>
    </form>
  );
}

export default PrenotazioneForm;
