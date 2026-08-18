import React from 'react';
import { Layout, Brain, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { freelanceServices } from '../data/portfolioData';

export default function Services({ onSelectService }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={28} style={{ color: 'var(--brand-600)' }} />;
      case 'Brain': return <Brain size={28} style={{ color: '#8b5cf6' }} />;
      case 'Zap': return <Zap size={28} style={{ color: 'var(--accent-emerald)' }} />;
      default: return <Layout size={28} />;
    }
  };

  return (
    <section id="services" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-brand" style={{ marginBottom: '1rem' }}>
            Freelance Services
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '1rem' }}>
            Tailored Engineering Solutions for Your Business
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            From full-stack web applications to AI pipelines and Linux optimizations, I deliver clean, tested, production-ready code.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {freelanceServices.map((service) => (
            <div
              key={service.id}
              className="interactive-card"
              style={{
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <div>
                {/* Icon & Header */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--bg-main)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-light)'
                    }}
                  >
                    {getIcon(service.icon)}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.75rem' }}>
                  {service.title}
                </h3>

                <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: 'var(--primary-700)' }}>
                      <CheckCircle size={16} color="var(--brand-600)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Ideal For Note */}
                <div style={{ padding: '8px 12px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-light)', fontSize: '0.8rem', color: 'var(--text-subtle)', marginBottom: '1.25rem' }}>
                  <strong>Ideal for:</strong> {service.idealFor}
                </div>

                {/* Service Inquiry Button */}
                <button
                  onClick={() => onSelectService(service)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--brand-50)',
                    color: 'var(--brand-600)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    border: '1px solid var(--border-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
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
                  Book Service <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
