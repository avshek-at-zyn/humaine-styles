export function ListItemPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">List Item</h1>
        <p className="page-desc">
          Versatile list rows used in settings, document vaults, notification feeds, and admin panels. Support icons, descriptions, and trailing actions.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Simple List</h2>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          {['General Settings', 'Notifications', 'Security & Privacy', 'Appearance', 'Integrations'].map((item, i) => (
            <div key={item} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 20px', borderBottom: i < 4 ? '1px solid var(--border-card)' : 'none',
              cursor: 'pointer', transition: 'background 0.15s',
            }}>
              <span style={{ fontSize: 13, color: 'var(--surface-200)' }}>{item}</span>
              <span style={{ fontSize: 12, color: 'var(--surface-500)' }}>›</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">With Icons & Description</h2>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          {[
            { icon: '🔒', title: 'Password Management', desc: 'Change password and recovery options', color: '#5271FF' },
            { icon: '📋', title: 'Audit Logs', desc: 'View all security events and actions', color: '#B5B7F6' },
            { icon: '🛡️', title: 'Security Settings', desc: 'MFA, session policies, and IP allowlists', color: '#E5C3F0' },
            { icon: '🤖', title: 'AI Governance', desc: 'Model access rules and data policies', color: '#ACE1E4' },
          ].map((item, i) => (
            <div key={item.title} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '14px 20px', borderBottom: i < 3 ? '1px solid var(--border-card)' : 'none',
              cursor: 'pointer',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 'var(--radius-md)',
                background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, flexShrink: 0,
              }}>{item.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--surface-50)', marginBottom: 2 }}>{item.title}</div>
                <div style={{ fontSize: 11, color: 'var(--surface-500)' }}>{item.desc}</div>
              </div>
              <span style={{ fontSize: 12, color: 'var(--surface-500)' }}>›</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">With Trailing Actions</h2>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          {[
            { title: 'Recovery Phone', value: '+1 •••• 4567', action: 'Edit' },
            { title: 'Recovery Email', value: 'a••••k@gmail.com', action: 'Edit' },
            { title: 'Contact Admin', value: 'Enabled', action: 'Configure' },
          ].map((item, i) => (
            <div key={item.title} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '14px 20px', borderBottom: i < 2 ? '1px solid var(--border-card)' : 'none',
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--surface-50)', marginBottom: 2 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: 'var(--surface-400)', fontFamily: 'var(--font-mono)' }}>{item.value}</div>
              </div>
              <button className="demo-btn demo-btn-ghost demo-btn-sm">{item.action}</button>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Notification List</h2>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          {[
            { title: 'New login detected', desc: 'Chrome on macOS · San Francisco, CA', time: '2 min ago', unread: true, dot: '#5271FF' },
            { title: 'MFA enabled by admin', desc: 'Two-factor authentication is now required', time: '1 hour ago', unread: true, dot: '#4DCC8F' },
            { title: 'Document shared with you', desc: 'Q4 Report.pdf from Sarah Chen', time: 'Yesterday', unread: false, dot: '#B5B7F6' },
          ].map((item, i) => (
            <div key={item.title} style={{
              display: 'flex', alignItems: 'flex-start', gap: 12,
              padding: '14px 20px', borderBottom: i < 2 ? '1px solid var(--border-card)' : 'none',
              background: item.unread ? 'rgba(82,113,255,0.03)' : 'transparent',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.dot, marginTop: 5, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: item.unread ? 600 : 400, color: 'var(--surface-50)', marginBottom: 2 }}>{item.title}</div>
                <div style={{ fontSize: 11, color: 'var(--surface-500)' }}>{item.desc}</div>
              </div>
              <span style={{ fontSize: 10, color: 'var(--surface-500)', whiteSpace: 'nowrap' }}>{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Row Padding</td><td>12–14px 20px</td></tr>
            <tr><td>Title Font</td><td>13px, 500 weight</td></tr>
            <tr><td>Description Font</td><td>11px, normal</td></tr>
            <tr><td>Icon Container</td><td>36px, radius-md</td></tr>
            <tr><td>Divider</td><td>1px solid rgba(255,255,255,0.06)</td></tr>
            <tr><td>Hover</td><td>var(--bg-card) background</td></tr>
            <tr><td>Unread Indicator</td><td>8px dot + rgba(82,113,255,0.03) bg</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
