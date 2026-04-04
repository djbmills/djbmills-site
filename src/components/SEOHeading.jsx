import { useEffect } from 'react';

export default function SEOHeading({
  title = 'B.MILLS | Premier Event DJ NYC for Corporate Events, Brand Experiences & Private Celebrations',
  description = 'B.MILLS is a New York City DJ specializing in luxury corporate events, brand experiences, and high-end private events across NYC, the Hamptons, and Connecticut.',
  keywords = '',
  image = "https://djbmills.com/social/og-home.jpg",
  url = 'https://djbmills.com/',
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (property, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    // Open Graph
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:image', image, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:type', 'website', 'property');

    // Twitter
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);
    setMeta('twitter:card', 'summary_large_image');

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, keywords, image, url]);

  return null;
}
