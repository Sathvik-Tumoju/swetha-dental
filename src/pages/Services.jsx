import { motion } from 'framer-motion';
import {
  CircleDot, Layers, Zap, AlignCenter, MinusCircle,
  Activity, Scissors, Columns, Sparkles
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import './Services.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  })
};

const SERVICE_ICONS = [
  <CircleDot size={28} />, <Layers size={28} />, <Zap size={28} />,
  <AlignCenter size={28} />, <MinusCircle size={28} />, <Activity size={28} />,
  <Scissors size={28} />, <Columns size={28} />, <Sparkles size={28} />
];

const SERVICE_IMAGES = [
  'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Implants-image.jpg',
  'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Braces-image.jpg',
  'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Dental-Lasers-image.jpg',
  'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Aligners-image.jpg',
  'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Wisdom-Tooth-image.jpg',
  'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Root-Canal-image.jpg',
  'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Gum-Surgery-image.jpg',
  'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Bridges-image.jpg',
  'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Cosmetic-Dentistry-image.jpg',
];

export default function Services() {
  const { t } = useLang();

  const services = t.servicesPage.items.map((s, i) => ({
    ...s, icon: SERVICE_ICONS[i], image: SERVICE_IMAGES[i]
  }));

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="page-header">
        <div className="page-header__bg" />
        <div className="container page-header__inner">
          <motion.div initial="hidden" animate="visible">
            <motion.span className="section-label" variants={fadeUp} custom={0}>
              {t.servicesPage.label}
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1}>{t.servicesPage.title}</motion.h1>
            <motion.p className="page-header__subtitle" variants={fadeUp} custom={2}>
              {t.servicesPage.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="service-card-full glass-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i % 3}
              >
                <div className="service-card-full__image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-card-full__overlay">
                    <div className="service-card-full__icon">{service.icon}</div>
                  </div>
                </div>
                <div className="service-card-full__body">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
