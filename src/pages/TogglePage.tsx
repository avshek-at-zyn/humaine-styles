import { useState } from 'react'

export function TogglePage() {
  const [toggles, setToggles] = useState([true, false, true, false])

  const toggle = (i: number) => {
    setToggles((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
  }

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Toggle</h1>
        <p className="page-desc">
          On/off switches for settings and preferences. Instant visual feedback with smooth animation.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Interactive</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { label: 'Two-factor authentication', desc: 'Require MFA for all sign-ins' },
            { label: 'Email notifications', desc: 'Get alerts for security events' },
            { label: 'Dark mode', desc: 'Use dark colour scheme' },
            { label: 'Auto-lock session', desc: 'Lock after 15 minutes of inactivity' },
          ].map((item, i) => (
            <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 3 ? '1px solid var(--border-subtle)' : 'none' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--surface-50)', marginBottom: 2 }}>{item.label}</div>
                <div style={{ fontSize: 11, color: 'var(--surface-500)' }}>{item.desc}</div>
              </div>
              <button onClick={() => toggle(i)} style={{
                width: 44, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer',
                background: toggles[i] ? 'var(--primary-500)' : 'var(--surface-700)',
                position: 'relative', transition: 'background 0.2s', flexShrink: 0,
              }}>
                <span style={{
                  position: 'absolute', top: 2, left: toggles[i] ? 22 : 2,
                  width: 20, height: 20, borderRadius: '50%', background: '#fff',
                  transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                }} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">States</h2>
        <div className="card">
          <div style={{ display: 'flex', gap: 32 }}>
            {[
              { label: 'On', bg: 'var(--primary-500)', pos: 22 },
              { label: 'Off', bg: 'var(--surface-700)', pos: 2 },
              { label: 'Disabled On', bg: 'var(--primary-500)', pos: 22, opacity: 0.4 },
              { label: 'Disabled Off', bg: 'var(--surface-700)', pos: 2, opacity: 0.4 },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center', opacity: s.opacity || 1 }}>
                <div style={{
                  width: 44, height: 24, borderRadius: 12, background: s.bg,
                  position: 'relative', margin: '0 auto 8px',
                }}>
                  <span style={{
                    position: 'absolute', top: 2, left: s.pos,
                    width: 20, height: 20, borderRadius: '50%', background: '#fff',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                  }} />
                </div>
                <div style={{ fontSize: 11, color: 'var(--surface-400)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Track Size</td><td>44px × 24px</td></tr>
            <tr><td>Track Radius</td><td>12px</td></tr>
            <tr><td>Thumb Size</td><td>20px</td></tr>
            <tr><td>On Background</td><td>var(--primary-500)</td></tr>
            <tr><td>Off Background</td><td>var(--surface-700)</td></tr>
            <tr><td>Transition</td><td>0.2s ease</td></tr>
            <tr><td>Disabled Opacity</td><td>0.4</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
