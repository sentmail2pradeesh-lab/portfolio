import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { freelanceServices } from '../data/portfolioData';

export default function Estimator({ onSendQuote }) {
  const [selectedService, setSelectedService] = useState('fullstack');
  const [selectedScale, setSelectedScale] = useState('standard');
  const [selectedAddons, setSelectedAddons] = useState(['auth']);
  const [timeline, setTimeline] = useState('normal');

  const addonOptions = [
    { id: 'auth', label: 'User Auth & Role-Based Access Control (RBAC)', price: 80 },
    { id: 'admin', label: 'Admin Dashboard & Analytics Panel', price: 120 },
    { id: 'payment', label: 'Payment Gateway / Crypto Wallet Integration', price: 150 },
    { id: 'ai', label: 'AI LLM Embeddings / Vector Search Module', price: 180 },
    { id: 'seo', label: 'Technical SEO & Linux Deployment Hardening', price: 75 }
  ];

  const scaleMultipliers = {
    mvp: { label: 'Small MVP / Prototype', mult: 0.8 },
    standard: { label: 'Standard Production App', mult: 1.0 },
    enterprise: { label: 'Complex / Enterprise Portal', mult: 1.4 }
  };

  const timelineMultipliers = {
    relaxed: { label: 'Flexible (3-4 Weeks)', mult: 0.95 },
    normal: { label: 'Standard (2 Weeks)', mult: 1.0 },
    urgent: { label: 'Priority Rush (1 Week)', mult: 1.25 }
  };

  // Base pricing
  const basePrices = {
    fullstack: 350,
    web3: 500,
    'ai-data': 400,
    optimization: 250
  };

  const calculateEstimate = () => {
    let base = basePrices[selectedService] || 350;
    
    // Add addons
    let addonsTotal = selectedAddons.reduce((sum, addonId) => {
      let addonObj = addonOptions.find(a => a.id === addonId);
      return sum + (addonObj ? addonObj.price : 0);
    }, 0);

    let subtotal = (base + addonsTotal) * scaleMultipliers[selectedScale].mult * timelineMultipliers[timeline].mult;
    let minPrice = Math.round(subtotal * 0.9);
    let maxPrice = Math.round(subtotal * 1.1);

    return { minPrice, maxPrice };
  };

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const estimate = calculateEstimate();

  const handleApplyQuote = () => {
    let serviceObj = freelanceServices.find(s => s.id === selectedService);
    let summary = `Project Quote Inquiry: ${serviceObj ? serviceObj.title : 'Custom Project'} (${scaleMultipliers[selectedScale].label}) with estimate $${estimate.minPrice} - $${estimate.maxPrice}.`;
    onSendQuote(summary);
  };

  return (
    <section id="estimator" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Interactive Pricing Tool
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '1rem' }}>
            Calculate Your Freelance Project Estimate
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Transparent pricing without hidden fees. Customize your project scope below to view an immediate estimated cost range.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div
          className="classic-card"
          style={{
            padding: '2.5rem',
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-medium)',
            boxShadow: 'var(--shadow-xl)',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem'
          }}
        >
          {/* Controls Column */}
          <div style={{ gridColumn: 'span 12', '@media (min-width: 992px)': { gridColumn: 'span 7' } }} className="est-ctrl-col">
            
            {/* Step 1: Select Service Type */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-900)', display: 'block', marginBottom: '0.75rem' }}>
                1. Select Core Service Type:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                {freelanceServices.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      textAlign: 'left',
                      border: selectedService === s.id ? '2px solid var(--brand-600)' : '1px solid var(--border-light)',
                      backgroundColor: selectedService === s.id ? 'var(--brand-50)' : 'var(--bg-main)',
                      color: selectedService === s.id ? 'var(--brand-700)' : 'var(--primary-900)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div>{s.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', marginTop: '2px' }}>
                      Starts {s.startingPrice}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-900)', display: 'block', marginBottom: '0.75rem' }}>
                2. Project Scale & Scope:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {Object.keys(scaleMultipliers).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedScale(key)}
                    style={{
                      flex: 1,
                      minWidth: '160px',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: selectedScale === key ? '2px solid var(--brand-600)' : '1px solid var(--border-light)',
                      backgroundColor: selectedScale === key ? 'var(--brand-50)' : '#ffffff',
                      color: selectedScale === key ? 'var(--brand-700)' : 'var(--primary-900)',
                      fontWeight: 600,
                      fontSize: '0.875rem'
                    }}
                  >
                    {scaleMultipliers[key].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Addons */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-900)', display: 'block', marginBottom: '0.75rem' }}>
                3. Feature Addons (Optional):
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      style={{
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: isChecked ? '1px solid var(--border-brand)' : '1px solid var(--border-light)',
                        backgroundColor: isChecked ? 'var(--brand-50)' : 'var(--bg-main)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        fontSize: '0.875rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: isChecked ? 'var(--brand-700)' : 'var(--primary-900)', fontWeight: isChecked ? 600 : 400 }}>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '4px',
                            border: isChecked ? 'none' : '1px solid var(--border-medium)',
                            backgroundColor: isChecked ? 'var(--brand-600)' : '#ffffff',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {isChecked && <Check size={12} />}
                        </div>
                        {addon.label}
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-600)' }}>
                        +${addon.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Timeline */}
            <div>
              <label style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-900)', display: 'block', marginBottom: '0.75rem' }}>
                4. Preferred Delivery Timeline:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {Object.keys(timelineMultipliers).map((tKey) => (
                  <button
                    key={tKey}
                    onClick={() => setTimeline(tKey)}
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: timeline === tKey ? '2px solid var(--brand-600)' : '1px solid var(--border-light)',
                      backgroundColor: timeline === tKey ? 'var(--brand-50)' : '#ffffff',
                      color: timeline === tKey ? 'var(--brand-700)' : 'var(--primary-900)',
                      fontWeight: 600,
                      fontSize: '0.85rem'
                    }}
                  >
                    {timelineMultipliers[tKey].label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Card Column */}
          <div style={{ gridColumn: 'span 12', '@media (min-width: 992px)': { gridColumn: 'span 5' } }} className="est-sum-col">
            <div
              style={{
                backgroundColor: 'var(--primary-900)',
                color: '#ffffff',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  <Sparkles size={16} /> Estimated Investment
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Estimated Cost Range:</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                    ${estimate.minPrice} – ${estimate.maxPrice}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '4px' }}>
                    *USD equivalent (or direct local INR calculation). Includes code ownership & documentation.
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #334155', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>
                    Included in Every Project:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.825rem', color: '#94a3b8' }}>
                    <li>✓ 100% Clean Source Code Repository</li>
                    <li>✓ Linux Server Deployment & Setup</li>
                    <li>✓ 30 Days Free Post-Launch Support</li>
                    <li>✓ Strict Confidentiality & Code Quality</li>
                  </ul>
                </div>
              </div>

              <div>
                <button
                  onClick={handleApplyQuote}
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--brand-600)',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--brand-700)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--brand-600)')}
                >
                  Send Inquiry With This Quote <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .est-ctrl-col { grid-column: span 7 !important; }
          .est-sum-col { grid-column: span 5 !important; }
        }
      `}</style>
    </section>
  );
}
