import React, { useState } from 'react';
import { Download, ExternalLink, FileText, Eye, CheckCircle2, Mail, Phone, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeViewer() {
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' or 'formatted'

  return (
    <section id="resume" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
          <span className="badge badge-brand" style={{ marginBottom: '1rem' }}>
            Official Resume Document
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '1rem' }}>
            Original Resume & Credentials
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            View and download the exact official 2-page resume of Pradeeshwaran M.
          </p>

          {/* Action Bar */}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <a
              href="/Pradeeshwaran_M_Resume.pdf"
              download="Pradeeshwaran_M_Resume.pdf"
              style={{
                padding: '12px 24px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--brand-600)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                transition: 'all 0.2s ease'
              }}
            >
              <Download size={18} /> Download Original Resume (PDF)
            </a>

            <a
              href="/Pradeeshwaran_M_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '12px 20px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--primary-900)',
                border: '1px solid var(--border-medium)',
                fontWeight: 600,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <ExternalLink size={18} /> Open PDF in New Tab
            </a>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <button
            onClick={() => setViewMode('pdf')}
            style={{
              padding: '10px 20px',
              borderRadius: 'var(--radius-md)',
              fontWeight: 700,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: viewMode === 'pdf' ? 'var(--primary-900)' : 'var(--bg-surface)',
              color: viewMode === 'pdf' ? '#ffffff' : 'var(--primary-700)',
              border: viewMode === 'pdf' ? '1px solid var(--primary-900)' : '1px solid var(--border-medium)',
              boxShadow: viewMode === 'pdf' ? 'var(--shadow-md)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <FileText size={18} /> PDF Viewer Mode
          </button>

          <button
            onClick={() => setViewMode('formatted')}
            style={{
              padding: '10px 20px',
              borderRadius: 'var(--radius-md)',
              fontWeight: 700,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: viewMode === 'formatted' ? 'var(--primary-900)' : 'var(--bg-surface)',
              color: viewMode === 'formatted' ? '#ffffff' : 'var(--primary-700)',
              border: viewMode === 'formatted' ? '1px solid var(--primary-900)' : '1px solid var(--border-medium)',
              boxShadow: viewMode === 'formatted' ? 'var(--shadow-md)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <Eye size={18} /> Classic Formatted Text View
          </button>
        </div>

        {/* PDF Viewer Container */}
        {viewMode === 'pdf' ? (
          <div
            className="classic-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-xl)',
              overflow: 'hidden',
              padding: '1rem'
            }}
          >
            <div style={{ backgroundColor: 'var(--bg-main)', padding: '12px 16px', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-900)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={18} color="var(--brand-600)" /> Pradeeshwaran_M_Resume.pdf
              </div>
              <a
                href="/Pradeeshwaran_M_Resume.pdf"
                download
                style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--brand-600)', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Download PDF <Download size={14} />
              </a>
            </div>

            <div style={{ width: '100%', height: '800px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
              <iframe
                src="/Pradeeshwaran_M_Resume.pdf"
                title="Pradeeshwaran M Resume PDF"
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </div>
        ) : (
          /* Formatted Text Version matching original PDF layout */
          <div
            className="classic-card printable-resume-area"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-xl)',
              padding: '3rem',
              color: 'var(--primary-900)',
              fontFamily: 'var(--font-sans)'
            }}
          >
            {/* Original Resume Header */}
            <div style={{ textAlign: 'center', borderBottom: '2px solid var(--primary-900)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '0.05em', color: 'var(--primary-900)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                PRADEESHWARAN M
              </h1>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem', fontSize: '0.925rem', color: 'var(--primary-700)', fontWeight: 600 }}>
                <span>📞 +91 8838488967</span>
                <span>|</span>
                <span>✉️ sendmail2pradeesh@gmail.com</span>
                <span>|</span>
                <a href="https://linkedin.com/in/pradeeshwaran-m1621/" target="_blank" rel="noreferrer" style={{ color: 'var(--brand-600)' }}>
                  linkedin.com/in/pradeeshwaran-m1621/
                </a>
              </div>
            </div>

            {/* CAREER OBJECTIVE */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-900)', borderBottom: '1px solid var(--border-medium)', paddingBottom: '4px', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                CAREER OBJECTIVE
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--primary-700)', lineHeight: 1.6 }}>
                Integrated M.Sc. Information Technology graduate from Anna University with hands-on software development internship experience. Proficient in <strong>Python, Full-Stack systems, and core computer science fundamentals</strong>. Strong analytical and quantitative problem-solving skills with an active foundation-building in Web3, Blockchain fundamentals, Smart Contracts, and basic Solidity. Eager to contribute as a Software Engineer in high-performance technical ecosystems.
              </p>
            </div>

            {/* TECHNICAL SKILLS & COMPETENCIES */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-900)', borderBottom: '1px solid var(--border-medium)', paddingBottom: '4px', marginBottom: '1rem', textTransform: 'uppercase' }}>
                TECHNICAL SKILLS & COMPETENCIES
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', rowGap: '0.75rem', fontSize: '0.925rem' }}>
                <strong style={{ color: 'var(--primary-900)' }}>Programming:</strong>
                <div>Python</div>

                <strong style={{ color: 'var(--primary-900)' }}>Operating Systems:</strong>
                <div>Linux / Unix environments, Shell/Bash Scripting, Windows</div>

                <strong style={{ color: 'var(--primary-900)' }}>Software & Full Stack:</strong>
                <div>Node.js, Express.js, React.js, RESTful APIs, PostgreSQL, HTML5/CSS3</div>

                <strong style={{ color: 'var(--primary-900)' }}>Data & Quantitative:</strong>
                <div>Data Analysis, Microscopic Image Data Processing, Scikit-Learn, PyTorch</div>

                <strong style={{ color: 'var(--primary-900)' }}>Tools & Workflows:</strong>
                <div>Git, GitHub, Linux CLI, Postman, Debugging & Tooling, Agile Development</div>
              </div>
            </div>

            {/* PROFESSIONAL EXPERIENCE */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-900)', borderBottom: '1px solid var(--border-medium)', paddingBottom: '4px', marginBottom: '1rem', textTransform: 'uppercase' }}>
                PROFESSIONAL EXPERIENCE
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>
                  <span>Software Development Intern | <span style={{ fontStyle: 'italic', fontWeight: 500 }}>CSTF, IIT Madras</span></span>
                  <span style={{ color: 'var(--text-subtle)' }}>Jan 2026 – May 2026</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', fontSize: '0.925rem', color: 'var(--primary-700)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <li>Engineered and deployed a robust full-stack fleet management platform using Node.js, Express.js, React.js, and PostgreSQL for 100+ active institutional users.</li>
                  <li>Designed RESTful APIs, asynchronous logic, JWT authentication, and Role-Based Access Control (RBAC) to manage automated multi-level approval workflows.</li>
                  <li>Maintained high system reliability on Linux servers through systematic debugging, endpoint validation, and automated email trigger integrations.</li>
                  <li>Utilized Git and GitHub in an Agile collaborative workflow for feature branching, code reviews, and issue tracking.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>
                  <span>Software Development Engineer Intern | <span style={{ fontStyle: 'italic', fontWeight: 500 }}>Atsuya Technologies Pvt. Ltd.</span></span>
                  <span style={{ color: 'var(--text-subtle)' }}>July 2024 – Dec 2024</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', fontSize: '0.925rem', color: 'var(--primary-700)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <li>Developed and deployed custom features, plugins, and PHP/JavaScript integrations on web systems, cutting manual admin overhead.</li>
                  <li>Implemented structured data, schema markups, and Linux web setup optimizations to significantly increase technical performance and visibility.</li>
                </ul>
              </div>
            </div>

            {/* KEY PROJECTS & RESEARCH */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-900)', borderBottom: '1px solid var(--border-medium)', paddingBottom: '4px', marginBottom: '1rem', textTransform: 'uppercase' }}>
                KEY PROJECTS & RESEARCH
              </h3>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.975rem', marginBottom: '4px' }}>
                  Smart Fleet Management & Authentication System <span style={{ fontStyle: 'italic', fontWeight: 500 }}>| IIT Madras</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', fontSize: '0.925rem', color: 'var(--primary-700)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <li>Architected centralized web portal integrating LDAP-based authentication for seamless institutional credential verification.</li>
                  <li>Programmed real-time availability checking, driver assignment algorithms, audit logging, and conflict prevention modules.</li>
                  <li>Executed thorough functional testing, API route debugging, and load validation on Linux-based environments.</li>
                </ul>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.975rem', marginBottom: '4px' }}>
                  Blood Cell Classification using Vision Transformer (ViT) <span style={{ fontStyle: 'italic', fontWeight: 500 }}>| Python, PyTorch, Hugging Face</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', fontSize: '0.925rem', color: 'var(--primary-700)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <li>Performed quantitative data processing and statistical evaluation on microscopic blood cell datasets.</li>
                  <li>Trained Vision Transformer (ViT) models to classify white blood cell types, analyzing performance via precision metrics, confidence scores, and accuracy tracking.</li>
                </ul>
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: '0.975rem', marginBottom: '4px' }}>
                  Real-Time Baggage Tracker Prototype <span style={{ fontStyle: 'italic', fontWeight: 500 }}>| Embedded Systems / LoRa / ESP32</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', fontSize: '0.925rem', color: 'var(--primary-700)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <li>Designed a low-cost, real-time wireless tracking prototype, cutting hardware cost by 70% compared to commercial GPS solutions.</li>
                </ul>
              </div>
            </div>

            {/* EDUCATION */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-900)', borderBottom: '1px solid var(--border-medium)', paddingBottom: '4px', marginBottom: '1rem', textTransform: 'uppercase' }}>
                EDUCATION
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div><strong>Master of Science (Integrated) in Information Technology</strong> — Anna University, Chennai | CGPA: 7.00</div>
                  <div style={{ color: 'var(--text-subtle)', fontWeight: 600 }}>2021 – 2026</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div><strong>Higher Secondary Certificate (HSC)</strong> — Sri Jayendra Matric. HSS, Trichy | Score: 92%</div>
                  <div style={{ color: 'var(--text-subtle)', fontWeight: 600 }}>2020 – 2021</div>
                </div>
              </div>
            </div>

            {/* LEADERSHIP & COMMUNICATION */}
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-900)', borderBottom: '1px solid var(--border-medium)', paddingBottom: '4px', marginBottom: '1rem', textTransform: 'uppercase' }}>
                LEADERSHIP & COMMUNICATION
              </h3>
              <div style={{ fontSize: '0.925rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--primary-700)' }}>
                <div>
                  <strong>Leadership Roles:</strong> Vice Chairperson (Dept. of Mathematics, 2025–26) | General Secretary (NSS Unit-6, 2023–24) | Rotaract Volunteer
                </div>
                <div>
                  <strong>Languages:</strong> English (Proficient - Written & Verbal), Tamil (Native), Malayalam, Hindi (Intermediate)
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
