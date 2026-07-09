import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const columns = [
  {
    heading: 'Shared Stages',
    items: [
      { name: 'Coco & Breezy', role: 'Opening Set', context: 'Opening DJ set for Coco & Breezy by B.MILLS.' },
      { name: 'Flo Rida', role: 'Closing Set', context: 'Closing live entertainment DJ set following a performance by Flo Rida.' },
      { name: 'Juvenile', role: 'Direct Support', context: 'Event music direction and live DJ sets opening and closing the room for an event featuring Juvenile.' },
      { name: 'Questlove', role: 'Direct Support', context: 'Direct support music direction alongside Questlove.' },
      { name: 'Sofi Tukker', role: 'Direct Support', context: 'Event music direction and live DJ sets opening and closing the room for an event featuring Sofi Tukker.' },
      { name: 'Sugarhill Gang', role: 'Direct Support', context: 'Event music direction and live DJ sets opening and closing the room for an event featuring Sugarhill Gang.' },
      { name: 'Rev Run', role: 'Closing Set', context: 'Closing live DJ set and event atmosphere direction following a performance by Rev Run.' },
    ],
  },
  {
    heading: 'Select Media',
    items: [
      { name: "Diplo's Revolution", role: 'SiriusXM', context: 'Guest mix broadcast nationwide on Diplo\'s Revolution on SiriusXM.' },
      { name: 'Good Day New York', role: 'Fox 5', context: 'Live television broadcast appearance and music performance on Fox 5 Good Day New York.' },
      { name: 'Vogue', role: 'Mention', context: 'Editorial brand mention and event curation feature in Vogue Magazine.' },
      { name: 'Vanity Fair', role: 'Mention', context: 'Luxury culture event music direction mention in Vanity Fair.' },
    ],
  },
 {
    heading: 'Notable Events',
    items: [
      { name: 'A$AP Ferg', role: 'Album Release @ 1OAK', context: 'Official album release party live DJ set for A$AP Ferg at 1OAK in New York City.' },
      { name: 'Disney', role: 'Aladdin Movie Launch', context: 'Live-action Aladdin film launch activation music direction and influencer event for Disney at the Bryant Park Hotel.' },
      { name: 'Avedon 100', role: 'Gagosian', context: 'Gagosian Gallery exhibition event sound design and luxury art opening curation for Avedon 100 in NYC.' },
      { name: 'Hall des Lumières', role: 'Opening Night', context: 'Official opening night launch party and interactive digital exhibition live DJ set at Hall des Lumières.' },
      { name: 'John Legend', role: 'Concert Afterparty', context: 'Official concert afterparty music direction and live performance for John Legend.' },
      { name: 'New York Rangers', role: 'Team Event', context: 'Internal team event and corporate sports organization music direction for the New York Rangers.' },
      { name: 'SAB Ball', role: 'Second Year Running', context: 'Annual gala evening music curation and dance atmosphere for School of American Ballet, consecutive years.' },
      { name: 'Wieden+Kennedy', role: "Founder's Day x2", context: 'Annual Founders Day celebration music direction and venue performance for Wieden+Kennedy at The Standard Boom Boom Room and The Glasshouse NYC.' },
    ],
  },
];

export default function CareerHighlights() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);
  return (
    <section ref={ref} className="py-24 md:py-36 px-6 md:px-12 bg-background relative overflow-hidden">
      <motion.div style={{ y }} className="max-w-7xl mx-auto relative">
        <div className="flex items-center gap-4 mb-16 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">07</motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="flex-1 h-px bg-border origin-left" />
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">Career</motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground">Highlights</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-16 md:grid-cols-3"
        >
          {columns.map((col, ci) => (
            <div key={ci} className="space-y-6">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-foreground/40 pb-4 border-b border-foreground/10">
                {col.heading}
              </p>
              <div className="space-y-3">
                {col.items.map(([name, role], i) => (
                  <div key={i} className="flex items-baseline gap-2 font-body text-xs tracking-[0.15em] uppercase text-foreground/70">
                    <span className="shrink-0">{name}</span>
                    <span className="text-foreground/25 shrink-0">|</span>
                    <span className="text-foreground/40">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
