export function PhilosophyPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Philosophy</div>
        <h1 className="page-title">Our Point of View</h1>
        <p className="page-desc">
          Not a template. A design philosophy that challenges enterprise software to feel human.
        </p>
      </div>

      {/* Brand Values with 3D icons */}
      <div className="section">
        <h2 className="section-title">Brand Values</h2>
        <div className="philosophy-values">
          {[
            {
              title: 'Minimal, Not Empty',
              desc: 'Every pixel earns its place. We strip away noise but never starve the interface of personality. White space is a design decision, not a default.',
              img: '/icons/minimal.png',
            },
            {
              title: 'Bold, Not Loud',
              desc: 'We use colour, scale, and contrast to create hierarchy — not to scream. The brand gradient appears at moments of confidence: CTAs, confirmations, delight.',
              img: '/icons/bold.png',
            },
            {
              title: 'Interactive, Not Passive',
              desc: 'The UI responds. Hovers glow, toggles animate, transitions feel physical. Users should feel the interface is alive and listening to them.',
              img: '/icons/interactive.png',
            },
            {
              title: 'Personalised, Not Generic',
              desc: 'Every user sees their name, their data, their context. The AI adapts. The dashboard reflects their role. Nothing feels one-size-fits-all.',
              img: '/icons/personalised.png',
            },
          ].map((v) => (
            <div key={v.title} className="philosophy-value-card">
              <div className="philosophy-value-img-wrap">
                <img src={v.img} alt="" className="philosophy-value-img" />
              </div>
              <div className="philosophy-value-text">
                <div className="philosophy-value-title">{v.title}</div>
                <div className="philosophy-value-desc">{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design Principles */}
      <div className="section">
        <h2 className="section-title">Design Principles</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { num: '01', title: 'Challenge the status quo', desc: 'Enterprise software doesn\'t have to look like enterprise software. We borrow from fintech, gaming, and editorial design.' },
            { num: '02', title: 'Dark-first, always', desc: 'Our users work in low-light ops rooms, late-night sessions, and always-on dashboards.' },
            { num: '03', title: 'Trust through clarity', desc: 'When AI makes a decision about your data, the interface must explain it clearly. No ambiguity.' },
            { num: '04', title: 'Motion with purpose', desc: 'Every animation communicates something — a state change, a success, a warning.' },
            { num: '05', title: 'Galaxy, not circus', desc: 'The space aesthetic is a subtle undercurrent, not a theme park. Stars twinkle gently.' },
          ].map((p) => (
            <div key={p.num} style={{
              display: 'flex', gap: 20, padding: '18px 0',
              borderBottom: '1px solid rgba(255,255,255,0.03)',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, color: 'var(--primary-500)', minWidth: 24 }}>{p.num}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--surface-100)', marginBottom: 4, letterSpacing: -0.1 }}>{p.title}</div>
                <div style={{ fontSize: 12.5, color: 'var(--surface-500)', lineHeight: 1.55 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Colour at a Glance */}
      <div className="section">
        <h2 className="section-title">Colour at a Glance</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {[
            { name: 'Shiny Blue', hex: '#5271FF' },
            { name: 'Ryleigh', hex: '#B5B7F6' },
            { name: 'Common Lilac', hex: '#E5C3F0' },
            { name: 'Comfort Ice', hex: '#ACE1E4' },
          ].map((c) => (
            <div key={c.name} style={{ textAlign: 'center' }}>
              <div style={{ height: 48, borderRadius: 8, background: c.hex, marginBottom: 6 }} />
              <div style={{ fontSize: 10, color: 'var(--surface-400)', fontFamily: 'var(--font-display)', fontWeight: 500 }}>{c.name}</div>
              <div style={{ fontSize: 9, color: 'var(--surface-600)', fontFamily: 'var(--font-mono)' }}>{c.hex}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography + Stack */}
      <div className="section">
        <h2 className="section-title">Typography</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontSize: 9, color: 'var(--surface-600)', fontFamily: 'var(--font-mono)', marginBottom: 6 }}>BODY</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 20, color: 'var(--surface-50)' }}>Helvetica Neue</div>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontSize: 9, color: 'var(--surface-600)', fontFamily: 'var(--font-mono)', marginBottom: 6 }}>DISPLAY</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--surface-50)' }}>Space Grotesk</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Stack</h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['React 19', 'TypeScript', 'Vite', 'CSS Variables', 'Lucide Icons', 'Chart.js'].map((t) => (
            <span key={t} className="code-token">{t}</span>
          ))}
        </div>
      </div>
    </>
  )
}
