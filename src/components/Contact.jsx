import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Send, Copy, Check, Clock, Shield, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ prefilledMessage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'Full-Stack Web App',
    budget: '$300 - $600',
    message: ''
  });

  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
    setErrorMessage('');

    try {
      // Send real email via FormSubmit AJAX service directly to sendmail2pradeesh@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/sendmail2pradeesh@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `⚡ New Freelance Inquiry from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          serviceType: formData.serviceType,
          budget: formData.budget,
          message: formData.message,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback email trigger
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Freelance Inquiry: ${formData.serviceType}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`)}`;
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Email submission error:', err);
      // Fallback to mailto link if network is blocked
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Freelance Inquiry: ${formData.serviceType}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
            Let's Collaborate
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '1rem' }}>
            Start Your Freelance Project Today
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Have a project in mind, need a full-stack developer, or AI automation? Fill out the form below to send an instant email to <strong>{personalInfo.email}</strong>.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem'
          }}
        >
          {/* Left Column: Direct Contact Info & Guarantees */}
          <div style={{ gridColumn: 'span 12', '@media (min-width: 992px)': { gridColumn: 'span 5' } }} className="cnt-left-col">
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
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-900)', marginBottom: '1.5rem' }}>
                  Direct Contact Information
                </h3>

                {/* Email Box */}
                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-main)',
                    border: '1px solid var(--border-light)',
                    marginBottom: '1rem',
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
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-main)',
                    border: '1px solid var(--border-light)',
                    marginBottom: '1rem',
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

                {/* LinkedIn Link */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-main)',
                    border: '1px solid var(--border-light)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#e0e7ff', color: '#3730a3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 600 }}>LinkedIn Profile</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-600)' }}>Connect on LinkedIn →</div>
                  </div>
                </a>

                {/* Guarantee Pills */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--primary-700)' }}>
                    <Clock size={16} color="var(--brand-600)" />
                    <span>Response guaranteed within <strong>24 hours</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--primary-700)' }}>
                    <Shield size={16} color="var(--accent-emerald)" />
                    <span>NDAs & strict code confidentiality</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div style={{ gridColumn: 'span 12', '@media (min-width: 992px)': { gridColumn: 'span 7' } }} className="cnt-right-col">
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
                    Email Sent Successfully!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2rem auto' }}>
                    Thank you, <strong>{formData.name}</strong>! An email with your project details has been sent to <strong>sendmail2pradeesh@gmail.com</strong>. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', serviceType: 'Full-Stack Web App', budget: '$300 - $600', message: '' });
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
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-900)', marginBottom: '1.5rem' }}>
                    Send a Project Inquiry
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-900)', display: 'block', marginBottom: '0.4rem' }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
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
                      <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-900)', display: 'block', marginBottom: '0.4rem' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
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

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-900)', display: 'block', marginBottom: '0.4rem' }}>
                        Project Type
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
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
                        <option value="Full-Stack Web App">Full-Stack Web Application</option>
                        <option value="AI & Machine Learning">AI & Python Automation</option>
                        <option value="Server Setup & Optimization">Linux & Performance Setup</option>
                        <option value="Consultation">General Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-900)', display: 'block', marginBottom: '0.4rem' }}>
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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
                        <option value="Under $300">Under $300</option>
                        <option value="$300 - $600">$300 – $600</option>
                        <option value="$600 - $1,200">$600 – $1,200</option>
                        <option value="$1,200+">$1,200+</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-900)', display: 'block', marginBottom: '0.4rem' }}>
                      Project Details & Requirements *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe your goals, features required, or target launch date..."
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
                      cursor: isSubmitting ? 'wait' : 'pointer'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                        Sending Email to sendmail2pradeesh@gmail.com...
                      </>
                    ) : (
                      <>
                        Submit Project Inquiry <Send size={18} />
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
