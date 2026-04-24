'use client';

import { useState, useEffect, useRef, useMemo } from 'react';

export default function Meet() {
  const stageRef = useRef(null);
  const capsuleRef = useRef(null);
  const [rotY, setRotY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!stageRef.current) return;
      const r = stageRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, 1 - (r.top + r.height * 0.5) / vh));
      setRotY(p * 60 - 30);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onMove = (e) => {
    if (!stageRef.current) return;
    const r = stageRef.current.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width - 0.5;
    const cy = (e.clientY - r.top) / r.height - 0.5;
    if (capsuleRef.current) {
      capsuleRef.current.style.setProperty('--rx', `${-cy * 12}deg`);
      capsuleRef.current.style.setProperty('--ry', `${cx * 12 + rotY}deg`);
    }
  };
  const onLeave = () => {
    if (capsuleRef.current) {
      capsuleRef.current.style.setProperty('--rx', `0deg`);
      capsuleRef.current.style.setProperty('--ry', `${rotY}deg`);
    }
  };
  useEffect(() => {
    if (capsuleRef.current) capsuleRef.current.style.setProperty('--ry', `${rotY}deg`);
  }, [rotY]);

  const pills = [
    'Clean Label Certified',
    'Root-Only',
    'USP Standardized',
    'GRAS Self-Affirmed',
    '100% Natural',
  ];

  const particles = useMemo(
    () =>
      Array.from({ length: 12 }).map(() => ({
        x: 10 + Math.random() * 80,
        y: 50 + Math.random() * 50,
        dx: (Math.random() - 0.5) * 40,
        dy: -80 - Math.random() * 80,
        delay: Math.random() * 9,
      })),
    []
  );

  const beads = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        x: 20 + (i * 11) % 60,
        y: 55 + (i * 7) % 40,
      })),
    []
  );

  return (
    <section className="section-pad" id="meet">
      <div className="container two-col">
        <div>
          <span className="eyebrow" style={{ color: 'var(--coffee-700)' }}>
            INTRODUCING
          </span>
          <h2 className="display-l" style={{ marginTop: 16, color: 'var(--coffee-900)' }}>
            Calm, by design.
          </h2>
          <p
            className="body-l"
            style={{ marginTop: 32, color: 'var(--coffee-700)', maxWidth: 480 }}
          >
            Ashwanova™ is a clinically-backed, root-only ashwagandha extract powered by Nutriventia{' '}
            <strong style={{ color: 'var(--saffron-600)', fontWeight: 600 }}>E.D.G.E.</strong> — our
            patented sustained-release platform. One small dose. Twenty-four hours of measurable
            calm. Zero compromises on purity.
          </p>
          <div className="pill-row">
            {pills.map((p) => (
              <span key={p} className="pill">
                <span className="dot"></span>
                {p}
              </span>
            ))}
          </div>
        </div>
        <div className="capsule-stage" ref={stageRef} onPointerMove={onMove} onPointerLeave={onLeave}>
          {particles.map((p, i) => (
            <span
              key={i}
              className="particle"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                '--dx': `${p.dx}px`,
                '--dy': `${p.dy}px`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
          <div className="capsule" ref={capsuleRef}>
            <div className="half top"></div>
            <div className="half bot">
              {beads.map((b, i) => (
                <span
                  key={i}
                  className="bead"
                  style={{
                    left: `${b.x}%`,
                    top: `${b.y}%`,
                    opacity: 0.7 + (i % 3) * 0.1,
                  }}
                />
              ))}
            </div>
            <div className="seam"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
