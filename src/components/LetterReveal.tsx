import { useScrollReveal } from '@/hooks/useScrollReveal';

interface LetterRevealProps {
  text: string;
  className?: string;
  letterDelay?: number;
}

const LetterReveal = ({ text, className = '', letterDelay = 80 }: LetterRevealProps) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: `opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * letterDelay}ms, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * letterDelay}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default LetterReveal;
