import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import './Gallery.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  })
};

const GALLERY_IMAGES = [
  {
    src: 'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Swetha-Dental-Building.jpg',
    labelEn: 'Hospital Building',
    labelTe: 'ఆసుపత్రి భవనం',
  },
  {
    src: 'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Swetha-Dental-Dental-Checkup.jpg',
    labelEn: 'Dental Checkup',
    labelTe: 'దంత పరీక్ష',
  },
  {
    src: 'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Swetha-Dental-Doctors-Office.jpg',
    labelEn: "Doctor's Office",
    labelTe: 'డాక్టర్ కార్యాలయం',
  },
  {
    src: 'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Swetha-Dental-Reception.jpg',
    labelEn: 'Reception Area',
    labelTe: 'రిసెప్షన్ ప్రాంతం',
  },
  {
    src: 'https://swethamultispecialitydental.com/wp-content/uploads/sites/74/2026/01/Swetha-Dental-Reception-Desk.jpg',
    labelEn: 'Reception Desk',
    labelTe: 'రిసెప్షన్ డెస్క్',
  },
];

export default function Gallery() {
  const { lang, t } = useLang();
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" />
        <div className="container page-header__inner">
          <motion.div initial="hidden" animate="visible">
            <motion.span className="section-label" variants={fadeUp} custom={0}>
              {t.galleryPage.label}
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1}>{t.galleryPage.title}</motion.h1>
            <motion.p className="page-header__subtitle" variants={fadeUp} custom={2}>
              {t.galleryPage.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section gallery">
        <div className="container">
          <div className="gallery__grid">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                className="gallery__item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={lang === 'te' ? img.labelTe : img.labelEn}
                  loading="lazy"
                />
                <div className="gallery__overlay">
                  <ZoomIn size={28} />
                  <span>{lang === 'te' ? img.labelTe : img.labelEn}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close lightbox">
              <X size={28} />
            </button>
            <motion.img
              key={lightbox}
              src={GALLERY_IMAGES[lightbox].src}
              alt={lang === 'te' ? GALLERY_IMAGES[lightbox].labelTe : GALLERY_IMAGES[lightbox].labelEn}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="lightbox__nav">
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <span>{lightbox + 1} / {GALLERY_IMAGES.length}</span>
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % GALLERY_IMAGES.length); }}
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
