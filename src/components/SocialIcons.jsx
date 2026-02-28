/* Brand-colored social media SVG icons as React components */

export function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M24 12C24 5.37258 18.6274 0 12 0S0 5.37258 0 12c0 5.98823 4.38823 10.954 10.125 11.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9882 24 12Z" fill="#1877F2"/>
    </svg>
  );
}

export function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <radialGradient id="ig_grad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497"/>
          <stop offset="5%" stopColor="#fdf497"/>
          <stop offset="45%" stopColor="#fd5949"/>
          <stop offset="60%" stopColor="#d6249f"/>
          <stop offset="90%" stopColor="#285AEB"/>
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig_grad)"/>
      <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" fill="none"/>
      <circle cx="18" cy="6" r="1.5" fill="#fff"/>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#fff" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

export function YouTubeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814Z" fill="#FF0000"/>
      <path d="m9.545 15.568 6.272-3.568-6.272-3.568v7.136Z" fill="#fff"/>
    </svg>
  );
}

export function GoogleMapsIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 0C7.31 0 3.5 3.81 3.5 8.5C3.5 14.88 12 24 12 24s8.5-9.12 8.5-15.5C20.5 3.81 16.69 0 12 0Z" fill="#EA4335"/>
      <circle cx="12" cy="8.5" r="3.5" fill="#fff"/>
    </svg>
  );
}
