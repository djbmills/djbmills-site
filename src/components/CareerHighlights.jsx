import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const columns = [
  {
    heading: 'Shared Stages',
    items: [
      ['Coco & Breezy', 'Opening Set'],
      ['Juvenile', 'Direct Support'],
      ['Questlove', 'Direct Support'],
      ['Sofi Tukker', 'Direct Support'],
      ['Sugarhill Gang', 'Direct Support'],
      ['Flo Rida', 'Closing Set'],
      ['Rev Run', 'Closing Set'],
    ],
  },
  {
    heading: 'Select Media',
    items: [
      ["Diplo's Revolution", 'SiriusXM'],
      ['Good Day New York', 'Fox 5'],
      ['Vogue', 'Mention'],
      ['Vanity Fair', 'Mention'],
    ],
  },
  {
    heading: 'Notable Events',
    items: [
      ['Wieden+Kennedy', "Founder's Day x2"],
      ['Avedon 100', 'Gagosian'],
      ['Hall des Lumières', 'Opening Night'],
      ['John Legend', 'Afterparty'],
      ['New York Rangers', 'Team Event'],
      ['SAB Ball', 'Second Year Running'],
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
