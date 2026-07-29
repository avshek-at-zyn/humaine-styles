export function AvatarPage() {
  const sizes = [
    { name: 'xs', px: 24, font: 9 },
    { name: 'sm', px: 32, font: 11 },
    { name: 'md', px: 40, font: 14 },
    { name: 'lg', px: 56, font: 20 },
    { name: 'xl', px: 80, font: 28 },
  ]

  const colors = [
    { initials: 'AS', bg: '#5271FF' },
    { initials: 'JD', bg: '#B5B7F6', color: '#121315' },
    { initials: 'SC', bg: '#E5C3F0', color: '#121315' },
    { initials: 'MR', bg: '#ACE1E4', color: '#121315' },
    { initials: 'PP', bg: '#FFB84D', color: '#121315' },
    { initials: 'AI', bg: 'var(--gradient-brand)' },
  ]

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Avatar</h1>
        <p className="page-desc">
          User identity indicators with initials, colours, and status dots. Used in navigation, tables, and chat.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Sizes</h2>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {sizes.map((s) => (
              <div key={s.name} style={{ textAlign: 'center' }}>
                <div style={{
                  width: s.px, height: s.px, borderRadius: '50%',
                  background: '#5271FF', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: s.font, fontWeight: 600, fontFamily: 'var(--font-display)',
                  margin: '0 auto 8px',
                }}>AS</div>
                <div style={{ fontSize: 10, color: 'var(--surface-500)', fontFamily: 'var(--font-mono)' }}>{s.name} · {s.px}px</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Colour Variants</h2>
        <div className="card">
          <div style={{ display: 'flex', gap: 16 }}>
            {colors.map((c) => (
              <div key={c.initials} style={{
                width: 44, height: 44, borderRadius: '50%',
                background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: c.color || '#fff', fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-display)',
              }}>{c.initials}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">With Status</h2>
        <div className="card">
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { status: 'Online', color: '#4DCC8F' },
              { status: 'Away', color: '#FFB84D' },
              { status: 'Busy', color: '#FF5252' },
              { status: 'Offline', color: '#666666' },
            ].map((s) => (
              <div key={s.status} style={{ textAlign: 'center' }}>
                <div style={{ position: 'relative', width: 44, height: 44, margin: '0 auto 8px' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: '#5271FF', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 14, fontWeight: 600,
                  }}>AS</div>
                  <div style={{
                    position: 'absolute', bottom: 0, right: 0,
                    width: 12, height: 12, borderRadius: '50%',
                    background: s.color, border: '2px solid var(--bg-app)',
                  }} />
                </div>
                <div style={{ fontSize: 10, color: 'var(--surface-500)' }}>{s.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Avatar Group</h2>
        <div className="card">
          <div style={{ display: 'flex' }}>
            {[
              { bg: '#5271FF', initials: 'AS' },
              { bg: '#B5B7F6', initials: 'JD', color: '#121315' },
              { bg: '#E5C3F0', initials: 'SC', color: '#121315' },
              { bg: '#ACE1E4', initials: 'MR', color: '#121315' },
            ].map((a, i) => (
              <div key={a.initials} style={{
                width: 36, height: 36, borderRadius: '50%',
                background: a.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: a.color || '#fff', fontSize: 12, fontWeight: 600,
                border: '2px solid var(--bg-app)',
                marginLeft: i > 0 ? -10 : 0,
                zIndex: 4 - i,
              }}>{a.initials}</div>
            ))}
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'var(--surface-800)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--surface-300)', fontSize: 11, fontWeight: 600,
              border: '2px solid var(--bg-app)', marginLeft: -10,
            }}>+3</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead><tr><th>Size</th><th>Diameter</th><th>Font Size</th><th>Status Dot</th></tr></thead>
          <tbody>
            <tr><td>xs</td><td>24px</td><td>9px</td><td>8px</td></tr>
            <tr><td>sm</td><td>32px</td><td>11px</td><td>10px</td></tr>
            <tr><td>md</td><td>40px</td><td>14px</td><td>12px</td></tr>
            <tr><td>lg</td><td>56px</td><td>20px</td><td>14px</td></tr>
            <tr><td>xl</td><td>80px</td><td>28px</td><td>16px</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
