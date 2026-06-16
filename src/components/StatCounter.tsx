import { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  key?: string | number;
}

export default function StatCounter({ value, suffix, label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 1500; // 1.5s animation
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, value]);

  return (
    <div
      ref={elementRef}
      id={`stat-card-${label.toLowerCase().replace(/\s+/g, '-')}`}
      className="glass-panel glass-panel-hover p-6 rounded-2xl text-center relative overflow-hidden transition-all"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-nexora-teal to-nexora-lime opacity-80" />
      <h3 className="text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mb-2 flex items-center justify-center">
        <span className="bg-gradient-to-r from-nexora-teal to-nexora-lime bg-clip-text text-transparent">
          {count}
        </span>
        <span className="text-nexora-lime ml-1 select-none">{suffix}</span>
      </h3>
      <p className="text-sm uppercase tracking-widest text-slate-400 font-mono">
        {label}
      </p>
    </div>
  );
}
