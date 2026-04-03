import { useEffect } from 'react';

export default function SEOHeading({
  title = 'Luxury Corporate Event DJ NYC | Brand Experiences & Private Events | B.MILLS',
  description = 'B.MILLS is a New York City DJ specializing in luxury corporate events, brand experiences, and high-end private events across NYC, the Hamptons, and Connecticut.',
  keywords = '',
  image = 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/f9bc85767_BMills_promo2016A.jpg',
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
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:image', image, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:type', 'website', 'property');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, image, url]);

  return null;
}