import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import LetterReveal from '@/components/LetterReveal';
import ScrollReveal from '@/components/ScrollReveal';
import heroDining from '@/assets/hero-dining.jpg';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';
import restaurantInterior from '@/assets/restaurant-interior.jpg';

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroDining}
            alt="Fine dining at Lavore Restaurant"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] font-light mb-6 text-foreground">
            <LetterReveal text="LAVORE" letterDelay={120} />
          </h1>
          <ScrollReveal delay={1200}>
            <p
              className="text-xl md:text-2xl text-primary tracking-[0.3em] uppercase"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Home of Delicious Delicacies
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float-chevron">
          <ChevronDown size={28} className="text-primary/60" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="h-px w-20 bg-primary/40 mx-auto mb-12 animate-gold-line" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 text-foreground">
            A Philosophy of Taste
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            At Lavore, every dish is a narrative — a journey through curated flavors, artisan techniques,
            and the freshest ingredients sourced from local and international purveyors. We believe dining
            is not merely eating; it is an experience to be savored.
          </p>
        </ScrollReveal>
      </section>

      {/* Cuisine Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-center text-sm tracking-[0.3em] uppercase text-primary mb-16">
              Our Signature Creations
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: dish1, name: 'Amuse-Bouche' },
              { img: dish2, name: 'Wagyu Perfection' },
              { img: dish3, name: 'Golden Finale' },
            ].map((dish, i) => (
              <ScrollReveal key={dish.name} delay={i * 200}>
                <div className="group relative overflow-hidden aspect-[3/4] rounded-sm shadow-lg">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
                    <span className="text-xl tracking-[0.15em] text-primary">{dish.name}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interior CTA */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={restaurantInterior}
            alt="Restaurant interior"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8">
              Reserve Your Table
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
              An evening at Lavore is an occasion. Secure your moment of culinary indulgence.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={500}>
            <a
              href="https://wa.me/2349074762834?text=Hello%2C%20I%20would%20like%20to%20make%20a%20reservation%20at%20Lavore%20Restaurant."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-primary text-primary px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 rounded-sm"
            >
              Make a Reservation
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
