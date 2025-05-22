
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  targetValue: number;
  duration?: number; // in milliseconds
  className?: string;
  startOnVisible?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  targetValue, 
  duration = 2000, 
  className = '',
  startOnVisible = true 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!startOnVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current && startOnVisible) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [startOnVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * targetValue));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [targetValue, duration, isVisible]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
    </span>
  );
};

export default AnimatedCounter;
