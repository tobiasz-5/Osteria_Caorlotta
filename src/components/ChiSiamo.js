import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next'; // <--- Import
import insieme from '../assets/images/insieme.jpg';
import insieme2 from '../assets/images/insieme2.jpg';
// import guanti from '../assets/images/guanti.jpg';
// import alika2 from '../assets/images/alika2.jpg';
import ingresso from '../assets/images/ingresso.jpg';
import interno1 from '../assets/images/interno1.jpg';

import './ChiSiamo.css';

function ChiSiamo() {
  // Inizializzi la traduzione
  const { t } = useTranslation();

  useEffect(() => {
    const sections = document.querySelectorAll(
      '.section-left p, .section-right p, .section-three p, .section-four p, .section-left img, .section-right img, .section-three img, .section-four img'
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
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

      <div className="chi-siamo">
        {/* Sezione 1 (img sinistra, testo a destra) */}
        <div className="section-left">
          <img src={ingresso} alt="ristorante osteria caorlotta, ingresso" className="hidden" />
          {/* Sostituisci il testo fisso con t('chi_siamo.testo_1') */}
          <p className="testo_sez_1 hidden">
            <h2 style={{ marginBottom: '0.2rem', fontSize: '1.8rem' }}>{t('chi_siamo.titolo_1')}</h2>
            <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.3rem' }}>{t('chi_siamo.sottotitolo_1')}</h3>
            {t('chi_siamo.testo_1')}
          </p>
        </div>

        {/* Sezione 2 (img destra, testo a sinistra) */}
        <div className="section-right">
          <p className="testo_sez_2 hidden">
            {t('chi_siamo.testo_2')}
          </p>
          <img src={insieme2} alt="lungarno ristorante osteria caorlotta, ingresso" className="hidden" />
        </div>

        {/* Sezione 3 (img sinistra, testo a destra) */}
        <div className="section-three">
          <img src={insieme} alt="Ristorante sul lungarno, cucina di pesce" className="hidden" />
          <p className="testo_sez_3 hidden">
            <h2 style={{ marginBottom: '0.2rem', fontSize: '1.8rem' }}>{t('chi_siamo.titolo_2')}</h2>
            <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.3rem' }}>{t('chi_siamo.sottotitolo_2')}</h3>
            {t('chi_siamo.testo_3')}
          </p>
        </div>

        {/* Sezione 4 (img destra, testo a sinistra) */}
        <div className="section-four">
          <p className="testo_sez_4 hidden">
            <h2 style={{ marginBottom: '0.2rem', fontSize: '1.8rem' }}>{t('chi_siamo.titolo_3')}</h2>
            <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.3rem' }}>{t('chi_siamo.sottotitolo_3')}</h3>
            {t('chi_siamo.testo_4')}
          </p>
          {/* <img src={guanti} alt="seafood, cucina di pesce, carpaccio di tonno" className="hidden" /> */}
          <img src={interno1} alt="i tavoli di osteria caorlotta" className="hidden" />
        </div>
      </div>
    </>
  );
}

export default ChiSiamo;
