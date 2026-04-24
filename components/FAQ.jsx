'use client';

import { useState, useEffect, useRef } from 'react';
import Icon from './Icon';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [
    {
      q: 'What makes Ashwanova™ different from conventional ashwagandha extracts?',
      a: 'Ashwanova™ is a root-only, sustained-release Ashwagandha extract standardized to 4 percent or more USP withanolides. It is purpose-built using Nutriventia\u2019s patented EDGE™ technology to deliver controlled, all-day withanolide exposure from a single daily dose. Ashwanova™ is engineered to last, not spike, and to remain robust as regulatory and category expectations evolve.',
    },
    {
      q: 'Why does Ashwanova™ use only the root of Ashwagandha?',
      a: 'Ashwanova™ is built on first principles. Across Ayurveda, Siddha, and Unani systems, the root of Withania somnifera is the therapeutically relevant part of the plant. Current regulatory frameworks and classical references consistently recognize the root, while guidance around leaf usage remains fragmented across regions. By remaining root-only, Ashwanova™ aligns with tradition, science, and long-term regulatory clarity.',
    },
    {
      q: 'How does Ashwanova™ approach the question of Ashwagandha leaves?',
      a: 'Ashwanova™ takes a clarity-first approach rather than engaging in debate. Leaf-based Ashwagandha lacks consistent historical use, harmonized regulatory acceptance, and long-term clinical positioning across global markets. Ashwanova™ removes this ambiguity entirely by focusing exclusively on the plant part — the root — with enduring therapeutic and regulatory recognition.',
    },
    {
      q: 'What consumer benefits can be expected from Ashwanova™?',
      a: 'Across multiple human clinical studies, Ashwanova™ has demonstrated support for stress reduction, improved sleep quality, enhanced mood, cognitive clarity, emotional resilience, and healthier stress-related eating behavior. These benefits are delivered as comprehensive, all-day stress management from a single low dose.',
    },
    {
      q: 'How does the sustained-release technology work?',
      a: 'Ashwanova™ leverages Nutriventia\u2019s EDGE™ microbead matrix to deliver controlled, extended release of withanolides throughout the day. This design avoids sharp concentration spikes and rapid drop-offs, aligning ingredient performance with human stress physiology rather than dosing convenience alone.',
    },
    {
      q: 'What clinical evidence supports Ashwanova™?',
      a: 'Ashwanova™ is supported by three randomized, double-blind, placebo-controlled clinical trials and one human pharmacokinetic study, all published in peer-reviewed journals. Together, these studies demonstrate sustained plasma presence and statistically significant improvements in perceived stress, cortisol levels, sleep quality, and psychological well-being.',
    },
    {
      q: 'Can Ashwanova™ address both mental and physical aspects of stress?',
      a: 'Yes. Ashwanova™ works holistically by supporting regulation of cortisol and physiological stress responses, while also improving mood, cognitive performance, and emotional balance. Clinical data also show reductions in stress-related eating behavior, reflecting benefits across both psychological and metabolic dimensions.',
    },
    {
      q: 'How does Ashwanova™ support cognitive performance?',
      a: 'Using validated neurocognitive tools such as CANTAB, Ashwanova™ has demonstrated improvements in memory recall, visual memory, and sustained attention. By reducing stress and improving sleep quality, it helps create the conditions necessary for consistent mental clarity and focus.',
    },
    {
      q: 'What is the recommended dosage and formulation flexibility?',
      a: 'Ashwanova™ is clinically effective at doses starting at 150 mg once daily, enabled by its enhanced bioavailability and sustained-release design. Its clean-label, low-dose profile makes it suitable for a wide range of formats including capsules, tablets, gummies, stick packs, and ready-to-drink applications.',
    },
    {
      q: 'Is Ashwanova™ suitable for global formulations and future regulatory environments?',
      a: 'Yes. Ashwanova™ is GRAS self-affirmed, USP standardized, and Clean Label Project certified. It is designed to align with FDA, EFSA, and emerging global regulatory expectations. Its root-only design reduces reinterpretation risk as compliance frameworks continue to evolve, making it a durable choice for globally scalable formulations.',
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
  }, [isOpen]);
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
