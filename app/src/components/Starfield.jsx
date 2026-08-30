import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Deterministic random
    let seed = 12345;
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    let stars = [];
    const numStars = 1000;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const initStars = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      stars = [];
      seed = 12345; // Reset seed to keep positions consistent on resize
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: random() * w,
          y: random() * h,
          size: random() * 1.5 + 0.5,
          opacity: random(),
          speed: random() * 0.05 + 0.01,
        });
      }
    };

    initStars();

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      
      stars.forEach(star => {
        // Twinkle effect by subtly altering opacity using Math.sin and time
        const twinkle = Math.sin(Date.now() * 0.001 * star.speed * 10) * 0.3;
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity + twinkle})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Very slow drift
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = h;
          star.x = random() * w;
        }
      });
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener('resize', initStars);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', initStars);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default Starfield;
