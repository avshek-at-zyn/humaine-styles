export function NavigationPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Navigation</h1>
        <p className="page-desc">
          Sidebar navigation items with colour-coded dots and active state highlighting. The primary way users move between sections.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">SidebarMenuItem</h2>
        <div className="card" style={{ maxWidth: 280 }}>
          <div className="demo-sidebar-item active">
            <span className="dot" style={{ background: '#5271FF', boxShadow: '0 0 8px rgba(82,113,255,0.5)' }} />
            Dashboard
          </div>
          <div className="demo-sidebar-item">
            <span className="dot" style={{ background: '#B5B7F6' }} />
            HumAIne Chat
          </div>
          <div className="demo-sidebar-item">
            <span className="dot" style={{ background: '#E5C3F0' }} />
            Document Vault
          </div>
          <div className="demo-sidebar-item">
            <span className="dot" style={{ background: '#ACE1E4' }} />
            News & PR
          </div>
          <div className="demo-sidebar-item">
            <span className="dot" style={{ background: '#4DCC8F' }} />
            Access Mgmt
          </div>
          <div className="demo-sidebar-item">
            <span className="dot" style={{ background: '#FFB84D' }} />
            Settings
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">TopNavbar</h2>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{
            height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 20px', background: 'var(--surface-950)', borderBottom: '1px solid var(--border-subtle)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 'var(--radius-md)', background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>H</div>
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

      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead>
            <tr><th>Property</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr><td>Item Height</td><td>36px (padding-based)</td></tr>
            <tr><td>Item Padding</td><td>9px 12px</td></tr>
            <tr><td>Dot Size</td><td>8px</td></tr>
            <tr><td>Font Size</td><td>13px</td></tr>
            <tr><td>Active Background</td><td>rgba(82,113,255,0.1)</td></tr>
            <tr><td>Active Border</td><td>rgba(82,113,255,0.15)</td></tr>
            <tr><td>Sidebar Width</td><td>256px</td></tr>
            <tr><td>Topbar Height</td><td>64px (app) / 56px (compact)</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
