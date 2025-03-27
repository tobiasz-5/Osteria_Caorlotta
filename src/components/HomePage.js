import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/images/scritta.png';
import './HomePage.css';

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        
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

        {/* JSON-LD per il ristorante */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Osteria Caorlotta",
              "telephone": "+39 345 169 1689",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lungarno Amerigo Vespucci, 34r",
                "addressLocality": "Firenze",
                "addressRegion": "FI",
                "postalCode": "50123",
                "addressCountry": "IT"
              },
              "servesCuisine": ["Toscana", "Italiana"],
              "menu": "https://osteria-caorlotta.vercel.app/menu",
              "priceRange": "€€",
              "acceptsReservations": true,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "120"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Monday",
                  "opens": "00:00",
                  "closes": "00:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
                  "opens": "19:00",
                  "closes": "22:30"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Friday", "Saturday", "Sunday"],
                  "opens": "12:00",
                  "closes": "14:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Friday", "Saturday", "Sunday"],
                  "opens": "19:00",
                  "closes": "22:30"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/osteriacaorlottafirenze/",
                "https://www.facebook.com/p/Osteria-Caorlotta-Firenze-100088978474662/",
                "https://www.tripadvisor.it/Restaurant_Review-g187895-d25226040-Reviews-Osteria-Caorlotta-Florence_Tuscany.html"
              ]
            }
          `}
        </script>
      </Helmet>


      <div className="home-page">
        <img src={logoImage} alt="Scritta" className="homepage-logo" />
        <p className="homepage-subtitle">FIRENZE</p>
        <div className="home-buttons">
          <Link to="/prenotazione">
            <button className="btn btn-prenota">{t('prenota')}</button>
          </Link>
        </div>
        <div className="home-schedule">
          <p>
            Lungarno Amerigo Vespucci - 34r <br />
            {t('giorni_schedule_weekend')}: 12.00 - 14.00 | 19.00 - 22.30 <br />
            {t('giorni_schedule_infraset')}: 19.00 - 22.30<br />
            📞 +39 345 169 1689 <br /> 📧 osteriacaorlotta@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
