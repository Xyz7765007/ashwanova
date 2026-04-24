'use client';

import { useReveal } from './hooks';
import Icon from './Icon';

export default function Outcomes() {
  const [ref, shown] = useReveal(0.15);
  const benefits = [
    {
      icon: <Icon.Shield />,
      title: 'Stress Relief',
      body: 'Up to 41.6% reduction in PSS-10 perceived stress scores.',
    },
    {
      icon: <Icon.Smile />,
      title: 'Mood Elevation',
      body: 'Significant improvement in Oxford Happiness Questionnaire scores.',
    },
    {
      icon: <Icon.Moon />,
      title: 'Sleep Quality',
      body: 'PSQI scores improved into the normal range (<5).',
    },
    {
      icon: <Icon.Heart />,
      title: 'Emotional Resilience',
      body: 'Greater capacity to recover from daily stressors.',
    },
    {
      icon: <Icon.Brain />,
      title: 'Cognitive Clarity & Focus',
      body: 'Validated improvements via CANTAB memory and attention tests.',
    },
    {
      icon: <Icon.Plate />,
      title: 'Healthier Eating Behavior',
      body: 'Reduction in stress-driven eating, measured via Three Factor Eating Questionnaire.',
    },
  ];
  return (
    <section className="section-pad">
      <div className="container" ref={ref}>
        <div style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--coffee-700)' }}>
            THE OUTCOMES
          </span>
          <h2 className="display-l" style={{ marginTop: 20, color: 'var(--coffee-900)' }}>
            One dose. Six outcomes.
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
            Clinically substantiated benefits — measured across multiple validated assessment tools.
          </p>
        </div>
        <div className="benefit-grid">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`benefit-card reveal ${shown ? 'in' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="icon">{b.icon}</div>
              <h3 className="h3">{b.title}</h3>
              <p>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
