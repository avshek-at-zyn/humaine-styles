export function GradientsPage() {
  const gradients = [
    {
      name: 'Brand Gradient',
      css: 'linear-gradient(135deg, #7C6CF8, #E879A0)',
      token: '--gradient-brand',
      desc: 'Hero CTAs, auth primary buttons, brand accents',
    },
    {
      name: 'Galaxy',
      css: 'linear-gradient(135deg, #0D3997 0%, #5271FF 40%, #7C6CF8 70%, #E879A0 100%)',
      token: '--gradient-galaxy',
      desc: 'Decorative backgrounds, progress bars, loading states',
    },
    {
      name: 'Aurora',
      css: 'linear-gradient(135deg, #5271FF, #B5B7F6, #E5C3F0, #ACE1E4)',
      token: '--gradient-aurora',
      desc: 'Display text fills, hero sections, brand moments',
    },
    {
      name: 'Nebula',
      css: 'radial-gradient(ellipse at 20% 50%, rgba(82,113,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(181,183,246,0.1) 0%, transparent 40%)',
      token: '--gradient-nebula',
      desc: 'Page backgrounds, ambient lighting effects',
    },
    {
      name: 'Subtle Glow',
      css: 'radial-gradient(circle at 50% 0%, rgba(82,113,255,0.1), transparent 60%)',
      token: 'Custom',
      desc: 'Card hover states, focus enhancements',
    },
  ]

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Foundation</div>
        <h1 className="page-title">Gradients</h1>
        <p className="page-desc">
          Multi-stop gradients that bring the galaxy aesthetic to life. Used sparingly for brand moments, CTAs, and ambient effects.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Gradient Tokens</h2>
        {gradients.map((g) => (
          <div key={g.name} className="gradient-row">
            <div className="gradient-bar" style={{ background: g.css }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div className="gradient-name">{g.name}</div>
                <div className="gradient-desc">{g.desc}</div>
              </div>
              <span className="code-token">{g.token}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="section">
        <h2 className="section-title">Text with Aurora Gradient</h2>
        <div className="card" style={{ textAlign: 'center', padding: 40 }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 48,
            fontWeight: 700,
            background: 'linear-gradient(135deg, #5271FF, #B5B7F6, #E5C3F0, #ACE1E4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: -1,
          }}>
            Intelligence, Beautifully.
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Gradient Button Examples</h2>
        <div className="component-grid">
          <button className="demo-btn demo-btn-gradient demo-btn-lg" style={{ borderRadius: 'var(--radius-full)' }}>
            Get Started
          </button>
          <button className="demo-btn demo-btn-lg" style={{
            background: 'linear-gradient(135deg, #0D3997 0%, #5271FF 40%, #7C6CF8 70%, #E879A0 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 'var(--radius-lg)',
          }}>
            Explore Galaxy
          </button>
          <button className="demo-btn demo-btn-lg" style={{
            background: 'linear-gradient(135deg, #5271FF, #B5B7F6, #E5C3F0, #ACE1E4)',
            color: '#121315',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
          }}>
            Aurora Mode
          </button>
        </div>
      </div>
    </>
  )
}
