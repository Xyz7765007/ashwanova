'use client';

import { useReveal, useCountUp } from './hooks';
import EmberParticles from './EmberParticles';

export default function ClinicalEvidence() {
  const [ref, shown] = useReveal(0.2);
  const studies = [
    {
      eyebrow: 'PHARMACOKINETIC STUDY',
      num: 11.7,
      decimals: 1,
      suffix: '×',
      label: 'higher bioavailability vs leading competitor extract',
      body: "Demonstrated 10× more circulating withanolides and a 3.1× longer half-life — the foundation of Ashwanova's 24-hour calm.",
      citation: 'Alluri et al., 2022. International Journal of Basic & Clinical Pharmacology.',
    },
    {
      eyebrow: 'STRESS, MEMORY & FOCUS',
      num: 9.3,
      decimals: 1,
      suffix: '×',
      label: 'reduction in perceived stress score',
      body: 'Also delivered a 1.7× reduction in serum cortisol and 3.5× improvement in sleep quality across the trial period.',
      citation: 'Gopukumar et al., 2021. Evidence-Based Complementary and Alternative Medicine.',
    },
    {
      eyebrow: 'MULTIDOSE STRESS STUDY',
      num: 12.7,
      decimals: 1,
      suffix: '×',
      label: 'reduction in stress-related eating behavior',
      body: 'After 45 days at 300mg: 3.2× reduction in perceived stress, 4.6× improvement in emotional wellbeing, 11.4× improvement in sleep quality.',
      citation: 'Thanawala et al., 2025.',
    },
  ];
  return (
    <section className="section-pad dark">
      <EmberParticles />
      <div className="container" ref={ref}>
        <div style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
          <span className="eyebrow">CLINICAL EVIDENCE</span>
          <h2
            className="display-l"
            style={{ marginTop: 20, color: 'var(--cream-50)', textWrap: 'balance' }}
          >
            Clinically proven. Repeatedly.
          </h2>
          <p
            className="body-l"
            style={{
              marginTop: 24,
              color: 'rgba(250,246,238,0.75)',
              maxWidth: 720,
              margin: '24px auto 0',
            }}
          >
            Two randomized, double-blind, placebo-controlled trials. One pharmacokinetic study. All
            independently published in peer-reviewed journals.
          </p>
        </div>

        <div className="study-grid">
          {studies.map((s, i) => (
            <StudyCard key={i} {...s} shown={shown} delay={i * 150} />
          ))}
        </div>

        <div className="meta-stats">
          {[
            { num: 27, lab: 'Countries' },
            { num: 36, lab: 'Patents Applied' },
            { num: 12, lab: 'Patents Granted' },
            { num: 22, lab: 'Clinical Studies' },
          ].map((m, i) => (
            <MetaStat key={i} {...m} shown={shown} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StudyCard({ eyebrow, num, decimals, suffix, label, body, citation, shown, delay }) {
  const val = useCountUp(num, shown, 1500);
  return (
    <div
      className={`study-card reveal ${shown ? 'in' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="eyebrow" style={{ color: 'var(--saffron-500)' }}>
        {eyebrow}
      </span>
      <div className="data-xl big-num">
        {val.toFixed(decimals)}
        <span>{suffix}</span>
      </div>
      <div className="label">{label}</div>
      <p className="body">{body}</p>
      <div className="citation">{citation}</div>
    </div>
  );
}

function MetaStat({ num, lab, shown, delay }) {
  const val = useCountUp(num, shown, 1200);
  return (
    <div
      className="meta-stat reveal"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(16px)',
        transitionDelay: `${delay + 600}ms`,
      }}
    >
      <div className="data-l num">{Math.round(val)}</div>
      <div className="eyebrow lab no-line">{lab}</div>
    </div>
  );
}
