'use client';

import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="nav-logo" style={{ color: 'var(--cream-50)' }}>
              <span className="mark" aria-hidden="true"></span>
              <span>
                <span className="parent">Nutriventia</span>
                <span className="wordmark">Ashwanova™</span>
              </span>
            </div>
            <p className="footer-tagline">Consumer-first ingredients, pharma-grade precision.</p>
            <a href="mailto:sales@nutriventia.com" className="footer-email">
              sales@nutriventia.com
            </a>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">
                <Icon.LinkedIn />
              </a>
              <a href="#" aria-label="X">
                <Icon.X />
              </a>
              <a href="#" aria-label="Vimeo">
                <Icon.Vimeo />
              </a>
              <a href="#" aria-label="YouTube">
                <Icon.YouTube />
              </a>
            </div>
          </div>
          <div>
            <h5>Ashwanova</h5>
            <ul>
              <li>
                <a href="#why">Why Ashwanova</a>
              </li>
              <li>
                <a href="#science">The Science</a>
              </li>
              <li>
                <a href="#science">Clinical Studies</a>
              </li>
              <li>
                <a href="#applications">Applications</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Latest Updates</a>
              </li>
              <li>
                <a href="#">E.D.G.E. Platform</a>
              </li>
              <li>
                <a href="#">All Health Offerings</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Stay Informed</h5>
            <p
              style={{
                color: 'rgba(250,246,238,0.55)',
                fontSize: 14,
                lineHeight: 1.55,
              }}
            >
              New studies, formulation guides, and category insights — once a month.
            </p>
            <div className="newsletter">
              <input type="email" placeholder="your@email.com" />
              <button aria-label="Subscribe">
                <Icon.ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            © 2026 Nutriventia. Designed by{' '}
            <a href="#" style={{ color: 'var(--saffron-500)' }}>
              Side Kick
            </a>
            .
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
