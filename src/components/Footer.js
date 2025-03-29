// import React from 'react';
// import { FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa';
// import './Footer.css';
// import { useTranslation } from 'react-i18next';

// function Footer() {
//   const { t } = useTranslation(); // Inizializza la traduzione
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <p>{t('footer')}</p>
//         <div className="social-links">
//           <a href="https://www.facebook.com/p/Osteria-Caorlotta-Firenze-100088978474662/" target="_blank" rel="noopener noreferrer">
//             <FaFacebook className="social-icon" />
//           </a>
//           <a href="https://www.instagram.com/osteriacaorlottafirenze/" target="_blank" rel="noopener noreferrer">
//             <FaInstagram className="social-icon" />
//           </a>
//           <a href="https://www.tripadvisor.it/Restaurant_Review-g187895-d25226040-Reviews-Osteria_Caorlotta-Florence_Tuscany.html" target="_blank" rel="noopener noreferrer">
//             <FaTripadvisor className="social-icon" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import { FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import './Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
  <footer className="footer">
    <div className="footer-content">
      {/* Colonna sinistra */}
      <div className="footer-left">
        <p>Lungarno Amerigo Vespucci - 34r</p>
      </div>

      {/* Colonna centrale */}
      <div className="footer-center">
        <p>{t('footer')}</p>
        <div className="social-links">
          <a href="https://www.facebook.com/p/Osteria-Caorlotta-Firenze-100088978474662/" aria-label="Facebook Osteria Caorlotta" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com/osteriacaorlottafirenze/" target="_blank" aria-label="Instagram Osteria Caorlotta" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.tripadvisor.it/Restaurant_Review-g187895-d25226040-Reviews-Osteria_Caorlotta-Florence_Tuscany.html" aria-label="Trip advisor Osteria Caorlotta" target="_blank" rel="noopener noreferrer">
            <FaTripadvisor className="social-icon" />
          </a>
        </div>
      </div>

      {/* Colonna destra */}
      <div className="footer-right">
        <p>Credits: T. Schettini - T.N.T Media & Communication </p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
