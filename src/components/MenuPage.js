import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './MenuPage.css';

import menu1 from '../assets/images/menu1.png';
import menu2 from '../assets/images/menu2.png';
import menu3 from '../assets/images/menu3.png';
import menu4 from '../assets/images/menu4.png';

function MenuPage() {
  const { t } = useTranslation();
  const images = [menu1, menu2, menu3, menu4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const menuItemsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Imposta il valore iniziale
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && menuItemsRef.current) {
      // Imposta la posizione di scorrimento all'inizio
      menuItemsRef.current.scrollLeft = 0;
    }
  }, [isMobile]);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <Helmet>
        <title>{t('seo.menu_title')}</title>
        <meta name="description" content={t('seo.menu_description')} />

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
      <div className="menu-page">
        <div className="background-layer"></div>
        <div className="carousel">
          {/* Frecce visibili solo su desktop (non mobile) */}
          {!isMobile && (
            <button className="arrow left-arrow" onClick={goToPrevious}>
              &#10094;
            </button>
          )}

          <div className="menu-items" ref={menuItemsRef}>
            {isMobile
              ? // Modalità mobile: tutte le immagini in sequenza, scroll orizzontale
                images.map((image, index) => (
                  <div key={index} className="menu-item">
                    <img src={image} alt={`Menu ${index + 1}`} />
                  </div>
                ))
              : // Modalità desktop: mostriamo solo l'immagine currentIndex e la successiva
                [0, 1].map((offset) => {
                  const index = (currentIndex + offset) % images.length;
                  return (
                    <div key={index} className="menu-item">
                      <img src={images[index]} alt={`Menu ${index + 1}`} />
                    </div>
                  );
                })}
          </div>

          {/* Frecce visibili solo su desktop (non mobile) */}
          {!isMobile && (
            <button className="arrow right-arrow" onClick={goToNext}>
              &#10095;
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default MenuPage;
