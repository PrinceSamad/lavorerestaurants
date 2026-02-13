import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const BLUR_TARGET_ID = 'main-content-wrapper';

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

  // Blur the main content when menu is open
  useEffect(() => {
    const el = document.getElementById(BLUR_TARGET_ID);
    if (el) {
      if (isOpen) {
        el.style.filter = 'blur(8px) brightness(0.7)';
        el.style.pointerEvents = 'none';
      } else {
        el.style.filter = '';
        el.style.pointerEvents = '';
      }
    }
  }, [isOpen]);

  return (
    <>
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
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group relative px-3 xl:px-5 py-2"
              >
                <span
                  className={`text-[11px] xl:text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                    location.pathname === link.to
                      ? 'text-primary'
                      : 'text-foreground/80 group-hover:text-primary'
                  }`}
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {link.label}
                </span>
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

          {/* Hamburger Toggle — visible on tablet & mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors duration-300 z-[60]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

    </nav>

      {/* Fullscreen Overlay Menu — tablet & mobile (moved outside the transformed nav to allow full-viewport fixed positioning) */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'hsl(var(--background) / 0.98)' }}
      >
        {/* Close button — top right */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-7 right-6 text-foreground/60 hover:text-primary transition-colors duration-300"
          aria-label="Close menu"
        >
          <X size={28} strokeWidth={1.2} />
        </button>

        {/* Centered vertical nav */}
        <nav className="flex flex-col items-center gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative py-3 px-6"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.96)',
                transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 80 + 150}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 80 + 150}ms`,
              }}
            >
              <span
                className={`text-xl sm:text-2xl font-semibold tracking-[0.35em] uppercase transition-colors duration-500 ${
                  location.pathname === link.to
                    ? 'text-primary'
                    : 'text-foreground/50 group-hover:text-primary'
                }`}
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {link.label}
              </span>
              <span
                className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-px bg-primary transition-all duration-600 ease-out ${
                  location.pathname === link.to ? 'w-10' : 'w-0 group-hover:w-10'
                }`}
              />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
