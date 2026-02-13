import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/cuisine', label: 'Cuisine' },
  { to: '/locations', label: 'Locations' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

interface NavbarProps {
  visible?: boolean;
}

const Navbar = ({ visible = true }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 1s ease, transform 1s ease, background-color 0.7s ease, box-shadow 0.7s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="w-full px-6 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl lg:text-3xl tracking-[0.3em] font-semibold text-primary" style={{ fontFamily: 'Playfair Display, serif' }}>
              LAVORE
            </span>
          </Link>

          {/* Desktop Nav — pushed to far right */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className="group relative px-3 lg:px-5 py-2"
              >
                <span
                  className={`text-[11px] lg:text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                    location.pathname === link.to
                      ? 'text-primary'
                      : 'text-foreground/80 group-hover:text-primary'
                  }`}
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {link.label}
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-px bg-primary transition-all duration-500 ease-out ${
                    location.pathname === link.to
                      ? 'w-6'
                      : 'w-0 group-hover:w-6'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — fullscreen overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background transition-all duration-700 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: 0 }}
      >
        {/* Close button inside overlay */}
        <div className="flex justify-end px-6 pt-7">
          <button
            onClick={() => setIsOpen(false)}
            className="text-foreground/80 hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative py-3"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.5s ease ${i * 70 + 200}ms, transform 0.5s ease ${i * 70 + 200}ms`,
              }}
            >
              <span
                className={`text-lg font-semibold tracking-[0.3em] uppercase transition-colors duration-300 ${
                  location.pathname === link.to
                    ? 'text-primary'
                    : 'text-foreground/70 group-hover:text-primary'
                }`}
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {link.label}
              </span>
              <span
                className={`absolute -bottom-0 left-1/2 -translate-x-1/2 h-px bg-primary transition-all duration-500 ${
                  location.pathname === link.to ? 'w-8' : 'w-0 group-hover:w-8'
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
