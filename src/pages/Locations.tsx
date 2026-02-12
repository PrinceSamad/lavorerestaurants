import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const locations = [
  {
    name: 'Gwarimpa',
    address: 'Plot 123, 3rd Avenue, Gwarimpa, Abuja',
    phone: '09074762834',
    hours: 'Mon - Sun: 11:00 AM - 11:00 PM',
  },
  {
    name: 'Kubwa',
    address: 'Phase 4, Arab Road, Kubwa, Abuja',
    phone: '09074762834',
    hours: 'Mon - Sun: 11:00 AM - 11:00 PM',
  },
  {
    name: 'Apo',
    address: 'Zone E, Apo Legislative Quarters, Abuja',
    phone: '09074762834',
    hours: 'Mon - Sun: 11:00 AM - 11:00 PM',
  },
];

const Locations = () => {
  return (
    <main className="pt-20">
      <section className="py-24 text-center px-6">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl tracking-[0.2em] font-light mb-6 text-foreground">Our Locations</h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three exquisite venues across Abuja, each offering the full Lavore experience.
          </p>
        </ScrollReveal>
      </section>

      <section className="px-6 pb-32 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <ScrollReveal key={loc.name} delay={i * 200}>
              <div className="border border-border rounded-sm p-10 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-500 bg-card">
                <h3 className="text-2xl tracking-[0.15em] mb-8 text-primary">{loc.name}</h3>
                <div className="space-y-6 text-muted-foreground">
                  <div className="flex flex-col items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span className="text-base">{loc.address}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    <a href={`tel:+234${loc.phone.slice(1)}`} className="text-base hover:text-primary transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    <span className="text-base">{loc.hours}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    <a href="mailto:kitchencrave6@gmail.com" className="text-base hover:text-primary transition-colors">
                      kitchencrave6@gmail.com
                    </a>
                  </div>
                </div>

                <div className="mt-8 aspect-video bg-muted/50 border border-border rounded-sm flex items-center justify-center">
                  <span className="text-sm text-muted-foreground/50 tracking-wider">Map — {loc.name}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Locations;
