'use client';

import Icon from './Icon';
import EmberParticles from './EmberParticles';

export default function FinalCTA() {
  return (
    <section className="section-pad-lg final-cta" id="cta">
      <EmberParticles />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <span className="eyebrow">LET&apos;S BUILD</span>
        <h2 className="display-l" style={{ marginTop: 20 }}>
          Let&apos;s launch your next hero product.
        </h2>
        <p className="body-l sub">
          From compliance check to commercial launch — we partner with brand owners reformulating
          for the root-only era.
        </p>
        <div
          style={{
            marginTop: 48,
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://www.nutriventia.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-white btn-lg"
          >
            Contact Us <Icon.ArrowRight className="arrow" />
          </a>
        </div>
        <a href="/formula-check.html" className="final-cta-link">
          → Not sure if your current formula is compliant? Check in 60 seconds
        </a>
      </div>
    </section>
  );
}
