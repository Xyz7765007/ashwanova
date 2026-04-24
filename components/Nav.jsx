'use client';

import { useState, useEffect } from 'react';
import Icon from './Icon';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
      const sections = ['why', 'science', 'applications', 'faq'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top < 200 && r.bottom > 200) {
            setActive(id);
            return;
          }
        }
      }
      setActive('');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          <span className="mark" aria-hidden="true"></span>
          <span>
            <span className="parent">Nutriventia</span>
            <span className="wordmark">
              Ashwanova<sup style={{ fontSize: '9px', opacity: 0.6, marginLeft: 2 }}>™</sup>
            </span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#why" className={active === 'why' ? 'active' : ''}>Why Ashwanova</a>
          <a href="#science" className={active === 'science' ? 'active' : ''}>The Science</a>
          <a href="#applications" className={active === 'applications' ? 'active' : ''}>Applications</a>
          <a href="#faq" className={active === 'faq' ? 'active' : ''}>FAQ</a>
        </div>
        <a
          href="https://www.nutriventia.com/contact-us/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Contact Us <Icon.ArrowRight className="arrow" />
        </a>
        <button className="nav-burger" aria-label="Menu">
          <span />
        </button>
      </div>
    </nav>
  );
}
