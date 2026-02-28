import { useLang } from '../context/LanguageContext';
import './LangToggle.css';

export default function LangToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={`Switch to ${lang === 'en' ? 'Telugu' : 'English'}`}
      title={lang === 'en' ? 'తెలుగులో చూడండి' : 'Switch to English'}
    >
      <span className={`lang-toggle__option ${lang === 'en' ? 'lang-toggle__option--active' : ''}`}>EN</span>
      <span className="lang-toggle__divider">/</span>
      <span className={`lang-toggle__option ${lang === 'te' ? 'lang-toggle__option--active' : ''}`}>తె</span>
    </button>
  );
}
