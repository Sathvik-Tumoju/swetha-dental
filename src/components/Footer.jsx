import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YouTubeIcon } from './SocialIcons.jsx';
import { useLang } from '../context/LanguageContext';
import './Footer.css';

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/profile.php?id=61583395672807', icon: <FacebookIcon size={22} />, label: 'Facebook' },
  { href: 'https://www.instagram.com/swetha_dental_hospital_knr', icon: <InstagramIcon size={22} />, label: 'Instagram' },
  { href: 'https://www.youtube.com/channel/UCYyeKl22_TqMGL_4QxOq3tA', icon: <YouTubeIcon size={22} />, label: 'YouTube' },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      {/* CTA Banner */}
      <div className="footer__cta-wrap">
        <div className="container">
          <div className="footer__cta glass-card">
            <div className="footer__cta-text">
              <h3>{t.footer.ctaTitle}</h3>
              <p>{t.footer.ctaDesc}</p>
            </div>
            <div className="footer__cta-actions">
              <a href="tel:+919908272911" className="btn btn-primary">
                <Phone size={16} /> {t.nav.callNow}
              </a>
              <Link to="/contact" className="btn btn-outline">
                {t.footer.bookOnline} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img
                src="https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/swetha-dental-logo-ICON.jpg"
                alt="Swetha Multi-Speciality Dental Hospital"
                className="footer__logo-img"
              />
            </div>
            <p className="footer__desc">{t.footer.brandDesc}</p>
            <div className="footer__social">
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="footer__social-icon">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">{t.footer.quickLinks}</h4>
            <ul className="footer__links">
              <li><Link to="/">{t.nav.home}</Link></li>
              <li><Link to="/about">{t.nav.about}</Link></li>
              <li><Link to="/services">{t.nav.services}</Link></li>
              <li><Link to="/gallery">{t.nav.gallery}</Link></li>
              <li><Link to="/contact">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">{t.footer.services}</h4>
            <ul className="footer__links">
              <li><Link to="/services">{t.servicesPage.items[0].title}</Link></li>
              <li><Link to="/services">{t.servicesPage.items[1].title}</Link></li>
              <li><Link to="/services">{t.servicesPage.items[5].title}</Link></li>
              <li><Link to="/services">{t.servicesPage.items[8].title}</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">{t.footer.contactInfo}</h4>
            <ul className="footer__contact">
              <li>
                <Phone size={16} />
                <a href="tel:+919908272911">+91-9908272911</a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:aravind.t07@gmail.com">aravind.t07@gmail.com</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>{t.contactPage.addressDetail}</span>
              </li>
              <li>
                <Clock size={16} />
                <span>{t.contactPage.workingHoursDetail}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
