'use client';

import { useState } from 'react';

export default function Trust() {
  const certs = [
    'USP Standardized',
    'GRAS Self-Affirmed',
    'FDA-Aligned',
    'EFSA-Compatible',
    'Vegan-Friendly',
    'Clean Label Certified',
  ];
  const markers = [
    { name: 'UK', x: 470, y: 140, status: 'granted', detail: 'Ashwanova patent' },
    { name: 'South Korea', x: 800, y: 200, status: 'pending', detail: 'KFDA submission in progress' },
    { name: 'Japan', x: 830, y: 195, status: 'granted', detail: 'TurmXTRA family' },
    { name: 'USA', x: 220, y: 200, status: 'granted', detail: 'Multiple trademarks & patents' },
    { name: 'Canada', x: 225, y: 135, status: 'pending', detail: 'NPN submission in progress' },
    { name: 'India', x: 720, y: 240, status: 'granted', detail: 'Origin & manufacturing' },
    { name: 'EU', x: 500, y: 165, status: 'granted', detail: 'EFSA-compatible registration' },
  ];
  const partners = [
    'VITA LABS', 'NORDIC BOTANICA', 'SEABRIGHT PHARMA', 'KINDRED CO.', 'RELM NUTRITION',
    'BLUEFINCH', 'HAMMONDS & SOUL', 'TERRAFORM', 'NORTHRIDGE', 'ROOT STUDIO',
  ];

  return (
    <section className="section-pad trust-wrap">
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--coffee-700)' }}>TRUSTED GLOBALLY</span>
          <h2
            className="display-l"
            style={{ marginTop: 20, color: 'var(--coffee-900)', textWrap: 'balance' }}
          >
            Validated by science. Backed by IP.
          </h2>
          <p
            className="body-l"
            style={{ marginTop: 24, color: 'var(--coffee-700)', maxWidth: 640, margin: '24px auto 0' }}
          >
            Patented in key markets. Standardized to USP. GRAS self-affirmed. Vegan-friendly.
            Pharma-grade from raw material to final dose.
          </p>
        </div>

        <div className="certs-row">
          {certs.map((c) => (
            <span key={c} className="cert">
              <svg className="cert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {c}
            </span>
          ))}
        </div>

        <div className="map-wrap">
          <WorldMap markers={markers} />
          <div className="map-caption">
            GLOBAL IP FOOTPRINT — 12 PATENTS GRANTED, 24 PENDING ACROSS 27 MARKETS
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="marquee-item">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorldMap({ markers }) {
  const [hover, setHover] = useState(null);
  return (
    <svg className="map-svg" viewBox="0 0 1000 500" style={{ overflow: 'visible' }}>
      <g fill="#EDE3D0" stroke="none">
        <path d="M120 120 Q180 80 260 100 Q320 120 300 200 Q290 260 220 270 Q160 260 130 220 Q100 170 120 120Z" />
        <path d="M260 290 Q300 280 310 340 Q300 410 270 430 Q240 410 250 350 Q250 310 260 290Z" />
        <path d="M450 120 Q510 110 530 150 Q520 190 480 200 Q440 190 440 160 Q440 135 450 120Z" />
        <path d="M470 220 Q520 210 540 270 Q540 350 500 380 Q460 370 450 320 Q450 260 470 220Z" />
        <path d="M560 120 Q700 100 820 140 Q870 180 850 230 Q780 260 680 250 Q600 240 560 200 Q540 160 560 120Z" />
        <path d="M790 330 Q850 325 870 360 Q860 395 820 400 Q780 395 780 365 Q780 345 790 330Z" />
        <path d="M700 220 Q730 215 740 255 Q720 285 700 280 Q685 260 690 235 Q695 225 700 220Z" />
      </g>

      <g fill="#E89B3C" opacity="0.12">
        {Array.from({ length: 140 }).map((_, i) => {
          const x = 80 + (i % 20) * 45;
          const y = 80 + Math.floor(i / 20) * 50;
          return <circle key={i} cx={x} cy={y} r="1" />;
        })}
      </g>

      {markers.map((m, i) => (
        <g
          key={m.name}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
          style={{ cursor: 'pointer' }}
        >
          <circle
            className="map-dot"
            cx={m.x}
            cy={m.y}
            r={m.status === 'granted' ? 10 : 8}
            fill={m.status === 'granted' ? 'rgba(232,155,60,0.25)' : 'rgba(212,160,76,0.2)'}
            style={{ animationDelay: `${i * 0.25}s`, transformOrigin: `${m.x}px ${m.y}px` }}
          />
          <circle
            cx={m.x}
            cy={m.y}
            r={m.status === 'granted' ? 5 : 4}
            fill={m.status === 'granted' ? '#E89B3C' : '#D4A04C'}
            stroke="#fff"
            strokeWidth="1.5"
          />
          {hover === i && (
            <g>
              <rect x={m.x - 70} y={m.y - 52} width="140" height="38" rx="8" fill="#2D1F0F" />
              <text x={m.x} y={m.y - 34} textAnchor="middle" fontSize="11" fill="#FAF6EE" fontFamily="var(--font-display)" fontWeight="600">
                {m.name} — {m.status === 'granted' ? 'GRANTED' : 'PENDING'}
              </text>
              <text x={m.x} y={m.y - 20} textAnchor="middle" fontSize="9" fill="rgba(250,246,238,0.7)" fontFamily="var(--font-mono)">
                {m.detail}
              </text>
            </g>
          )}
        </g>
      ))}

      <g transform="translate(40, 450)">
        <circle cx="6" cy="6" r="5" fill="#E89B3C" />
        <text x="18" y="10" fontSize="11" fill="#6B4F2A" fontFamily="var(--font-mono)" letterSpacing="0.08em">GRANTED</text>
        <circle cx="110" cy="6" r="4" fill="#D4A04C" />
        <text x="122" y="10" fontSize="11" fill="#6B4F2A" fontFamily="var(--font-mono)" letterSpacing="0.08em">PENDING</text>
      </g>
    </svg>
  );
}
