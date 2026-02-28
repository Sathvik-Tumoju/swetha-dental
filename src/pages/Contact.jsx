import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  })
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLang();

  const CONTACT_INFO = [
    { icon: <Phone size={22} />, title: t.contactPage.phone, detail: '+91-9908272911', link: 'tel:+919908272911' },
    { icon: <Mail size={22} />, title: t.contactPage.email, detail: 'aravind.t07@gmail.com', link: 'mailto:aravind.t07@gmail.com' },
    { icon: <MapPin size={22} />, title: t.contactPage.address, detail: t.contactPage.addressDetail, link: 'https://maps.google.com/?q=Swetha+Multispeciality+Dental+Hospital+Karimnagar' },
    { icon: <Clock size={22} />, title: t.contactPage.workingHours, detail: t.contactPage.workingHoursDetail, link: null },
  ];

  const whatsappUrl = `https://wa.me/919908272911?text=${encodeURIComponent('Hello! I would like to book an appointment at Swetha Dental Hospital.')}`;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="page-header">
        <div className="page-header__bg" />
        <div className="container page-header__inner">
          <motion.div initial="hidden" animate="visible">
            <motion.span className="section-label" variants={fadeUp} custom={0}>
              {t.contactPage.label}
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1}>{t.contactPage.title}</motion.h1>
            <motion.p className="page-header__subtitle" variants={fadeUp} custom={2}>
              {t.contactPage.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT CARDS ===== */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-cards">
            {CONTACT_INFO.map((item, i) => (
              <motion.div
                key={i}
                className="contact-info-card glass-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="contact-info-card__icon">{item.icon}</div>
                <h4>{item.title}</h4>
                {item.link ? (
                  <a href={item.link} target={item.title === t.contactPage.address ? '_blank' : undefined} rel="noopener noreferrer">
                    {item.detail}
                  </a>
                ) : (
                  <p>{item.detail}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORM + MAP ===== */}
      <section className="section contact-main">
        <div className="container contact-main__grid">
          <motion.div
            className="contact-form-wrap glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>{t.contactPage.formTitle}</h3>
            <p className="contact-form__desc">{t.contactPage.formDesc}</p>

            {submitted && (
              <div className="contact-form__success">
                ✅ {t.contactPage.formSuccess}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__group">
                <label htmlFor="name">{t.contactPage.labelName}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t.contactPage.placeholderName}
                  required
                />
              </div>
              <div className="contact-form__group">
                <label htmlFor="email">{t.contactPage.labelEmail}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t.contactPage.placeholderEmail}
                  required
                />
              </div>
              <div className="contact-form__group">
                <label htmlFor="phone">{t.contactPage.labelPhone}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={t.contactPage.placeholderPhone}
                />
              </div>
              <div className="contact-form__group contact-form__group--full">
                <label htmlFor="message">{t.contactPage.labelMessage}</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.contactPage.placeholderMessage}
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary contact-form__submit">
                <Send size={16} /> {t.contactPage.sendMessage}
              </button>
            </form>
          </motion.div>

          <motion.div
            className="contact-map"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Swetha Multi-Speciality Dental Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.!2d79.13!3d18.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKarimnagar%2C+Telangana!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 'var(--radius-xl)', minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
