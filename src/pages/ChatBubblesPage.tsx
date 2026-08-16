export function ChatBubblesPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Chat Bubbles</h1>
        <p className="page-desc">
          Message bubbles for conversational UI. User messages use a gradient background and right-align; assistant messages use a subtle surface fill and left-align. Both platforms share the same visual language — only sizing and radius adapt for touch.
        </p>
      </div>

      {/* ── Web vs Mobile ── */}
      <div className="section">
        <h2 className="section-title">Web vs Mobile</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--surface-400)', marginBottom: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Web (§24 HumaineChat)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 16, background: 'var(--surface-950)', borderRadius: 16, border: '1px solid var(--surface-800)' }}>
              <div style={{ alignSelf: 'flex-end', maxWidth: '75%', padding: '10px 14px', borderRadius: '16px 16px 4px 16px', background: 'linear-gradient(135deg, rgba(82,113,255,0.35), rgba(181,183,246,0.2))', border: '1px solid rgba(82,113,255,0.25)', color: '#fff', fontSize: 13, lineHeight: 1.5 }}>What were our Q4 highlights?</div>
              <div style={{ alignSelf: 'flex-start', maxWidth: '75%', padding: '10px 14px', borderRadius: '16px 16px 16px 4px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.9)', fontSize: 13, lineHeight: 1.5 }}>Revenue grew 23% YoY, driven by enterprise contracts in APAC.</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--surface-400)', marginBottom: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Mobile (§37 Chat)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 16, background: 'var(--bg-primary)', borderRadius: 16, border: '1px solid var(--surface-800)' }}>
              <div style={{ alignSelf: 'flex-end', maxWidth: '82%', padding: '12px 14px', borderRadius: '18px 18px 6px 18px', background: 'linear-gradient(135deg, #6b4ff0, #8a5cf6)', color: '#fff', fontSize: 14.5, lineHeight: 1.55 }}>What were our Q4 highlights?</div>
              <div style={{ alignSelf: 'flex-start', maxWidth: '82%', padding: '12px 14px', borderRadius: '18px 18px 18px 6px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.9)', fontSize: 14.5, lineHeight: 1.55 }}>Revenue grew 23% YoY, driven by enterprise contracts in APAC.</div>
            </div>
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Property</th><th>Web</th><th>Mobile</th></tr></thead>
          <tbody>
            <tr><td>Max Width</td><td>75%</td><td>82%</td></tr>
            <tr><td>Padding</td><td>10px 14px</td><td>12px 14px</td></tr>
            <tr><td>Font Size</td><td>13px</td><td>14.5px</td></tr>
            <tr><td>Border Radius</td><td>16px (4px tail)</td><td>18px (6px tail)</td></tr>
            <tr><td>User Gradient</td><td>rgba(82,113,255,0.35) → rgba(181,183,246,0.2)</td><td>#6b4ff0 → #8a5cf6</td></tr>
            <tr><td>Assistant BG</td><td>rgba(255,255,255,0.06)</td><td>rgba(255,255,255,0.07)</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Typing Indicator ── */}
      <div className="section">
        <h2 className="section-title">Typing Indicator</h2>
        <p className="section-desc">Three bouncing dots in an assistant-styled bubble. Shared across both platforms.</p>
        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ padding: '10px 14px', borderRadius: '18px 18px 18px 6px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: 6, alignItems: 'center' }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.5)', animation: `chat-typing-dot 1.4s ease-in-out infinite ${i * 0.2}s` }} />
            ))}
          </div>
        </div>
        <p className="section-desc" style={{ marginTop: 12 }}>CSS: <code>.chat-typing</code> + <code>.chat-typing-dot</code> with staggered <code>animation-delay</code></p>
      </div>

      {/* ── Message Actions ── */}
      <div className="section">
        <h2 className="section-title">Message Actions</h2>
        <p className="section-desc">Action buttons appear on hover (web) or long-press (mobile) below a message. Copy, translate, react.</p>
        <div style={{ maxWidth: 360 }}>
          <div style={{ padding: '12px 14px', borderRadius: '18px 18px 18px 6px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.9)', fontSize: 14, lineHeight: 1.5, marginBottom: 6 }}>
            Revenue grew 23% YoY, driven by enterprise contracts.
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['Copy', 'Translate', 'React'].map(a => (
              <div key={a} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 6, color: 'rgba(255,255,255,0.6)', fontSize: 11, padding: '4px 8px', cursor: 'pointer' }}>{a}</div>
            ))}
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Class</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>.chat-msg-actions</td><td>Flex container, opacity 0 → 1 on hover</td></tr>
            <tr><td>.chat-msg-action-btn</td><td>11px, rgba bg, 6px radius</td></tr>
            <tr><td>.chat-translated</td><td>Border-top separator, muted text for translation</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Translation ── */}
      <div className="section">
        <h2 className="section-title">In-Bubble Translation</h2>
        <p className="section-desc">Translated text appears below the original, separated by a subtle border.</p>
        <div style={{ maxWidth: 360 }}>
          <div style={{ padding: '12px 14px', borderRadius: '18px 18px 18px 6px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: 14, lineHeight: 1.5 }}>El ingreso creció un 23% interanual.</div>
            <div style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 12.5, color: 'rgba(255,255,255,0.5)' }}>Revenue grew 23% year-over-year.</div>
          </div>
        </div>
      </div>

      {/* ── Attachments ── */}
      <div className="section">
        <h2 className="section-title">Attachments</h2>
        <p className="section-desc">Image and file thumbnails inside a bubble, before the text content.</p>
        <div style={{ maxWidth: 360 }}>
          <div style={{ alignSelf: 'flex-end', padding: '12px 14px', borderRadius: '18px 18px 6px 18px', background: 'linear-gradient(135deg, #6b4ff0, #8a5cf6)', color: '#fff' }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <div style={{ width: 80, height: 80, borderRadius: 10, background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))', border: '1px solid rgba(255,255,255,0.1)' }} />
              <div style={{ width: 80, height: 80, borderRadius: 10, background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))', border: '1px solid rgba(255,255,255,0.1)' }} />
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.5 }}>Check these screenshots</div>
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Class</th><th>Specs</th></tr></thead>
          <tbody>
            <tr><td>.chat-bubble-attachments</td><td>flex, gap 8px, wrap, margin-bottom 6px</td></tr>
            <tr><td>.chat-attachment-thumb</td><td>80 × 80px, radius 10px, object-fit cover</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Follow-up Chips ── */}
      <div className="section">
        <h2 className="section-title">Follow-up Suggestions</h2>
        <p className="section-desc">Tappable suggestion chips after an assistant reply. Uses <code>.chip .chip--clickable</code> — same component as filter chips, positioned below the bubble.</p>
        <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ padding: '12px 14px', borderRadius: '18px 18px 18px 6px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.9)', fontSize: 14, lineHeight: 1.5 }}>Here's a summary of the audit results.</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['Show details', 'Compare to Q3', 'Export PDF'].map(s => (
              <span key={s} style={{ padding: '7px 14px', borderRadius: 50, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CSS Reference ── */}
      <div className="section">
        <h2 className="section-title">CSS Class Reference</h2>
        <table className="demo-table">
          <thead><tr><th>Class</th><th>Component</th><th>Section</th></tr></thead>
          <tbody>
            <tr><td>.chat-bubble</td><td>Base bubble</td><td>§37</td></tr>
            <tr><td>.chat-bubble--user</td><td>User message (gradient, right-align)</td><td>§37</td></tr>
            <tr><td>.chat-bubble--assistant</td><td>Assistant message (surface, left-align)</td><td>§37</td></tr>
            <tr><td>.chat-typing, .chat-typing-dot</td><td>Typing indicator</td><td>§37</td></tr>
            <tr><td>.chat-msg-actions, .chat-msg-action-btn</td><td>Message action buttons</td><td>§37</td></tr>
            <tr><td>.chat-translated</td><td>In-bubble translation</td><td>§37</td></tr>
            <tr><td>.chat-bubble-attachments</td><td>Attachment thumbnails</td><td>§37</td></tr>
            <tr><td>.chat-private, .chat-private-text</td><td>Privacy notice banner</td><td>§37</td></tr>
            <tr><td>.chip, .chip--clickable</td><td>Follow-up suggestion chips</td><td>§8</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
