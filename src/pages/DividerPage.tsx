export function DividerPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Divider</h1>
        <p className="page-desc">
          Visual separators for content sections. Subtle enough to provide structure without visual noise.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Horizontal</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--surface-500)', marginBottom: 8 }}>Default</div>
            <div style={{ height: 1, background: 'var(--border-subtle)' }} />
          </div>
          <div>
            <div style={{ fontSize: 11, color: 'var(--surface-500)', marginBottom: 8 }}>Strong</div>
            <div style={{ height: 1, background: 'var(--surface-800)' }} />
          </div>
          <div>
            <div style={{ fontSize: 11, color: 'var(--surface-500)', marginBottom: 8 }}>Gradient</div>
            <div style={{ height: 2, background: 'var(--gradient-galaxy)', borderRadius: 1, opacity: 0.5 }} />
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">With Label</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
            <span style={{ fontSize: 11, color: 'var(--surface-500)', textTransform: 'uppercase', letterSpacing: 1, flexShrink: 0 }}>or</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
            <span style={{ fontSize: 11, color: 'var(--surface-500)', flexShrink: 0 }}>Section Title</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Vertical</h2>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, height: 40 }}>
            <span style={{ fontSize: 13, color: 'var(--surface-200)' }}>Item One</span>
            <div style={{ width: 1, height: '100%', background: 'var(--border-subtle)' }} />
            <span style={{ fontSize: 13, color: 'var(--surface-200)' }}>Item Two</span>
            <div style={{ width: 1, height: '100%', background: 'var(--border-subtle)' }} />
            <span style={{ fontSize: 13, color: 'var(--surface-200)' }}>Item Three</span>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">In Context — Auth Divider</h2>
        <div className="card" style={{ maxWidth: 360, margin: '0 auto' }}>
          <button className="demo-btn demo-btn-secondary demo-btn-md" style={{ width: '100%', marginBottom: 16 }}>Continue with Google</button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <div style={{ flex: 1, height: 1, background: 'var(--surface-800)' }} />
            <span style={{ fontSize: 11, color: 'var(--surface-500)', textTransform: 'uppercase', letterSpacing: 1 }}>or</span>
            <div style={{ flex: 1, height: 1, background: 'var(--surface-800)' }} />
          </div>
          <input className="demo-input" placeholder="Enter email" style={{ width: '100%' }} readOnly />
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead><tr><th>Variant</th><th>Color</th><th>Height</th></tr></thead>
          <tbody>
            <tr><td>Default</td><td>rgba(82,113,255,0.1)</td><td>1px</td></tr>
            <tr><td>Strong</td><td>var(--surface-800) / #3A3A3A</td><td>1px</td></tr>
            <tr><td>Gradient</td><td>var(--gradient-galaxy)</td><td>2px</td></tr>
            <tr><td>Vertical</td><td>rgba(82,113,255,0.1)</td><td>1px wide</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
