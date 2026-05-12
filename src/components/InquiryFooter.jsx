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
    name: '', email: '', eventDate: null, location: '', 
    eventType: '', guestCount: '', eventTiming: '', 
    atmosphere: '', equipmentProvided: '', plannerContact: '', 
    hearAbout: '', botField: ''
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
      
      setSubmitStatus('Inquiry Sent. Expect a response within 24 hours. Connecting you to the music...');
      
      setTimeout(() => {
        const mixtapesSection = document.getElementById('mixtapes');
        if (mixtapesSection) {
          const offsetTop = mixtapesSection.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: offsetTop - 80, behavior: 'smooth' });
        } else {
          window.location.hash = 'mixtapes';
        }
      }, 2800);

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
              Inquire · Late 20
