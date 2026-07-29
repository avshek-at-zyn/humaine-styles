export function TooltipPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Tooltip</h1>
        <p className="page-desc">
          Contextual information overlays triggered on hover. Small and non-intrusive, with an arrow pointing to the trigger.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Positions</h2>
        <div className="card" style={{ display: 'flex', justifyContent: 'center', gap: 48, padding: 60 }}>
          {[
            { pos: 'Top', style: { bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' }, arrow: { bottom: -4, left: '50%', transform: 'translateX(-50%) rotate(45deg)' } },
            { pos: 'Right', style: { left: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' }, arrow: { left: -4, top: '50%', transform: 'translateY(-50%) rotate(45deg)' } },
            { pos: 'Bottom', style: { top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' }, arrow: { top: -4, left: '50%', transform: 'translateX(-50%) rotate(45deg)' } },
            { pos: 'Left', style: { right: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' }, arrow: { right: -4, top: '50%', transform: 'translateY(-50%) rotate(45deg)' } },
          ].map((t) => (
            <div key={t.pos} style={{ position: 'relative' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 'var(--radius-md)',
                background: 'var(--surface-900)', border: '1px solid var(--surface-800)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, color: 'var(--surface-400)', cursor: 'default',
              }}>
                {t.pos[0]}
              </div>
              <div style={{
                position: 'absolute', ...t.style as React.CSSProperties,
                background: 'var(--surface-950)', border: '1px solid var(--surface-800)',
                borderRadius: 'var(--radius-md)', padding: '6px 10px',
                fontSize: 11, color: 'var(--surface-200)', whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              }}>
                Tooltip {t.pos.toLowerCase()}
                <div style={{
                  position: 'absolute', ...t.arrow as React.CSSProperties,
                  width: 8, height: 8, background: 'var(--surface-950)',
                  borderRight: '1px solid var(--surface-800)', borderBottom: '1px solid var(--surface-800)',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">With Content</h2>
        <div className="card" style={{ display: 'flex', gap: 32, alignItems: 'center', justifyContent: 'center', padding: 48 }}>
          <div style={{ position: 'relative' }}>
            <button className="demo-btn demo-btn-primary demo-btn-sm">Hover me</button>
            <div style={{
              position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
              background: 'var(--surface-950)', border: '1px solid var(--surface-800)',
              borderRadius: 'var(--radius-md)', padding: '8px 12px',
              fontSize: 11, color: 'var(--surface-200)', whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            }}>
              Click to save changes
              <div style={{
                position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%) rotate(45deg)',
                width: 8, height: 8, background: 'var(--surface-950)',
                borderRight: '1px solid var(--surface-800)', borderBottom: '1px solid var(--surface-800)',
              }} />
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{ fontSize: 13, color: 'var(--surface-300)', textDecoration: 'underline dotted var(--surface-600)', cursor: 'help' }}>MFA Required</span>
            <div style={{
              position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
              background: 'var(--surface-950)', border: '1px solid var(--surface-800)',
              borderRadius: 'var(--radius-md)', padding: '10px 14px', width: 200,
              fontSize: 11, color: 'var(--surface-300)', lineHeight: 1.5,
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            }}>
              Multi-factor authentication adds an extra layer of security to your account.
              <div style={{
                position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%) rotate(45deg)',
                width: 8, height: 8, background: 'var(--surface-950)',
                borderRight: '1px solid var(--surface-800)', borderBottom: '1px solid var(--surface-800)',
              }} />
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
            <tr><td>Border</td><td>1px solid var(--surface-800)</td></tr>
            <tr><td>Border Radius</td><td>8px (--radius-md)</td></tr>
            <tr><td>Padding</td><td>6px 10px (small) / 10px 14px (rich)</td></tr>
            <tr><td>Font Size</td><td>11px</td></tr>
            <tr><td>Shadow</td><td>0 4px 12px rgba(0,0,0,0.4)</td></tr>
            <tr><td>Arrow</td><td>8px rotated square</td></tr>
            <tr><td>Offset</td><td>8px from trigger</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
