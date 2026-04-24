'use client';

import { useState, useEffect } from 'react';
import Icon from './Icon';

export default function RegulatoryBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem('ashwanova_banner_dismissed') === '1') {
        setVisible(false);
        document.body.classList.remove('has-banner');
        return;
      }
    } catch (e) {}
    document.body.classList.add('has-banner');
  }, []);

  const dismiss = () => {
    try {
      sessionStorage.setItem('ashwanova_banner_dismissed', '1');
    } catch (e) {}
    setVisible(false);
    document.body.classList.remove('has-banner');
  };

  if (!visible) return null;

  return (
    <div className="reg-banner" role="region" aria-label="Regulatory notice">
      <div className="reg-banner-accent" aria-hidden="true"></div>
      <div className="reg-banner-inner container">
        <div className="reg-banner-left">
          <span className="reg-banner-dot" aria-hidden="true"></span>
          <span className="reg-banner-text body-s">
            Ministry of AYUSH restricts leaf-based ashwagandha. Ashwanova is{' '}
            <span className="reg-highlight">root-only</span>.
          </span>
        </div>
        <div className="reg-banner-right">
          <a href="/formula-check.html" className="reg-banner-link body-s">
            <span>Check your formula</span> <Icon.ArrowRight />
          </a>
          <button className="reg-banner-close" onClick={dismiss} aria-label="Dismiss notice">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
