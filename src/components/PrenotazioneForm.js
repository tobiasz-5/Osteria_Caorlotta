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
    data: null, // usare null per indicare l'assenza di data
    orario: '',
    note: '',
  });

  const orariPranzo = ['12:30', '12:45', '13:00', '13:15', '13:30', '13:45'];
  const orariCena = [
    '19:00', '19:15', '19:30', '19:45', '20:00',
    '20:15', '20:30', '20:45', '21:00', '21:15', '21:30', '21:45'
  ];

  const giorniChiusura = (date) => date.getDay() !== 1;

  const orariFiltratiPerOggi = (orari) => {
    const oggi = new Date();
    const oggiString = oggi.toLocaleDateString();
    const dataSelezionata = formData.data instanceof Date ? formData.data : new Date(formData.data);
    const dataSelezionataString = dataSelezionata.toLocaleDateString();

    if (oggiString === dataSelezionataString) {
      const oraCorrente = oggi.getHours() * 60 + oggi.getMinutes();
      return orari.filter(orario => {
        const [ore, minuti] = orario.split(':').map(Number);
        return ore * 60 + minuti > oraCorrente;
      });
    }
    return orari;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gestione della validazione prima dell'invio del form
  // Notate che non usiamo e.preventDefault() se la validazione va a buon fine,
  // lasciando al browser il compito di inviare il form in modo tradizionale.
  const handleSubmit = (e) => {
    const copertiNum = parseInt(formData.coperti, 10);
    if (isNaN(copertiNum) || copertiNum < 1) {
      alert('Il numero di coperti deve essere almeno 1.');
      e.preventDefault();
      return;
    }
    if (copertiNum > 4) {
      alert(t('contattaRistorante'));
      e.preventDefault();
      return;
    }
    // Se le validazioni passano, il form verrà inviato normalmente
  };

  return (
    // Specifica l'azione del form (URL Formspree) e il metodo POST
    <form
      action="https://formspree.io/f/xoqgozly"
      method="POST"
      onSubmit={handleSubmit}
    >
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
          name="Numero Coperti"
          placeholder={t('coperti')}
          value={formData.coperti}
          onChange={handleChange}
          required
          min="1"
        />
      </div>
      <div>
        {/* Il DatePicker visualizza la data, ma per inviare il dato in modo nativo usiamo un campo hidden */}
        <DatePicker
          selected={formData.data}
          onChange={(date) => setFormData({ ...formData, data: date })}
          filterDate={giorniChiusura}
          minDate={new Date()}
          placeholderText={t('selezionaData')}
          dateFormat="dd/MM/yyyy"
          required
        />
        <input
          type="hidden"
          name="data"
          value={formData.data ? formData.data.toISOString() : ''}
        />
      </div>
      <div>
        <select
          name="orario"
          value={formData.orario}
          onChange={handleChange}
          required
        >
          <option value="">{t('selezionaOrario')}</option>
          {!formData.data ? (
            <option disabled>{t('scegliPrimaLaData')}</option>
          ) : (
            <>
              {formData.data && ![2, 3, 4].includes(new Date(formData.data).getDay()) && (
                <optgroup label={t('pranzo')}>
                  {orariFiltratiPerOggi(orariPranzo).map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </optgroup>
              )}
              <option disabled>──────────</option>
              <optgroup label={t('cena')}>
                {orariFiltratiPerOggi(orariCena).map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </optgroup>
            </>
          )}
        </select>
      </div>
      <div style={{ flex: '1 1 100%' }}>
        <textarea
          name="note"
          placeholder={`${t('note')} (${t('confermaRichiesta') || 'Attendi conferma via email'})`}
          value={formData.note}
          onChange={handleChange}
        />
      </div>
      <div style={{ flex: '1 1 100%' }}>
        <button type="submit" className="btn btn-submit">{t('prenota')}</button>
      </div>
    </form>
  );
}

export default PrenotazioneForm;
