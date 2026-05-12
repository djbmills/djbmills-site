import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, CalendarIcon, Instagram, Linkedin, Mail, Music2 } from 'lucide-react';
import { format } from 'date-fns';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

// Custom TikTok Icon to match Lucide style
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function InquiryFooter({
  headline = "Let's shape\nthe night.",
  body = "Every event is different. Share a few details and we can map out the right approach for your space, audience, and goals.",
  footerText = "Specializing in luxury corporate events, brand activations, and curated wedding afterparties across New York City, the Hamptons, New Jersey, and Connecticut."
}) {
  const [formData, setFormData] = useState({
    name: '', email: '', eventDate: null, location: '', eventType: '',
    guestCount: '', eventTiming: '', equipmentProvided: '',
    atmosphere: '', plannerContact: '', hearAbout: '', botField: ''
  });

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Styles restored to original Boutique feel
  const labelClass = 'font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 flex items-center justify-between gap-3';
  const fieldClass = 'bg-transparent border-0 border-b border-foreground/30 rounded-none px-0 font-body text-sm shadow-none focus-visible:ring-0 focus-visible:border-foreground transition-colors h-10 w-full';
  const tagClass = 'font-body text-[10px] tracking-[0.18em] uppercase text-foreground/40';

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, eventDate: date || null }));
    setCalendarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.eventDate) {
      setSubmitStatus('Please select an event date.');
      return;
    }
    setIsSubmitting(true);
    
    const encode = (data) => Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? '')}`)
      .join('&');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'inquiry', ...formData, eventDate: format(formData.eventDate, 'MMMM d, yyyy') })
      });
      if (!response.ok) throw new Error();
      setSubmitStatus('Confirmed. Connecting you to the music...');
      setTimeout(() => {
        if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
          document.getElementById('mixtapes')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = '/#mixtapes';
        }
      }, 2000);
    } catch (error) {
      setSubmitStatus('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inquiry" className="py-20 md:py-32 px-6 md:px-12 border-t border-border relative overflow-hidden warm-grain" style={{ backgroundColor: '#ebe6d9' }}>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-40">
          
          {/* LEFT COLUMN */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4 italic">
              Inquire · Late 2026 / 2027 Availability
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight italic tracking-tight">{headline}</h2>
            <div className="w-12 h-px bg-foreground/20 mb-8" />
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm mb-12">{body}</p>
            
            <div className="space-y-1">
              <a href="mailto:bookings@djbmills.com" className="font-body text-xs tracking-[0.2em] uppercase text-foreground hover:opacity-60 transition-opacity">
                bookings@djbmills.com
              </a>
              <p className="font-body text-[9px] tracking-[0.2em] text-muted-foreground uppercase opacity-70">
                Response within 24 hours
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: RESTORED FULL FORM */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <form name="inquiry" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label className={labelClass}>Name <span className={tagClass}>Required</span></label>
                  <Input name="name" value={formData.name} onChange={handleChange} required className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass}>Email <span className={tagClass}>Required</span></label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} required className={fieldClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label className={labelClass}>Event Date <span className={tagClass}>Required</span></label>
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <button type="button" className="w-full bg-transparent border-0 border-b border-foreground/30 rounded-none pb-3 text-left font-body text-sm flex items-center justify-between h-10">
                        <span className={formData.eventDate ? 'text-foreground' : 'text-muted-foreground/40'}>
                          {formData.eventDate ? format(formData.eventDate, 'MMMM d, yyyy') : 'Select date'}
                        </span>
                        <CalendarIcon className="w-4 h-4 text-muted-foreground/60" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-auto p-0 border border-border rounded-none bg-[#ebe6d9] shadow-2xl">
                      <Calendar mode="single" selected={formData.eventDate} onSelect={handleDateChange} disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))} />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className={labelClass}>Location</label>
                  <Input name="location" value={formData.location} onChange={handleChange} placeholder="Venue, City" className={fieldClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label className={labelClass}>Equipment Provided?</label>
                  <Input name="equipmentProvided" value={formData.equipmentProvided} onChange={handleChange} placeholder="Sound system at venue?" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass}>How did you hear about me?</label>
                  <Input name="hearAbout" value={formData.hearAbout} onChange={handleChange} placeholder="Referral, Social, etc." className={fieldClass} />
                </div>
              </div>

              {submitStatus && <p className="font-body text-xs text-foreground italic">{submitStatus}</p>}

              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 font-body text-[11px] tracking-[0.25em] uppercase px-12 py-7 rounded-none transition-all flex items-center gap-4">
                {isSubmitting ? 'Verifying...' : 'Check My Date'} <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* RESTORED: FULL FOOTER CLUSTER */}
        <div className="pt-16 border-t border-border/40 flex flex-col items-center text-center">
          <button onClick={scrollToTop} className="mb-10 group transition-transform hover:scale-105 active:scale-95">
            <img 
              src="/logos/bmills-logo-white.png" 
              alt="B.MILLS" 
              className="h-8 w-auto mx-auto brightness-0 opacity-90" 
            />
          </button>
          
          <div className="flex items-center gap-8 mb-12">
            <a href="https://instagram.com/djbmills" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://tiktok.com/@djbmills" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><TikTokIcon className="w-5 h-5" /></a>
            <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Music2 className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/djbmills" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:bookings@djbmills.com" className="text-foreground/70 hover:text-foreground transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
          
          <p className="font-body text-[10px] tracking-widest text-muted-foreground leading-relaxed max-w-2xl uppercase opacity-80 mb-8">
            {footerText}
          </p>
          
          <p className="font-body text-[9px] tracking-[0.3em] text-muted-foreground/30 uppercase">
            © {new Date().getFullYear()} B.MILLS · NYC · THE HAMPTONS · WORLDWIDE
          </p>
        </div>
      </div>
    </section>
  );
}
