import React from 'react';
import { Briefcase, GraduationCap, Users, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { workExperience, education, leadershipRoles } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-brand" style={{ marginBottom: '1rem' }}>
            Proven Track Record
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '1rem' }}>
            Software Engineering Experience & Credentials
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Hands-on delivery in institutional software engineering labs, enterprise tech companies, and university leadership roles.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3rem'
          }}
        >
          {/* Left Column: Work Experience */}
          <div style={{ gridColumn: 'span 12', '@media (min-width: 992px)': { gridColumn: 'span 7' } }} className="exp-left-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
              <div style={{ padding: '8px', borderRadius: '10px', backgroundColor: 'var(--brand-50)', color: 'var(--brand-600)' }}>
                <Briefcase size={22} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-900)' }}>Software Engineering Internships</h3>
            </div>

            {/* Timeline Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '2px solid var(--border-light)', paddingLeft: '1.75rem', marginLeft: '0.75rem' }}>
              {workExperience.map((exp, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  
                  {/* Timeline Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-2.4rem',
                      top: '4px',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--brand-600)',
                      border: '4px solid #ffffff',
                      boxShadow: '0 0 0 2px var(--brand-600)'
                    }}
                  />

                  <div className="classic-card" style={{ padding: '1.75rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-900)' }}>{exp.role}</h4>
                      <span className="badge badge-brand" style={{ fontSize: '0.8rem' }}>
                        <Calendar size={12} /> {exp.period}
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-600)', marginBottom: '1rem' }}>
                      <span>{exp.company}</span>
                      <span style={{ color: 'var(--text-subtle)' }}>•</span>
                      <span style={{ color: 'var(--text-subtle)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={14} /> {exp.location}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {exp.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                      {exp.achievements.map((ach, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: 'var(--primary-700)' }}>
                          <CheckCircle size={15} color="var(--brand-600)" style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {exp.tech.map((t) => (
                        <span key={t} className="badge badge-neutral" style={{ fontSize: '0.75rem' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Leadership */}
          <div style={{ gridColumn: 'span 12', '@media (min-width: 992px)': { gridColumn: 'span 5' } }} className="exp-right-col">
            
            {/* Education Block */}
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.75rem' }}>
                <div style={{ padding: '8px', borderRadius: '10px', backgroundColor: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>
                  <GraduationCap size={22} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-900)' }}>Education</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {education.map((edu, idx) => (
                  <div key={idx} className="classic-card" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-900)' }}>{edu.degree}</h4>
                      <span className="badge badge-neutral" style={{ fontSize: '0.75rem', flexShrink: 0 }}>
                        {edu.period}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-600)', marginBottom: '0.5rem' }}>
                      {edu.institution}
                    </div>

                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                      {edu.score}
                    </div>

                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Block */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.75rem' }}>
                <div style={{ padding: '8px', borderRadius: '10px', backgroundColor: 'var(--accent-emerald-soft)', color: 'var(--accent-emerald)' }}>
                  <Users size={22} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-900)' }}>Leadership & Community</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {leadershipRoles.map((role, idx) => (
                  <div key={idx} className="classic-card" style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                      <h4 style={{ fontSize: '0.975rem', color: 'var(--primary-900)' }}>{role.title}</h4>
                      <span className="badge badge-neutral" style={{ fontSize: '0.75rem' }}>{role.period}</span>
                    </div>
                    <div style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-subtle)', marginBottom: '0.4rem' }}>
                      {role.organization}
                    </div>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                      {role.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .exp-left-col { grid-column: span 7 !important; }
          .exp-right-col { grid-column: span 5 !important; }
        }
      `}</style>
    </section>
  );
}
