import React from 'react';
import { ArrowRight, Download, CheckCircle2, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenContact }) {
  return (
    <section
      style={{
        paddingTop: '4rem',
        paddingBottom: '5rem',
        background: 'linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Decorative Accents */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(5,150,105,0.06) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Main Hero Column */}
          <div style={{ gridColumn: 'span 12', '@media (min-width: 992px)': { gridColumn: 'span 7' } }} className="hero-text-col">
            
            {/* Status Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <span className="badge badge-emerald">
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#059669', animation: 'pulseGlow 2s infinite' }}></span>
                Available for Freelance & Contract Work
              </span>
              <span className="badge badge-neutral" style={{ fontSize: '0.8rem' }}>
                Anna University M.Sc. IT
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: 'var(--primary-900)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1.25rem'
              }}
            >
              Engineering <span style={{ color: 'var(--brand-600)', position: 'relative', display: 'inline-block' }}>Scalable Full-Stack</span> Apps & AI Solutions
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '2rem',
                maxWidth: '640px'
              }}
            >
              Hi, I'm <strong style={{ color: 'var(--primary-900)' }}>Pradeeshwaran M</strong> — a Software Development Engineer & Freelancer with hands-on experience at <strong style={{ color: 'var(--primary-900)' }}>IIT Madras</strong> and <strong style={{ color: 'var(--primary-900)' }}>Atsuya Technologies</strong>. I build high-performance React/Node web platforms, RESTful APIs, and Python AI pipelines.
            </p>

            {/* CTA Group */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              <button
                onClick={onOpenContact}
                style={{
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--brand-600)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 6px 20px rgba(37, 99, 235, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--brand-700)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--brand-600)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Start a Freelance Project <ArrowRight size={18} />
              </button>

              <a
                href="#resume"
                style={{
                  padding: '14px 24px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--primary-900)',
                  border: '1px solid var(--border-medium)',
                  fontWeight: 600,
                  fontSize: '0.975rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--brand-600)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Download size={18} /> View Resume
              </a>
            </div>

            {/* Assurance Trust Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-subtle)', fontWeight: 500 }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" /> Full-Stack Web Apps
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-subtle)', fontWeight: 500 }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" /> RESTful API Engineering
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-subtle)', fontWeight: 500 }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" /> PyTorch AI & Data
              </div>
            </div>
          </div>

          {/* Right Card Column - Executive Resume Card */}
          <div style={{ gridColumn: 'span 12', '@media (min-width: 992px)': { gridColumn: 'span 5' } }} className="hero-card-col">
            <div
              className="classic-card"
              style={{
                padding: '2rem',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--brand-50)',
                      color: 'var(--brand-600)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      border: '2px solid var(--border-brand)'
                    }}
                  >
                    PM
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-900)', marginBottom: '2px' }}>Pradeeshwaran M</h3>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-subtle)' }}>Software Engineer & Freelancer</p>
                  </div>
                </div>
                <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>
                  <Award size={12} /> IIT Madras Alum
                </span>
              </div>

              {/* Core Skill Badges Grid */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-subtle)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Key Engineering Competencies
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {["Python", "Node.js", "Express.js", "React.js", "PostgreSQL", "PyTorch", "Linux CLI", "RESTful APIs", "JWT / Auth", "PHP"].map((skill) => (
                    <span key={skill} className="badge badge-neutral" style={{ fontSize: '0.78rem', padding: '3px 10px' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Experience Card Snippet */}
              <div
                style={{
                  backgroundColor: 'var(--bg-main)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1rem',
                  border: '1px solid var(--border-light)',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-900)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>IIT Madras CSTF</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--brand-600)', fontWeight: 600 }}>2026</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Built full-stack fleet portal serving 100+ active institutional users with LDAP & React/Node.
                </p>
              </div>

              {/* Action Link inside Card */}
              <button
                onClick={onOpenContact}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--primary-900)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                Get In Touch <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Metrics Banner */}
        <div
          style={{
            marginTop: '4rem',
            padding: '2rem 2.5rem',
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          {personalInfo.freelanceStats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--brand-600)', fontFamily: 'var(--font-heading)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-700)', marginTop: '2px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-text-col { grid-column: span 7 !important; }
          .hero-card-col { grid-column: span 5 !important; }
        }
      `}</style>
    </section>
  );
}
