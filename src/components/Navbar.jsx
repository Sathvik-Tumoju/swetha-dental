import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YouTubeIcon, GoogleMapsIcon } from './SocialIcons.jsx';
import { useLang } from '../context/LanguageContext';
import LangToggle from './LangToggle.jsx';
import './Navbar.css';

const NAV_LINKS = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/services', key: 'services' },
  { path: '/gallery', key: 'gallery' },
  { path: '/contact', key: 'contact' },
];

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/profile.php?id=61583395672807', icon: <FacebookIcon size={20} />, label: 'Facebook' },
  { href: 'https://www.instagram.com/swetha_dental_hospital_knr', icon: <InstagramIcon size={20} />, label: 'Instagram' },
  { href: 'https://www.youtube.com/channel/UCYyeKl22_TqMGL_4QxOq3tA', icon: <YouTubeIcon size={20} />, label: 'YouTube' },
  { href: 'https://www.google.com/maps/place/Swetha+Multi+Speciality+Dental+Hospital+hospital/@18.4455493,79.1201102', icon: <GoogleMapsIcon size={20} />, label: 'Location' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__topbar">
        <div className="container navbar__topbar-inner">
          <div className="navbar__topbar-social">
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="navbar__social-icon">
                {icon}
              </a>
            ))}
          </div>
          <div className="navbar__topbar-info">
            <a href="tel:+919908272911"><Phone size={13} /> +91-9908272911</a>
            <a href="mailto:aravind.t07@gmail.com">aravind.t07@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="Swetha Dental Home">
          <img
            src="https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/swetha-dental-logo-ICON.jpg"
            alt="Swetha Multi-Speciality Dental Hospital"
            className="navbar__logo-img"
          />
        </Link>

        <nav className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`} aria-label="Main navigation">
          <button
            className="navbar__nav-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          {NAV_LINKS.map(({ path, key }) => (
            <Link
              key={path}
              to={path}
              className={`navbar__link ${location.pathname === path ? 'navbar__link--active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {t.nav[key]}
            </Link>
          ))}
          <div className="navbar__cta-group">
            <a href="tel:+919908272911" className="btn btn-primary navbar__cta">
              <Phone size={16} />
              {t.nav.callNow}
            </a>
            <a
              href="https://wa.me/919908272911?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Swetha%20Dental%20Hospital."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp navbar__cta"
            >
              <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.917 15.917 0 0016.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.35 22.616c-.396 1.116-1.97 2.042-3.222 2.312-.858.182-1.978.326-5.752-1.236-4.826-1.998-7.932-6.9-8.174-7.22-.232-.318-1.952-2.6-1.952-4.958s1.236-3.514 1.674-3.994c.438-.48.958-.6 1.278-.6.318 0 .636.002.914.016.294.016.688-.112 1.076.82.396.956 1.352 3.3 1.47 3.54.12.24.2.52.04.838-.16.32-.24.518-.48.798-.238.28-.502.626-.716.84-.238.24-.488.498-.21.978.28.478 1.242 2.05 2.668 3.32 1.834 1.634 3.38 2.14 3.858 2.38.478.238.758.198 1.036-.12.28-.318 1.196-1.396 1.514-1.876.318-.478.636-.396 1.074-.238.438.16 2.794 1.318 3.272 1.558.478.238.796.358.916.558.118.198.118 1.156-.278 2.272z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </nav>

        <div className="navbar__actions">
          <LangToggle />
          <button
            className="navbar__toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
