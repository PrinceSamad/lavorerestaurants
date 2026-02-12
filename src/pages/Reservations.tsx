import ScrollReveal from '@/components/ScrollReveal';
import restaurantInterior from '@/assets/restaurant-interior.jpg';

const Reservations = () => {
  const handleReserve = () => {
    const message = 'Hello! I would like to make a reservation at Lavore Restaurant. Please let me know the available times.';
    window.open(`https://wa.me/2349074762834?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={restaurantInterior} alt="Lavore dining" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl tracking-[0.2em] font-light mb-6 text-foreground">Reservations</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Secure your evening of culinary excellence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="h-px w-20 bg-primary/40 mx-auto mb-12" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <h2 className="text-2xl md:text-4xl font-light tracking-wider mb-6 text-foreground">
            Book Your Table via WhatsApp
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            For the most personalized experience, we handle all reservations through WhatsApp.
            Simply tap below and let us know your preferred date, time, and number of guests.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={600}>
          <button
            onClick={handleReserve}
            className="inline-flex items-center gap-3 border-2 border-primary text-primary px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 rounded-sm"
          >
            Reserve on WhatsApp
          </button>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {['Gwarimpa', 'Kubwa', 'Apo'].map((loc) => (
              <div key={loc} className="p-6 border border-border rounded-sm">
                <h3 className="text-primary tracking-[0.15em] text-lg mb-2">{loc}</h3>
                <p className="text-muted-foreground text-sm">Mon - Sun: 11AM - 11PM</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Reservations;
