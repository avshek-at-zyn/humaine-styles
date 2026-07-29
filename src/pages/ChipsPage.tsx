export function ChipsPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Chip</h1>
        <p className="page-desc">
          Compact elements for tags, filters, and selections. Supports dismissible, selectable, and icon variants.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Default Chips</h2>
        <div className="card">
          <div className="component-grid">
            {['Finance', 'Engineering', 'Marketing', 'Legal', 'HR'].map((c) => (
              <span key={c} style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                padding: '5px 12px', borderRadius: 'var(--radius-full)',
                background: 'var(--surface-900)', border: '1px solid var(--surface-800)',
                fontSize: 12, color: 'var(--surface-200)', cursor: 'pointer',
                transition: 'all 0.15s',
              }}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Coloured Chips</h2>
        <p className="section-desc">Brand-coloured chips for categorisation and visual grouping.</p>
        <div className="card">
          <div className="component-grid">
            {[
              { label: 'AI Query', color: '#5271FF' },
              { label: 'Document', color: '#B5B7F6' },
              { label: 'Security', color: '#E5C3F0' },
              { label: 'Compliance', color: '#ACE1E4' },
              { label: 'Critical', color: '#FF5252' },
              { label: 'Review', color: '#FFB84D' },
            ].map((c) => (
              <span key={c.label} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '5px 12px', borderRadius: 'var(--radius-full)',
                background: `${c.color}18`, border: `1px solid ${c.color}30`,
                fontSize: 12, color: c.color, cursor: 'pointer',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: c.color }} />
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Dismissible Chips</h2>
        <div className="card">
          <div className="component-grid">
            {['john@company.com', 'sarah@company.com', 'team-alpha'].map((c) => (
              <span key={c} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '5px 6px 5px 12px', borderRadius: 'var(--radius-full)',
                background: 'rgba(82,113,255,0.1)', border: '1px solid rgba(82,113,255,0.15)',
                fontSize: 12, color: 'var(--primary-200)',
              }}>
                {c}
                <span style={{
                  width: 18, height: 18, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.08)', cursor: 'pointer', fontSize: 12, lineHeight: 1,
                }}>×</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Selected State</h2>
        <div className="card">
          <div className="component-grid">
            {['All', 'Active', 'Pending', 'Inactive'].map((c, i) => (
              <span key={c} style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                padding: '5px 14px', borderRadius: 'var(--radius-full)',
                background: i === 1 ? 'var(--primary-500)' : 'var(--surface-900)',
                border: i === 1 ? '1px solid var(--primary-400)' : '1px solid var(--surface-800)',
                fontSize: 12, color: i === 1 ? '#fff' : 'var(--surface-300)',
                cursor: 'pointer', fontWeight: i === 1 ? 500 : 400,
              }}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Padding</td><td>5px 12px</td></tr>
            <tr><td>Font Size</td><td>12px</td></tr>
            <tr><td>Font Family</td><td>Space Grotesk (--font-display)</td></tr>
            <tr><td>Border Radius</td><td>9999px (--radius-full)</td></tr>
            <tr><td>Default Background</td><td>var(--surface-900)</td></tr>
            <tr><td>Default Border</td><td>1px solid var(--surface-800)</td></tr>
            <tr><td>Selected Background</td><td>var(--primary-500)</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
