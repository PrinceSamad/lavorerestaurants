import { useState, useMemo } from 'react';
import { ShoppingBag, Search } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const WHATSAPP_NUMBER = '2349074762834';
const USD_TO_NGN = 1600;

type Dish = { name: string; priceUsd: number; description?: string };
type Category = { title: string; items: Dish[] };

const formatPrice = (usd: number) => {
  const ngn = Math.round(usd * USD_TO_NGN);
  return { usd: `$${usd.toFixed(2)}`, ngn: `₦${ngn.toLocaleString()}` };
};

const menuCategories: Category[] = [
  {
    title: 'Pizzas',
    items: [
      { name: 'Pogo Dew', priceUsd: 6, description: 'Spicy Cherry, Peppers, Garlic & Parmesan' },
      { name: 'Pogo Dew (Tweaked)', priceUsd: 8, description: 'Pineapple, Mushroom, Spicy Cherry Peppers, Parmesan & Garlic Sauce' },
      { name: 'Margherita', priceUsd: 6, description: 'Diced Tomato & Mozzarella' },
      { name: 'Hawaiian', priceUsd: 7, description: 'Grilled Bacon, Pineapple Chunks & Mozzarella' },
      { name: 'Tandoori Chicken', priceUsd: 7, description: 'Marinated Chicken, Diced Tomato, Red & Green Peppers, Tandoori Sauce & Mozzarella' },
      { name: 'Vegetarian', priceUsd: 7, description: 'Roasted Veg, Mixed Peppers, Red Onion, Brinjal, Baby Marrow, Garlic, Cherry Tomato & Mozzarella' },
      { name: 'Mexican', priceUsd: 8, description: 'Mexican Mince, Red & Yellow Pepper, Cheddar & Mozzarella' },
      { name: 'Alfredo', priceUsd: 9, description: 'Grilled Chicken, Alfredo Sauce, Slivers of Cherry Pepper, Parmesan & Mozzarella' },
      { name: 'Carbonara', priceUsd: 9, description: 'Grilled Bacon, Grilled Mushroom, Onion, Green Olives, Carbonara Sauce & Mozzarella' },
      { name: 'Portuguese Chicken', priceUsd: 7, description: 'Marinated Chicken, Spring Onions, Portuguese Sauce & Mozzarella' },
      { name: 'Braai East', priceUsd: 9, description: 'Achar Boerewors, Salami & Mozzarella' },
      { name: 'Mediterranean', priceUsd: 8, description: 'Roasted Mixed Veg, Green Olives, Feta Cheese & Mozzarella' },
      { name: 'BBQ Chicken Mushroom', priceUsd: 8, description: 'Marinated Chicken, Mushroom, Slivers of Cherry Pepper, BBQ Sauce, Mozzarella & Parmesan' },
    ],
  },
  {
    title: 'Grilled Chicken',
    items: [
      { name: 'Quarter Chicken', priceUsd: 4 },
      { name: 'Half Chicken', priceUsd: 8 },
      { name: 'Whole Chicken', priceUsd: 15 },
      { name: 'Chicken Bites', priceUsd: 4, description: 'Fried or Grilled' },
      { name: 'Sticky BBQ Wings', priceUsd: 4 },
      { name: 'Tandoori Wings', priceUsd: 4 },
    ],
  },
  {
    title: 'Meal Deals',
    items: [
      { name: 'Quarter Chicken Meal Deal', priceUsd: 5, description: 'Quarter Chicken & Chips' },
      { name: 'Chicken Burger Meal Deal', priceUsd: 5, description: 'Chicken Burger & Small Chips' },
      { name: 'Chicken Wings Meal Deal', priceUsd: 5, description: 'Chicken Wings & Chips' },
      { name: 'Chicken Wrapper Meal Deal', priceUsd: 5, description: 'Chicken Wrapper & Small Chips' },
      { name: 'Chicken Bites Meal Deal', priceUsd: 5.5, description: 'Chicken Bites & Small Chips' },
      { name: 'Half Chicken Meal Deal', priceUsd: 10, description: 'Half Chicken, Reg Chips & Reg Coleslaw' },
      { name: 'Full Chicken Meal Deal', priceUsd: 20, description: 'Whole Chicken, Large Chips & Large Coleslaw Salad' },
    ],
  },
  {
    title: 'Burgers',
    items: [
      { name: 'Grilled Chicken Burger', priceUsd: 4, description: 'Grilled Chicken Breast, Lettuce, Tomato, Mayonnaise on a freshly Baked Portuguese Roll' },
      { name: 'Double Chicken Burger', priceUsd: 5, description: '2x Grilled Chicken Breast, Lettuce, Tomato, Mayonnaise on a freshly Baked Portuguese Roll' },
      { name: 'Chicken Cheese Burger', priceUsd: 5, description: 'Grilled Chicken Breast, Cheddar Cheese, Lettuce, Tomato, Mayonnaise on a freshly Baked Portuguese Roll' },
      { name: 'Hawaiian Burger', priceUsd: 5, description: 'Grilled Chicken Breast, Pineapple, Lettuce, Tomato, Mayonnaise on a freshly Baked Portuguese Roll' },
    ],
  },
  {
    title: 'Combos',
    items: [
      { name: 'Snap Chicken Combo', priceUsd: 6, description: 'Quarter Chicken, Small Chips & 500ml Pepsi' },
      { name: 'Chicken Burger Combo', priceUsd: 6, description: 'Chicken Burger, Small Chips & 500ml Pepsi' },
      { name: 'Half Chicken Combo', priceUsd: 11, description: 'Half Chicken, Medium Chips & 500ml Pepsi' },
      { name: 'Whole Chicken Combo', priceUsd: 22, description: 'Whole Chicken, Large Chips, 3 Hot Rolls & 1 Litre Pepsi' },
    ],
  },
  {
    title: 'Wrappers',
    items: [
      { name: 'Peri Peri Wrapper', priceUsd: 4, description: 'Peri-Peri Chicken, Cucumber with a splash of Diced Tomato' },
      { name: 'Portuguese Wrapper', priceUsd: 4, description: 'Marinated Chicken Strips, Spring Onion & Cucumber, with a Splash of Pogo Dressing' },
      { name: 'Sweet Chilli Wrapper', priceUsd: 4, description: 'Deep Fried Chicken Strips with a Splash of Sweet Chilli Sauce' },
      { name: 'Tandoori Wrapper', priceUsd: 4, description: 'Spicy Tandoori Chicken Strips with a Splash of Pogo\'s Dressing' },
      { name: 'Roast Veg Wrapper', priceUsd: 4, description: 'Roasted Veg Mix' },
      { name: 'Hawaiian Wrapper', priceUsd: 4, description: 'Grilled Chicken Strips, Pineapple Chunks' },
    ],
  },
  {
    title: 'Extras',
    items: [
      { name: 'Small Chips', priceUsd: 1.5 },
      { name: 'Med Chips', priceUsd: 3 },
      { name: 'Large Chips', priceUsd: 5 },
    ],
  },
  {
    title: 'Bowls',
    items: [
      { name: 'Rice Bowl', priceUsd: 6 },
      { name: 'Greek Bowl', priceUsd: 6 },
      { name: 'Cauliflower Rice Bowl', priceUsd: 6 },
    ],
  },
  {
    title: 'Salads',
    items: [
      { name: 'Portuguese Salad', priceUsd: 3 },
      { name: 'Greek Salad', priceUsd: 4 },
      { name: 'Grilled Chicken Salad', priceUsd: 5 },
      { name: 'Bean Salad', priceUsd: 3 },
      { name: 'Regular Coleslaw Salad', priceUsd: 2 },
      { name: 'Large Coleslaw Salad', priceUsd: 3 },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Hot Fudged Brownie', priceUsd: 4 },
      { name: 'Rich Chocolate Cake Slice', priceUsd: 4 },
      { name: 'Red Velvet Cake Slice', priceUsd: 4 },
      { name: 'Carrot Cake Slice', priceUsd: 4 },
      { name: 'Malva Pudding', priceUsd: 4 },
    ],
  },
];

const allCategoryNames = ['All', ...menuCategories.map((c) => c.title)];

const handleOrder = (dishName: string, priceUsd: number) => {
  const { usd, ngn } = formatPrice(priceUsd);
  const message = `Hello! I would like to order *${dishName}* (${usd} / ${ngn}) from Lavore Restaurant.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
};

const Cuisine = () => {
  const [active, setActive] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    const byCategory = active === 'All' ? menuCategories : menuCategories.filter((c) => c.title === active);

    if (!searchQuery.trim()) return byCategory;

    const query = searchQuery.toLowerCase();
    return byCategory
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (dish) =>
            dish.name.toLowerCase().includes(query) ||
            (dish.description && dish.description.toLowerCase().includes(query))
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [active, searchQuery]);

  const totalResults = filteredCategories.reduce((sum, cat) => sum + cat.items.length, 0);

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

      {/* Search Bar */}
      <section className="px-6 mb-8 max-w-xl mx-auto">
        <ScrollReveal delay={300}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card/60 backdrop-blur-sm border border-border/40 rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors duration-300 tracking-wider text-sm"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            />
          </div>
          {searchQuery.trim() && (
            <p className="text-muted-foreground text-xs mt-2 text-center tracking-wider">
              {totalResults} {totalResults === 1 ? 'dish' : 'dishes'} found
            </p>
          )}
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
        {filteredCategories.length === 0 && (
          <p className="text-center text-muted-foreground text-lg py-16 tracking-wider">
            No dishes found matching "{searchQuery}"
          </p>
        )}
        {filteredCategories.map((category) => (
          <div key={category.title} className="mb-16">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl tracking-[0.15em] font-light text-foreground mb-8 text-center">
                {category.title}
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((dish, i) => {
                const { usd, ngn } = formatPrice(dish.priceUsd);
                return (
                  <ScrollReveal key={dish.name} delay={i * 80}>
                    <div className="group border border-border/40 rounded-sm p-5 hover:border-primary/40 transition-all duration-500 bg-card/50 backdrop-blur-sm flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="text-base tracking-wider text-foreground font-medium">{dish.name}</h3>
                          <div className="text-right whitespace-nowrap">
                            <span className="text-primary text-base font-semibold block">{usd}</span>
                            <span className="text-muted-foreground text-xs">{ngn}</span>
                          </div>
                        </div>
                        {dish.description && (
                          <p className="text-muted-foreground text-xs leading-relaxed mb-4">{dish.description}</p>
                        )}
                      </div>
                      <button
                        onClick={() => handleOrder(dish.name, dish.priceUsd)}
                        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 text-xs tracking-[0.15em] uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 w-fit mt-3"
                      >
                        <ShoppingBag size={14} />
                        Order Now
                      </button>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Cuisine;
