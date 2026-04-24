'use client';

import { useMemo } from 'react';

export default function EmberParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        dur: 10 + Math.random() * 8,
      })),
    []
  );
  return (
    <div className="ember-particles" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          style={{
            left: `${p.left}%`,
            bottom: 0,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
