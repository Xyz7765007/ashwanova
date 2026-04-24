'use client';

import { useState, useEffect, useRef } from 'react';
import Icon from './Icon';

export default function Hero() {
  const videoRef = useRef(null);
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);
  const coverRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (coverRef.current) coverRef.current.style.opacity = '0';
      setMounted(true);
    }, 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      const rect = wrapRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      if (wrapRef.current) {
        wrapRef.current.style.transform = `translate(${-cx * 12}px, ${-cy * 12}px) scale(1.03)`;
      }
      if (textRef.current) {
        textRef.current.style.transform = `translate(${cx * 4}px, ${cy * 4}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        glowRef.current.style.setProperty('--my', `${e.clientY - rect.top}px`);
      }
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, y / (vh * 0.9)));
      if (wrapRef.current) {
        wrapRef.current.style.opacity = String(1 - p * 0.6);
        wrapRef.current.style.filter = `blur(${p * 8}px)`;
      }
      if (textRef.current) {
        textRef.current.style.opacity = String(1 - p * 0.8);
        textRef.current.style.translate = `0 ${-p * 24}px`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-video-wrap" ref={wrapRef}>
        <video ref={videoRef} autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          <source src="/assets/hero-loop.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-cover" ref={coverRef}></div>
      <div className="hero-glow" ref={glowRef}></div>

      <div className="hero-content container">
        <div className="hero-text" ref={textRef}>
          <Scramble
            className={`eyebrow hero-eyebrow ${mounted ? 'in' : ''}`}
            text="ASHWANOVA™ — ROOT-ONLY ASHWAGANDHA"
            delay={400}
          />
          <h1
            className="display-xl"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(12px)',
              transition:
                'opacity 900ms var(--ease-out) 600ms, transform 900ms var(--ease-out) 600ms',
            }}
          >
            <ScrambleHeadline text="Root-only. Regulation-ready. Clinically proven." active={mounted} />
          </h1>
          <p
            className="body-l hero-sub"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(16px)',
              transition:
                'opacity 700ms var(--ease-out) 1200ms, transform 700ms var(--ease-out) 1200ms',
              maxWidth: 520,
              fontSize: '15px',
            }}
          >
            The only ashwagandha extract built for what the market now demands. USP-standardised
            root extract, sustained 24-hour release, clinical proof at 150mg — engineered for brand
            owners who can&apos;t afford regulatory risk.
          </p>
          <div
            className="hero-ctas"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(8px)',
              transition:
                'opacity 600ms var(--ease-out) 1500ms, transform 600ms var(--ease-out) 1500ms',
            }}
          >
            <a
              href="https://www.nutriventia.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Contact Us <Icon.ArrowRight className="arrow" />
            </a>
            <a href="#science" className="btn btn-ghost-dark btn-lg">
              <Icon.Play /> Watch the Science
            </a>
          </div>
          <a
            href="/formula-check.html"
            className="hero-compliance-link"
            style={{ opacity: mounted ? 1 : 0, transition: 'opacity 500ms var(--ease-out) 1800ms' }}
          >
            → Is your formula still compliant? Check in 60 seconds
          </a>
        </div>
      </div>

      <div
        className="hero-scroll"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 500ms var(--ease-out) 2000ms',
        }}
      >
        <span className="line"></span>
        <span
          className="eyebrow no-line"
          style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
}

function ScrambleHeadline({ text, active }) {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (!active) return;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const target = text;
    const startDelay = 600;
    let rafId;
    const t0 = performance.now();
    const tick = (now) => {
      const elapsed = now - t0;
      if (elapsed < startDelay) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(1, (elapsed - startDelay) / 1100);
      const revealUpTo = Math.floor(progress * target.length * 1.15);
      const out = target
        .split('')
        .map((ch, i) => {
          if (i < revealUpTo || ch === ' ' || ch === '.' || ch === '—') return ch;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      setDisplay(out);
      if (progress < 1) rafId = requestAnimationFrame(tick);
      else setDisplay(target);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [active, text]);
  return <span style={{ fontSize: '70px' }}>{display}</span>;
}

function Scramble({ text, className, delay = 0 }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShown(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <span
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 600ms var(--ease-out), transform 600ms var(--ease-out)',
        display: 'inline-flex',
      }}
    >
      {text}
    </span>
  );
}
