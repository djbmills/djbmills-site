import { useState, useEffect } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Mixtapes', href: '/#mixtapes' },
  { label: 'Clients', href: '/#clients' },
  { label: 'In The Room', href: '/#events' },
  { label: 'Feedback', href: '/#feedback' },
];

const inquiryMailto =
  import { useState, useEffect } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Mixtapes', href: '/#mixtapes' },
  { label: 'Clients', href: '/#clients' },
  { label: 'In The Room', href: '/#events' },
  { label: 'Feedback', href: '/#feedback' },
];

const inquiryMailto =
  'mailto:bookings@djbmills.com?subject=Event%20Inquiry&body=Hi%20B.Mills,%0D%0A%0D%0AEvent%20date:%0D%0ALocation:%0D%0AEvent%20type:%0D%0AGuest%20count:%0D%0A%0D%0ALooking%20forward%20to%20connecting.';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <a href="/" aria-label="B.Mills home" className="flex items-center h-10">
            <img
              src="/logos/bmills-logo-white.png"
              alt="B.Mills"
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = '/logos/bmills-logo.png';
              }}
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 ${
                  link.label === 'In The Room'
                    ? 'text-xs lg:text-xs whitespace-nowrap'
                    : 'text-xs'
                }`}
              >
                {link.label === 'In The Room' ? 'In\u00A0the\u00A0Room' : link.label}
              </a>
            ))}

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/djbmills/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </a>

              <a
                href="https://www.tiktok.com/@djbmills"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg
                  className="w-4 h-4 text-muted-foreground hover:text-foreground"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/bmillsdj/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </a>
            </div>

            <a
              href={inquiryMailto}
              className="font-body text-xs tracking-[0.2em] uppercase bg-foreground text-background px-4 py-2 hover:bg-foreground/80 transition-colors duration-300"
            >
              Inquire
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-foreground"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="flex flex-col items-center gap-8">
              <a
                href={inquiryMailto}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-3xl font-light tracking-wide text-foreground"
              >
                Inquire
              </a>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-heading text-3xl font-light tracking-wide text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <a href="/" aria-label="B.Mills home" className="flex items-center h-10">
            <img
              src="/logos/bmills-logo-white.png"
              alt="B.Mills"
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = '/logos/bmills-logo.png';
              }}
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 ${
                  link.label === 'In The Room'
                    ? 'text-xs lg:text-xs whitespace-nowrap'
                    : 'text-xs'
                }`}
              >
                {link.label === 'In The Room' ? 'In\u00A0the\u00A0Room' : link.label}
              </a>
            ))}

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/djbmills/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </a>

              <a
                href="https://www.tiktok.com/@djbmills"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg
                  className="w-4 h-4 text-muted-foreground hover:text-foreground"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/bmillsdj/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </a>
            </div>

            <a
              href={inquiryMailto}
              className="font-body text-xs tracking-[0.2em] uppercase bg-foreground text-background px-4 py-2 hover:bg-foreground/80 transition-colors duration-300"
            >
              Inquire
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-foreground"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="flex flex-col items-center gap-8">
              <a
                href={inquiryMailto}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-3xl font-light tracking-wide text-foreground"
              >
                Inquire
              </a>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-heading text-3xl font-light tracking-wide text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
