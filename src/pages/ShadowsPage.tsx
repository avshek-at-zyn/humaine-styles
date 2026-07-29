export function ShadowsPage() {
  const shadows = [
    { name: 'Subtle', css: '0 1px 3px rgba(0,0,0,0.3)', use: 'Default card elevation' },
    { name: 'Medium', css: '0 4px 12px rgba(0,0,0,0.4)', use: 'Hover states, dropdowns' },
    { name: 'Large', css: '0 8px 32px rgba(0,0,0,0.5)', use: 'Modals, floating panels' },
    { name: 'Glow Blue', css: '0 4px 20px rgba(82,113,255,0.25)', use: 'Primary button hover' },
    { name: 'Glow Brand', css: '0 4px 24px rgba(124,108,248,0.4)', use: 'Gradient CTA hover' },
    { name: 'Glow Error', css: '0 4px 16px rgba(255,82,82,0.25)', use: 'Error states' },
  ]

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Foundation</div>
        <h1 className="page-title">Shadows</h1>
        <p className="page-desc">
          Elevation in a dark UI comes from both traditional shadows and coloured glows. Used to create depth and focus attention.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Elevation Scale</h2>
        <div className="shadow-grid">
          {shadows.map((s) => (
            <div key={s.name} className="shadow-item">
              <div className="shadow-box" style={{ boxShadow: s.css }} />
              <div style={{ textAlign: 'center' }}>
                <div className="shadow-name">{s.name}</div>
                <div style={{ fontSize: 10, color: 'var(--surface-500)', marginTop: 4 }}>{s.use}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">CSS Values</h2>
        <table className="demo-table">
          <thead>
            <tr><th>Name</th><th>box-shadow</th><th>Usage</th></tr>
          </thead>
          <tbody>
            {shadows.map((s) => (
              <tr key={s.name}>
                <td style={{ fontWeight: 500, color: 'var(--surface-50)' }}>{s.name}</td>
                <td><code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--primary-300)', background: 'rgba(82,113,255,0.08)', padding: '2px 6px', borderRadius: 4 }}>{s.css}</code></td>
                <td style={{ fontSize: 13, color: 'var(--surface-400)' }}>{s.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
