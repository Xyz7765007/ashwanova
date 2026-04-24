'use client';

import Icon from './Icon';
import { useReveal } from './hooks';

export default function RegulatoryMoment() {
  const [ref, shown] = useReveal(0.2);

  const milestones = [
    {
      date: 'SINCE DAY ONE',
      title: 'Ashwanova launched root-only',
      body: 'Built on the classical Ayurvedic definition: root is where safety and efficacy live.',
    },
    {
      date: 'MINISTRY OF AYUSH ADVISORY',
      title: 'Leaf-based ashwagandha restricted',
      body: 'Ref L-11011/9/2021-DCC. Only root-based formulations permitted in ASU drugs and food supplements.',
    },
    {
      date: 'TODAY',
      title: 'Brand owners reformulate',
      body: 'Leaf-containing formulations must switch to root-only ingredients to remain compliant.',
    },
  ];

  return (
    <section className="section-pad reg-moment" id="regulatory">
      <div className="container reg-moment-grid" ref={ref}>
        <div className="reg-moment-left">
          <span className="eyebrow" style={{ color: 'var(--saffron-600)' }}>
            THE REGULATORY MOMENT
          </span>
          <h2
            className="h1"
            style={{
              marginTop: 20,
              color: 'var(--coffee-900)',
              maxWidth: 480,
              textWrap: 'balance',
            }}
          >
            The Ministry drew the line. We&apos;ve been standing there all along.
          </h2>
          <p
            className="body-m"
            style={{ marginTop: 32, color: 'var(--coffee-700)', maxWidth: 560 }}
          >
            India&apos;s Ministry of AYUSH has issued an advisory restricting the use of{' '}
            <em>Withania somnifera</em> leaves — in crude form, as extract, or in any other form —
            across ASU drugs and food supplements marketed in the name of ASU drugs. The ruling
            cites the Ayurvedic Pharmacopoeia of India, which defines Ashwagandha as the root alone,
            and the absence of leaves in classical ASU texts. The advisory was formally copied to
            the CEO of FSSAI.
          </p>
          <p className="body-m reg-moment-emphasis" style={{ marginTop: 24, maxWidth: 560 }}>
            Ashwanova has been root-only from day one. Not as a reaction. As a founding principle.
          </p>
          <p
            className="body-s"
            style={{ marginTop: 24, color: 'var(--coffee-500)', maxWidth: 560 }}
          >
            For brand owners using leaf-containing extracts, reformulation is now a compliance
            requirement — not a preference. We&apos;re ready to help.
          </p>

          <div style={{ marginTop: 40 }}>
            <a href="/formula-check.html" className="btn btn-primary btn-lg">
              Check your formula in 60 seconds <Icon.ArrowRight className="arrow" />
            </a>
          </div>

          <a
            href="/docs/ayush-ashwagandha-advisory-2021.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="reg-citation"
          >
            <svg
              width="12"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
            Source: Ministry of AYUSH Advisory L-11011/9/2021-DCC (PDF)
          </a>
        </div>

        <div className={`reg-moment-right ${shown ? 'in' : ''}`}>
          <div className="timeline">
            <div className="timeline-line" aria-hidden="true"></div>
            {milestones.map((m, i) => (
              <div
                key={i}
                className="timeline-item"
                style={{ transitionDelay: `${1000 + i * 150}ms` }}
              >
                <span className="timeline-marker" aria-hidden="true"></span>
                <div className="timeline-content">
                  <div className="timeline-date eyebrow no-line">{m.date}</div>
                  <h4 className="h4 timeline-title">{m.title}</h4>
                  <p className="body-s timeline-body">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
