import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

type MenuItem = { name: string; price: string };
type MenuCategory = { title: string; items: MenuItem[] };

const foodMenu: MenuCategory[] = [
  {
    title: 'Breakfast',
    items: [
      { name: 'Boiled Yam + Fish Sauce', price: '₦4,200' },
      { name: 'Boiled Potatoes + Fish Sauce', price: '₦3,900' },
      { name: 'Boiled Plantain + Fish Sauce', price: '₦3,900' },
      { name: 'Boiled Yam + Egg Sauce', price: '₦3,200' },
      { name: 'Boiled Potatoes + Egg Sauce', price: '₦3,900' },
      { name: 'Boiled Plantain + Egg Sauce', price: '₦3,900' },
      { name: 'Noodles and Fried Egg', price: '₦2,500' },
      { name: 'Noodles', price: '₦1,700' },
      { name: 'Fried Plantain and Egg', price: '₦2,200' },
      { name: 'Coslow', price: '₦1,000' },
      { name: 'English Breakfast', price: '₦6,000' },
      { name: 'Coffee', price: '₦1,000' },
      { name: 'Fried Egg', price: '₦500' },
      { name: 'Boiled Egg', price: '₦500' },
      { name: 'Egg Sauce', price: '₦1,700' },
      { name: 'Fish Sauce', price: '₦2,700' },
    ],
  },
  {
    title: 'Specials',
    items: [
      { name: 'Nkwobi', price: '₦6,000' },
      { name: 'Isi Ewu', price: '₦6,500' },
      { name: 'Abacha (Full Titus Fish)', price: '₦5,000' },
      { name: 'Peppered Goatmeat', price: '₦3,500' },
      { name: 'Abacha (Half Titus Fish)', price: '₦3,500' },
      { name: 'Spaghetti Jollof', price: '₦2,500' },
      { name: 'Shawarma Without Sausage', price: '₦3,500' },
      { name: 'Chicken Shawarma', price: '₦3,500' },
      { name: 'Beef Shawarma', price: '₦3,500' },
      { name: 'Kunini Special Shawarma', price: '₦4,500' },
      { name: 'Kunini Jumbo Shawarma', price: '₦6,000' },
      { name: 'Peppered Chicken', price: '₦3,500' },
      { name: 'Peppered Croaker', price: '₦10,000' },
      { name: 'Spaghetti and Turkey', price: '₦8,500' },
      { name: 'Spaghetti Extravaganza', price: '₦7,000' },
      { name: 'Peppered Beef', price: '₦3,500' },
    ],
  },
  {
    title: 'Soups',
    items: [
      { name: 'Egusi Soup + Goat Meat', price: '₦5,000' },
      { name: 'Egusi Soup + Beef', price: '₦5,000' },
      { name: 'Egusi Soup + Half Titus Fish', price: '₦4,000' },
      { name: 'Egusi Soup + Croaker Fish', price: '₦9,000' },
      { name: 'White Soup + Goat Meat', price: '₦5,500' },
      { name: 'White Soup + Beef', price: '₦5,500' },
      { name: 'White Soup + Half Titus Fish', price: '₦4,000' },
      { name: 'White Soup + Croaker Fish', price: '₦9,000' },
      { name: 'White Soup', price: '₦2,500' },
      { name: 'Bitterleaf Soup + Goat Meat', price: '₦5,700' },
      { name: 'Bitterleaf Soup + Beef', price: '₦5,500' },
      { name: 'Bitterleaf Soup + Half Titus Fish', price: '₦4,500' },
      { name: 'Bitterleaf Soup + Croaker Fish', price: '₦9,000' },
      { name: 'Vegetable Soup + Goat Meat', price: '₦5,200' },
      { name: 'Vegetable Soup + Beef', price: '₦5,000' },
      { name: 'Vegetable Soup + Half Titus Fish', price: '₦4,000' },
      { name: 'Vegetable Soup + Croaker Fish', price: '₦9,000' },
      { name: 'Vegetable Soup', price: '₦2,000' },
      { name: 'Vegetable Okro + Goat Meat', price: '₦5,000' },
      { name: 'Vegetable Okro + Beef', price: '₦5,000' },
      { name: 'Vegetable Okro + Half Titus Fish', price: '₦4,000' },
      { name: 'Vegetable Okro + Croaker Fish', price: '₦9,000' },
      { name: 'Okro Soup', price: '₦2,000' },
      { name: 'Seafood Okro', price: '₦20,000' },
      { name: 'Fisherman Soup', price: '₦20,000' },
    ],
  },
  {
    title: 'Peppersoup',
    items: [
      { name: 'Catfish Peppersoup', price: '₦6,000' },
      { name: 'Croaker Peppersoup', price: '₦10,000' },
      { name: 'Goatmeat Peppersoup', price: '₦3,500' },
      { name: 'Chicken Peppersoup', price: '₦3,500' },
      { name: 'Beef Peppersoup', price: '₦3,500' },
      { name: 'Assorted Peppersoup', price: '₦3,500' },
    ],
  },
  {
    title: 'Rice Meals',
    items: [
      { name: 'Kunini Special Native Rice', price: '₦3,500' },
      { name: 'Fried Rice', price: '₦2,500' },
      { name: 'Special Spaghetti Jollof', price: '₦3,500' },
      { name: 'Jollof Rice', price: '₦2,500' },
      { name: 'Coconut Rice', price: '₦3,000' },
      { name: 'Shrimps Fried Rice', price: '₦5,000' },
      { name: 'Beef Fried Rice', price: '₦4,500' },
      { name: 'Chicken Fried Rice', price: '₦4,500' },
      { name: 'Kunini Combo Fried Rice', price: '₦4,500' },
      { name: 'Kunini Special Spaghetti', price: '₦3,500' },
      { name: 'Vegetable Rice', price: '₦2,500' },
    ],
  },
  {
    title: 'Grills',
    items: [
      { name: 'Grill Chicken', price: '₦4,000' },
      { name: 'Grill Catfish (Small)', price: '₦9,000' },
      { name: 'Grill Catfish (Medium)', price: '₦10,000' },
      { name: 'Grill Catfish (Large)', price: '₦12,000' },
      { name: 'Grill Catfish (XL)', price: '₦15,000' },
      { name: 'Grill Catfish (XXL)', price: '₦20,000' },
      { name: 'Grill Ram', price: '₦5,000' },
    ],
  },
  {
    title: 'Proteins',
    items: [
      { name: 'Goatmeat', price: '₦3,200' },
      { name: 'Croaker', price: '₦8,500' },
      { name: 'Titus (Full)', price: '₦4,000' },
      { name: 'Half Catfish', price: '₦6,000' },
      { name: 'Chicken', price: '₦3,000' },
      { name: 'Turkey Wings', price: '₦6,000' },
      { name: 'Beef', price: '₦2,500' },
      { name: 'Chicken Wings', price: '₦3,000' },
      { name: 'Titus (Half)', price: '₦2,000' },
    ],
  },
  {
    title: 'Sides',
    items: [
      { name: 'Sauce', price: '₦1,500' },
      { name: 'Fried Plantain', price: '₦1,500' },
      { name: 'Fried Yam', price: '₦1,500' },
      { name: 'Boiled Yam', price: '₦1,500' },
      { name: 'Potato Chips', price: '₦1,200' },
      { name: 'White Spaghetti', price: '₦1,200' },
      { name: 'White Rice', price: '₦1,200' },
      { name: 'Chips', price: '₦1,500' },
    ],
  },
  {
    title: 'Swallows',
    items: [
      { name: 'Semo', price: '₦1,200' },
      { name: 'Poundo', price: '₦1,200' },
      { name: 'Wheat', price: '₦1,200' },
      { name: 'Eba', price: '₦600' },
    ],
  },
  {
    title: 'Platters',
    items: [
      { name: 'Kunini Platter', price: '₦40,000' },
      { name: 'Medium Platter', price: '₦30,000' },
      { name: 'Mini Platter', price: '₦20,000' },
      { name: 'Small Chops Mini Platter', price: '₦20,000' },
    ],
  },
  {
    title: 'Food Extras',
    items: [
      { name: 'Take Out Plate (Big)', price: '₦500' },
      { name: 'Take Out Plate (Small)', price: '₦500' },
    ],
  },
];

const drinkMenu: MenuCategory[] = [
  {
    title: 'Beer',
    items: [
      { name: 'Heineken', price: '₦2,000' },
      { name: 'Trophy Beer', price: '₦1,500' },
      { name: 'Origin Beer', price: '₦1,700' },
      { name: 'Star Radler', price: '₦1,500' },
      { name: 'Life', price: '₦1,500' },
      { name: 'Small Smirnoff Ice', price: '₦1,500' },
      { name: 'Hero', price: '₦1,500' },
      { name: 'Desperado', price: '₦1,500' },
      { name: 'Smirnoff Big', price: '₦2,000' },
      { name: 'Medium Stout', price: '₦1,700' },
      { name: 'Double Black Bottle', price: '₦1,700' },
      { name: 'Budweiser', price: '₦2,000' },
      { name: 'Legend', price: '₦2,000' },
      { name: 'Tiger', price: '₦1,500' },
      { name: 'Double Black Can', price: '₦1,700' },
      { name: 'Big Stout', price: '₦2,000' },
      { name: 'Trophy Stout', price: '₦1,700' },
      { name: 'Gulder', price: '₦1,500' },
      { name: 'Black Goldberg', price: '₦1,500' },
      { name: 'Goldberg', price: '₦1,500' },
      { name: 'Castle Lite', price: '₦1,500' },
      { name: 'Extra Smooth', price: '₦1,700' },
      { name: 'Bullet', price: '₦3,000' },
    ],
  },
  {
    title: 'Soft Drinks',
    items: [
      { name: 'Malta Guinness', price: '₦1,000' },
      { name: 'Hollandia', price: '₦3,000' },
      { name: 'Water', price: '₦400' },
      { name: '5 Alive', price: '₦2,000' },
      { name: 'Chi Exotic', price: '₦3,000' },
      { name: 'Chi Active', price: '₦3,000' },
      { name: 'Fayrouz', price: '₦1,000' },
      { name: 'Amstel Malt', price: '₦1,000' },
      { name: 'Coke', price: '₦1,000' },
    ],
  },
  {
    title: 'Energy Drinks',
    items: [
      { name: 'Red Bull', price: '₦3,000' },
      { name: 'Predator', price: '₦1,000' },
      { name: 'Fearless', price: '₦1,000' },
      { name: 'Climax', price: '₦2,000' },
      { name: 'Monster', price: '₦3,000' },
      { name: 'Big Power Horse', price: '₦3,000' },
    ],
  },
  {
    title: 'Bitters & Gin',
    items: [
      { name: 'Big Origin Bitters', price: '₦10,000' },
      { name: 'Small Origin Plastic', price: '₦2,500' },
      { name: 'Gordon Small', price: '₦3,000' },
      { name: 'Big Gordon', price: '₦12,000' },
    ],
  },
  {
    title: 'Whisky',
    items: [
      { name: 'Black Label', price: '₦40,000' },
      { name: 'Red Label', price: '₦35,000' },
      { name: 'Jameson Green', price: '₦35,000' },
      { name: 'Jameson Black Barrel', price: '₦55,000' },
      { name: 'Glenfiddich 15 Years', price: '₦130,000' },
      { name: 'Glenfiddich 12 Years', price: '₦100,000' },
      { name: 'Old Smuggler', price: '₦40,000' },
      { name: 'Big Campari', price: '₦15,000' },
      { name: 'Medium Campari', price: '₦30,000' },
      { name: 'Small Campari', price: '₦10,000' },
      { name: 'Jack Daniels', price: '₦45,000' },
      { name: 'Andre Rose', price: '₦30,000' },
      { name: 'Small William Lawson', price: '₦10,000' },
      { name: 'Big William Lawson', price: '₦30,000' },
      { name: 'Martell VS', price: '₦120,000' },
    ],
  },
  {
    title: 'Vodka & Rum',
    items: [
      { name: 'Smirnoff Vodka (Big)', price: '₦12,000' },
      { name: 'Smirnoff Vodka (Small)', price: '₦3,000' },
      { name: 'Absolut Vodka', price: '₦35,000' },
      { name: 'Baileys Original', price: '₦30,000' },
    ],
  },
  {
    title: 'Wine (Alcoholic & Non-Alcoholic)',
    items: [
      { name: 'Four Cousins', price: '₦15,000' },
      { name: 'Carlo Rossi', price: '₦18,000' },
      { name: 'Drostdy Hof', price: '₦15,000' },
      { name: 'Satchet Leon Delson', price: '₦20,000' },
      { name: 'Leon Delsol', price: '₦15,000' },
      { name: '4th Street', price: '₦15,000' },
      { name: 'Castillo Grande', price: '₦15,000' },
    ],
  },
  {
    title: 'Brandy',
    items: [
      { name: 'Hennessy VS', price: '₦100,000' },
      { name: 'Hennessy VSOP', price: '₦150,000' },
    ],
  },
  {
    title: 'Shisha',
    items: [
      { name: 'Big Shisha', price: '₦10,000' },
      { name: 'Extra Coal', price: '₦2,000' },
      { name: 'Small Shisha', price: '₦5,000' },
    ],
  },
];

const tabs = [
  { id: 'food', label: 'Food Menu', data: foodMenu },
  { id: 'drinks', label: 'Drink Menu', data: drinkMenu },
] as const;

const CategorySection = ({ category, index }: { category: MenuCategory; index: number }) => {
  const [expanded, setExpanded] = useState(index < 3);

  return (
    <ScrollReveal delay={index * 80}>
      <div className="border-b border-border/40 last:border-b-0">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between py-6 group text-left"
        >
          <h3
            className="text-lg sm:text-xl tracking-[0.2em] uppercase text-primary group-hover:text-primary/80 transition-colors"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {category.title}
          </h3>
          <span className="text-muted-foreground text-sm tracking-wider">
            {expanded ? '−' : '+'}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            expanded ? 'max-h-[5000px] opacity-100 pb-8' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
            {category.items.map((item) => (
              <div key={item.name} className="flex items-baseline justify-between gap-3">
                <span className="text-foreground/80 text-base tracking-wide">{item.name}</span>
                <span className="flex-shrink-0 text-xs tracking-wider border-b border-dotted border-muted-foreground/30 flex-1 mx-2 min-w-[30px]" />
                <span className="text-primary text-sm tracking-wider flex-shrink-0">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState<'food' | 'drinks'>('food');
  const activeData = tabs.find((t) => t.id === activeTab)!;

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-24 text-center px-6">
        <ScrollReveal>
          <span className="text-xs tracking-[0.3em] uppercase text-primary/70 mb-4 block">Lavore Restaurant</span>
          <h1 className="text-4xl md:text-6xl tracking-[0.2em] font-light mb-6 text-foreground">Our Menu</h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Discover our carefully curated selection of authentic Nigerian cuisine and premium beverages.
          </p>
        </ScrollReveal>

        {/* Tab Switcher */}
        <ScrollReveal delay={350}>
          <div className="flex justify-center gap-8 mt-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'food' | 'drinks')}
                className={`text-sm sm:text-base tracking-[0.2em] uppercase pb-2 border-b-2 transition-all duration-500 ${
                  activeTab === tab.id
                    ? 'text-primary border-primary'
                    : 'text-muted-foreground border-transparent hover:text-primary/70'
                }`}
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Menu Content */}
      <section className="px-6 pb-32 max-w-4xl mx-auto">
        <div key={activeTab}>
          {activeData.data.map((category, i) => (
            <CategorySection key={category.title} category={category} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Menu;
