export function NavigationPage() {
  const DashboardIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  )
  const ChatIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>
  )
  const DocIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
    </svg>
  )
  const NewsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
    </svg>
  )

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Sidebar Menu</h1>
        <p className="page-desc">
          Navigation items with icons. Three visual states: default, hover, and active. Active uses a pill shape with brand accent colour.
        </p>
      </div>

      {/* States */}
      <div className="section">
        <h2 className="section-title">States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, maxWidth: 720 }}>
          {/* Default */}
          <div>
            <div className="sb-demo-state-label">Default</div>
            <div className="card" style={{ padding: 8, maxWidth: 220 }}>
              <div className="sb-demo-item">
                <span className="sb-demo-item-icon"><DashboardIcon /></span>
                Dashboard
              </div>
            </div>
            <div style={{ marginTop: 8, fontSize: 10, color: 'var(--surface-600)', fontFamily: 'var(--font-mono)', lineHeight: 1.5 }}>
              color: var(--surface-100)<br/>
              bg: transparent<br/>
              icon opacity: 0.85
            </div>
          </div>
          {/* Hover */}
          <div>
            <div className="sb-demo-state-label">Hover</div>
            <div className="card" style={{ padding: 8, maxWidth: 220 }}>
              <div className="sb-demo-item" style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--surface-50)' }}>
                <span className="sb-demo-item-icon"><DashboardIcon /></span>
                Dashboard
              </div>
            </div>
            <div style={{ marginTop: 8, fontSize: 10, color: 'var(--surface-600)', fontFamily: 'var(--font-mono)', lineHeight: 1.5 }}>
              color: var(--surface-50)<br/>
              bg: rgba(255,255,255,0.06)<br/>
              icon opacity: 1
            </div>
          </div>
          {/* Active */}
          <div>
            <div className="sb-demo-state-label">Active</div>
            <div className="card" style={{ padding: 8, maxWidth: 220 }}>
              <div className="sb-demo-item sb-demo-item--active">
                <span className="sb-demo-item-icon" style={{ color: 'var(--primary-300)' }}><DashboardIcon /></span>
                Dashboard
              </div>
            </div>
            <div style={{ marginTop: 8, fontSize: 10, color: 'var(--surface-600)', fontFamily: 'var(--font-mono)', lineHeight: 1.5 }}>
              color: var(--primary-300)<br/>
              bg: var(--surface-950)<br/>
              radius: 40px (pill)
            </div>
          </div>
        </div>
      </div>

      {/* Full sidebar example */}
      <div className="section">
        <h2 className="section-title">Full Sidebar</h2>
        <div className="card" style={{ maxWidth: 256, padding: 8 }}>
          <div className="sb-demo-item sb-demo-item--active">
            <span className="sb-demo-item-icon" style={{ color: 'var(--primary-300)' }}><ChatIcon /></span>
            HumAIne
          </div>
          <div className="sb-demo-item">
            <span className="sb-demo-item-icon"><DocIcon /></span>
            Document Vault
          </div>
          <div className="sb-demo-item">
            <span className="sb-demo-item-icon"><NewsIcon /></span>
            News & PR
          </div>
          <div className="sb-demo-item">
            <span className="sb-demo-item-icon"><DashboardIcon /></span>
            Dashboard
          </div>
        </div>
      </div>

      {/* Collapsed */}
      <div className="section">
        <h2 className="section-title">Collapsed</h2>
        <p className="section-desc">In responsive or collapsed mode, labels hide and items center the icon.</p>
        <div className="card" style={{ maxWidth: 56, padding: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[
            { Icon: ChatIcon, active: true },
            { Icon: DocIcon, active: false },
            { Icon: NewsIcon, active: false },
            { Icon: DashboardIcon, active: false },
          ].map(({ Icon, active }, i) => (
            <div key={i} className={`sb-demo-item ${active ? 'sb-demo-item--active' : ''}`} style={{ justifyContent: 'center', padding: 10, gap: 0 }}>
              <span className="sb-demo-item-icon" style={active ? { color: 'var(--primary-300)' } : {}}><Icon /></span>
            </div>
          ))}
        </div>
      </div>

      {/* TopNavbar */}
      <div className="section">
        <h2 className="section-title">TopNavbar</h2>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{
            height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 20px', background: 'var(--surface-950)', borderBottom: '1px solid rgba(255,255,255,0.04)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>H</div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--surface-50)' }}>HumAIne</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--surface-400)" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--surface-400)" strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 600 }}>AS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Item Padding</td><td>8px 12px</td></tr>
            <tr><td>Font</td><td>14px / 500 / var(--font-body)</td></tr>
            <tr><td>Icon Size</td><td>20 &times; 20px</td></tr>
            <tr><td>Default Color</td><td>var(--surface-100)</td></tr>
            <tr><td>Hover Background</td><td>rgba(255,255,255,0.06)</td></tr>
            <tr><td>Active Background</td><td>var(--surface-950)</td></tr>
            <tr><td>Active Color</td><td>var(--primary-300)</td></tr>
            <tr><td>Active Radius</td><td>40px (pill)</td></tr>
            <tr><td>Default Radius</td><td>2px</td></tr>
            <tr><td>Sidebar Width</td><td>256px / 56px collapsed</td></tr>
            <tr><td>Topbar Height</td><td>56px</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
