export function BadgesPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Badge</h1>
        <p className="page-desc">
          Cosmos §9 <span className="code-token">.badge</span>: a small pill with a 12% fill and a 25% edge, no dot. A status that is on —
          Active, This device, Paid — is a primary badge. Green is kept for something that went right.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Status badges</h2>
        <div className="card">
          <div className="component-grid">
            <span className="demo-badge demo-badge-primary">Active</span>
            <span className="demo-badge demo-badge-neutral">Refunded</span>
            <span className="demo-badge demo-badge-warning">Expired</span>
            <span className="demo-badge demo-badge-error">Declined</span>
            <span className="demo-badge demo-badge-success">Strong</span>
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Badge</th><th>Class</th><th>When</th></tr></thead>
          <tbody>
            <tr><td><span className="demo-badge demo-badge-primary">Active</span></td><td>.badge--primary</td><td>Something that is on: MFA active, this device, paid, a plan's saving</td></tr>
            <tr><td><span className="demo-badge demo-badge-neutral">Refunded</span></td><td>.badge--neutral</td><td>A settled state that needs nothing</td></tr>
            <tr><td><span className="demo-badge demo-badge-warning">Expired</span></td><td>.badge--warning</td><td>Something has run out; nothing has gone wrong</td></tr>
            <tr><td><span className="demo-badge demo-badge-error">Declined</span></td><td>.badge--danger</td><td>Something went wrong</td></tr>
            <tr><td><span className="demo-badge demo-badge-success">Strong</span></td><td>.badge--success</td><td>Something went right — rarely a badge at all</td></tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2 className="section-title">Identity Badges</h2>
        <p className="section-desc">For marketing and the brand pages, not product status.</p>
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
                <td><span className="demo-badge demo-badge-primary">Active</span></td>
                <td><span className="demo-badge demo-badge-primary">Enabled</span></td>
              </tr>
              <tr>
                <td style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--surface-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 600 }}>AS</div>
                  Alex Smith
                </td>
                <td><span className="demo-badge demo-badge-lilac">Viewer</span></td>
                <td><span className="demo-badge demo-badge-warning">Pending</span></td>
                <td><span className="demo-badge demo-badge-neutral">Off</span></td>
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
            <tr><td>Padding</td><td>4px 10px</td></tr>
            <tr><td>Type</td><td>11px / 600, var(--font)</td></tr>
            <tr><td>Border Radius</td><td>var(--radius-pill)</td></tr>
            <tr><td>Background</td><td>The colour at 12%</td></tr>
            <tr><td>Border</td><td>1px, the colour at 25%</td></tr>
            <tr><td>Marker</td><td>None — no dot; the word says the state</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
