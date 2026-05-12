import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, CalendarIcon, Instagram, Linkedin, Mail } from 'lucide-react';
import { format } from 'date-fns';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export default function InquiryFooter({
  headline = "Let's shape\nthe night.",
  body = "Every event is different. Share a few details and we can map out the right approach for your space, audience, and goals.",
  footerText = "Serving luxury corporate events, brand activations, and private clients across New York City, the Hamptons, New Jersey, and Connecticut."
}) {
  const [formData, setFormData] = useState({
    name: '', email: '', eventDate: null, location: '', eventType: '',
    guestCount: '', eventTiming: '', equipmentProvided: '',
    atmosphere: '', plannerContact: '', hearAbout: '', botField: ''
  });

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const requiredLabelClass = 'font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 flex items-center justify-between gap-3';
  const optionalLabelClass = 'font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block';
  const requiredFieldClass = 'bg-transparent border-0 border-b border-foreground/40 rounded-none px-0 font-body text-sm shadow-none focus-visible:ring-0 focus-visible:border-foreground transition-colors';
  const optionalFieldClass = 'bg-transparent border-0 border-b border-border rounded-none px-0 font-body text-sm shadow-none focus-visible:ring-0 focus-visible:border-foreground transition-colors';
  const requiredTagClass = 'font-body text-[10px] tracking-[0.18em] uppercase text-foreground/55';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, eventDate: date || null }));
    setCalendarOpen(false);
  };

  const encode = (data) => Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? '')}`)
    .join('&');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.eventDate) {
      setSubmitStatus('Please select an event date.');
      return;
    }

    setIsSubmitting(true);
    const payload = {
      'form-name': 'inquiry',
      ...formData,
      eventDate: format(formData.eventDate, 'MMMM d, yyyy')
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload)
      });

      if (!response.ok) throw new Error();

      setSubmitStatus('Thank you. Connecting you to the music...');
      
      // The "Music Loop": Wait for them to read success, then scroll to mixtapes
      setTimeout(() => {
        const mixtapeSection = document.getElementById('mixtapes');
        if (mixtapeSection) {
          mixtapeSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 2000);

    } catch (error) {
      setSubmitStatus('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inquiry" className="py-16 md:py-24 px-6 md:px-12 border-t border-border relative overflow-hidden warm-grain" style={{ backgroundColor: '#ebe6d9' }}>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">Inquire · 2026 Availability</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight italic tracking-tight">{headline}</h2>
            <div className="w-12 h-px bg-foreground/20 mb-8" />
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm mb-10">{body}</p>
            <div className="space-y-4">
              <a href="mailto:bookings@djbmills.com" className="font-body text-sm text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> bookings@djbmills.com
              </a>
              <p className="font-body text-[10px] tracking-widest text-muted-foreground uppercase">Response within 24 Hours</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <form name="inquiry" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={requiredLabelClass}><span>Name</span><span className={requiredTagClass}>Required</span></label>
                  <Input name="name" value={formData.name} onChange={handleChange} required className={requiredFieldClass} />
                </div>
                <div>
                  <label className={requiredLabelClass}><span>Email</span><span className={requiredTagClass}>Required</span></label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} required className={requiredFieldClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <label className={requiredLabelClass}><span>Event Date</span><span className={requiredTagClass}>Required</span></label>
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <button type="button" className="w-full bg-transparent border-0 border-b border-foreground/40 rounded-none px-0 pb-3 text-left font-body text-sm text-foreground flex items-center justify-between">
                        <span className={formData.eventDate ? 'text-foreground' : 'text-muted-foreground/50'}>
                          {formData.eventDate ? format(formData.eventDate, 'MMMM d, yyyy') : 'Select date'}
                        </span>
                        <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-auto p-0 border border-border rounded-none shadow-none bg-[#ebe6d9]">
                      <Calendar mode="single" selected={formData.eventDate} onSelect={handleDateChange} disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))} />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className={optionalLabelClass}>Event Type</label>
                  <Input name="eventType" value={formData.eventType} onChange={handleChange} placeholder="Corporate, wedding..." className={optionalFieldClass} />
                </div>
              </div>

              <div>
                <label className={requiredLabelClass}><span>Location / Venue</span><span className={requiredTagClass}>Required</span></label>
                <Input name="location" value={formData.location} onChange={handleChange} required className={requiredFieldClass} />
              </div>

              {submitStatus && <p className="font-body text-sm text-foreground italic font-medium">{submitStatus}</p>}

              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-foreground text-background hover:bg-background hover:text-foreground border border-transparent hover:border-foreground font-body text-[11px] tracking-[0.25em] uppercase px-12 py-7 rounded-none transition-all duration-500">
                {isSubmitting ? 'Verifying...' : 'Check My Date'} <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </form>
          </motion.div>
        </div>

        <div className="mt-24 pt-12 border-t border-border/40 flex flex-col items-center gap-8 text-center">
          <p className="font-body text-[10px] tracking-widest text-muted-foreground leading-relaxed max-w-2xl uppercase opacity-80">{footerText}</p>
          <p className="font-body text-[9px] tracking-[0.3em] text-muted-foreground/40 uppercase">© {new Date().getFullYear()} B.MILLS · NYC · THE HAMPTONS · WORLDWIDE</p>
        </div>
      </div>
    </section>
  );
}
