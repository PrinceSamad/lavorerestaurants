import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';
import dish4 from '@/assets/dish-4.jpg';
import dish5 from '@/assets/dish-5.jpg';
import chefKitchen from '@/assets/chef-kitchen.jpg';

const categories = ['All', 'Starters', 'Mains', 'Desserts', "Chef's Special"];

const dishes = [
  { name: 'Dashi Egg Custard', category: 'Starters', img: dish1, price: '₦15,000' },
  { name: 'Wagyu A5 Tenderloin', category: 'Mains', img: dish2, price: '₦45,000' },
  { name: 'Chocolate Gold Leaf Mousse', category: 'Desserts', img: dish3, price: '₦12,000' },
  { name: 'Oysters & Caviar', category: 'Starters', img: dish4, price: '₦22,000' },
  { name: 'Truffle Spaghetti', category: "Chef's Special", img: dish5, price: '₦35,000' },
  { name: 'The Art of Plating', category: "Chef's Special", img: chefKitchen, price: 'Experience' },
];

const handleOrder = (dishName: string, price: string) => {
  const message = `Hello! I would like to order *${dishName}* (${price}) from Lavore Restaurant.`;
  window.open(`https://wa.me/2349074762834?text=${encodeURIComponent(message)}`, '_blank');
};

const Cuisine = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? dishes : dishes.filter((d) => d.category === active);

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-24 text-center px-6">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl tracking-[0.2em] font-light mb-6 text-foreground">Our Cuisine</h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Each creation is a testament to culinary mastery — where precision meets passion on every plate.
          </p>
        </ScrollReveal>
      </section>

      {/* Category Filter */}
      <section className="px-6 mb-16">
        <div className="flex justify-center flex-wrap gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm tracking-[0.2em] uppercase transition-all duration-300 pb-1 border-b ${
                active === cat
                  ? 'text-primary border-primary'
                  : 'text-muted-foreground border-transparent hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Dishes Grid */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dish, i) => (
            <ScrollReveal key={dish.name} delay={i * 150}>
              <div className="group relative overflow-hidden aspect-[3/4] cursor-pointer rounded-sm shadow-lg">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                  <span className="text-primary text-xs tracking-[0.2em] uppercase mb-2">{dish.category}</span>
                  <span className="text-xl tracking-wider mb-1 text-white">{dish.name}</span>
                  <span className="text-primary/90 text-lg mb-4">{dish.price}</span>
                  {dish.price !== 'Experience' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOrder(dish.name, dish.price);
                      }}
                      className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 w-fit"
                    >
                      <ShoppingBag size={16} />
                      Order Now
                    </button>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Cuisine;
