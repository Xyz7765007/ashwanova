'use client';

import { useRef } from 'react';
import Icon from './Icon';

export default function Applications() {
  const formats = [
    {
      icon: <Icon.Pill />,
      title: 'Tablets',
      body: 'Sustained-release dosing in a familiar pharmaceutical form.',
    },
    {
      icon: <Icon.Bottle />,
      title: 'Capsules',
      body: 'Optimized for once-daily compliance.',
    },
    {
      icon: <Icon.Gummy />,
      title: 'Gummies',
      body: 'Taste-masked compatibility for chewable formats.',
    },
    {
      icon: <Icon.Can />,
      title: 'Ready-to-Drink',
      body: 'Stable, dispersible, neutral-tasting.',
    },
    {
      icon: <Icon.Stick />,
      title: 'Stick Packs',
      body: 'On-the-go convenience without flavor compromise.',
    },
  ];
  return (
    <section className="section-pad" id="applications">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--coffee-700)' }}>
            FORMATS
          </span>
          <h2 className="display-l" style={{ marginTop: 20, color: 'var(--coffee-900)' }}>
            Made for every modern format.
          </h2>
          <p
            className="body-l"
            style={{
              marginTop: 24,
              color: 'var(--coffee-700)',
              maxWidth: 640,
              margin: '24px auto 0',
            }}
          >
            Ashwanova&apos;s clean-label profile and engineered release platform make it a drop-in
            fit for the formats consumers actually want.
          </p>
        </div>
        <div className="apps-row">
          {formats.map((f, i) => (
            <AppCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppCard({ icon, title, body }) {
  const ref = useRef(null);
  const visualRef = useRef(null);
  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width - 0.5;
    const cy = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `rotateX(${-cy * 8}deg) rotateY(${cx * 8}deg)`;
    if (visualRef.current) {
      visualRef.current.style.transform = `translate3d(${-cx * 8}px, ${-cy * 8}px, 20px)`;
    }
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
    if (visualRef.current) visualRef.current.style.transform = '';
  };
  return (
    <div className="app-card" ref={ref} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="app-visual" ref={visualRef}>
        {icon}
      </div>
      <div>
        <h4 className="h4">{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
}
