export function SocialButtonPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Social Button</h1>
        <p className="page-desc">
          SSO and social login buttons used on auth screens. Consistent sizing with provider-branded colours.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Provider Buttons</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
          {[
            { name: 'Google', bg: '#fff', color: '#333', icon: 'G', iconColor: '#4285F4' },
            { name: 'Microsoft', bg: '#fff', color: '#333', icon: '⊞', iconColor: '#00A4EF' },
            { name: 'Slack', bg: '#fff', color: '#333', icon: '#', iconColor: '#E01E5A' },
            { name: 'Apple', bg: '#000', color: '#fff', icon: '', iconColor: '#fff' },
          ].map((p) => (
            <button key={p.name} style={{
              height: 44, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              background: p.bg, color: p.color, border: '1px solid var(--surface-700)',
              borderRadius: 'var(--radius-md)', fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-body)',
              cursor: 'pointer',
            }}>
              <span style={{ fontSize: 16, color: p.iconColor, fontWeight: 700 }}>{p.icon}</span>
              Continue with {p.name}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Compact Row</h2>
        <p className="section-desc">Horizontal layout used when space is limited — icons only or side-by-side buttons.</p>
        <div className="card">
          <div style={{ display: 'flex', gap: 12, maxWidth: 360 }}>
            {[
              { name: 'Google', icon: 'G', iconColor: '#4285F4' },
              { name: 'Microsoft', icon: '⊞', iconColor: '#00A4EF' },
              { name: 'Slack', icon: '#', iconColor: '#E01E5A' },
            ].map((p) => (
              <button key={p.name} style={{
                flex: 1, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                background: 'var(--surface-900)', border: '1px solid var(--surface-800)',
                borderRadius: 'var(--radius-md)', fontSize: 12, color: 'var(--surface-200)',
                cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 500,
              }}>
                <span style={{ fontSize: 14, color: p.iconColor, fontWeight: 700 }}>{p.icon}</span>
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">SSO / Enterprise</h2>
        <div className="card" style={{ maxWidth: 360 }}>
          <button style={{
            height: 44, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            background: 'transparent', border: '1px solid var(--primary-500)',
            borderRadius: 'var(--radius-md)', fontSize: 13, color: 'var(--primary-300)',
            cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 500,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            Use Single Sign-on
          </button>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Height</td><td>44px</td></tr>
            <tr><td>Border Radius</td><td>8px (--radius-md)</td></tr>
            <tr><td>Font Size</td><td>13px</td></tr>
            <tr><td>Font Weight</td><td>500</td></tr>
            <tr><td>Icon Size</td><td>16px</td></tr>
            <tr><td>Gap (icon to text)</td><td>10px</td></tr>
            <tr><td>Google/Microsoft bg</td><td>#fff with dark text</td></tr>
            <tr><td>Dark variant bg</td><td>var(--surface-900)</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
