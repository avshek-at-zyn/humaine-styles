import { useTokens } from '../useTokens'

export function RadiusPage() {
  const radii = [
    { name: 'sm', token: '--radius-sm', use: 'Tags, code tokens, small buttons' },
    { name: 'md', token: '--radius-md', use: 'Medium buttons, icon tiles' },
    { name: 'lg', token: '--radius-lg', use: 'Cards, main buttons, sheets' },
    { name: 'xl', token: '--radius-xl', use: 'Chat input, hero panels' },
    { name: 'pill', token: '--radius-pill', use: 'Pills, chips, badges, avatars' },
  ]
  const live = useTokens(radii.map(r => r.token))

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Foundation</div>
        <h1 className="page-title">Border Radius</h1>
        <p className="page-desc">
          Five corners, the same in both apps: 6, 10, 16, 24 and a full pill. They are read live from
          <span className="code-token">cosmos/tokens.css</span>, so this page always shows what the apps use.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Scale</h2>
        <div className="radius-grid">
          {radii.map((r) => (
            <div key={r.name} className="radius-item">
              <div className="radius-box" style={{ borderRadius: `var(${r.token})` }} />
              <div className="radius-label">{r.name}</div>
              <div className="radius-value">{live[r.token] || '…'}</div>
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
                <td>{live[r.token] || '…'}</td>
                <td style={{ color: 'var(--surface-400)', fontSize: 13 }}>{r.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="section-desc" style={{ marginTop: 12 }}>
          <span className="code-token">--radius-full</span> is the same as <span className="code-token">--radius-pill</span>, kept for older stylesheets.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">In Context</h2>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="code-token" style={{ borderRadius: 'var(--radius-sm)' }}>radius-sm tag</span>
          <button className="demo-btn demo-btn-primary demo-btn-md">radius-md button</button>
          <div className="card" style={{ borderRadius: 'var(--radius-lg)', padding: '12px 20px', display: 'inline-block' }}>radius-lg card</div>
          <div style={{ background: 'var(--surface-900)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '10px 20px', fontSize: 13, color: 'var(--surface-300)' }}>radius-xl input</div>
          <span className="choice-pill choice-pill--on">radius-pill</span>
        </div>
      </div>
    </>
  )
}
