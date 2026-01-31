'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  hue: number;
  rotation: number;
  spin: number;
  velocity: { x: number; y: number };
}

const PARTICLE_COUNT = 72;

function createParticle(width: number, height: number): Particle {
  const angle = Math.random() * Math.PI * 2;
  const radius = 40 + Math.random() * Math.min(width, height) * 0.2;
  return {
    x: width / 2 + Math.cos(angle) * radius,
    y: height / 2 + Math.sin(angle) * radius,
    radius: 12 + Math.random() * 28,
    hue: 260 + Math.random() * 40,
    rotation: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.01,
    velocity: {
      x: (Math.random() - 0.5) * 0.6,
      y: (Math.random() - 0.5) * 0.6
    }
  };
}

export function GlyphCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrame: number;
    let particles: Particle[] = [];
    let hueShift = 0;

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * pixelRatio;
      canvas.height = rect.height * pixelRatio;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(pixelRatio, pixelRatio);
      particles = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(rect.width, rect.height)
      );
    };

    const drawParticle = (particle: Particle) => {
      context.save();
      context.translate(particle.x, particle.y);
      context.rotate(particle.rotation);

      const gradient = context.createRadialGradient(0, 0, 2, 0, 0, particle.radius);
      gradient.addColorStop(0, `hsla(${particle.hue + hueShift}, 85%, 65%, 0.95)`);
      gradient.addColorStop(0.8, `hsla(${particle.hue + hueShift + 40}, 70%, 40%, 0.42)`);
      gradient.addColorStop(1, 'rgba(5,5,5,0.04)');

      context.fillStyle = gradient;
      context.beginPath();
      context.moveTo(0, 0);
      for (let i = 0; i < 6; i++) {
        const theta = (Math.PI * 2 * i) / 6;
        context.lineTo(
          Math.cos(theta) * particle.radius,
          Math.sin(theta) * particle.radius
        );
      }
      context.closePath();
      context.fill();
      context.restore();
    };

    const tick = () => {
      const rect = canvas.getBoundingClientRect();
      context.clearRect(0, 0, rect.width, rect.height);

      hueShift = (hueShift + 0.3) % 360;

      particles.forEach((particle) => {
        drawParticle(particle);
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        particle.rotation += particle.spin;

        if (particle.x < 0 || particle.x > rect.width) particle.velocity.x *= -1;
        if (particle.y < 0 || particle.y > rect.height) particle.velocity.y *= -1;
      });

      animationFrame = requestAnimationFrame(tick);
    };

    resize();
    tick();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/5"
      role="img"
      aria-label="Generative glyph art inspired by the mantra Bbbbnj Bnnn."
    />
  );
}
