export function ModalPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Modal / Dialog</h1>
        <p className="page-desc">
          Overlay dialogs for confirmations, forms, and detail views. Glass-morphic style consistent with the card system.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Confirmation Dialog</h2>
        <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: 'var(--radius-lg)', padding: 40, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: 400, background: 'var(--surface-950)', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--surface-50)' }}>Confirm Action</span>
              <span style={{ color: 'var(--surface-500)', cursor: 'pointer', fontSize: 18 }}>×</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--surface-400)', lineHeight: 1.5, marginBottom: 24 }}>
              Are you sure you want to revoke this user's access? This action cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button className="demo-btn demo-btn-ghost demo-btn-sm">Cancel</button>
              <button className="demo-btn demo-btn-danger demo-btn-sm">Revoke Access</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Form Dialog</h2>
        <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: 'var(--radius-lg)', padding: 40, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: 440, background: 'var(--surface-950)', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
          }}>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--surface-50)' }}>Invite Team Member</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
              <div className="demo-input-group">
                <label className="demo-input-label">Email</label>
                <input className="demo-input" placeholder="colleague@company.com" style={{ width: '100%' }} readOnly />
              </div>
              <div className="demo-input-group">
                <label className="demo-input-label">Role</label>
                <div style={{
                  height: 40, padding: '0 14px', borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--surface-700)', background: 'var(--surface-900)',
                  color: 'var(--surface-400)', fontSize: 13, display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <span>Select role...</span>
                  <span style={{ fontSize: 10 }}>▼</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button className="demo-btn demo-btn-ghost demo-btn-sm">Cancel</button>
              <button className="demo-btn demo-btn-primary demo-btn-sm">Send Invite</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Background</td><td>var(--surface-950)</td></tr>
            <tr><td>Border</td><td>1px solid rgba(82,113,255,0.1)</td></tr>
            <tr><td>Border Radius</td><td>12px (--radius-lg)</td></tr>
            <tr><td>Padding</td><td>24px</td></tr>
            <tr><td>Shadow</td><td>0 16px 48px rgba(0,0,0,0.5)</td></tr>
            <tr><td>Overlay</td><td>rgba(0,0,0,0.6) with backdrop-filter: blur(4px)</td></tr>
            <tr><td>Max Width</td><td>480px (small), 640px (medium)</td></tr>
            <tr><td>Title Font</td><td>Space Grotesk, 16px, 600</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
