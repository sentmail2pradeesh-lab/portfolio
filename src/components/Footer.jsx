import React from 'react';
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--primary-900)',
        color: '#ffffff',
        paddingTop: '4rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid #1e293b'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid #1e293b'
          }}
        >
          {/* Col 1: Branding */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'var(--brand-600)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                PM
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: 0 }}>
                Pradeeshwaran M
              </h3>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Full-Stack Software Engineer offering freelance engineering, API development, and AI solutions for modern businesses.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#1e293b', color: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Linkedin size={18} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#1e293b', color: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Github size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#1e293b', color: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1.25rem' }}>Quick Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>
              <li><a href="#services" style={{ color: '#cbd5e1' }}>Freelance Services</a></li>
              <li><a href="#portfolio" style={{ color: '#cbd5e1' }}>Case Studies & Works</a></li>
              <li><a href="#experience" style={{ color: '#cbd5e1' }}>Experience & Credentials</a></li>
              <li><a href="#resume" style={{ color: '#cbd5e1' }}>Interactive Resume</a></li>
              <li><a href="#contact" style={{ color: '#cbd5e1' }}>Contact & Inquiry</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1.25rem' }}>Freelance Capabilities</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>
              <li>React & Node.js Web Apps</li>
              <li>Vision Transformers & PyTorch AI</li>
              <li>PostgreSQL & RESTful API Engineering</li>
              <li>Linux Server Hardening & Technical SEO</li>
              <li>System Maintenance & Custom Plugins</li>
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1.25rem' }}>Get in Touch</h4>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>📍 Chennai, Tamil Nadu, India</div>
              <div>✉️ sendmail2pradeesh@gmail.com</div>
              <div>📞 +91 8838488967</div>
              <div style={{ marginTop: '0.5rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
                Open for Remote & Contract Work
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Scroll top */}
        <div style={{ paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
          <div>
            © {new Date().getFullYear()} Pradeeshwaran M. All rights reserved. Professional Freelance Portfolio.
          </div>
          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#94a3b8',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
