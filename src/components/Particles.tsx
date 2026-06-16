import { useEffect, useRef } from 'react';

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = [
      'rgba(0, 125, 135, ',  // Teal
      'rgba(163, 214, 53, ',  // Lime
      'rgba(0, 80, 96, ',    // Dark Teal
    ];

    // Create particles based on screen width
    const particleCount = Math.min(60, Math.floor(width / 30));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        width = canvas.width = newWidth;
        height = canvas.height = newHeight;
      }
    });

    const parent = canvas.parentElement;
    if (parent) {
      resizeObserver.observe(parent);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Loop particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce/Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic spot gradient glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-nexora-teal/15 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-nexora-lime/10 rounded-full blur-[140px] mix-blend-screen animate-pulse" />
      <div className="absolute top-[50%] left-[40%] w-[400px] h-[400px] bg-nexora-dark/20 rounded-full blur-[100px] mix-blend-screen animate-float" />

      {/* Cyber Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
