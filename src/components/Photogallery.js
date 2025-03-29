import React, { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './Photogallery.css';

// Import dinamico delle immagini dalla cartella photogallery
const images = importAll(
  require.context('../assets/images/photogallery', false, /\.(jpe?g|png|webp)$/)
);

function importAll(r) {
  return r
    .keys()
    .sort() // Ordina i nomi dei file (es: ./piatto1.jpg, ./piatto2.jpg, ...)
    .map(r); // Importa le immagini in quell'ordine
}

function Photogallery() {
  const { t } = useTranslation();
  const galleryRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Controlla la larghezza per decidere se è mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Se mobile, resetta lo scroll
  useEffect(() => {
    if (isMobile && galleryRef.current) {
      galleryRef.current.scrollLeft = 0;
    }
  }, [isMobile]);

  const scrollLeft = () => {
    galleryRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    galleryRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  const handleGalleryClick = (e) => {
    if (!galleryRef.current) return;
    const rect = galleryRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const mid = rect.width / 2;
    if (clickX < mid) {
      scrollLeft();
    } else {
      scrollRight();
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('seo.photogallery_title')}</title>
        <meta name="description" content={t('seo.photogallery_description')} />

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

      <div className="photogallery-container">
        <div className="additional-layer"></div>
        <div className="additional-layer2"></div>
        <div className="additional-layer3"></div>

        <div className="gallery-wrapper">
          {/* Frecce visibili solo su desktop */}
          {!isMobile && (
            <button className="scroll-button left" onClick={scrollLeft}>
              &#8249;
            </button>
          )}

          <div
            className="gallery-grid"
            ref={galleryRef}
            onClick={handleGalleryClick}
          >
            {images.map((image, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={image}
                  alt={t('photogallery.imageAlt', { index: index + 1 })}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {!isMobile && (
            <button className="scroll-button right" onClick={scrollRight}>
              &#8250;
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Photogallery;
