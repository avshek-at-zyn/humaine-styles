import { useState } from 'react'

export function TabsPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [activePill, setActivePill] = useState(0)

  const tabs = ['Overview', 'Security', 'Activity', 'Settings']

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Tabs</h1>
        <p className="page-desc">
          Tab navigation for switching between related content panels. Two variants: underline (standard) and pill.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Underline Tabs</h2>
        <p className="section-desc">The standard tab style (<code>.st-tabs</code> / <code>.st-tab</code>) — used in Settings, Profile, and Admin pages. No container border; the active tab carries a 2px underline.</p>
        <div className="card">
          <div style={{ display: 'flex', gap: 24 }}>
            {tabs.map((t, i) => (
              <button key={t} onClick={() => setActiveTab(i)} style={{
                padding: '8px 0', fontSize: 13, fontWeight: 600, border: 'none', background: 'none', cursor: 'pointer',
                color: i === activeTab ? 'var(--primary-300)' : 'var(--surface-400)',
                borderBottom: i === activeTab ? '2px solid var(--primary-400)' : '2px solid transparent',
                transition: 'all 0.15s',
              }}>{t}</button>
            ))}
          </div>
          <div style={{ padding: '20px 0', fontSize: 13, color: 'var(--surface-300)' }}>
            Content for "{tabs[activeTab]}" tab.
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Pill Tabs</h2>
        <p className="section-desc">Compact pill-style tabs used in smaller spaces like card headers and filter bars.</p>
        <div className="card">
          <div style={{ display: 'flex', gap: 4, background: 'var(--surface-900)', padding: 4, borderRadius: 'var(--radius-lg)', width: 'fit-content' }}>
            {tabs.map((t, i) => (
              <button key={t} onClick={() => setActivePill(i)} style={{
                padding: '7px 16px', fontSize: 12, fontWeight: 500, border: 'none', cursor: 'pointer',
                borderRadius: 'var(--radius-md)',
                background: i === activePill ? 'var(--primary-500)' : 'transparent',
                color: i === activePill ? '#fff' : 'var(--surface-400)',
                transition: 'all 0.15s',
              }}>{t}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">With Counts</h2>
        <div className="card">
          <div style={{ display: 'flex', gap: 24 }}>
            {[{ label: 'All', count: 142 }, { label: 'Active', count: 98 }, { label: 'Pending', count: 23 }, { label: 'Inactive', count: 21 }].map((t, i) => (
              <button key={t.label} style={{
                padding: '8px 0', fontSize: 13, fontWeight: 600, border: 'none', background: 'none', cursor: 'pointer',
                color: i === 0 ? 'var(--primary-300)' : 'var(--surface-400)',
                borderBottom: i === 0 ? '2px solid var(--primary-400)' : '2px solid transparent',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                {t.label}
                <span style={{
                  fontSize: 10, padding: '1px 6px', borderRadius: 'var(--radius-full)',
                  background: i === 0 ? 'rgba(82,113,255,0.15)' : 'var(--surface-900)',
                  color: i === 0 ? 'var(--primary-300)' : 'var(--surface-500)',
                }}>{t.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead><tr><th>Property</th><th>Underline</th><th>Pill</th></tr></thead>
          <tbody>
            <tr><td>Padding</td><td>8px 0 (24px gap)</td><td>7px 16px</td></tr>
            <tr><td>Font Size</td><td>13px / 600</td><td>12px</td></tr>
            <tr><td>Active Indicator</td><td>2px bottom border --primary-400</td><td>Filled background</td></tr>
            <tr><td>Active Color</td><td>--primary-300</td><td>#fff on --primary-500</td></tr>
            <tr><td>Inactive Color</td><td>--surface-400</td><td>--surface-400</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
