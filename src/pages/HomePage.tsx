import { useState, useEffect } from 'react'

export function HomePage() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(true) }, [])

  return (
    <div className={`home ${visible ? 'home--visible' : ''}`}>
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-glow" />

        <div className="home-hero-layout">
          <div className="home-hero-text">
            <div className="home-eyebrow">
              <svg width="14" height="14" viewBox="0 0 56 56" fill="none" style={{ marginRight: 6 }}>
                <defs>
                  <linearGradient id="hg" x1="12" y1="8" x2="44" y2="48" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ACE1E4"/>
                    <stop offset="40%" stopColor="#5271FF"/>
                    <stop offset="70%" stopColor="#B5B7F6"/>
                    <stop offset="100%" stopColor="#E5C3F0"/>
                  </linearGradient>
                </defs>
                <path d="M28 4c-6 0-10 4-10 10s8 14 10 18c2-4 10-12 10-18S34 4 28 4zm0 50c6 0 10-4 10-10s-8-14-10-18c-2 4-10 12-10 18s4 10 10 10z" fill="url(#hg)" opacity="0.9"/>
              </svg>
              by ZynGlobal
            </div>

            <h1 className="home-title">
              <span className="home-title-line home-title-line--1">The design</span>
              <span className="home-title-line home-title-line--2">language behind</span>
              <span className="home-title-line home-title-line--3">
                <span className="home-title-brand">hum</span>
                <span className="home-title-brand home-title-brand--ai">AI</span>
                <span className="home-title-brand home-title-brand--ne">ne</span>
              </span>
            </h1>

            <p className="home-subtitle">
              A system built for dark interfaces, conversational AI, and enterprise trust.
            </p>

            <div className="home-palette">
              <span style={{ background: '#5271FF' }} />
              <span style={{ background: '#B5B7F6' }} />
              <span style={{ background: '#E5C3F0' }} />
              <span style={{ background: '#ACE1E4' }} />
            </div>
          </div>

          <div className="home-hero-illustration">
            <img src="/icons/palette.png" alt="" className="home-hero-img" />
          </div>
        </div>
      </section>

      {/* Identity strip */}
      <section className="home-identity">
        <div className="home-identity-card">
          <svg width="40" height="40" viewBox="0 0 56 56" fill="none">
            <defs>
              <linearGradient id="zgl" x1="12" y1="8" x2="44" y2="48" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ACE1E4"/>
                <stop offset="40%" stopColor="#5271FF"/>
                <stop offset="70%" stopColor="#B5B7F6"/>
                <stop offset="100%" stopColor="#E5C3F0"/>
              </linearGradient>
            </defs>
            <path d="M28 4c-6 0-10 4-10 10s8 14 10 18c2-4 10-12 10-18S34 4 28 4zm0 50c6 0 10-4 10-10s-8-14-10-18c-2 4-10 12-10 18s4 10 10 10z" fill="url(#zgl)" opacity="0.9"/>
          </svg>
          <div>
            <div className="home-identity-name">ZYN GLOBAL</div>
            <div className="home-identity-tag">Intelligence Evolved.</div>
          </div>
        </div>

        <div className="home-identity-divider" />

        <div className="home-identity-card">
          <div className="home-identity-humaine">
            <span style={{ color: '#E5C3F0' }}>hum</span>
            <span style={{ color: '#5271FF' }}>AI</span>
            <span style={{ color: '#B5B7F6' }}>ne</span>
          </div>
          <div>
            <div className="home-identity-tag" style={{ marginTop: 2 }}>Disruptively Human . Trust Co-created.</div>
          </div>
        </div>
      </section>

      {/* Values — illustration-heavy cards */}
      <section className="home-values">
        <div className="home-section-label">Brand Values</div>
        <div className="home-values-grid">
          {[
            { title: 'Minimal, Not Empty', img: '/icons/minimal.png', desc: 'Every pixel earns its place.' },
            { title: 'Bold, Not Loud', img: '/icons/bold.png', desc: 'Hierarchy through contrast, not noise.' },
            { title: 'Interactive, Not Passive', img: '/icons/interactive.png', desc: 'The UI responds. Hovers glow.' },
            { title: 'Personalised, Not Generic', img: '/icons/personalised.png', desc: 'Every user sees their context.' },
          ].map((v, i) => (
            <div key={v.title} className="home-value" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
              <div className="home-value-img-wrap">
                <img src={v.img} alt="" className="home-value-img" />
              </div>
              <div className="home-value-title">{v.title}</div>
              <div className="home-value-desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="home-stats">
        {[
          { num: '5', label: 'Products' },
          { num: '40', label: 'Component sets' },
          { num: '3.9K', label: 'Lines of CSS' },
          { num: '1', label: 'Source of truth' },
        ].map((s) => (
          <div key={s.label} className="home-stat">
            <div className="home-stat-num">{s.num}</div>
            <div className="home-stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Download */}
      <section className="home-download">
        <div className="home-section-label">Get the System</div>
        <p className="home-download-desc">
          One CSS file. Every token, component, and layout from all HumAIne products — Enterprise, Personal, Admin, Backoffice, and Mobile.
        </p>
        <a href="/cosmos-design-system.css" download className="home-download-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download cosmos-design-system.css
          <span className="home-download-size">249 KB</span>
        </a>
      </section>

      {/* Principles — compact */}
      <section className="home-principles">
        <div className="home-section-label">Design Principles</div>
        {[
          { num: '01', title: 'Challenge the status quo' },
          { num: '02', title: 'Dark-first, always' },
          { num: '03', title: 'Trust through clarity' },
          { num: '04', title: 'Motion with purpose' },
          { num: '05', title: 'Galaxy, not circus' },
        ].map((p, i) => (
          <div key={p.num} className="home-principle" style={{ animationDelay: `${0.6 + i * 0.08}s` }}>
            <span className="home-principle-num">{p.num}</span>
            <div className="home-principle-title">{p.title}</div>
          </div>
        ))}
      </section>

      {/* Stack */}
      <section className="home-stack">
        <div className="home-section-label">Stack</div>
        <div className="home-stack-tags">
          {['React 19', 'TypeScript', 'Vite', 'CSS Variables', 'Lucide Icons', 'Chart.js'].map((t) => (
            <span key={t} className="code-token">{t}</span>
          ))}
        </div>
      </section>
    </div>
  )
}
