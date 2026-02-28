import { MessageCircle } from 'lucide-react';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  const phoneNumber = '919908272911';
  const message = encodeURIComponent('Hello! I would like to book an appointment at Swetha Dental Hospital.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.917 15.917 0 0016.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.35 22.616c-.396 1.116-1.97 2.042-3.222 2.312-.858.182-1.978.326-5.752-1.236-4.826-1.998-7.932-6.9-8.174-7.22-.232-.318-1.952-2.6-1.952-4.958s1.236-3.514 1.674-3.994c.438-.48.958-.6 1.278-.6.318 0 .636.002.914.016.294.016.688-.112 1.076.82.396.956 1.352 3.3 1.47 3.54.12.24.2.52.04.838-.16.32-.24.518-.48.798-.238.28-.502.626-.716.84-.238.24-.488.498-.21.978.28.478 1.242 2.05 2.668 3.32 1.834 1.634 3.38 2.14 3.858 2.38.478.238.758.198 1.036-.12.28-.318 1.196-1.396 1.514-1.876.318-.478.636-.396 1.074-.238.438.16 2.794 1.318 3.272 1.558.478.238.796.358.916.558.118.198.118 1.156-.278 2.272z"/>
      </svg>
    </a>
  );
}
