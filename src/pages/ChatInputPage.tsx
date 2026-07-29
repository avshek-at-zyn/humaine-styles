export function ChatInputPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">ChatInput</h1>
        <p className="page-desc">
          The primary input for HumAIne's AI chat interface. Pill-shaped with a gradient send button and clean, spacious feel.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Default</h2>
        <div className="card">
          <div className="demo-chat-wrap">
            <input placeholder="Ask HumAIne anything..." readOnly />
            <button className="demo-chat-send">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">With Content</h2>
        <div className="card">
          <div className="demo-chat-wrap" style={{ borderColor: 'var(--primary-500)', boxShadow: '0 0 0 3px rgba(82,113,255,0.1)' }}>
            <input value="What were our Q4 revenue highlights?" readOnly style={{ color: 'var(--surface-50)' }} />
            <button className="demo-chat-send" style={{ background: 'var(--gradient-brand)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Chat Bubbles</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 480 }}>
          <div style={{ alignSelf: 'flex-end', background: 'var(--primary-600)', color: '#fff', padding: '10px 16px', borderRadius: '16px 16px 4px 16px', fontSize: 13, maxWidth: '70%' }}>
            Show me the latest security audit results
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--gradient-brand)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>H</div>
            <div style={{ background: 'var(--surface-900)', color: 'var(--surface-200)', padding: '10px 16px', borderRadius: '16px 16px 16px 4px', fontSize: 13, lineHeight: 1.5, border: '1px solid var(--border-card)' }}>
              Here are the latest security audit results from July 2026. All critical systems passed with a 98.5% compliance score.
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead>
            <tr><th>Property</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr><td>Container Radius</td><td>20px (--radius-xl)</td></tr>
            <tr><td>Container Padding</td><td>12px 16px</td></tr>
            <tr><td>Container Background</td><td>var(--surface-900)</td></tr>
            <tr><td>Container Border</td><td>1px solid var(--surface-800)</td></tr>
            <tr><td>Send Button Size</td><td>32px diameter</td></tr>
            <tr><td>Send Button Color</td><td>var(--primary-500)</td></tr>
            <tr><td>Input Font Size</td><td>13px</td></tr>
            <tr><td>Focus Border</td><td>var(--primary-500)</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
