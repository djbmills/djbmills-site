import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, CalendarIcon, Instagram, Linkedin, Mail } from 'lucide-react';
import { format } from 'date-fns';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const SpotifyIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.306c-.215.353-.674.464-1.026.25-2.85-1.742-6.438-2.135-10.665-1.168-.403.093-.811-.16-.904-.564-.093-.403.16-.811.564-.904 4.625-1.058 8.583-.605 11.781 1.348.352.215.463.673.25 1.026zm1.465-3.265c-.27.439-.846.582-1.285.312-3.262-2.004-8.234-2.587-12.091-1.416-.494.15-1.02-.132-1.17-.626-.15-.494.132-1.02.626-1.17 4.406-1.336 9.889-.684 13.608 1.6 0 .439-.143.846-.312 1.285zm.126-3.411c-3.911-2.323-10.354-2.537-14.124-1.393-.6.182-1.233-.162-1.415-.762-.182-.6.162-1.233.762-1.415 4.316-1.31 11.432-1.058 15.962 1.631.54.32.716 1.015.396 1.555-.32.54-1.015.716-1.555.396z"/>
  </svg>
);

export default function InquiryFooter({
  headline = "Let's shape\nthe night.",
  body = "Every event is different. Share a few details and we can map out the right approach for your space, audience, and goals.",
  footerText = "Serving luxury corporate events, brand activations, and private clients across New York City, the Hamptons, Westchester, New Jersey, and Connecticut. Available for travel worldwide."
}) {
  const [formData, setFormData] = useState({
    name: '', email: '', eventDate: null, location: '', eventType: '',
    equipmentProvided: '', hearAbout: '', botField: ''
  });

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const labelClass = 'font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground/80 mb-2 flex items-center justify-between gap-3';
  const fieldClass = 'bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 font-body text-sm shadow-none focus-visible:ring-0 focus-visible:border-foreground transition-colors h-10 w-full placeholder:text-muted-foreground/30';
  const tagClass = 'font-body text-[9px] tracking-[0.18em] uppercase text-foreground/30';

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
    const encode = (data) => Object.keys(data).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k] ?? '')}`).join('&');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'inquiry', ...formData, eventDate: format(formData.eventDate, 'MMMM d, yyyy') })
      });
      
      if (!response.ok) throw new Error();
      
      // Updated message to avoid false confirmation
      setSubmitStatus('Inquiry Sent. Expect a response within 24 hours. Connecting you to the music...');
      
      setTimeout(() => {
        // Find the mixtapes section and scroll to it
        const mixtapesSection = document.getElementById('mixtapes');
        if (mixtapesSection) {
          mixtapesSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Fallback if ID is missing
          window.location.hash = 'mixtapes';
        }
      }, 2500);

    } catch (error) {
      setSubmitStatus('Something went wrong. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inquiry" className="py-20 md:py-32 px-6 md:px-12 border-t border-border relative overflow-hidden warm-grain" style={{ backgroundColor: '#ebe6d9' }}>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-40">
          
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

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <form name="inquiry" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-10">
              <input type="hidden" name="form-name" value="inquiry" />
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
                      <button type="button" className="w-full bg-transparent border-0 border-b border-foreground/20 rounded-none pb-3 text-left font-body text-sm flex items-center justify-between h-10 shadow-none">
                        <span className={formData.eventDate ? 'text-foreground' : 'text-muted-foreground/30'}>
                          {formData.eventDate ? format(formData.eventDate, 'MMMM d, yyyy') : 'Select date'}
                        </span>
                        <CalendarIcon className="w-4 h-4 text-muted-foreground/40" />
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
                  <label className={labelClass}>Sound Provided?</label>
                  <Input name="equipmentProvided" value={formData.equipmentProvided} onChange={handleChange} placeholder="Audio at venue?" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass}>Found via</label>
                  <Input name="hearAbout" value={formData.hearAbout} onChange={handleChange} placeholder="Instagram, Referral, etc." className={fieldClass} />
                </div>
              </div>

              {submitStatus && <p className="font-body text-xs text-foreground italic border-l-2 border-foreground pl-4 py-1">{submitStatus}</p>}

              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 font-body text-[11px] tracking-[0.25em] uppercase px-12 py-7 rounded-none transition-all flex items-center gap-4">
                {isSubmitting ? 'Sending...' : 'Check My Date'} <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>

        <div className="pt-16 border-t border-border/40 flex flex-col items-center text-center">
          <button onClick={scrollToTop} className="mb-10 group transition-transform hover:scale-105 active:scale-95">
            <img src="/logos/bmills-logo-white.png" alt="B.MILLS" className="h-8 w-auto mx-auto brightness-0 opacity-90" />
          </button>
          
          <div className="flex items-center gap-8 mb-12">
            <a href="https://instagram.com/djbmills" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-foreground transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://tiktok.com/@djbmills" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-foreground transition-colors"><TikTokIcon className="w-5 h-5" /></a>
            <a href="https://open.spotify.com/user/1253457100" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-foreground transition-colors"><SpotifyIcon className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/bmillsdj/" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-foreground transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:bookings@djbmills.com" className="text-foreground/50 hover:text-foreground transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
          
          <p className="font-body text-[10px] tracking-widest text-muted-foreground leading-relaxed max-w-2xl uppercase opacity-80 mb-8">
            {footerText}
          </p>
          
          <p className="font-body text-[8px] tracking-[0.4em] text-muted-foreground/30 uppercase">
            © {new Date().getFullYear()} B.MILLS · NYC · THE HAMPTONS · WESTCHESTER · NEW JERSEY · CONNECTICUT · WORLDWIDE
          </p>
        </div>
      </div>
    </section>
  );
}
