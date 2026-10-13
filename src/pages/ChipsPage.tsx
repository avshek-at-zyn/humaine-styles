import { useState } from 'react'

export function ChipsPage() {
  const [tone, setTone] = useState('Executive & concise')
  const [seen, setSeen] = useState<string[]>(['Data taken'])
  const toggle = (v: string) => setSeen(s => (s.includes(v) ? s.filter(x => x !== v) : [...s, v]))

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Chip</h1>
        <p className="page-desc">
          Small rounded elements for tags, filters and answers. Anything that can be picked looks the same once picked,
          in both apps: filled <span className="code-token">--chosen-bg</span>, white words, a soft glow.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Choice pill</h2>
        <p className="section-desc">
          <span className="code-token">.choice-pill</span> (Cosmos §8). The answers to a question someone is asked about themselves —
          relationship building on the web and Personalisation in both apps ask the same questions, so they use the same pill.
          At rest it reads <span className="code-token">--choice-*</span>; picked it reads <span className="code-token">--chosen-*</span> and lifts a little. Try it.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          <div className="card">
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--surface-400)', marginBottom: 12, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Desk</div>
            <div className="choice-pills">
              {['Executive & concise', 'Analytical & detailed', 'Calm & reassuring', 'Collaborative & conversational'].map(c => (
                <button key={c} type="button" className={`choice-pill${tone === c ? ' choice-pill--on' : ''}`} aria-pressed={tone === c} onClick={() => setTone(c)}>{c}</button>
              ))}
            </div>
          </div>
          <div className="card">
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--surface-400)', marginBottom: 12, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Phone</div>
            <div className="choice-pills choice-pills--phone" style={{ maxWidth: 340 }}>
              {['Executive & concise', 'Analytical & detailed', 'Calm & reassuring', 'Collaborative & conversational'].map(c => (
                <button key={c} type="button" className={`choice-pill${tone === c ? ' choice-pill--on' : ''}`} aria-pressed={tone === c} onClick={() => setTone(c)}>{c}</button>
              ))}
            </div>
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Property</th><th>Desk</th><th>Phone (under 600px, and the mobile app)</th></tr></thead>
          <tbody>
            <tr><td>Padding</td><td>9px 14px</td><td>6px 12px</td></tr>
            <tr><td>Type</td><td>13px / 600</td><td>11.5px / 500</td></tr>
            <tr><td>Edge</td><td>1.5px var(--choice-border)</td><td>1px var(--choice-border)</td></tr>
            <tr><td>Fill · words</td><td colSpan={2}>var(--choice-bg) · var(--choice-text)</td></tr>
            <tr><td>Picked</td><td colSpan={2}>var(--chosen-bg), var(--chosen-text), var(--chosen-glow), lifted 3px</td></tr>
            <tr><td>Hover · press</td><td>lifts, brightens</td><td>no hover; gives to 96% under the finger</td></tr>
            <tr><td>Used by</td><td colSpan={2}>Relationship building (web) · Personalisation (web and mobile)</td></tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2 className="section-title">Answer chip</h2>
        <p className="section-desc">
          <span className="code-token">.chat-fb-chip</span> (Cosmos §76). The chips that answer a question in the chat: the incident questions and
          “What went wrong?” under a reply. Smaller than a choice pill, picked the same way.
        </p>
        <div className="card">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Ransomware', 'Data taken', 'Accounts compromised', 'Phishing', 'Systems down', 'Not sure yet'].map(c => (
              <button key={c} type="button" className={`answer-chip${seen.includes(c) ? ' answer-chip--on' : ''}`} aria-pressed={seen.includes(c)} onClick={() => toggle(c)}>{c}</button>
            ))}
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Where</th><th>Class</th><th>Picked</th></tr></thead>
          <tbody>
            <tr><td>Incident questions, mobile</td><td>.chat-fb-chip.is-on</td><td>var(--chosen-*)</td></tr>
            <tr><td>Incident card, web</td><td>.inc-chip--on</td><td>var(--chosen-*)</td></tr>
            <tr><td>“What went wrong?”, both</td><td>.chat-fb-chip.is-on · .hc-feedback-chip--on</td><td>var(--chosen-*)</td></tr>
            <tr><td>Cosmos chip</td><td>.chip--active</td><td>var(--chosen-*)</td></tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2 className="section-title">Default Chips</h2>
        <div className="card">
          <div className="component-grid">
            {['Finance', 'Engineering', 'Marketing', 'Legal', 'HR'].map((c) => (
              <span key={c} style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                padding: '5px 12px', borderRadius: 'var(--radius-pill)',
                background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                fontSize: 12, color: 'var(--text-secondary)', cursor: 'pointer',
                transition: 'all 0.15s',
              }}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Coloured Chips</h2>
        <p className="section-desc">Identity-coloured chips for categorisation and visual grouping.</p>
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
                padding: '5px 12px', borderRadius: 'var(--radius-pill)',
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
                padding: '5px 6px 5px 12px', borderRadius: 'var(--radius-pill)',
                background: 'rgba(92,114,245,0.1)', border: '1px solid rgba(92,114,245,0.18)',
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
        <h2 className="section-title">Web and phone</h2>
        <p className="section-desc">
          The size changes with the screen; the look does not. A picked chip is filled on both — the phone no longer uses an outline and a tint.
        </p>
        <table className="demo-table">
          <thead><tr><th>Adaptation</th><th>Web</th><th>Mobile</th></tr></thead>
          <tbody>
            <tr><td>Size</td><td>desk padding and type</td><td>phone padding and type, see the tables above</td></tr>
            <tr><td>Picked fill</td><td>var(--chosen-bg)</td><td>var(--chosen-bg)</td></tr>
            <tr><td>Picked words</td><td>var(--chosen-text)</td><td>var(--chosen-text)</td></tr>
            <tr><td>Corners</td><td>var(--radius-pill)</td><td>var(--radius-pill)</td></tr>
            <tr><td>Typeface</td><td>var(--font) · Helvetica Neue</td><td>var(--font) · Helvetica Neue</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
