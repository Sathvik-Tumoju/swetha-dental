import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Shield, Award, Users, Heart,
  Sparkles, Eye, Zap, CircleDot,
  Layers, Star, Phone
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  })
};

const SERVICE_ICONS = [<CircleDot size={28} />, <Layers size={28} />, <Zap size={28} />];
const SERVICE_IMAGES = [
  'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Implants-image.jpg',
  'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Braces-image.jpg',
  'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Dental-Lasers-image.jpg',
];

const STAT_ICONS = [<Award size={24} />, <Shield size={24} />, <Heart size={24} />, <Users size={24} />];
const STAT_VALUES = ['17+', '10K+', '99%', '15K+'];
const STAT_KEYS = ['years', 'surgeries', 'satisfaction', 'patients'];

export default function Home() {
  const { t } = useLang();

  const services = t.servicesPage.items.slice(0, 3).map((s, i) => ({
    ...s, icon: SERVICE_ICONS[i], image: SERVICE_IMAGES[i]
  }));

  const stats = STAT_KEYS.map((key, i) => ({
    value: STAT_VALUES[i], label: t.stats[key], icon: STAT_ICONS[i]
  }));

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg-shapes">
          <div className="hero__shape hero__shape--1" />
          <div className="hero__shape hero__shape--2" />
          <div className="hero__shape hero__shape--3" />
        </div>

        <div className="container hero__inner">
          <motion.div className="hero__content" initial="hidden" animate="visible">
            <motion.span className="hero__badge" variants={fadeUp} custom={0}>
              <Sparkles size={14} /> {t.hero.badge}
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1}>
              {t.hero.titlePart1} <span className="hero__highlight">{t.hero.titleHighlight}</span>
            </motion.h1>
            <motion.p className="hero__subtitle" variants={fadeUp} custom={2}>
              {t.hero.subtitle}
            </motion.p>
            <motion.div className="hero__actions" variants={fadeUp} custom={3}>
              <Link to="/contact" className="btn btn-primary btn--lg">
                {t.hero.bookConsultation} <ArrowRight size={18} />
              </Link>
              <a href="tel:+919908272911" className="btn btn-outline btn--lg">
                <Phone size={18} /> +91-9908272911
              </a>
            </motion.div>

            <motion.div className="hero__trust" variants={fadeUp} custom={4}>
              <div className="hero__trust-avatars">
                <div className="hero__trust-avatar">😊</div>
                <div className="hero__trust-avatar">😃</div>
                <div className="hero__trust-avatar">🤩</div>
              </div>
              <div>
                <strong>15,000+</strong> {t.hero.happyPatients}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="hero__image-wrapper">
              <img
                src="https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Implants-image.jpg"
                alt="Advanced dental care at Swetha Multi-Speciality Dental Hospital"
              />
              <div className="hero__float-card hero__float-card--top">
                <Shield size={20} />
                <div>
                  <strong>99%</strong>
                  <span>{t.stats.satisfaction}</span>
                </div>
              </div>
              <div className="hero__float-card hero__float-card--bottom">
                <Award size={20} />
                <div>
                  <strong>17+</strong>
                  <span>{t.stats.years}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="section services-preview">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{t.servicesPreview.label}</span>
            <h2 className="section-title">{t.servicesPreview.title}</h2>
            <p className="section-subtitle">{t.servicesPreview.subtitle}</p>
          </div>

          <div className="services-preview__grid">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="service-card glass-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
              >
                <div className="service-card__image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-card__icon">{service.icon}</div>
                </div>
                <div className="service-card__body">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 'var(--space-2xl)' }}>
            <Link to="/services" className="btn btn-outline">
              {t.servicesPreview.viewAll} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section about-preview">
        <div className="container about-preview__inner">
          <motion.div
            className="about-preview__image"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Specialized-Dentistry-14.jpg"
              alt="About Swetha Multi-Speciality Dental Hospital"
            />
          </motion.div>

          <motion.div
            className="about-preview__content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">{t.aboutPreview.label}</span>
            <h2 className="section-title">{t.aboutPreview.title}</h2>
            <p>{t.aboutPreview.para1}</p>
            <p>{t.aboutPreview.para2}</p>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>
              {t.aboutPreview.learnMore} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats">
        <div className="container stats__grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="stat-card__icon">{stat.icon}</div>
              <div className="stat-card__value">{stat.value}</div>
              <div className="stat-card__label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== VISION / MISSION / VALUES ===== */}
      <section className="section vmv">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{t.vmv.label}</span>
            <h2 className="section-title">{t.vmv.title}</h2>
          </div>

          <div className="vmv__grid">
            <motion.div className="vmv__card glass-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <div className="vmv__icon"><Eye size={28} /></div>
              <h4>{t.vmv.visionTitle}</h4>
              <p>{t.vmv.visionDesc}</p>
            </motion.div>
            <motion.div className="vmv__card glass-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="vmv__icon"><Sparkles size={28} /></div>
              <h4>{t.vmv.missionTitle}</h4>
              <p>{t.vmv.missionDesc}</p>
            </motion.div>
            <motion.div className="vmv__card glass-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
              <div className="vmv__icon"><Heart size={28} /></div>
              <h4>{t.vmv.valuesTitle}</h4>
              <p>{t.vmv.valuesDesc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{t.testimonials.label}</span>
            <h2 className="section-title">{t.testimonials.title}</h2>
            <p className="section-subtitle">{t.testimonials.subtitle}</p>
          </div>

          <div className="testimonials__grid">
            {t.testimonials.items.map((item, i) => (
              <motion.div
                key={i}
                className="testimonial-card glass-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="testimonial-card__stars">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="var(--accent)" color="var(--accent)" />
                  ))}
                </div>
                <p className="testimonial-card__text">"{item.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{item.name[0]}</div>
                  <strong>{item.name}</strong>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
