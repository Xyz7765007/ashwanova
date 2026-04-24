'use client';

import { useReveal, useCountUp } from './hooks';

export default function Problem() {
  const [ref, shown] = useReveal(0.3);
  const stats = [
    {
      num: 74,
      suffix: '%',
      label: 'of adults report feeling overwhelmed by stress',
      cap: 'Source: 2024 APA Stress in America Report',
    },
    {
      num: 46,
      suffix: '%',
      label: 'turn to overeating or poor eating habits as a coping mechanism',
      cap: 'Source: 2024 APA Stress in America Report',
    },
    {
      num: 600,
      suffix: 'mg',
      label: 'the standard daily dose of legacy ashwagandha extracts — yet stress and sleep complaints persist',
      cap: 'Industry benchmark dose',
    },
  ];
  return (
    <section className="section-pad" id="problem">
      <div className="container" ref={ref}>
        <div style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--coffee-700)' }}>
            THE CHALLENGE
          </span>
          <h2
            className="h1"
            style={{ marginTop: 20, color: 'var(--coffee-900)', textWrap: 'balance' }}
          >
            Most ashwagandha doesn&apos;t go the distance.
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
            Modern stress is constant. So why are most adaptogens dosed for a moment?
          </p>
        </div>
        <div className="stat-grid">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} shown={shown} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ num, suffix, label, cap, shown, delay }) {
  const val = useCountUp(num, shown, 1400);
  const display = num >= 100 ? Math.round(val) : val.toFixed(0);
  return (
    <div
      className={`card stat-card reveal ${shown ? 'in' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="accent-line"></div>
      <div className="data-xl stat-number">
        <span>{display}</span>
        <span className="sym">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-caption">{cap}</div>
    </div>
  );
}
