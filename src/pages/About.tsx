import ScrollReveal from '@/components/ScrollReveal';
import ceoPortrait from '@/assets/ceo-portrait.jpg';
import restaurantInterior from '@/assets/restaurant-interior.jpg';

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={restaurantInterior} alt="Lavore interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl tracking-[0.2em] font-light">Our Story</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="h-px w-20 bg-primary/40 mx-auto mb-12" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-xl md:text-2xl text-center leading-relaxed text-muted-foreground mb-12">
            Lavore was born from a singular vision: to create a sanctuary where culinary artistry meets
            timeless elegance. Every element — from the carefully sourced ingredients to the ambient glow
            of candlelight — is orchestrated to deliver an unforgettable experience.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <p className="text-lg text-center leading-relaxed text-muted-foreground">
            Our philosophy is rooted in respect — for tradition, for innovation, and above all, for the
            discerning palates of our guests. At Lavore, dining transcends sustenance; it becomes art.
          </p>
        </ScrollReveal>
      </section>

      {/* CEO Section */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="overflow-hidden">
              <img
                src={ceoPortrait}
                alt="Dr. Adam Muhammed Bedemasi — Founder of Lavore Restaurant"
                className="w-full max-w-md mx-auto object-cover aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-[2s]"
              />
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal delay={200}>
              <h2 className="text-sm tracking-[0.3em] uppercase text-primary mb-4">The Visionary</h2>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <h3 className="text-3xl md:text-4xl font-light tracking-wider mb-8">
                Dr. Adam Muhammed Bedemasi
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={600}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A connoisseur of fine dining and a passionate entrepreneur, Dr. Adam Muhammed Bedemasi
                founded Lavore with the dream of bringing world-class culinary experiences to the heart of Abuja.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={800}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                His dedication to excellence and his belief that food is the universal language of love
                continue to inspire every dish, every ambiance, and every moment at Lavore.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
