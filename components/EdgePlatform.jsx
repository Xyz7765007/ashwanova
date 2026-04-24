'use client';

import { useState, useEffect, useRef } from 'react';
import { useReveal } from './hooks';
import Icon from './Icon';

export default function EdgePlatform() {
  const [ref, shown] = useReveal(0.2);
  const [cursorHour, setCursorHour] = useState(8);
  const [dragging, setDragging] = useState(false);
  const svgRef = useRef(null);

  const W = 1200,
    H = 360;
  const PAD_L = 60,
    PAD_R = 40,
    PAD_T = 30,
    PAD_B = 50;
  const plotW = W - PAD_L - PAD_R;
  const plotH = H - PAD_T - PAD_B;

  const xFor = (h) => PAD_L + (h / 24) * plotW;
  const yFor = (v) => PAD_T + plotH - (v / 100) * plotH;

  const standardAt = (h) => {
    if (h < 0.2) return 5 + h * 30;
    if (h < 1.2) return 11 + (h - 0.2) * 78;
    if (h < 4) return 89 - (h - 1.2) * 28;
    if (h < 8) return 11 - (h - 4) * 2;
    return Math.max(0, 3 - (h - 8) * 0.2);
  };
  const ashwanovaAt = (h) => {
    if (h < 2) return 10 + h * 32;
    if (h < 22) return 74 + Math.sin((h - 2) * 0.4) * 3;
    return 74 - (h - 22) * 22;
  };

  const standardPath = Array.from({ length: 121 }, (_, i) => {
    const h = (i / 120) * 24;
    return `${i === 0 ? 'M' : 'L'}${xFor(h).toFixed(1)} ${yFor(standardAt(h)).toFixed(1)}`;
  }).join(' ');

  const ashwanovaPath = Array.from({ length: 121 }, (_, i) => {
    const h = (i / 120) * 24;
    return `${i === 0 ? 'M' : 'L'}${xFor(h).toFixed(1)} ${yFor(ashwanovaAt(h)).toFixed(1)}`;
  }).join(' ');

  const ashwanovaAreaPath =
    ashwanovaPath +
    ` L${xFor(24).toFixed(1)} ${yFor(0).toFixed(1)} L${xFor(0).toFixed(1)} ${yFor(0).toFixed(1)} Z`;

  const onDrag = (e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const ratio = (x / rect.width) * W;
    const h = Math.max(0, Math.min(24, ((ratio - PAD_L) / plotW) * 24));
    setCursorHour(h);
  };

  useEffect(() => {
    const up = () => setDragging(false);
    window.addEventListener('pointerup', up);
    return () => window.removeEventListener('pointerup', up);
  }, []);

  const features = [
    {
      icon: <Icon.Clock />,
      title: 'Sustained release',
      body: 'Withanolides released in measured pulses across 24 hours — no peaks, no crashes.',
    },
    {
      icon: <Icon.Root />,
      title: 'Clean by formulation',
      body: 'No synthetic excipients. No taste maskers. Clean-label compatible globally.',
    },
    {
      icon: <Icon.Capsule />,
      title: 'One small dose',
      body: '150mg or 300mg. Once daily. Half the dose, more measurable benefit.',
    },
  ];

  return (
    <section className="section-pad" id="science">
      <div className="container" ref={ref}>
        <div style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--coffee-700)' }}>
            THE TECHNOLOGY
          </span>
          <h2
            className="display-l"
            style={{ marginTop: 20, color: 'var(--coffee-900)', textWrap: 'balance' }}
          >
            One dose. Twenty-four hours. Powered by E.D.G.E.
          </h2>
          <p
            className="body-l"
            style={{
              marginTop: 24,
              color: 'var(--coffee-700)',
              maxWidth: 720,
              margin: '24px auto 0',
            }}
          >
            At the heart of Ashwanova is Nutriventia E.D.G.E. — our patented microbead matrix that
            releases withanolides in measured bursts over 24 hours. Not all at once. Not in a
            spike-and-crash. Just sustained, clinically-validated calm.
          </p>
        </div>

        <div className="chart-wrap">
          <div className="chart-head">
            <div>
              <span className="eyebrow" style={{ color: 'var(--coffee-500)' }}>
                BIOACTIVE LEVELS — 24 HOURS
              </span>
              <div className="chart-legend" style={{ marginTop: 16 }}>
                <div className="legend-item">
                  <span className="legend-swatch a" /> Standard Ashwagandha
                </div>
                <div className="legend-item">
                  <span className="legend-swatch b" /> Ashwanova
                </div>
              </div>
            </div>
            <div className="chart-values">
              <div className="chart-value a">
                <span>Standard @ {cursorHour.toFixed(1)}h</span>
                <span className="num">{Math.round(standardAt(cursorHour))}</span>
              </div>
              <div className="chart-value b">
                <span>Ashwanova @ {cursorHour.toFixed(1)}h</span>
                <span className="num">{Math.round(ashwanovaAt(cursorHour))}</span>
              </div>
            </div>
          </div>

          <svg
            ref={svgRef}
            viewBox={`0 0 ${W} ${H}`}
            className="chart-svg"
            onPointerDown={(e) => {
              setDragging(true);
              onDrag(e);
            }}
            onPointerMove={(e) => dragging && onDrag(e)}
          >
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#E89B3C" stopOpacity="0.32" />
                <stop offset="1" stopColor="#E89B3C" stopOpacity="0" />
              </linearGradient>
              <filter id="saffronGlow">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>

            {[0, 25, 50, 75, 100].map((v) => (
              <g key={v}>
                <line
                  x1={PAD_L}
                  y1={yFor(v)}
                  x2={W - PAD_R}
                  y2={yFor(v)}
                  stroke="#EDE3D0"
                  strokeWidth="1"
                  strokeDasharray={v === 0 ? '0' : '3 4'}
                />
                <text x={PAD_L - 10} y={yFor(v) + 4} className="chart-axis-label" textAnchor="end">
                  {v}
                </text>
              </g>
            ))}
            {[0, 4, 8, 12, 16, 20, 24].map((h) => (
              <g key={h}>
                <text
                  x={xFor(h)}
                  y={H - PAD_B + 24}
                  className="chart-axis-label"
                  textAnchor="middle"
                >
                  {h}h
                </text>
              </g>
            ))}

            <path
              d={standardPath}
              fill="none"
              stroke="#6B4F2A"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeDasharray={shown ? '0' : '2000'}
              strokeDashoffset={shown ? '0' : '2000'}
              style={{ transition: 'stroke-dashoffset 1800ms var(--ease-out)' }}
            />
            <path
              d={ashwanovaAreaPath}
              fill="url(#areaFill)"
              opacity={shown ? 1 : 0}
              style={{ transition: 'opacity 1200ms var(--ease-out) 800ms' }}
            />
            <path
              d={ashwanovaPath}
              fill="none"
              stroke="#E89B3C"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeDasharray={shown ? '0' : '2000'}
              strokeDashoffset={shown ? '0' : '2000'}
              style={{ transition: 'stroke-dashoffset 1800ms var(--ease-out) 300ms' }}
            />

            <g style={{ opacity: shown ? 1 : 0, transition: 'opacity 400ms 2000ms' }}>
              <line
                x1={xFor(cursorHour)}
                y1={PAD_T}
                x2={xFor(cursorHour)}
                y2={H - PAD_B}
                stroke="#2D1F0F"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.35"
              />
              <circle cx={xFor(cursorHour)} cy={yFor(standardAt(cursorHour))} r="6" fill="#6B4F2A" />
              <circle cx={xFor(cursorHour)} cy={yFor(standardAt(cursorHour))} r="3" fill="#fff" />
              <circle
                cx={xFor(cursorHour)}
                cy={yFor(ashwanovaAt(cursorHour))}
                r="7"
                fill="#E89B3C"
                filter="url(#saffronGlow)"
              />
              <circle
                cx={xFor(cursorHour)}
                cy={yFor(ashwanovaAt(cursorHour))}
                r="5"
                fill="#E89B3C"
              />
              <circle cx={xFor(cursorHour)} cy={yFor(ashwanovaAt(cursorHour))} r="2" fill="#fff" />
              <g transform={`translate(${xFor(cursorHour)}, ${H - PAD_B + 2})`}>
                <rect x="-14" y="0" width="28" height="18" rx="9" fill="#2D1F0F" />
                <text
                  x="0"
                  y="12"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#FAF6EE"
                  fontFamily="var(--font-mono)"
                >
                  ⇔
                </text>
              </g>
            </g>
          </svg>
          <div
            style={{
              marginTop: 16,
              fontSize: 12,
              color: 'var(--coffee-500)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.04em',
              textAlign: 'center',
            }}
          >
            DRAG THE CURSOR TO EXPLORE BIOACTIVE LEVELS ACROSS THE DAY
          </div>
        </div>

        <div className="feature-grid">
          {features.map((f, i) => (
            <div
              key={i}
              className={`feature-card reveal ${shown ? 'in' : ''}`}
              style={{ transitionDelay: `${i * 120 + 400}ms` }}
            >
              <div className="icon">{f.icon}</div>
              <h4 className="h4">{f.title}</h4>
              <p className="body-m" style={{ marginTop: 10 }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
