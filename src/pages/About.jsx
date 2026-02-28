import { motion } from 'framer-motion';
import { Award, Users, Heart, Shield, Eye, Sparkles, CheckCircle } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  })
};

const STAT_ICONS = [<Award size={24} />, <Shield size={24} />, <Heart size={24} />, <Users size={24} />];
const STAT_VALUES = ['17+', '10K+', '99%', '15K+'];
const STAT_KEYS = ['years', 'surgeries', 'satisfaction', 'patients'];

const DOCTOR_IMAGES = [
  'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/dr.-aravind.png',
  'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/dr.-swetha.png',
];

export default function About() {
  const { t } = useLang();

  const stats = STAT_KEYS.map((key, i) => ({
    value: STAT_VALUES[i], label: t.stats[key], icon: STAT_ICONS[i]
  }));

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="page-header">
        <div className="page-header__bg" />
        <div className="container page-header__inner">
          <motion.div initial="hidden" animate="visible">
            <motion.span className="section-label" variants={fadeUp} custom={0}>
              {t.aboutPage.label}
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1}>{t.aboutPage.title}</motion.h1>
            <motion.p className="page-header__subtitle" variants={fadeUp} custom={2}>
              {t.aboutPage.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="section">
        <div className="container about-content">
          <motion.div
            className="about-content__image"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Specialized-Dentistry-14.jpg"
              alt="Swetha Multi-Speciality Dental Hospital Karimnagar"
            />
          </motion.div>

          <motion.div
            className="about-content__text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">{t.aboutPage.whoWeAre}</span>
            <h2 className="section-title">{t.aboutPage.aboutTitle}</h2>
            <p>{t.aboutPage.aboutPara1}</p>
            <p>{t.aboutPage.aboutPara2}</p>
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

      {/* ===== DOCTORS ===== */}
      <section className="section doctors">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{t.aboutPage.doctorsLabel}</span>
            <h2 className="section-title">{t.aboutPage.doctorsTitle}</h2>
            <p className="section-subtitle">{t.aboutPage.doctorsSubtitle}</p>
          </div>

          <div className="doctors__grid">
            {t.aboutPage.doctors.map((doc, i) => (
              <motion.div
                key={i}
                className="doctor-card glass-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="doctor-card__avatar">
                  <img src={DOCTOR_IMAGES[i]} alt={doc.name} />
                </div>
                <h3>{doc.name}</h3>
                <p className="doctor-card__role">{doc.role}</p>
                <p className="doctor-card__exp">{doc.experience}</p>
                <p className="doctor-card__spec">{doc.specialization}</p>
                <ul className="doctor-card__highlights">
                  {doc.highlights.map((h, j) => (
                    <li key={j}><CheckCircle size={14} /> {h}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISION / MISSION / VALUES ===== */}
      <section className="section vmv" style={{ background: 'var(--off-white)' }}>
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
    </>
  );
}
