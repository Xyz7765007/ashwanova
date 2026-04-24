'use client';

import Icon from './Icon';
import EmberParticles from './EmberParticles';

export default function FinalCTA() {
  return (
    <section className="section-pad-lg final-cta" id="cta">
      <EmberParticles />
      <div
        className="container"
        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        <span className="eyebrow">LET&apos;S BUILD</span>
        <h2 className="display-l" style={{ marginTop: 20 }}>
          Let&apos;s launch your next hero product.
        </h2>
        <p className="body-l sub">
          From clinical brief to commercial launch — our team partners with you from formulation to
          first shipment.
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
          <a href="#" className="btn btn-white btn-lg">
            Request a Sample <Icon.ArrowRight className="arrow" />
          </a>
          <a href="#" className="btn btn-ghost-dark btn-lg">
            Talk to a Scientist
          </a>
        </div>
      </div>
    </section>
  );
}
