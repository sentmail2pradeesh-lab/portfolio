import React from 'react';
import { ArrowUp, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';
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
          {/* Col 1: Branding & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: 'var(--brand-600)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                PM
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: 0 }}>
                Pradeeshwaran M
              </h3>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Full-Stack Software Engineer passionate about crafting high-performance web systems and AI applications. Seeking full-time engineering roles in innovative technology companies.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#1e293b', color: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s ease' }}>
                <Linkedin size={18} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" title="GitHub" style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#1e293b', color: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s ease' }}>
                <Github size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} title="Email" style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#1e293b', color: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s ease' }}>
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1.25rem' }}>Quick Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.9rem', color: '#94a3b8' }}>
              <li><a href="#expertise" style={{ color: '#cbd5e1' }}>Technical Expertise & Skills</a></li>
              <li><a href="#projects" style={{ color: '#cbd5e1' }}>Projects & Case Studies</a></li>
              <li><a href="#experience" style={{ color: '#cbd5e1' }}>Experience & Education</a></li>
              <li><a href="#resume" style={{ color: '#cbd5e1' }}>Official Resume (PDF)</a></li>
              <li><a href="#contact" style={{ color: '#cbd5e1' }}>Contact & Hiring Inquiry</a></li>
            </ul>
          </div>

          {/* Col 3: Engineering Focus */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1.25rem' }}>Engineering Focus</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.9rem', color: '#94a3b8' }}>
              <li>React.js & Single-Page Apps</li>
              <li>Node.js / Express RESTful APIs</li>
              <li>PostgreSQL Relational Architecture</li>
              <li>Vision Transformers & PyTorch AI</li>
              <li>Linux Server Setup & Performance</li>
              <li>Clean Code & Agile Delivery</li>
            </ul>
          </div>

          {/* Col 4: Candidate Status */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1.25rem' }}>Candidate Status</h4>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="var(--brand-600)" /> Chennai, Tamil Nadu, India
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="var(--brand-600)" /> {personalInfo.email}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="var(--brand-600)" /> {personalInfo.phone}
              </div>
              <div style={{ marginTop: '0.5rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
                Open for Full-Time Roles (Immediate Joiner)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Scroll top */}
        <div style={{ paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
          <div>
            © {new Date().getFullYear()} Pradeeshwaran M. All rights reserved. Full-Stack Software Engineer Portfolio.
          </div>
          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#94a3b8',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
