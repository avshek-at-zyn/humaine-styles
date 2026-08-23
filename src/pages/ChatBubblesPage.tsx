export function ChatBubblesPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Chat Bubbles</h1>
        <p className="page-desc">
          Message bubbles for conversational UI. User messages use a gradient background and right-align; assistant messages use a subtle surface fill and left-align. The same bubble styling is shared across web and mobile — one component, one spec.
        </p>
      </div>

      {/* ── Bubble Demo ── */}
      <div className="section">
        <h2 className="section-title">User &amp; Assistant Bubbles</h2>
        <div style={{ maxWidth: 420 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 16, background: 'var(--bg-primary)', borderRadius: 16, border: '1px solid var(--surface-800)' }}>
            <div style={{ alignSelf: 'flex-end', maxWidth: '82%', padding: '11px 14px', borderRadius: '18px 18px 6px 18px', background: 'linear-gradient(90deg, #768AFF, #fa81d6)', color: '#fff', fontSize: 14, lineHeight: 1.5 }}>What were our Q4 highlights?</div>
            <div style={{ alignSelf: 'flex-start', maxWidth: '82%', padding: '11px 14px', borderRadius: '18px 18px 18px 6px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.92)', fontSize: 14, lineHeight: 1.5 }}>Revenue grew 23% YoY, driven by enterprise contracts in APAC.</div>
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Max Width</td><td>82%</td></tr>
            <tr><td>Padding</td><td>11px 14px</td></tr>
            <tr><td>Font Size</td><td>14px / 1.5 line-height</td></tr>
            <tr><td>Border Radius</td><td>18px (6px tail corner)</td></tr>
            <tr><td>User Gradient</td><td><code>var(--gradient-btn)</code> — primary-400 → brand-pink (#768AFF → #fa81d6)</td></tr>
            <tr><td>Assistant BG</td><td>rgba(255,255,255,0.07), 1px border rgba(255,255,255,0.08)</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Typing Indicator ── */}
      <div className="section">
        <h2 className="section-title">Typing Indicator</h2>
        <p className="section-desc">Three bouncing dots in an assistant-styled bubble. Shared across both platforms.</p>
        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ padding: '14px 16px', borderRadius: '18px 18px 18px 6px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: 4, alignItems: 'center' }}>
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
        <p className="section-desc">Action buttons sit below a message and are always visible. Copy, translate, react.</p>
        <div style={{ maxWidth: 360 }}>
          <div style={{ padding: '11px 14px', borderRadius: '18px 18px 18px 6px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.92)', fontSize: 14, lineHeight: 1.5, marginBottom: 6 }}>
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
            <tr><td>.chat-msg-actions</td><td>Flex container, gap 4px, always visible</td></tr>
            <tr><td>.chat-msg-action</td><td>28 × 28px icon button, 8px radius</td></tr>
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
            <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.12)', fontSize: 12.5, color: 'rgba(255,255,255,0.5)' }}>Revenue grew 23% year-over-year.</div>
          </div>
        </div>
      </div>

      {/* ── Attachments ── */}
      <div className="section">
        <h2 className="section-title">Attachments</h2>
        <p className="section-desc">Image and file thumbnails inside a bubble, before the text content.</p>
        <div style={{ maxWidth: 360 }}>
          <div style={{ alignSelf: 'flex-end', padding: '11px 14px', borderRadius: '18px 18px 6px 18px', background: 'linear-gradient(90deg, #768AFF, #fa81d6)', color: '#fff' }}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
              <div style={{ width: 80, height: 80, borderRadius: 10, background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))', border: '1px solid rgba(255,255,255,0.1)' }} />
              <div style={{ width: 80, height: 80, borderRadius: 10, background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))', border: '1px solid rgba(255,255,255,0.1)' }} />
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.5 }}>Check these screenshots</div>
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Class</th><th>Specs</th></tr></thead>
          <tbody>
            <tr><td>.chat-bubble-attachments</td><td>flex, gap 6px, wrap, margin-bottom 6px</td></tr>
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
            <tr><td>.chat-bubble</td><td>Base bubble</td><td>§67</td></tr>
            <tr><td>.chat-bubble--user</td><td>User message (gradient, right-align)</td><td>§67</td></tr>
            <tr><td>.chat-bubble--assistant</td><td>Assistant message (surface, left-align)</td><td>§67</td></tr>
            <tr><td>.chat-typing, .chat-typing-dot</td><td>Typing indicator</td><td>§67 · dots §37</td></tr>
            <tr><td>.chat-msg-actions, .chat-msg-action</td><td>Message action buttons</td><td>§67</td></tr>
            <tr><td>.chat-translated</td><td>In-bubble translation</td><td>§67</td></tr>
            <tr><td>.chat-bubble-attachments</td><td>Attachment thumbnails</td><td>§67</td></tr>
            <tr><td>.chat-private, .chat-private-text</td><td>Privacy notice banner</td><td>§67</td></tr>
            <tr><td>.chip, .chip--clickable</td><td>Follow-up suggestion chips</td><td>§8</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
