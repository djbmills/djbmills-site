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
    name: '',
    email: '',
    eventDate: null,
    location: '',
    eventType: '',
    guestCount: '',
    eventTiming: '',
    equipmentProvided: '',
    atmosphere: '',
    plannerContact: '',
    hearAbout: ''
  });

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, eventDate: date || null }));
    setCalendarOpen(false);
  };

  const encode = (data) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? '')}`)
      .join('&');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const formattedDate = formData.eventDate
      ? format(formData.eventDate, 'MMMM d, yyyy')
      : '';

    const payload = {
      'form-name': 'inquiry',
      name: formData.name,
      email: formData.email,
      eventDate: formattedDate,
      location: formData.location,
      eventType: formData.eventType,
      guestCount: formData.guestCount,
      eventTiming: formData.eventTiming,
      equipmentProvided: formData.equipmentProvided,
      atmosphere: formData.atmosphere,
      plannerContact: formData.plannerContact,
      hearAbout: formData.hearAbout,
      'bot-field': ''
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload)
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitStatus('Thanks, your inquiry has been sent. I’ll be in touch soon.');
      setFormData({
        name: '',
        email: '',
        eventDate: null,
        location: '',
        eventType: '',
        guestCount: '',
        eventTiming: '',
        equipmentProvided: '',
        atmosphere: '',
        plannerContact: '',
        hearAbout: ''
      });
    } catch (error) {
      setSubmitStatus('Something went wrong while sending your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="inquiry"
      className="py-16 md:py-24 px-6 md:px-12 border-t border-border relative overflow-hidden warm-grain"
      style={{ backgroundColor: '#ebe6d9' }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Get in Touch
            </p>

            <h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight tracking-[-0.02em]"
              style={{ whiteSpace: 'pre-line' }}
            >
              {headline}
            </h2>

            <div className="w-12 h-px bg-foreground/20 mb-8" />

            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm mb-10">
              {body}
            </p>

            <div className="space-y-3">
              <a
                href="mailto:bookings@djbmills.com"
                className="font-body text-sm text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                bookings@djbmills.com
              </a>

              <p className="font-body text-sm text-muted-foreground">
                Based in New York | Available Worldwide
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <form
              name="inquiry"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="inquiry" />
              <input type="hidden" name="bot-field" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 font-body text-sm shadow-none focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 font-body text-sm shadow-none focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                    Event Date
                  </label>

                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="w-full bg-transparent border-0 border-b border-border rounded-none px-0 pb-3 text-left font-body text-sm text-foreground focus:outline-none focus:border-foreground transition-colors flex items-center justify-between"
                      >
                        <span className={formData.eventDate ? 'text-foreground' : 'text-muted-foreground/50'}>
                          {formData.eventDate ? format(formData.eventDate, 'MMMM d, yyyy') : 'Select date'}
                        </span>
                        <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </PopoverTrigger>

                    <PopoverContent
                      align="start"
                      className="w-auto p-0 border border-border rounded-none shadow-none"
                      style={{ backgroundColor: '#ebe6d9' }}
                    >
                      <Calendar
                        mode="single"
                        selected={formData.eventDate}
                        onSelect={handleDateChange}
                        initialFocus
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        className="p-3"
                        classNames={{
                          months: 'flex flex-col',
                          month: 'space-y-4',
                          caption: 'flex justify-center pt-1 relative items-center',
                          caption_label: 'font-body text-sm font-light',
                          nav: 'space-x-1 flex items-center',
                          nav_button:
                            'h-7 w-7 bg-transparent border border-border rounded-none hover:bg-foreground hover:text-background transition-colors',
                          nav_button_previous: 'absolute left-1',
                          nav_button_next: 'absolute right-1',
                          table: 'w-full border-collapse space-y-1',
                          head_row: 'flex',
                          head_cell:
                            'text-muted-foreground rounded-none w-9 font-body text-[10px] uppercase tracking-[0.15em]',
                          row: 'flex w-full mt-2',
                          cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-transparent',
                          day:
                            'h-9 w-9 p-0 font-body font-light rounded-none hover:bg-foreground hover:text-background transition-colors',
                          day_selected:
                            'bg-foreground text-background hover:bg-foreground hover:text-background',
                          day_today: 'border border-foreground text-foreground',
                          day_outside: 'text-muted-foreground/30',
                          day_disabled: 'text-muted-foreground/30 cursor-not-allowed',
                        }}
                      />
                    </PopoverContent>
                  </Popover>

                  <input
                    type="hidden"
                    name="eventDate"
                    value={formData.eventDate ? format(formData.eventDate, 'MMMM d, yyyy') : ''}
                  />
                </div>

                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                    Event Type
                  </label>
                  <Input
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    placeholder="Wedding, corporate, private..."
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 font-body text-sm shadow-none focus-visible:ring-0 focus-visible:border-foreground transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                    Location / Venue + City
                  </label>
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 font-body text-sm shadow-none focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                    Guest Count
                  </label>
                  <Input
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 font-body text-sm shadow-none focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                    Event Timing
                  </label>
                  <Input
                    name="eventTiming"
                    value={formData.eventTiming}
                    onChange={handleChange}
                    placeholder="Start time / end time"
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 font-body text-sm shadow-none focus-visible:ring-0 focus-visible:border-foreground transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>

                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                    How Did You Hear About Me?
                  </label>
                  <Input
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    placeholder="Planner, venue, Instagram, referral..."
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 font-body text-sm shadow-none focus-visible:ring-0 focus-visible:border-foreground transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                  Sound / DJ Equipment Provided?
                </label>
                <Textarea
                  name="equipmentProvided"
                  value={formData.equipmentProvided}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Venue sound system, in-house DJ setup, AV team details, etc."
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 font-body text-sm shadow-none focus-visible:ring-0 focus-visible:border-foreground transition-colors resize-none placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                  Atmosphere / Music Direction
                </label>
                <Textarea
                  name="atmosphere"
                  value={formData.atmosphere}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Music style, energy, key moments like cocktail hour, dinner, after party..."
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 font-body text-sm shadow-none focus-visible:ring-0 focus-visible:border-foreground transition-colors resize-none placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                  Planner / Point of Contact
                </label>
                <Input
                  name="plannerContact"
                  value={formData.plannerContact}
                  onChange={handleChange}
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 font-body text-sm shadow-none focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                />
              </div>

              {submitStatus && (
                <p className="font-body text-sm text-muted-foreground">
                  {submitStatus}
                </p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 bg-foreground text-background hover:bg-foreground/90 font-body text-xs tracking-[0.2em] uppercase px-10 py-6 rounded-none disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </form>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col items-center gap-4 text-center">
          <a href="/" aria-label="B.Mills home" className="hover:opacity-70 transition-opacity">
            <img
              src="/logos/bmills-logo-white.png"
              alt="B.Mills"
              className="h-14 w-auto object-contain"
            />
          </a>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/djbmills/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="https://www.tiktok.com/@djbmills"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/bmillsdj/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://open.spotify.com/user/djbmills?si=MsaWyn9wSF-pokIy84EgNg&nd=1&dlsi=9996a8a5dc354b74"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.609-1.32.42-3.3-2.04-8.159-2.64-12.021-1.441-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.079 10.561 18.62 12.84c.361.181.54.78.3 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>
          </div>

          <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-2xl text-center whitespace-pre-line">
            {footerText}
          </p>

          <p className="font-body text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} B.MILLS. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
