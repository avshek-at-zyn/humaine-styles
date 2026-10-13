import { useTokens } from '../useTokens'

export function GradientsPage() {
  /* The two product gradients, read live from cosmos/tokens.css. */
  const product = [
    {
      name: 'Main button',
      token: '--gradient-cta',
      desc: 'The primary button, a switch that is on, and your own chat message — in both apps',
    },
    {
      name: 'Brand',
      token: '--gradient-brand',
      desc: 'The wordmark, highlights, the edge of the chat composer',
    },
  ]
  const live = useTokens(product.map(p => p.token))

  /* Marketing and ambient gradients, kept on this site for brand moments. */
  const gradients = [
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
          Two gradients belong to the product and live in <span className="code-token">cosmos/tokens.css</span>, shared by both apps.
          The rest are for marketing and ambient effects, used sparingly.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Product gradients</h2>
        {product.map((g) => (
          <div key={g.token} className="gradient-row">
            <div className="gradient-bar" style={{ background: `var(${g.token})` }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
              <div>
                <div className="gradient-name">{g.name}</div>
                <div className="gradient-desc">{g.desc}</div>
                <div className="gradient-desc" style={{ marginTop: 4 }}>{live[g.token] || '…'}</div>
              </div>
              <span className="code-token">{g.token}</span>
            </div>
          </div>
        ))}
        <p className="section-desc" style={{ marginTop: 8 }}>
          <span className="code-token">--gradient-btn</span> is the same as <span className="code-token">--gradient-cta</span>, the name the mobile stylesheet has always used. No glow sits under either.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Marketing gradients</h2>
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
          <button className="demo-btn demo-btn-primary demo-btn-lg">
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
