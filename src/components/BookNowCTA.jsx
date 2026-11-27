export default function BookNowCTA({ placement = 'post_marquee' }) {
  const handleClick = () => {
    try {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'book_now_click', {
          placement,
        });
      }
    } catch (err) {}
  };

  return (
    <section className="w-full py-10 md:py-14 px-6 bg-background flex justify-center">
      <a
        href="#inquiry"
        onClick={handleClick}
        className="font-body text-xs md:text-sm tracking-[0.35em] uppercase text-foreground border border-foreground/40 px-12 py-4 hover:bg-foreground hover:text-background transition-colors duration-300"
      >
        Book Now
      </a>
    </section>
  );
}
