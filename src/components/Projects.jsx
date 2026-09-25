import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle2, X, ArrowUpRight } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';

export default function Projects({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full-Stack', 'AI & Data', 'Embedded & IoT'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-main)', scrollMarginTop: '60px' }}>
      {/* Anchor for backward compatibility */}
      <div id="portfolio" style={{ position: 'relative', top: '-70px' }} />
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Featured Engineering Projects
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '1rem' }}>
            Production Systems & Research Case Studies
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Full-stack web platforms, machine learning models, and IoT systems built at IIT Madras, Atsuya Technologies, and research labs.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                backgroundColor: activeCategory === cat ? 'var(--primary-900)' : 'var(--bg-surface)',
                color: activeCategory === cat ? '#ffffff' : 'var(--primary-700)',
                border: activeCategory === cat ? '1px solid var(--primary-900)' : '1px solid var(--border-medium)',
                boxShadow: activeCategory === cat ? 'var(--shadow-md)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="interactive-card"
              onClick={() => setSelectedProject(project)}
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              {/* Project Image Banner */}
              <div style={{ position: 'relative', height: '200px', width: '100%', overflow: 'hidden', backgroundColor: '#e2e8f0' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    display: 'flex',
                    gap: '6px'
                  }}
                >
                  <span className="badge badge-brand" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255,255,255,0.9)' }}>
                    {project.category}
                  </span>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px'
                  }}
                >
                  <span className="badge badge-neutral" style={{ fontSize: '0.75rem', backgroundColor: 'rgba(15,23,42,0.85)', color: '#ffffff', border: 'none' }}>
                    {project.organization}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {project.summary}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
                    {project.tech.map((t) => (
                      <span key={t} className="badge badge-neutral" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Impact Metric Pill & View details link */}
                  <div
                    style={{
                      borderTop: '1px solid var(--border-light)',
                      paddingTop: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--brand-600)'
                    }}
                  >
                    <span>{project.metrics}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Details <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '720px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--border-medium)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div style={{ position: 'relative', height: '240px' }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  color: 'var(--primary-900)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '0.75rem' }}>
                <span className="badge badge-brand">{selectedProject.category}</span>
                <span className="badge badge-gold">{selectedProject.organization}</span>
                <span className="badge badge-neutral">{selectedProject.date}</span>
              </div>

              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '1rem' }}>
                {selectedProject.title}
              </h2>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {selectedProject.summary}
              </p>

              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.75rem' }}>
                Key Technical Accomplishments:
              </h4>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.925rem', color: 'var(--primary-700)' }}>
                    <CheckCircle2 size={18} color="var(--brand-600)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Technologies & Frameworks Used:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="badge badge-neutral" style={{ fontSize: '0.85rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenContact(`Hi Pradeeshwaran, I would like to discuss your experience working on the "${selectedProject.title}" project for an engineering role at our company.`);
                  }}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--brand-600)',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.95rem'
                  }}
                >
                  Discuss This Project / Role
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    padding: '12px 20px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--primary-700)',
                    fontWeight: 600,
                    fontSize: '0.95rem'
                  }}
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
