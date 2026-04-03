import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const events = [
  {
    title: 'Beazley NYC Gala',
    location: 'Cipriani, New York',
    date: 'March 2023',
    category: 'Corporate',
    image: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/0f15118e8_BEAZLEY_NYC_MARCH2023_PHOTOBY_LARUFOTO_LUISRUIZ_000180.jpg',
  },
  {
    title: 'Hall des Lumières Opening',
    location: 'Hall des Lumières, New York',
    date: '2024',
    category: 'Brand Activation',
    image: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/2d30e7d62_IMG_3857.png',
  },
  {
    title: 'Gucci Brand Event',
    location: 'New York',
    date: '2023',
    category: 'Fashion',
    image: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/553a07f01_guccieventselfie.jpg',
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            In the Room
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-light">
            Nothing preset. Everything in motion.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group border-t border-border last:border-b py-6 md:py-10 cursor-pointer"
            >
              {/* Mobile layout */}
              <div className="flex md:hidden items-center gap-4">
                <div className="w-20 h-14 flex-shrink-0 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-xl font-light">{event.title}</h3>
                  <p className="font-body text-xs tracking-wider text-muted-foreground uppercase mt-1">{event.category} · {event.location}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              </div>
              {/* Desktop layout */}
              <div className="hidden md:grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-2 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-heading text-2xl md:text-3xl font-light group-hover:translate-x-2 transition-transform duration-500">{event.title}</h3>
                </div>
                <div className="md:col-span-2">
                  <p className="font-body text-xs tracking-wider text-muted-foreground uppercase">{event.category}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-body text-sm text-muted-foreground">{event.location}</p>
                </div>
                <div className="md:col-span-1">
                  <p className="font-body text-xs text-muted-foreground">{event.date}</p>
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}