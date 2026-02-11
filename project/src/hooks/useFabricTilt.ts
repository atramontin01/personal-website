import { useRef, useState, useCallback } from 'react';

interface TiltStyle {
  transform: string;
  transition: string;
}

export function useFabricTilt(maxTilt = 8) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<TiltStyle>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    transition: 'transform 0.6s ease-out'
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (0.5 - y) * maxTilt;
    const rotateY = (x - 0.5) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out'
    });
  }, [maxTilt]);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.6s ease-out'
    });
  }, []);

  return { containerRef, handleMouseMove, handleMouseLeave, style };
}
