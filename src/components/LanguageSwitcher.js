import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const cambiaLingua = (lingua) => {
    i18n.changeLanguage(lingua);
  };

  return (
    <div className="language-switcher">
      <button className="btn btn-lingua notranslate" onClick={() => cambiaLingua('it')}>IT</button>
      <button className="btn btn-lingua notranslate" onClick={() => cambiaLingua('en')}>EN</button>
    </div>
  );
}

export default LanguageSwitcher;
