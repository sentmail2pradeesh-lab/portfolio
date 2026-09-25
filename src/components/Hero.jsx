import React from 'react';
import { ArrowRight, Download, CheckCircle2, Award, Briefcase, MapPin, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenContact }) {
  return (
    <section
      id="hero"
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
          <div style={{ gridColumn: 'span 12' }} className="hero-text-col">
            
            {/* Status Pill */}
            <div style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <span className="badge badge-emerald">
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#059669', animation: 'pulseGlow 2s infinite' }}></span>
                Actively Seeking Full-Time Full-Stack Roles
              </span>
              <span className="badge badge-neutral" style={{ fontSize: '0.8rem' }}>
                Immediate Joiner
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
              Engineering <span style={{ color: 'var(--brand-600)', position: 'relative', display: 'inline-block' }}>Scalable Full-Stack</span> Systems & Enterprise Web Apps
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '2rem',
                maxWidth: '650px'
              }}
            >
              Hi, I'm <strong style={{ color: 'var(--primary-900)' }}>Pradeeshwaran M</strong> — a Full-Stack Software Engineer with proven internship delivery at <strong style={{ color: 'var(--primary-900)' }}>CSTF, IIT Madras</strong> and <strong style={{ color: 'var(--primary-900)' }}>Atsuya Technologies</strong>. I architect responsive React frontends, resilient Node.js / PostgreSQL REST APIs, and applied AI pipelines for collaborative product teams.
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
                Discuss Opportunities <ArrowRight size={18} />
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
                <Download size={18} /> View Official Resume
              </a>

              <a
                href="#projects"
                style={{
                  padding: '14px 20px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'transparent',
                  color: 'var(--brand-600)',
                  fontWeight: 600,
                  fontSize: '0.975rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--brand-700)';
                  e.currentTarget.style.transform = 'translateX(3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--brand-600)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                Explore Projects →
              </a>
            </div>

            {/* Key Engineering Competency Checkmarks */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" /> React.js & Modern UI
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" /> Node.js & REST APIs
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" /> PostgreSQL Relational DBs
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" /> PyTorch AI & Linux
              </div>
            </div>
          </div>

          {/* Right Card Column - Engineering Candidate Profile Card */}
          <div style={{ gridColumn: 'span 12' }} className="hero-card-col">
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
              {/* Header profile row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, var(--primary-900), var(--brand-600))',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1.2rem',
                      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
                    }}
                  >
                    PM
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-900)', marginBottom: '2px' }}>Pradeeshwaran M</h3>
                    <p style={{ fontSize: '0.825rem', color: 'var(--brand-600)', fontWeight: 600 }}>Full-Stack Software Engineer</p>
                  </div>
                </div>
                <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>
                  <Award size={12} /> IIT Madras CSTF
                </span>
              </div>

              {/* Target Candidate Quick Info */}
              <div
                style={{
                  backgroundColor: 'var(--bg-main)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.875rem 1rem',
                  border: '1px solid var(--border-light)',
                  marginBottom: '1.25rem',
                  fontSize: '0.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-800)', fontWeight: 600 }}>
                  <Briefcase size={14} color="var(--brand-600)" />
                  <span><strong>Target:</strong> Full-Stack Developer / SDE I / Backend</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-800)' }}>
                  <Clock size={14} color="var(--accent-emerald)" />
                  <span><strong>Notice:</strong> Immediate Joiner (0 Days)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-800)' }}>
                  <MapPin size={14} color="var(--accent-gold)" />
                  <span>Chennai, India (Open to Relocation & Remote)</span>
                </div>
              </div>

              {/* Core Skill Badges Grid */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-subtle)', fontWeight: 700, marginBottom: '0.6rem' }}>
                  Core Tech Stack
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {["React.js", "Node.js", "Express.js", "PostgreSQL", "JavaScript (ES6+)", "Python", "REST APIs", "JWT / RBAC", "PyTorch", "Linux CLI", "Git"].map((skill) => (
                    <span key={skill} className="badge badge-neutral" style={{ fontSize: '0.75rem', padding: '3px 9px' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Experience Snippet */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.875rem 1rem',
                  border: '1px solid var(--border-light)',
                  marginBottom: '1.25rem'
                }}
              >
                <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--primary-900)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>IIT Madras CSTF (2026)</span>
                  <span className="badge badge-brand" style={{ fontSize: '0.7rem', padding: '2px 6px' }}>Full-Stack Intern</span>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px', lineHeight: 1.4 }}>
                  Engineered centralized fleet management system for 100+ active institutional users with LDAP & React/Node.
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
                  gap: '8px',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--brand-600)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-900)')}
              >
                Get In Touch / Schedule Interview <ArrowRight size={16} />
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
          {personalInfo.impactMetrics.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--brand-600)', fontFamily: 'var(--font-heading)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary-900)', marginTop: '2px' }}>
                {stat.label}
              </div>
              {stat.detail && (
                <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '3px' }}>
                  {stat.detail}
                </div>
              )}
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
