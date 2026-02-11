

# LAVORE RESTAURANT — Premium Luxury Website

## Overview
A cinematic, Michelin-star inspired restaurant website with elegant scroll animations, dark luxury theme with gold accents, and smooth page transitions — modeled after the refined motion design of Aoyama Florilège.

---

## Design System
- **Theme**: Dark background (#0a0a0a / #1a1a1a) with gold accents (#c9a96e / #d4af37)
- **Typography**: Elegant serif fonts (Playfair Display for headings, Cormorant Garamond for body)
- **Animations**: CSS-based scroll-triggered fade-ins, parallax effects, letter-by-letter text reveals, slow image zoom transitions using Intersection Observer API
- **Spacing**: Generous whitespace, minimal text, cinematic proportions

---

## Pages & Features

### 1. Home (Landing Page)
- Fullscreen hero with high-quality fine dining background image and dark overlay
- Animated letter-by-letter headline reveal: "LAVORE RESTAURANT"
- Tagline fade-in: "Home of Delicious Delicacies"
- Smooth scroll-down indicator (animated chevron)
- Scroll-triggered sections: philosophy teaser, cuisine preview, reservation CTA
- Each section fades in elegantly on scroll

### 2. About
- Elegant storytelling about the restaurant's vision and philosophy
- Owner section featuring Dr. Adam Muhammed Bedemasi with the uploaded portrait photo
- Animated portrait reveal (fade + subtle scale)
- Scroll-triggered text paragraphs with staggered fade-in

### 3. Our Cuisine
- Animated image grid showcasing signature dishes (using curated stock food imagery)
- Hover effects: slow zoom + gold overlay with dish name
- Menu categories (Starters, Mains, Desserts, Chef's Special)
- Signature dishes highlight section with elegant presentation

### 4. Locations
- Three elegant cards for Gwarimpa, Kubwa, and Apo
- Each card includes address details, phone, and a styled map placeholder
- Smooth scroll-triggered reveal animation per card
- Contact details for each location

### 5. Reservations
- Premium booking form with: date picker, time selector, guest count, name, phone, email, special requests
- Elegant animated input fields (label floats on focus)
- Form validation with refined error states
- Success animation on submission (checkmark with fade)

### 6. Gallery
- Masonry-style layout with fine dining and kitchen imagery
- Smooth fade-in on scroll for each image
- Subtle parallax scroll effect
- Lightbox view on click

### 7. Contact
- Contact form (name, email, message) — submissions sent via a simple email service integration
- Clickable phone link and email link
- Success confirmation with animation
- Floating WhatsApp button (bottom-right) linking to wa.me/2349074762834

---

## Global Elements

### Navigation
- Minimal fixed navbar with LAVORE logo (gold SVG text mark) and hamburger menu on mobile
- Smooth page transitions (fade out/in) on route change
- Scroll resets to top on navigation

### Footer
- Logo, navigation links, social media icons
- Contact info (phone, email, locations)
- Copyright with owner name
- Gold accent dividers

### Logo
- SVG text-based luxury logo: "LAVORE" in elegant serif with subtle decorative line elements
- Gold on dark background treatment
- Used in navbar and footer
- Simplified version as favicon

---

## Technical Approach
- All animations via CSS keyframes + Intersection Observer (no extra animation libraries needed)
- Responsive design for all screen sizes
- SEO-friendly meta tags and semantic HTML
- Contact form will use a simple frontend submission (can be connected to an email backend service later, or via Supabase edge function)
- High-quality Unsplash/stock images for food and ambiance
- CEO photo embedded from uploaded image

