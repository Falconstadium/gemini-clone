import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css'
import { useState } from 'react';

const Footer = () => {
  const { t, i18n } = useTranslation('global');

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [remove, setRemove] = useState(false);

  const hideFooter = () => {
    setRemove(true)
  };
 
  


  return (
    <footer className={remove ? "hide" : null}>
      <p>{t('footer.parag')}</p>
      <div className='btns'>
        <button onClick={() => handleChangeLang('en')}>
          English
        </button>
        <button onClick={() => handleChangeLang('fr')}>
          Français
        </button>
        <button type="submit" onClick={hideFooter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
