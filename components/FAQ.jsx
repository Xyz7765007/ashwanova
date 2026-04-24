'use client';

import { useState, useEffect, useRef } from 'react';
import Icon from './Icon';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [
    {
      q: 'What makes Ashwanova different from other ashwagandha ingredients?',
      a: 'Ashwanova is a root-only, sustained-release ashwagandha extract standardized to ≥4% USP withanolides. It offers 11× higher bioactive content and 12× higher bioavailability versus standard extracts. Once-daily dosing with 8–12 hour plasma presence — no other ashwagandha extract delivers this profile.',
    },
    {
      q: 'What consumer benefits can be claimed for Ashwanova?',
      a: 'Clinically substantiated for stress reduction (up to 41.6% lower PSS-10), sleep quality improvement (PSQI to normal range), enhanced cognitive performance (CANTAB), improved mood (Oxford Happiness Questionnaire), and reduction in stress-related eating (Three Factor Eating Questionnaire).',
    },
    {
      q: 'What is the withanolide content and how is it verified?',
      a: 'Standardized to ≥4% total withanolides per USP, covering 10 USP-standardized bioactives. Verified via LC-MS/MS with solid-phase extraction, ensuring batch-to-batch consistency.',
    },
    {
      q: 'Is Ashwanova compliant with major regulatory requirements?',
      a: 'Yes. USP-compliant, GRAS self-affirmed in the U.S., aligned with FDA and EFSA guidelines for botanical ingredient use in supplements.',
    },
    {
      q: 'What regulatory approvals are pending?',
      a: 'Submissions are in progress for Korea (KFDA) and Canada (NPN), targeting completion by 2026.',
    },
  ];
  return (
    <section className="section-pad" id="faq">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--coffee-700)' }}>
            QUESTIONS, ANSWERED
          </span>
          <h2 className="display-l" style={{ marginTop: 20, color: 'var(--coffee-900)' }}>
            What formulators ask us most.
          </h2>
        </div>
        <div className="faq">
          {items.map((it, i) => (
            <FAQItem
              key={i}
              {...it}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, isOpen, onClick }) {
  const innerRef = useRef(null);
  const [h, setH] = useState(0);
  useEffect(() => {
    if (innerRef.current) setH(innerRef.current.scrollHeight);
  }, []);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-q" onClick={onClick}>
        <span>{q}</span>
        <span className="faq-icon">
          <Icon.Plus />
        </span>
      </button>
      <div className="faq-a" style={{ maxHeight: isOpen ? h + 40 : 0 }}>
        <div className="faq-a-inner" ref={innerRef}>
          {a}
        </div>
      </div>
    </div>
  );
}
