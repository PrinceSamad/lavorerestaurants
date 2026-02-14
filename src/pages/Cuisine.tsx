import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const WHATSAPP_NUMBER = '2349074762834';

type Dish = { name: string; price: string; description?: string };

type Category = { title: string; items: Dish[] };

const menuCategories: Category[] = [
  {
    title: 'Pizzas',
    items: [
      { name: 'Pogo Dew', price: '$6.00', description: 'Spicy Cherry, Peppers, Garlic & Parmesan' },
      { name: 'Pogo Dew (Tweaked)', price: '$8.00', description: 'Pineapple, Mushroom, Spicy Cherry Peppers, Parmesan & Garlic Sauce' },
      { name: 'Margherita', price: '$6.00', description: 'Diced Tomato & Mozzarella' },
      { name: 'Hawaiian', price: '$7.00', description: 'Grilled Bacon, Pineapple Chunks & Mozzarella' },
      { name: 'Tandoori Chicken', price: '$7.00', description: 'Marinated Chicken, Diced Tomato, Red & Green Peppers, Tandoori Sauce & Mozzarella' },
      { name: 'Vegetarian', price: '$7.00', description: 'Roasted Veg, Mixed Peppers, Red Onion, Brinjal, Baby Marrow, Garlic, Cherry Tomato & Mozzarella' },
      { name: 'Mexican', price: '$8.00', description: 'Mexican Mince, Red & Yellow Pepper, Cheddar & Mozzarella' },
      { name: 'Alfredo', price: '$9.00', description: 'Grilled Chicken, Alfredo Sauce, Slivers of Cherry Pepper, Parmesan & Mozzarella' },
      { name: 'Carbonara', price: '$9.00', description: 'Grilled Bacon, Grilled Mushroom, Onion, Green Olives, Carbonara Sauce & Mozzarella' },
      { name: 'Portuguese Chicken', price: '$7.00', description: 'Marinated Chicken, Spring Onions, Portuguese Sauce & Mozzarella' },
      { name: 'Braai East', price: '$9.00', description: 'Achar Boerewors, Salami & Mozzarella' },
      { name: 'Mediterranean', price: '$8.00', description: 'Roasted Mixed Veg, Green Olives, Feta Cheese & Mozzarella' },
      { name: 'BBQ Chicken Mushroom', price: '$8.00', description: 'Marinated Chicken, Mushroom, Slivers of Cherry Pepper, BBQ Sauce, Mozzarella & Parmesan' },
    ],
  },
  {
    title: 'Grilled Chicken',
    items: [
      { name: 'Quarter Chicken', price: '$4.00' },
      { name: 'Half Chicken', price: '$8.00' },
      { name: 'Whole Chicken', price: '$15.00' },
      { name: 'Chicken Bites', price: '$4.00', description: 'Fried or Grilled' },
      { name: 'Sticky BBQ Wings', price: '$4.00' },
      { name: 'Tandoori Wings', price: '$4.00' },
    ],
  },
  {
    title: 'Meal Deals',
    items: [
      { name: 'Quarter Chicken Meal Deal', price: '$5.00', description: 'Quarter Chicken & Chips' },
      { name: 'Chicken Burger Meal Deal', price: '$5.00', description: 'Chicken Burger & Small Chips' },
      { name: 'Chicken Wings Meal Deal', price: '$5.00', description: 'Chicken Wings & Chips' },
      { name: 'Chicken Wrapper Meal Deal', price: '$5.00', description: 'Chicken Wrapper & Small Chips' },
      { name: 'Chicken Bites Meal Deal', price: '$5.50', description: 'Chicken Bites & Small Chips' },
      { name: 'Half Chicken Meal Deal', price: '$10.00', description: 'Half Chicken, Reg Chips & Reg Coleslaw' },
      { name: 'Full Chicken Meal Deal', price: '$20.00', description: 'Whole Chicken, Large Chips & Large Coleslaw Salad' },
    ],
  },
  {
    title: 'Burgers',
    items: [
      { name: 'Grilled Chicken Burger', price: '$4.00', description: 'Grilled Chicken Breast, Lettuce, Tomato, Mayonnaise on a freshly Baked Portuguese Roll' },
      { name: 'Double Chicken Burger', price: '$5.00', description: '2x Grilled Chicken Breast, Lettuce, Tomato, Mayonnaise on a freshly Baked Portuguese Roll' },
      { name: 'Chicken Cheese Burger', price: '$5.00', description: 'Grilled Chicken Breast, Cheddar Cheese, Lettuce, Tomato, Mayonnaise on a freshly Baked Portuguese Roll' },
      { name: 'Hawaiian Burger', price: '$5.00', description: 'Grilled Chicken Breast, Pineapple, Lettuce, Tomato, Mayonnaise on a freshly Baked Portuguese Roll' },
    ],
  },
  {
    title: 'Combos',
    items: [
      { name: 'Snap Chicken Combo', price: '$6.00', description: 'Quarter Chicken, Small Chips & 500ml Pepsi' },
      { name: 'Chicken Burger Combo', price: '$6.00', description: 'Chicken Burger, Small Chips & 500ml Pepsi' },
      { name: 'Half Chicken Combo', price: '$11.00', description: 'Half Chicken, Medium Chips & 500ml Pepsi' },
      { name: 'Whole Chicken Combo', price: '$22.00', description: 'Whole Chicken, Large Chips, 3 Hot Rolls & 1 Litre Pepsi' },
    ],
  },
  {
    title: 'Wrappers',
    items: [
      { name: 'Peri Peri Wrapper', price: '$4.00', description: 'Peri-Peri Chicken, Cucumber with a splash of Diced Tomato' },
      { name: 'Portuguese Wrapper', price: '$4.00', description: 'Marinated Chicken Strips, Spring Onion & Cucumber, with a Splash of Pogo Dressing' },
      { name: 'Sweet Chilli Wrapper', price: '$4.00', description: 'Deep Fried Chicken Strips with a Splash of Sweet Chilli Sauce' },
      { name: 'Tandoori Wrapper', price: '$4.00', description: 'Spicy Tandoori Chicken Strips with a Splash of Pogo\'s Dressing' },
      { name: 'Roast Veg Wrapper', price: '$4.00', description: 'Roasted Veg Mix' },
      { name: 'Hawaiian Wrapper', price: '$4.00', description: 'Grilled Chicken Strips, Pineapple Chunks' },
    ],
  },
  {
    title: 'Extras',
    items: [
      { name: 'Small Chips', price: '$1.50' },
      { name: 'Med Chips', price: '$3.00' },
      { name: 'Large Chips', price: '$5.00' },
    ],
  },
  {
    title: 'Bowls',
    items: [
      { name: 'Rice Bowl', price: '$6.00' },
      { name: 'Greek Bowl', price: '$6.00' },
      { name: 'Cauliflower Rice Bowl', price: '$6.00' },
    ],
  },
  {
    title: 'Salads',
    items: [
      { name: 'Portuguese Salad', price: '$3.00' },
      { name: 'Greek Salad', price: '$4.00' },
      { name: 'Grilled Chicken Salad', price: '$5.00' },
      { name: 'Bean Salad', price: '$3.00' },
      { name: 'Regular Coleslaw Salad', price: '$2.00' },
      { name: 'Large Coleslaw Salad', price: '$3.00' },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Hot Fudged Brownie', price: '$4.00' },
      { name: 'Rich Chocolate Cake Slice', price: '$4.00' },
      { name: 'Red Velvet Cake Slice', price: '$4.00' },
      { name: 'Carrot Cake Slice', price: '$4.00' },
      { name: 'Malva Pudding', price: '$4.00' },
    ],
  },
];

const allCategoryNames = ['All', ...menuCategories.map((c) => c.title)];

const handleOrder = (dishName: string, price: string) => {
  const message = `Hello! I would like to order *${dishName}* (${price}) from Lavore Restaurant.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
};

const Cuisine = () => {
  const [active, setActive] = useState('All');

  const filteredCategories =
    active === 'All' ? menuCategories : menuCategories.filter((c) => c.title === active);

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
        <div className="flex justify-center flex-wrap gap-4 md:gap-6">
          {allCategoryNames.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase transition-all duration-300 pb-1 border-b ${
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

      {/* Dishes by Category */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        {filteredCategories.map((category) => (
          <div key={category.title} className="mb-16">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl tracking-[0.15em] font-light text-foreground mb-8 text-center">
                {category.title}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((dish, i) => (
                <ScrollReveal key={dish.name} delay={i * 80}>
                  <div className="group border border-border/40 rounded-sm p-5 hover:border-primary/40 transition-all duration-500 bg-card/50 backdrop-blur-sm flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-base tracking-wider text-foreground font-medium">{dish.name}</h3>
                        <span className="text-primary text-base font-semibold whitespace-nowrap">{dish.price}</span>
                      </div>
                      {dish.description && (
                        <p className="text-muted-foreground text-xs leading-relaxed mb-4">{dish.description}</p>
                      )}
                    </div>
                    <button
                      onClick={() => handleOrder(dish.name, dish.price)}
                      className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 text-xs tracking-[0.15em] uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 w-fit mt-3"
                    >
                      <ShoppingBag size={14} />
                      Order Now
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Cuisine;
