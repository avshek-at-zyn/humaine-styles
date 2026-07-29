export function RadiusPage() {
  const radii = [
    { name: 'sm', value: '4px', token: '--radius-sm', use: 'Tags, code tokens' },
    { name: 'md', value: '8px', token: '--radius-md', use: 'Buttons, inputs, small cards' },
    { name: 'lg', value: '12px', token: '--radius-lg', use: 'Cards, modals, panels' },
    { name: 'xl', value: '20px', token: '--radius-xl', use: 'Chat input, hero sections' },
    { name: 'full', value: '9999px', token: '--radius-full', use: 'Avatars, pills, badges' },
  ]

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Foundation</div>
        <h1 className="page-title">Border Radius</h1>
        <p className="page-desc">
          Five radius steps from sharp to fully rounded. Consistent corners create visual cohesion across components.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Scale</h2>
        <div className="radius-grid">
          {radii.map((r) => (
            <div key={r.name} className="radius-item">
              <div className="radius-box" style={{ borderRadius: r.value }} />
              <div className="radius-label">{r.name}</div>
              <div className="radius-value">{r.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Token Reference</h2>
        <table className="demo-table">
          <thead>
            <tr><th>Token</th><th>Value</th><th>Usage</th></tr>
          </thead>
          <tbody>
            {radii.map((r) => (
              <tr key={r.name}>
                <td><span className="code-token">{r.token}</span></td>
                <td>{r.value}</td>
                <td style={{ color: 'var(--surface-400)', fontSize: 13 }}>{r.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2 className="section-title">In Context</h2>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="code-token" style={{ borderRadius: 4 }}>radius-sm tag</span>
          <button className="demo-btn demo-btn-primary demo-btn-md" style={{ borderRadius: 8 }}>radius-md button</button>
          <div className="card" style={{ borderRadius: 12, padding: '12px 20px', display: 'inline-block' }}>radius-lg card</div>
          <div style={{ background: 'var(--surface-900)', border: '1px solid var(--surface-800)', borderRadius: 20, padding: '10px 20px', fontSize: 13, color: 'var(--surface-300)' }}>radius-xl input</div>
          <div style={{ background: 'var(--primary-500)', borderRadius: 9999, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, fontWeight: 600 }}>A</div>
        </div>
      </div>
    </>
  )
}
