import { useState } from 'react';
import { X } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import heroDining from '@/assets/hero-dining.jpg';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';
import dish4 from '@/assets/dish-4.jpg';
import dish5 from '@/assets/dish-5.jpg';
import chefKitchen from '@/assets/chef-kitchen.jpg';
import restaurantInterior from '@/assets/restaurant-interior.jpg';
import galleryWine from '@/assets/gallery-wine.jpg';
import galleryBar from '@/assets/gallery-bar.jpg';

const images = [
  { src: heroDining, alt: 'Fine dining table setting', span: 'col-span-2 row-span-2' },
  { src: dish1, alt: 'Amuse-bouche', span: '' },
  { src: galleryWine, alt: 'Wine service', span: '' },
  { src: dish2, alt: 'Wagyu steak', span: '' },
  { src: restaurantInterior, alt: 'Restaurant interior', span: 'col-span-2' },
  { src: dish3, alt: 'Chocolate dessert', span: '' },
  { src: chefKitchen, alt: 'Chef at work', span: '' },
  { src: dish4, alt: 'Oysters', span: '' },
  { src: galleryBar, alt: 'Bar lounge', span: 'col-span-2' },
  { src: dish5, alt: 'Truffle pasta', span: '' },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main className="pt-20">
      <section className="py-24 text-center px-6">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl tracking-[0.2em] font-light mb-6 text-foreground">Gallery</h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A visual journey through the Lavore experience.
          </p>
        </ScrollReveal>
      </section>

      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[250px]">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 100} className={img.span}>
              <div
                className="group relative overflow-hidden h-full cursor-pointer rounded-sm shadow-md"
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/60 hover:text-primary transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] object-contain animate-reveal-scale"
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
