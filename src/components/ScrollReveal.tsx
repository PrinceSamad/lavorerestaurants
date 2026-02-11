import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'up' | 'scale';
}

const ScrollReveal = ({ children, className, delay = 0, animation = 'up' }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateY(0) scale(1)'
          : animation === 'up'
          ? 'translateY(60px)'
          : 'scale(0.9)',
        transition: `opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
