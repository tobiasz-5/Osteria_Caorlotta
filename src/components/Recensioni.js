import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './Recensioni.css';

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';
import img11 from '../assets/images/11.jpg';
import img12 from '../assets/images/12.jpg';

function Recensioni() {
  const { t } = useTranslation();
  const immagini = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
  const [indice, setIndice] = useState(0);
  const imgRef = useRef(null);

  const vaiAvanti = () => {
    setIndice((prevIndice) => (prevIndice + 1) % immagini.length);
  };

  const vaiIndietro = () => {
    setIndice((prevIndice) => (prevIndice - 1 + immagini.length) % immagini.length);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 7.2; // Inclinazione orizzontale
    const y = ((e.clientY - top) / height - 0.5) * 7.2;  // Inclinazione verticale
    imgRef.current.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
  };

  const handleMouseLeave = () => {
    imgRef.current.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
  };

  return (
    <>
      <Helmet>
        <title>{t('seo.recensioni_title')}</title>
        <meta name="description" content={t('seo.recensioni_description')} />
      </Helmet>
      <div className="recensioni">
        <div className="overlay"></div>
        <div className="carosello">
          <img
            ref={imgRef}
            src={immagini[indice]}
            alt={`Recensione ${indice + 1}`}
            className="carosello-immagine"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
          <button onClick={vaiIndietro} className="carosello-bottone precedente">{"<"}</button>
          <button onClick={vaiAvanti} className="carosello-bottone successiva">{">"}</button>
        </div>
      </div>
    </>
  );
}

export default Recensioni;
