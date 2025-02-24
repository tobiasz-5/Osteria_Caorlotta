import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const cambiaLingua = (lingua) => {
    i18n.changeLanguage(lingua);
  };

  return (
    <div className="language-switcher">
      <button className="btn btn-lingua" onClick={() => cambiaLingua('it')}>IT</button>
      <button className="btn btn-lingua" onClick={() => cambiaLingua('en')}>EN</button>
    </div>
  );
}

export default LanguageSwitcher;
