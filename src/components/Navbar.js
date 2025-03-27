// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo3.webp';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsVisible(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsVisible(false);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.clientY < 240) {
        setIsVisible(true);
      } else if (!isMenuOpen) {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Il Logo Caorlotta"/>
          </Link>
        </div>
        <button
          className={`menu-button ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="navbar-links"
        >
          <span className="menu-icon"></span>
        </button>
        <ul id="navbar-links" className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/prenotazione" onClick={closeMenu}>{t('navbar.prenotazione')}</Link>
          </li>
          <li>
            <Link to="/chi-siamo" onClick={closeMenu}>{t('navbar.chi_siamo')}</Link>
          </li>
          <li>
            <Link to="/menu" onClick={closeMenu}>{t('navbar.menu')}</Link>
          </li>
          <li>
            <Link to="/dove-siamo" onClick={closeMenu}>{t('navbar.dove_siamo')}</Link>
          </li>
          <li>
            <Link to="/recensioni" onClick={closeMenu}>{t('navbar.recensioni')}</Link>
          </li>
          <li>
            <Link to="/photogallery" onClick={closeMenu}>{t('navbar.photo_gallery')}</Link>
          </li>
        </ul>
      </div>
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;
