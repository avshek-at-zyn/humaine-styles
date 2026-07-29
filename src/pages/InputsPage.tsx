export function InputsPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">TextField</h1>
        <p className="page-desc">
          Unified text input component with label, helper text, and validation states. Used across forms, settings, and search.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">States</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="demo-input-group">
            <label className="demo-input-label">Default</label>
            <input className="demo-input" placeholder="Enter your name" readOnly />
            <span className="demo-input-hint">Helper text goes here</span>
          </div>

          <div className="demo-input-group">
            <label className="demo-input-label">Focused</label>
            <input className="demo-input" value="John Doe" style={{ borderColor: 'var(--primary-500)', boxShadow: '0 0 0 3px rgba(82,113,255,0.15)' }} readOnly />
          </div>

          <div className="demo-input-group">
            <label className="demo-input-label">Error</label>
            <input className="demo-input demo-input-error" value="invalid@" readOnly />
            <span className="demo-input-hint error">Please enter a valid email address</span>
          </div>

          <div className="demo-input-group">
            <label className="demo-input-label">Success</label>
            <input className="demo-input demo-input-success" value="valid@email.com" readOnly />
            <span className="demo-input-hint success">Email verified</span>
          </div>

          <div className="demo-input-group">
            <label className="demo-input-label" style={{ opacity: 0.4 }}>Disabled</label>
            <input className="demo-input" value="Cannot edit" style={{ opacity: 0.4, cursor: 'not-allowed' }} readOnly />
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Password Input</h2>
        <div className="card">
          <div className="demo-input-group">
            <label className="demo-input-label">Password</label>
            <div style={{ position: 'relative', width: 260 }}>
              <input className="demo-input" type="password" value="mypassword123" style={{ width: '100%', paddingRight: 40 }} readOnly />
              <button style={{
                position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none', color: 'var(--surface-400)', cursor: 'pointer', padding: 4,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
            <span className="demo-badge demo-badge-success">8+ characters</span>
            <span className="demo-badge demo-badge-success">Uppercase</span>
            <span className="demo-badge demo-badge-warning">Special char</span>
            <span className="demo-badge demo-badge-success">Number</span>
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
            <tr><td>Height</td><td>40px</td></tr>
            <tr><td>Padding</td><td>0 14px</td></tr>
            <tr><td>Border</td><td>1px solid var(--surface-700)</td></tr>
            <tr><td>Background</td><td>var(--surface-900)</td></tr>
            <tr><td>Border Radius</td><td>8px (--radius-md)</td></tr>
            <tr><td>Font Size</td><td>13px</td></tr>
            <tr><td>Focus Ring</td><td>0 0 0 3px rgba(82,113,255,0.15)</td></tr>
            <tr><td>Label Size</td><td>12px, 500 weight</td></tr>
            <tr><td>Hint Size</td><td>11px</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
