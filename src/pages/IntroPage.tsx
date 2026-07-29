export function IntroPage() {
  return (
    <>
      <div className="intro-hero">
        <div className="intro-brand">
          <div className="intro-brand-mark">Z</div>
          <div>
            <div className="intro-brand-text">ZYN GLOBAL</div>
            <div style={{ fontSize: 10, color: 'var(--surface-600)', fontFamily: 'var(--font-mono)', marginTop: 1 }}>Intelligence Evolved.</div>
          </div>
        </div>

        <h1 className="intro-title">
          The design language<br/>
          behind <span className="gradient-text">humAIne</span>
        </h1>

        <p className="intro-subtitle">
          A system built for dark interfaces, conversational AI, and enterprise trust.
          Not a template — a point of view.
        </p>

        <div className="intro-palette-strip">
          <span style={{ background: '#5271FF' }} />
          <span style={{ background: '#B5B7F6' }} />
          <span style={{ background: '#E5C3F0' }} />
          <span style={{ background: '#ACE1E4' }} />
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Brand Values</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            {
              title: 'Minimal, Not Empty',
              desc: 'Every pixel earns its place. We strip away noise but never starve the interface of personality. White space is a design decision, not a default.',
              accent: '#5271FF',
            },
            {
              title: 'Bold, Not Loud',
              desc: 'We use colour, scale, and contrast to create hierarchy — not to scream. The brand gradient appears at moments of confidence: CTAs, confirmations, delight.',
              accent: '#B5B7F6',
            },
            {
              title: 'Interactive, Not Passive',
              desc: 'The UI responds. Hovers glow, toggles animate, transitions feel physical. Users should feel the interface is alive and listening to them.',
              accent: '#E5C3F0',
            },
            {
              title: 'Personalised, Not Generic',
              desc: 'Every user sees their name, their data, their context. The AI adapts. The dashboard reflects their role. Nothing feels one-size-fits-all.',
              accent: '#ACE1E4',
            },
          ].map((v) => (
            <div key={v.title} className="card" style={{ padding: 20 }}>
              <div style={{ width: 3, height: 20, borderRadius: 2, background: v.accent, marginBottom: 12 }} />
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--surface-50)', marginBottom: 6, letterSpacing: -0.2 }}>{v.title}</div>
              <div style={{ fontSize: 12.5, color: 'var(--surface-500)', lineHeight: 1.55 }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Design Principles</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { num: '01', title: 'Challenge the status quo', desc: 'Enterprise software doesn\'t have to look like enterprise software. We borrow from fintech, gaming, and editorial design to make security admin feel modern.' },
            { num: '02', title: 'Dark-first, always', desc: 'Our users work in low-light ops rooms, late-night sessions, and always-on dashboards. Dark mode is the default, light mode is the exception.' },
            { num: '03', title: 'Trust through clarity', desc: 'When an AI makes a decision about your data, the interface must explain it clearly. No ambiguity. No hidden states. Transparency is a design requirement.' },
            { num: '04', title: 'Motion with purpose', desc: 'Every animation communicates something — a state change, a success, a warning. We don\'t animate for decoration. If it moves, it means something.' },
            { num: '05', title: 'Galaxy, not circus', desc: 'The space-inspired aesthetic is a subtle undercurrent, not a theme park. Stars twinkle gently. Gradients breathe. The brand colours emerge naturally.' },
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

      <div className="section">
        <h2 className="section-title">Stack</h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['React 19', 'TypeScript', 'Vite', 'CSS Variables', 'Lucide Icons', 'Chart.js'].map((t) => (
            <span key={t} className="code-token">{t}</span>
          ))}
        </div>
      </div>

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

      <div className="section">
        <h2 className="section-title">Typography</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
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
    </>
  )
}
