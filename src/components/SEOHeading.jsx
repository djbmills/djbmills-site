import { useEffect } from 'react';

export default function SEOHeading({
  title = 'B.MILLS | Music Direction for Premier Brand, Tech & Finance Events NYC',
  description = 'B.MILLS creates music direction and DJ sets for luxury brand events, tech and finance gatherings, product launches, cultural moments, private rooms, and after party events in New York and beyond.',
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
