export function ButtonsPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Button</h1>
        <p className="page-desc">
          Five button variants across three sizes. Primary for key actions, secondary for alternatives, ghost for tertiary, danger for destructive, and gradient for hero CTAs.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Variants</h2>
        <div className="card">
          <div className="component-row">
            <span className="component-label">Primary</span>
            <button className="demo-btn demo-btn-primary demo-btn-sm">Small</button>
            <button className="demo-btn demo-btn-primary demo-btn-md">Medium</button>
            <button className="demo-btn demo-btn-primary demo-btn-lg">Large</button>
          </div>
          <div className="component-row">
            <span className="component-label">Secondary</span>
            <button className="demo-btn demo-btn-secondary demo-btn-sm">Small</button>
            <button className="demo-btn demo-btn-secondary demo-btn-md">Medium</button>
            <button className="demo-btn demo-btn-secondary demo-btn-lg">Large</button>
          </div>
          <div className="component-row">
            <span className="component-label">Ghost</span>
            <button className="demo-btn demo-btn-ghost demo-btn-sm">Small</button>
            <button className="demo-btn demo-btn-ghost demo-btn-md">Medium</button>
            <button className="demo-btn demo-btn-ghost demo-btn-lg">Large</button>
          </div>
          <div className="component-row">
            <span className="component-label">Danger</span>
            <button className="demo-btn demo-btn-danger demo-btn-sm">Small</button>
            <button className="demo-btn demo-btn-danger demo-btn-md">Medium</button>
            <button className="demo-btn demo-btn-danger demo-btn-lg">Large</button>
          </div>
          <div className="component-row">
            <span className="component-label">Gradient</span>
            <button className="demo-btn demo-btn-gradient demo-btn-sm" style={{ borderRadius: 'var(--radius-full)' }}>Small</button>
            <button className="demo-btn demo-btn-gradient demo-btn-md" style={{ borderRadius: 'var(--radius-full)' }}>Medium</button>
            <button className="demo-btn demo-btn-gradient demo-btn-lg" style={{ borderRadius: 'var(--radius-full)' }}>Large</button>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Disabled States</h2>
        <div className="card">
          <div className="component-grid">
            <button className="demo-btn demo-btn-primary demo-btn-md" style={{ opacity: 0.4, cursor: 'not-allowed' }}>Primary</button>
            <button className="demo-btn demo-btn-secondary demo-btn-md" style={{ opacity: 0.4, cursor: 'not-allowed' }}>Secondary</button>
            <button className="demo-btn demo-btn-ghost demo-btn-md" style={{ opacity: 0.4, cursor: 'not-allowed' }}>Ghost</button>
            <button className="demo-btn demo-btn-danger demo-btn-md" style={{ opacity: 0.4, cursor: 'not-allowed' }}>Danger</button>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">With Icons</h2>
        <div className="card">
          <div className="component-grid">
            <button className="demo-btn demo-btn-primary demo-btn-md">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add New
            </button>
            <button className="demo-btn demo-btn-secondary demo-btn-md">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Export
            </button>
            <button className="demo-btn demo-btn-danger demo-btn-md">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Mobile Variant</h2>
        <p className="section-desc">On mobile, buttons become full-width (100%), use the large 48px height for touch targets, and icon-only variants collapse text. Same tokens, adapted layout.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--surface-400)', marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Web</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button className="demo-btn demo-btn-primary demo-btn-md">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Add New
              </button>
              <button className="demo-btn demo-btn-secondary demo-btn-md">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Export
              </button>
              <button className="demo-btn demo-btn-ghost demo-btn-sm">Cancel</button>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--surface-400)', marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Mobile</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 280 }}>
              <div className="mob-btn mob-btn--primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Add New
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <div className="mob-btn mob-btn--outline" style={{ flex: 1 }}>Cancel</div>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-lg)', border: '1px solid var(--surface-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--surface-300)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Adaptation</th><th>Web</th><th>Mobile</th></tr></thead>
          <tbody>
            <tr><td>Width</td><td>auto (content)</td><td>100% full-width</td></tr>
            <tr><td>Height</td><td>32 / 40 / 48px</td><td>48px (touch min)</td></tr>
            <tr><td>Layout</td><td>inline row</td><td>stacked column</td></tr>
            <tr><td>Secondary actions</td><td>text + icon</td><td>icon-only (48px square)</td></tr>
            <tr><td>Radius</td><td>8 / 12px</td><td>var(--radius-lg) 12px</td></tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead>
            <tr><th>Size</th><th>Height</th><th>Padding</th><th>Font Size</th><th>Radius</th></tr>
          </thead>
          <tbody>
            <tr><td>sm</td><td>32px</td><td>0 14px</td><td>12px</td><td>8px</td></tr>
            <tr><td>md</td><td>40px</td><td>0 20px</td><td>13px</td><td>8px</td></tr>
            <tr><td>lg</td><td>48px</td><td>0 28px</td><td>14px</td><td>12px</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
