import React, { useState } from 'react';
import { Layout, Server, Brain, Zap, CheckCircle2, ArrowRight, Code2, Database, Terminal, Cpu } from 'lucide-react';
import { technicalDomains, technicalSkills, hiringHighlights } from '../data/portfolioData';

export default function Services({ onSelectService }) {
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');

  const getDomainIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={26} style={{ color: 'var(--brand-600)' }} />;
      case 'Server': return <Server size={26} style={{ color: '#0284c7' }} />;
      case 'Brain': return <Brain size={26} style={{ color: '#7c3aed' }} />;
      case 'Zap': return <Zap size={26} style={{ color: 'var(--accent-emerald)' }} />;
      default: return <Code2 size={26} style={{ color: 'var(--brand-600)' }} />;
    }
  };

  const skillGroups = [
    { id: 'languages', title: 'Languages', icon: Code2, skills: technicalSkills.languages },
    { id: 'frontend', title: 'Frontend', icon: Layout, skills: technicalSkills.frontend },
    { id: 'backend', title: 'Backend & APIs', icon: Server, skills: technicalSkills.backend },
    { id: 'databases', title: 'Databases', icon: Database, skills: technicalSkills.databases },
    { id: 'aiData', title: 'AI & Data', icon: Brain, skills: technicalSkills.aiData },
    { id: 'devopsTools', title: 'DevOps & Tools', icon: Terminal, skills: technicalSkills.devopsTools },
    { id: 'coreFundamentals', title: 'CS Fundamentals', icon: Cpu, skills: technicalSkills.coreFundamentals },
  ];

  return (
    <section id="expertise" className="section" style={{ backgroundColor: '#ffffff', scrollMarginTop: '60px' }}>
      {/* Anchor for backward compatibility */}
      <div id="services" style={{ position: 'relative', top: '-70px' }} />

      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-brand" style={{ marginBottom: '1rem' }}>
            Technical Capabilities
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '1rem' }}>
            What I Bring to Your Engineering Team
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            From scalable React frontend architectures to high-throughput Node.js/PostgreSQL APIs and applied AI models, here is how I drive product velocity and system reliability.
          </p>
        </div>

        {/* 4 Core Engineering Domains Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4.5rem'
          }}
        >
          {technicalDomains.map((domain) => (
            <div
              key={domain.id}
              className="interactive-card"
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                backgroundColor: 'var(--bg-surface)'
              }}
            >
              <div>
                {/* Domain Icon & Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: 'var(--bg-main)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-light)',
                      flexShrink: 0
                    }}
                  >
                    {getDomainIcon(domain.icon)}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-900)', lineHeight: 1.25 }}>
                    {domain.title}
                  </h3>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {domain.shortDesc}
                </p>

                {/* Key Engineering Responsibilities */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {domain.features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: 'var(--primary-700)' }}>
                      <CheckCircle2 size={15} color="var(--brand-600)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ lineHeight: 1.45 }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                  {domain.techStack.map((tech) => (
                    <span key={tech} className="badge badge-neutral" style={{ fontSize: '0.725rem', padding: '2px 8px' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Discuss Domain Fit Button */}
                <button
                  onClick={() => onSelectService(domain)}
                  style={{
                    width: '100%',
                    padding: '11px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--brand-50)',
                    color: 'var(--brand-600)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    border: '1px solid var(--border-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--brand-600)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--brand-50)';
                    e.currentTarget.style.color = 'var(--brand-600)';
                  }}
                >
                  Discuss Role Fit <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills Matrix for Recruiter & ATS Matching */}
        <div
          style={{
            backgroundColor: 'var(--bg-main)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '1px solid var(--border-light)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
              Comprehensive Stack
            </span>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-900)' }}>
              Skills & Engineering Tooling Matrix
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Quick reference of programming languages, frameworks, databases, and developer tools.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {skillGroups.map((group) => {
              const IconComp = group.icon;
              return (
                <div
                  key={group.id}
                  className="classic-card"
                  style={{
                    padding: '1.25rem 1.5rem',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.875rem' }}>
                    <IconComp size={18} color="var(--brand-600)" />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-900)' }}>
                      {group.title}
                    </h4>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {group.skills.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: '0.775rem',
                          fontWeight: 600,
                          padding: '3px 9px',
                          borderRadius: '6px',
                          backgroundColor: '#f1f5f9',
                          color: 'var(--primary-800)',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Why Hire Pradeeshwaran Quick Bar */}
          <div
            style={{
              marginTop: '2.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-medium)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {hiringHighlights.map((item, idx) => (
              <div key={idx}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-900)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-600)' }}></span>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
