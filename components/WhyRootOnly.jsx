'use client';

import { useReveal } from './hooks';
import Icon from './Icon';
import EmberParticles from './EmberParticles';

export default function WhyRootOnly() {
  const [ref, shown] = useReveal(0.25);
  const leftRows = [
    'Higher withaferin-A content from leaves — flagged in some EU markets',
    'Inconsistent withanolide profile across batches',
    'Regulatory ambiguity in Denmark, Norway, and select markets',
    'Mixed clinical literature on long-term safety at high doses',
  ];
  const rightRows = [
    'Standardized to ≥4% USP withanolides — root only',
    'Consistent batch-to-batch verified by LC-MS/MS',
    'GRAS self-affirmed in the U.S., aligned with FDA & EFSA',
    'Two RCTs + pharmacokinetic study published in peer-reviewed journals',
  ];
  return (
    <section className="section-pad-lg dark" id="why">
      <EmberParticles />
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 960, margin: '0 auto' }}>
          <span className="eyebrow">THE WEDGE</span>
          <h2 className="display-l" style={{ marginTop: 20, color: 'var(--cream-50)' }}>
            Why we use only the root.
          </h2>
          <p
            className="body-l"
            style={{
              marginTop: 24,
              color: 'rgba(250,246,238,0.75)',
              maxWidth: 720,
              margin: '24px auto 0',
              textWrap: 'balance',
            }}
          >
            The root holds the medicinal payload. The leaves carry the regulatory liability. We
            don&apos;t compromise the difference.
          </p>
        </div>

        <div className={`compare-grid ${shown ? 'in' : ''}`} ref={ref}>
          <div className="compare-card left">
            <span className="eyebrow" style={{ color: 'var(--coffee-500)' }}>
              INDUSTRY STANDARD
            </span>
            <h3 className="h2" style={{ marginTop: 14, color: 'var(--cream-50)' }}>
              Root + Leaf Extracts
            </h3>
            <div className="compare-list">
              {leftRows.map((t, i) => (
                <div
                  key={i}
                  className="compare-row"
                  style={{ transitionDelay: `${600 + i * 100}ms` }}
                >
                  <span className="compare-indicator warn">
                    <Icon.Warn />
                  </span>
                  <span className="compare-text">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="compare-divider"></div>
          <div className="compare-card right">
            <span className="eyebrow" style={{ color: 'var(--saffron-500)' }}>
              ASHWANOVA STANDARD
            </span>
            <h3 className="h2" style={{ marginTop: 14, color: 'var(--cream-50)' }}>
              Root Only. Period.
            </h3>
            <div className="compare-list">
              {rightRows.map((t, i) => (
                <div
                  key={i}
                  className="compare-row"
                  style={{ transitionDelay: `${800 + i * 100}ms` }}
                >
                  <span className="compare-indicator check">
                    <Icon.Check />
                  </span>
                  <span className="compare-text">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pullquote">
          &quot;Safety must be guided by science — not by including parts of the plant that
          complicate the answer.&quot;
          <span className="attrib">— The Ashwanova Position</span>
        </div>
      </div>
    </section>
  );
}
