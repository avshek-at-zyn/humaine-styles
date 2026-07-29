export function BadgesPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Badge</h1>
        <p className="page-desc">
          Status indicators and labels using the full brand palette. Pill-shaped with translucent backgrounds for a glassy feel.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Semantic Badges</h2>
        <div className="card">
          <div className="component-grid">
            <span className="demo-badge demo-badge-primary">Active</span>
            <span className="demo-badge demo-badge-success">Verified</span>
            <span className="demo-badge demo-badge-warning">Pending</span>
            <span className="demo-badge demo-badge-error">Failed</span>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Brand Badges</h2>
        <div className="card">
          <div className="component-grid">
            <span className="demo-badge demo-badge-primary">Shiny Blue</span>
            <span className="demo-badge demo-badge-lilac">Common Lilac</span>
            <span className="demo-badge demo-badge-ice">Comfort Ice</span>
            <span className="demo-badge" style={{
              background: 'rgba(181,183,246,0.12)', color: 'var(--ryleigh)',
              border: '1px solid rgba(181,183,246,0.2)',
            }}>Ryleigh</span>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">In Context</h2>
        <div className="card">
          <table className="demo-table">
            <thead>
              <tr><th>User</th><th>Role</th><th>Status</th><th>MFA</th></tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 600 }}>JD</div>
                  Jane Doe
                </td>
                <td><span className="demo-badge demo-badge-primary">Admin</span></td>
                <td><span className="demo-badge demo-badge-success">Active</span></td>
                <td><span className="demo-badge demo-badge-success">Enabled</span></td>
              </tr>
              <tr>
                <td style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--surface-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 600 }}>AS</div>
                  Alex Smith
                </td>
                <td><span className="demo-badge demo-badge-lilac">Viewer</span></td>
                <td><span className="demo-badge demo-badge-warning">Pending</span></td>
                <td><span className="demo-badge demo-badge-error">Disabled</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead>
            <tr><th>Property</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr><td>Height</td><td>Auto (padding-based)</td></tr>
            <tr><td>Padding</td><td>3px 10px</td></tr>
            <tr><td>Font Size</td><td>11px</td></tr>
            <tr><td>Font Weight</td><td>500</td></tr>
            <tr><td>Border Radius</td><td>9999px (--radius-full)</td></tr>
            <tr><td>Background</td><td>Color at 12-15% opacity</td></tr>
            <tr><td>Border</td><td>1px solid color at 20% opacity</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
