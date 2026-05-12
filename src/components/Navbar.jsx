import { useState, useEffect } from 'react';
import { Instagram, Linkedin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'About', href: '/#about', sectionId: 'about' },
  { label: 'Listen', href: '/#mixtapes', sectionId: 'mixtapes' },
  { label: 'Clients', href: '/#clients', sectionId: 'clients' },
  { label: 'Events', href: '/corporate-events', sectionId: null },
  { label: 'Feedback', href: '/#feedback', sectionId: 'feedback' },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // UPDATED: Simple, direct link to the new dedicated availability page
  const inquiryLink = { 
    label: 'Check Availability', 
    href: '/availability', 
    sectionId: null 
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const isCorporatePage = location.pathname === '/corporate-events';
    const isAvailabilityPage = location.pathname === '/availability';

    if (isCorporatePage) {
      setActiveLink('Events');
      return;
    }

    if (isAvailabilityPage) {
      setActiveLink(''); // Keeps menu clean when on the booking page
      return;
    }

    if (location.pathname !== '/') {
      setActiveLink('');
      return;
    }

    const sectionLinks = navLinks.filter((link) => link.sectionId);

    const updateActiveSection = () => {
      let currentSection = '';
      for (const link of sectionLinks) {
        const el = document.getElementById(link.sectionId);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom > 140) {
          currentSection = link.label;
        }
      }
      setActiveLink(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection);
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (e, link) => {
    if (!link.sectionId) {
      setMobileOpen(false);
      // If it's a direct page link (like /availability), let the browser handle the navigation
      return;
    }

    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname === '/' && link.href.startsWith('/#')) {
      const el = document.getElementById(link.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', link.href);
      }
    } else {
      navigate(link.href);
    }
  };

  const getLinkClassName = (label) => {
    return `font-body tracking-[0.2em] uppercase transition-colors duration-300 text-xs ${
      activeLink === label
        ? 'text-foreground'
        : 'text-muted-foreground hover:text-foreground'
    }`;
  };

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
          <a href="/" className="flex items-center h-10">
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
                onClick={(e) => handleNavClick(e, link)}
                className={getLinkClassName(link.label)}
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-3 ml-2">
              <a href="https://www.instagram.com/djbmills/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              {/* TikTok & LinkedIn omitted for brevity, keep your original ones here */}
            </div>

            {/* Desktop Button */}
            <a
              href={inquiryLink.href}
              onClick={(e) => handleNavClick(e, inquiryLink)}
              className="font-body text-xs tracking-[0.2em] uppercase bg-foreground text-background px-4 py-2 hover:bg-foreground/80 transition-colors duration-300 ml-2 text-center min-w-[180px]"
            >
              {inquiryLink.label}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Button */}
            <a
              href={inquiryLink.href}
              onClick={(e) => handleNavClick(e, inquiryLink)}
              className="font-body text-[10px] tracking-[0.25em] uppercase text-foreground border border-foreground/30 px-3 py-2 hover:border-foreground transition-all duration-300"
            >
              Availability
            </a>

            <button onClick={() => setMobileOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
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
            <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-6">
              <X className="w-7 h-7" />
            </button>

            <div className="flex flex-col items-center gap-8">
              <a
                href={inquiryLink.href}
                onClick={(e) => handleNavClick(e, inquiryLink)}
                className="font-heading text-3xl font-light tracking-wide text-foreground"
              >
                {inquiryLink.label}
              </a>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-heading text-3xl font-light tracking-wide text-foreground/70 hover:text-foreground transition-colors"
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
