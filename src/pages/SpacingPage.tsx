export function SpacingPage() {
  const steps = [
    { name: '2xs', value: 4 },
    { name: 'xs', value: 8 },
    { name: 'sm', value: 12 },
    { name: 'md', value: 16 },
    { name: 'lg', value: 20 },
    { name: 'xl', value: 24 },
    { name: '2xl', value: 32 },
    { name: '3xl', value: 40 },
    { name: '4xl', value: 48 },
    { name: '5xl', value: 64 },
  ]

  const layout = [
    { name: 'Sidebar Width', value: '256px', token: '--sidebar-width' },
    { name: 'Topbar Height', value: '64px', token: '--topbar-height' },
    { name: 'Desktop Canvas', value: '1440 × 900px', token: 'Design spec' },
    { name: 'Mobile Breakpoint', value: '768px', token: '@media' },
  ]

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Foundation</div>
        <h1 className="page-title">Spacing</h1>
        <p className="page-desc">
          A 4px-based spacing scale for consistent padding, margins, and gaps across all components. Every spacing value is a multiple of 4.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Spacing Scale</h2>
        <div className="card">
          <div className="spacing-grid">
            {steps.map((s) => (
              <div key={s.name} className="spacing-row">
                <span className="spacing-label">{s.name}</span>
                <span className="spacing-value">{s.value}px</span>
                <div className="spacing-bar" style={{ width: `${(s.value / 64) * 100}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Layout Constants</h2>
        <table className="demo-table">
          <thead>
            <tr><th>Element</th><th>Value</th><th>Token</th></tr>
          </thead>
          <tbody>
            {layout.map((l) => (
              <tr key={l.name}>
                <td style={{ color: 'var(--surface-50)', fontWeight: 500 }}>{l.name}</td>
                <td><span className="code-token">{l.value}</span></td>
                <td style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--surface-400)' }}>{l.token}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2 className="section-title">Spacing in Practice</h2>
        <div className="card">
          <div style={{ fontSize: 13, color: 'var(--surface-400)', marginBottom: 16 }}>
            Component padding follows a simple rule: outer containers use larger spacing, nested elements use smaller.
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { label: 'Card padding', value: '24px', bg: 'rgba(82,113,255,0.08)' },
              { label: 'Button padding', value: '0 20px', bg: 'rgba(181,183,246,0.08)' },
              { label: 'Input padding', value: '0 14px', bg: 'rgba(229,195,240,0.08)' },
              { label: 'Section gap', value: '48px', bg: 'rgba(172,225,228,0.08)' },
            ].map((p) => (
              <div key={p.label} style={{ background: p.bg, padding: 16, borderRadius: 'var(--radius-md)', flex: 1, minWidth: 140 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--surface-200)', marginBottom: 4 }}>{p.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--primary-300)' }}>{p.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
