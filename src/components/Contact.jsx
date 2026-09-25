import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, Clock, Shield, Briefcase, MapPin, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ prefilledMessage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    roleType: 'Full-Stack Developer (Full-Time)',
    workModel: 'Flexible / Hybrid / Remote',
    message: ''
  });

  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledMessage) {
      setFormData(prev => ({ ...prev, message: prefilledMessage }));
    }
  }, [prefilledMessage]);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      // Send real email via FormSubmit AJAX service directly to sendmail2pradeesh@gmail.com
      const companyStr = formData.company ? ` at ${formData.company}` : '';
      const response = await fetch('https://formsubmit.co/ajax/sendmail2pradeesh@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `💼 Job Opportunity: ${formData.roleType}${companyStr} (${formData.name})`,
          recruiter_name: formData.name,
          email: formData.email,
          company: formData.company || 'Not Specified',
          role_type: formData.roleType,
          work_model: formData.workModel,
          message: formData.message,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback email trigger
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Job Opportunity: ${formData.roleType}${companyStr}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nRole: ${formData.roleType}\nWork Model: ${formData.workModel}\n\nMessage:\n${formData.message}`)}`;
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Email submission error:', err);
      // Fallback to mailto link if network is blocked
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Job Opportunity: ${formData.roleType}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nRole: ${formData.roleType}\nWork Model: ${formData.workModel}\n\nMessage:\n${formData.message}`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-main)', scrollMarginTop: '60px' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
            Let's Connect
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '1rem' }}>
            Connect Regarding Engineering Roles
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Actively interviewing for <strong>Full-Stack Developer</strong> and <strong>Software Development Engineer</strong> roles. Reach out directly or send details via the form below.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem'
          }}
        >
          {/* Left Column: Direct Contact Info & Candidate Snapshot */}
          <div style={{ gridColumn: 'span 12' }} className="cnt-left-col">
            <div
              className="classic-card"
              style={{
                padding: '2.25rem',
                backgroundColor: '#ffffff',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-900)', marginBottom: '1.25rem' }}>
                  Direct Contact & Candidate Info
                </h3>

                {/* Email Box */}
                <div
                  style={{
                    padding: '1.15rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-main)',
                    border: '1px solid var(--border-light)',
                    marginBottom: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--brand-50)', color: 'var(--brand-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 600 }}>Email Address</div>
                      <div style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--primary-900)' }}>{personalInfo.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: copiedField === 'email' ? 'var(--accent-emerald)' : 'var(--primary-700)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    {copiedField === 'email' ? <Check size={14} /> : <Copy size={14} />}
                    {copiedField === 'email' ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {/* Phone Box */}
                <div
                  style={{
                    padding: '1.15rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-main)',
                    border: '1px solid var(--border-light)',
                    marginBottom: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--accent-gold-soft)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 600 }}>Phone / WhatsApp</div>
                      <div style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--primary-900)' }}>{personalInfo.phone}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: copiedField === 'phone' ? 'var(--accent-emerald)' : 'var(--primary-700)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    {copiedField === 'phone' ? <Check size={14} /> : <Copy size={14} />}
                    {copiedField === 'phone' ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {/* Professional Profiles Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-main)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'border-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--brand-600)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-light)')}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#e0e7ff', color: '#3730a3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-subtle)', fontWeight: 600 }}>LinkedIn</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-600)' }}>Connect →</div>
                    </div>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-main)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'border-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--brand-600)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-light)')}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#f1f5f9', color: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Github size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-subtle)', fontWeight: 600 }}>GitHub</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-900)' }}>View Code →</div>
                    </div>
                  </a>
                </div>

                {/* Candidate Availability Card */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-accent-soft)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    border: '1px solid var(--border-brand)',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--brand-700)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                    Hiring Snapshot
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', color: 'var(--primary-900)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={14} color="var(--accent-emerald)" />
                      <span><strong>Availability:</strong> Immediate Joiner (0 Days Notice)</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={14} color="var(--accent-emerald)" />
                      <span><strong>Target Roles:</strong> Full-Stack Developer, SDE I, Backend</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={14} color="var(--accent-emerald)" />
                      <span><strong>Location:</strong> Chennai (Open to Relocation & Remote)</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={14} color="var(--accent-emerald)" />
                      <span><strong>Degrees:</strong> Integrated M.Sc. IT (Anna University)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Guarantees / Response pledge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: 'var(--text-subtle)', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                <Clock size={16} color="var(--brand-600)" />
                <span>Response guaranteed within <strong>24 hours</strong>.</span>
              </div>

            </div>
          </div>

          {/* Right Column: Recruiter Inquiry Form */}
          <div style={{ gridColumn: 'span 12' }} className="cnt-right-col">
            <div
              className="classic-card"
              style={{
                padding: '2.25rem',
                backgroundColor: '#ffffff'
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-emerald-soft)',
                      color: 'var(--accent-emerald)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem auto'
                    }}
                  >
                    <Check size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-900)', marginBottom: '0.75rem' }}>
                    Inquiry Dispatched Successfully!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2rem auto' }}>
                    Thank you, <strong>{formData.name}</strong>! Your message regarding opportunities at <strong>{formData.company || 'your company'}</strong> has been sent directly to <strong>{personalInfo.email}</strong>. I look forward to speaking with you.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        roleType: 'Full-Stack Developer (Full-Time)',
                        workModel: 'Flexible / Hybrid / Remote',
                        message: ''
                      });
                    }}
                    style={{
                      padding: '10px 20px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--brand-600)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '0.9rem'
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-900)', marginBottom: '0.35rem' }}>
                      Send Job Opportunity / Message
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-subtle)' }}>
                      Fill in the details below to initiate an interview conversation or discuss open roles.
                    </p>
                  </div>

                  {/* Row 1: Name and Company Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-900)', display: 'block', marginBottom: '0.4rem' }}>
                        Your Full Name / Recruiter Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-medium)',
                          fontSize: '0.925rem',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-900)', display: 'block', marginBottom: '0.4rem' }}>
                        Work / Company Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="priya@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-medium)',
                          fontSize: '0.925rem',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 2: Company Name and Role Type */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-900)', display: 'block', marginBottom: '0.4rem' }}>
                        Company / Organization Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Google / Microsoft / Tech Startup"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-medium)',
                          fontSize: '0.925rem',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-900)', display: 'block', marginBottom: '0.4rem' }}>
                        Target Role Type
                      </label>
                      <select
                        value={formData.roleType}
                        onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-medium)',
                          fontSize: '0.925rem',
                          fontFamily: 'inherit',
                          backgroundColor: '#ffffff'
                        }}
                      >
                        <option value="Full-Stack Developer (Full-Time)">Full-Stack Developer (Full-Time)</option>
                        <option value="Software Development Engineer (SDE I)">Software Development Engineer (SDE I)</option>
                        <option value="Backend Software Engineer">Backend Software Engineer</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Contract-to-Hire / Technical Consulting">Contract-to-Hire / Consulting</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Work Model */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-900)', display: 'block', marginBottom: '0.4rem' }}>
                      Location & Work Model
                    </label>
                    <select
                      value={formData.workModel}
                      onChange={(e) => setFormData({ ...formData, workModel: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        fontSize: '0.925rem',
                        fontFamily: 'inherit',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      <option value="Flexible / Hybrid / Remote">Flexible / Hybrid / Remote</option>
                      <option value="On-Site - Chennai">On-Site - Chennai</option>
                      <option value="On-Site - Bangalore / Hyderabad / Pune">On-Site - Bangalore / Hyderabad / Pune</option>
                      <option value="Full Remote">Full Remote</option>
                    </select>
                  </div>

                  {/* Row 4: Message / JD */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-900)', display: 'block', marginBottom: '0.4rem' }}>
                      Job Description, Questions or Interview Invite *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Share details about the role, technical requirements, team culture, or propose a time for an intro call..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        fontSize: '0.925rem',
                        fontFamily: 'inherit',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '14px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--brand-600)',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                      opacity: isSubmitting ? 0.8 : 1,
                      cursor: isSubmitting ? 'wait' : 'pointer',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = 'var(--brand-700)')}
                    onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = 'var(--brand-600)')}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                        Dispatching to sendmail2pradeesh@gmail.com...
                      </>
                    ) : (
                      <>
                        Submit Inquiry & Connect <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (min-width: 992px) {
          .cnt-left-col { grid-column: span 5 !important; }
          .cnt-right-col { grid-column: span 7 !important; }
        }
      `}</style>
    </section>
  );
}
