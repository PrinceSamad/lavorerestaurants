import { useState, useEffect } from 'react';
import restaurantInterior from '@/assets/restaurant-interior.jpg';

interface CinematicIntroProps {
  onComplete: () => void;
}

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [phase, setPhase] = useState(0);
  // 0: white screen, 1: image revealing, 2: logo, 3: tagline, 4: fading out

  useEffect(() => {
    // Check sessionStorage to only play once per session
    const hasPlayed = sessionStorage.getItem('lavore-intro-played');
    if (hasPlayed) {
      onComplete();
      return;
    }

    const timers = [
      setTimeout(() => setPhase(1), 200),     // Start image reveal at 0.2s
      setTimeout(() => setPhase(2), 3500),     // Logo at 3.5s
      setTimeout(() => setPhase(3), 5500),     // Tagline at 5.5s
      setTimeout(() => setPhase(4), 7500),     // Start fade out at 7.5s
      setTimeout(() => {
        sessionStorage.setItem('lavore-intro-played', 'true');
        onComplete();
      }, 9000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // If already played, render nothing
  const hasPlayed = sessionStorage.getItem('lavore-intro-played');
  if (hasPlayed) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{
        opacity: phase === 4 ? 0 : 1,
        transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: phase === 4 ? 'none' : 'all',
      }}
    >
      {/* White overlay that fades to reveal image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#F8F6F2',
          opacity: phase >= 1 ? 0 : 1,
          transition: 'opacity 2s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 3,
        }}
      />

      {/* Background image with cinematic reveal */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <img
          src={restaurantInterior}
          alt=""
          className="w-full h-full object-cover"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            filter: phase >= 2 ? 'blur(0px) brightness(1.05)' : 'blur(12px) brightness(1.2)',
            transform: phase >= 2 ? 'scale(1)' : 'scale(1.06)',
            transition: 'all 3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        {/* Soft ivory overlay for bright luxury feel */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(248,246,242,0.4), rgba(248,246,242,0.2), rgba(248,246,242,0.5))',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-5%`,
              backgroundColor: `hsla(40, 45%, 55%, ${0.15 + Math.random() * 0.2})`,
              animation: phase >= 1 ? `particle-float ${8 + Math.random() * 12}s linear ${i * 0.8}s infinite` : 'none',
            }}
          />
        ))}
      </div>

      {/* Logo + Tagline */}
      <div className="relative z-10 text-center" style={{ zIndex: 4 }}>
        {/* Logo */}
        <h1
          className="tracking-[0.35em] font-semibold mb-4"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: '#2C2A28',
            opacity: phase >= 2 ? 1 : 0,
            filter: phase >= 2 ? 'blur(0px)' : 'blur(8px)',
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          L A V O R E
        </h1>

        {/* Tagline */}
        <p
          className="tracking-[0.25em] uppercase"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(0.85rem, 2vw, 1.2rem)',
            color: 'hsl(40, 45%, 55%)',
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          Home of Delicious Delicacies
        </p>
      </div>
    </div>
  );
};

export default CinematicIntro;
