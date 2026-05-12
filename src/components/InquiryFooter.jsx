import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, CalendarIcon, Instagram, Linkedin, Mail } from 'lucide-react';
import { format } from 'date-fns';

import { Input } from '@/components/ui/input';
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
    botField: ''
  });

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

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
    const payload = { 'form-name': 'inquiry', ...formData, eventDate: format(formData.eventDate, 'MMMM d, yyyy') };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload)
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
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-32">
          {/* LEFT COLUMN */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4 italic">
              Inquire · Late 2026 / 2027 Availability
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight italic tracking-tight">{headline}</h2>
            <div className="w-12 h-px bg-foreground/20 mb-8" />
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm mb-12">{body}</p>
            
            {/* Restored Booking Info */}
            <div className="space-y-1">
              <a href="mailto:bookings@djbmills.com" className="font-body text-xs tracking-[0.2em] uppercase text-foreground hover:opacity-60 transition-opacity">
                bookings@djbmills.com
              </a>
              <p className="font-body text-[9px] tracking-[0.2em] text-muted-foreground uppercase opacity-70">
                Response within 24 hours
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: FORM */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <form name="inquiry" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 flex justify-between">Name <span className="text-[10px] opacity-50">Required</span></label>
                  <Input name="name" value={formData.name} onChange={handleChange} required className="bg-transparent border-0 border-b border-foreground/40 rounded-none px-0 h-10 shadow-none focus-visible:ring-0 focus-visible:border-foreground" />
                </div>
                <div className="flex flex-col">
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 flex justify-between">Email <span className="text-[10px] opacity-50">Required</span></label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-transparent border-0 border-b border-foreground/40 rounded-none px-0 h-10 shadow-none focus-visible:ring-0 focus-visible:border-foreground" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 flex justify-between">Event Date <span className="text-[10px] opacity-50">Required</span></label>
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <button type="button" className="w-full bg-transparent border-0 border-b border-foreground/40 rounded-none pb-3 text-left font-body text-sm flex items-center justify-between h-10">
                        <span className={formData.eventDate ? 'text-foreground' : 'text-muted-foreground/50'}>
                          {formData.eventDate ? format(formData.eventDate, 'MMMM d, yyyy') : 'Select date'}
                        </span>
                        <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-auto p-0 border border-border rounded-none bg-[#ebe6d9] shadow-2xl">
                      <Calendar mode="single" selected={formData.eventDate} onSelect={handleDateChange} disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))} />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex flex-col">
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Event Type</label>
                  <Input name="eventType" value={formData.eventType} onChange={handleChange} placeholder="Corporate, brand..." className="bg-transparent border-0 border-b border-border rounded-none px-0 h-10 shadow-none focus-visible:ring-0 focus-visible:border-foreground" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 flex justify-between">Location <span className="text-[10px] opacity-50">Required</span></label>
                <Input name="location" value={formData.location} onChange={handleChange} required className="bg-transparent border-0 border-b border-foreground/40 rounded-none px-0 h-10 shadow-none focus-visible:ring-0 focus-visible:border-foreground" />
              </div>

              {submitStatus && <p className="font-body text-sm text-foreground italic">{submitStatus}</p>}

              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-foreground text-background hover:bg-background hover:text-foreground border border-transparent hover:border-foreground
