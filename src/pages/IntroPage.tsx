export function IntroPage() {
  return (
    <>
      <div className="intro-hero">
        <div className="intro-logo">H</div>
        <h1 className="intro-title">HumAIne Design System</h1>
        <p className="intro-subtitle">
          The design language powering HumAIne — ZynGlobal's AI-powered enterprise platform.
          Built for dark-first interfaces with a galaxy-inspired aesthetic.
        </p>

        <div className="intro-palette">
          <span style={{ background: '#5271FF' }} />
          <span style={{ background: '#768AFF' }} />
          <span style={{ background: '#B5B7F6' }} />
          <span style={{ background: '#E5C3F0' }} />
          <span style={{ background: '#ACE1E4' }} />
        </div>

        <div className="intro-stats">
          <div className="intro-stat">
            <div className="intro-stat-value" style={{ color: 'var(--shiny-blue)' }}>4</div>
            <div className="intro-stat-label">Brand Colors</div>
          </div>
          <div className="intro-stat">
            <div className="intro-stat-value" style={{ color: 'var(--ryleigh)' }}>12</div>
            <div className="intro-stat-label">Surface Tones</div>
          </div>
          <div className="intro-stat">
            <div className="intro-stat-value" style={{ color: 'var(--common-lilac)' }}>7</div>
            <div className="intro-stat-label">Components</div>
          </div>
          <div className="intro-stat">
            <div className="intro-stat-value" style={{ color: 'var(--comfort-ice)' }}>5</div>
            <div className="intro-stat-label">Radius Steps</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Design Principles</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { title: 'Dark-First', desc: 'Every component is designed for dark interfaces first, with light mode as an accessible alternative.', color: 'var(--shiny-blue)' },
            { title: 'Galaxy Aesthetic', desc: 'Subtle nebula glows, star-field textures, and deep-space depth create an immersive feel without distraction.', color: 'var(--ryleigh)' },
            { title: 'Clarity Over Flash', desc: 'Beautiful defaults with clean typography and generous whitespace. The UI stays out of the user\'s way.', color: 'var(--common-lilac)' },
          ].map((p) => (
            <div key={p.title} className="card">
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, marginBottom: 12 }} />
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--surface-50)', marginBottom: 8 }}>{p.title}</div>
              <div style={{ fontSize: 13, color: 'var(--surface-400)', lineHeight: 1.5 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Tech Stack</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {['React 19', 'TypeScript', 'Vite', 'CSS Variables', 'Lucide Icons', 'Chart.js'].map((t) => (
            <span key={t} className="code-token">{t}</span>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Quick Reference</h2>
        <div className="demo-table" style={{ overflow: 'auto' }}>
          <table className="demo-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Value</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><span className="code-token">--primary-500</span></td><td>#5271FF</td><td>Primary actions, active states</td></tr>
              <tr><td><span className="code-token">--surface-950</span></td><td>#1B1B1B</td><td>Cards, sidebar background</td></tr>
              <tr><td><span className="code-token">--font-body</span></td><td>Helvetica Neue</td><td>All body text</td></tr>
              <tr><td><span className="code-token">--font-display</span></td><td>Space Grotesk</td><td>Headings, labels</td></tr>
              <tr><td><span className="code-token">--radius-md</span></td><td>8px</td><td>Buttons, inputs, cards</td></tr>
              <tr><td><span className="code-token">--gradient-brand</span></td><td>#7C6CF8 → #E879A0</td><td>Hero CTAs, brand accents</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
