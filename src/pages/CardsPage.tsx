export function CardsPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Card</h1>
        <p className="page-desc">
          Glass-morphic cards with subtle backdrop blur and border highlights. The primary container for grouping related content.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Variants</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          <div className="demo-card">
            <div className="demo-card-title">Default Card</div>
            <div className="demo-card-desc">Standard card with transparent glass background and subtle border.</div>
          </div>
          <div className="demo-card" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="demo-card-title">Highlighted</div>
            <div className="demo-card-desc">Card with primary border accent for active or selected states.</div>
          </div>
          <div className="demo-card" style={{ background: 'rgba(82,113,255,0.08)', borderColor: 'rgba(82,113,255,0.15)' }}>
            <div className="demo-card-title">Accent Card</div>
            <div className="demo-card-desc">Blue-tinted card for featured content or primary sections.</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">KPI Cards</h2>
        <div className="demo-kpi-grid">
          <div className="demo-kpi">
            <div className="demo-kpi-label">Total Users</div>
            <div className="demo-kpi-value">24,891</div>
            <div className="demo-kpi-change up">+12.5%</div>
          </div>
          <div className="demo-kpi">
            <div className="demo-kpi-label">Active Sessions</div>
            <div className="demo-kpi-value">1,284</div>
            <div className="demo-kpi-change up">+8.3%</div>
          </div>
          <div className="demo-kpi">
            <div className="demo-kpi-label">Response Time</div>
            <div className="demo-kpi-value">142ms</div>
            <div className="demo-kpi-change down">-3.2%</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Content Card</h2>
        <div className="card" style={{ maxWidth: 400 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-full)', background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 600, fontSize: 14 }}>AI</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--surface-50)' }}>HumAIne Assistant</div>
              <div style={{ fontSize: 11, color: 'var(--surface-500)' }}>Active now</div>
            </div>
          </div>
          <div style={{ fontSize: 13, color: 'var(--surface-300)', lineHeight: 1.6, marginBottom: 16 }}>
            Your AI assistant is ready. Start a conversation to get insights from your enterprise data.
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="demo-btn demo-btn-primary demo-btn-sm">Start Chat</button>
            <button className="demo-btn demo-btn-ghost demo-btn-sm">Learn More</button>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead>
            <tr><th>Property</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr><td>Background</td><td>rgba(27, 27, 35, 0.5)</td></tr>
            <tr><td>Backdrop Filter</td><td>blur(8px)</td></tr>
            <tr><td>Border</td><td>1px solid rgba(255,255,255,0.06)</td></tr>
            <tr><td>Border Radius</td><td>12px (--radius-lg)</td></tr>
            <tr><td>Padding</td><td>24px</td></tr>
            <tr><td>Hover Border</td><td>rgba(82,113,255,0.1)</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
