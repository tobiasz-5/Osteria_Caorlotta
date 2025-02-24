import React, { useRef, useState, useEffect } from 'react';
import './Photogallery.css';

import piatto1 from '../assets/images/photogallery/piatto1.jpg';
import piatto2 from '../assets/images/photogallery/piatto2.jpg';
import piatto3 from '../assets/images/photogallery/piatto3.jpg';
import piatto4 from '../assets/images/photogallery/piatto4.jpg';
import piatto5 from '../assets/images/photogallery/piatto5.jpg';
import piatto6 from '../assets/images/photogallery/piatto6.jpg';
import piatto7 from '../assets/images/photogallery/piatto7.jpg';
import piatto8 from '../assets/images/photogallery/piatto8.jpg';
import piatto9 from '../assets/images/photogallery/piatto9.jpg';
import piatto10 from '../assets/images/photogallery/piatto10.jpg';
import piatto11 from '../assets/images/photogallery/piatto11.jpg';
import piatto12 from '../assets/images/photogallery/piatto12.jpg';
import piatto13 from '../assets/images/photogallery/piatto13.jpg';
import piatto14 from '../assets/images/photogallery/piatto14.jpg';
import piatto15 from '../assets/images/photogallery/piatto15.jpg';
import piatto16 from '../assets/images/photogallery/piatto16.jpg';
import piatto17 from '../assets/images/photogallery/piatto17.jpg';
import piatto18 from '../assets/images/photogallery/piatto18.jpg';
import piatto19 from '../assets/images/photogallery/piatto19.jpg';
import piatto20 from '../assets/images/photogallery/piatto20.jpg';
import piatto21 from '../assets/images/photogallery/piatto21.jpg';
import piatto22 from '../assets/images/photogallery/piatto22.jpg';
import piatto23 from '../assets/images/photogallery/piatto23.jpg';
import piatto24 from '../assets/images/photogallery/piatto24.jpg';
import piatto25 from '../assets/images/photogallery/piatto25.jpg';
import piatto26 from '../assets/images/photogallery/piatto26.jpg';
import piatto27 from '../assets/images/photogallery/piatto27.jpg';
import piatto28 from '../assets/images/photogallery/piatto28.jpg';
import piatto29 from '../assets/images/photogallery/piatto29.jpg';
import piatto30 from '../assets/images/photogallery/piatto30.jpg';





// Importa altre immagini se necessario

function Photogallery() {
  const images = [
    piatto1, piatto2, piatto3, piatto4, piatto5, piatto6, piatto7, piatto8,
    piatto9, piatto10, piatto11, piatto12, piatto13, piatto14, piatto15, piatto16,
    piatto17, piatto18, piatto19, piatto20, piatto21, piatto22, piatto23, piatto24,
    piatto25, piatto26, piatto27, piatto28, piatto29, piatto30
  ];
  const galleryRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Verifica larghezza per mostrare/nascondere frecce
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Se è mobile, resetta lo scroll (opzionale)
  useEffect(() => {
    if (isMobile && galleryRef.current) {
      galleryRef.current.scrollLeft = 0;
    }
  }, [isMobile]);

  // Scorrimento a sinistra/destra con le frecce
  const scrollLeft = () => {
    galleryRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    galleryRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  // Click nella gallery: se clicco nella parte sinistra scorre left, altrimenti right
  const handleGalleryClick = (e) => {
    if (!galleryRef.current) return;
    const rect = galleryRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left; // Posizione X del click rispetto alla gallery
    const mid = rect.width / 2;          // Punto centrale

    if (clickX < mid) {
      // Click nella metà sinistra => scorri a sinistra
      scrollLeft();
    } else {
      // Click nella metà destra => scorri a destra
      scrollRight();
    }
  };

  return (
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
          onClick={handleGalleryClick}  // <-- Usa il click per decidere scroll left / right
        >
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Foto ${index + 1}`} loading="lazy" />
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
  );
}

export default Photogallery;