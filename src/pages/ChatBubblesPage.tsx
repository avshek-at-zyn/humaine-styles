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

      {/* ── Formatted replies ── */}
      <div className="section">
        <h2 className="section-title">Formatted replies</h2>
        <p className="section-desc">
          Cosmos §103. A reply with a shape to it is set out the way a person who knows the ground would write it down —
          answer first, the reason under it — not the way a chatbot formats one: no capitals shouting a label, no numbered
          discs, no box with a bar down its side.
        </p>
        <div style={{ maxWidth: 420 }}>
          <div style={{ padding: 16, background: 'var(--bg)', borderRadius: 16, border: '1px solid var(--border)' }}>
            <div className="rt-demo">
              <p className="rt-demo-eyebrow">
                <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="3.4" fill="var(--primary-300)" /><ellipse cx="8" cy="8" rx="7" ry="2.5" transform="rotate(-22 8 8)" fill="none" stroke="var(--brand-pink)" strokeWidth="1.2" /></svg>
                Incident · first steps
              </p>
              <h3 className="rt-demo-title">Here's where I'd start</h3>
              <p className="rt-demo-para">You're seeing <strong>ransomware</strong>, and it's <strong>spreading now</strong>. This is built on that.</p>
              <ol className="rt-demo-steps">
                <li><span className="rt-demo-n">1</span><span><span className="rt-demo-lead">Stop it moving.</span><span className="rt-demo-why">Isolate what you can reach — network segments before individual machines.</span></span></li>
                <li><span className="rt-demo-n">2</span><span><span className="rt-demo-lead">Do not pay, and do not touch the backups yet.</span><span className="rt-demo-why">Check whether they are reachable from the compromised network first.</span></span></li>
                <li><span className="rt-demo-n">3</span><span><span className="rt-demo-lead">Tell someone.</span><span className="rt-demo-why">The first call is your security lead rather than the board.</span></span></li>
              </ol>
              <p className="rt-demo-note">Tell me what you find and I will keep up.</p>
            </div>
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Part</th><th>Written as</th><th>Set as</th></tr></thead>
          <tbody>
            <tr><td>Who is speaking</td><td><code>#### Incident · first steps</code></td><td>humAIne's mark and the words, 12.5px / 500, text-secondary, sentence case</td></tr>
            <tr><td>Title</td><td><code># Here's where I'd start</code></td><td>.h3, 18px / 700</td></tr>
            <tr><td>Step</td><td><code>1. **Action.** The reason.</code></td><td>The number bare in var(--primary-300); the action on its own line, 15px / 600; the reason under it, 14px, white at 62%</td></tr>
            <tr><td>Between steps</td><td>—</td><td>An inset hairline, var(--border), starting where the words do — as §68's lists part their rows</td></tr>
            <tr><td>Point</td><td><code>- text</code></td><td>A short var(--primary-300) dash</td></tr>
            <tr><td>Last word</td><td><code>&gt; text</code></td><td>A sign-off under a hairline, 14px, white at 62% — nothing drawn round it</td></tr>
            <tr><td>Table</td><td><code>| Priority | Action | Suggested timeframe |</code><br /><code>| 1 | Validate … | Next 7 days |</code></td><td>The CARR grid's frame, read as rows: the head 11px / 600 text-secondary; a priority number bare in var(--primary-300); the last column on one line in var(--primary-200)</td></tr>
            <tr><td>Questions before an answer</td><td>QuestionSheet, for every scenario</td><td>One sheet asks every scenario's questions: stepped progress and "1 of 3", the question as the sheet title and why it is asked under it, the chat's chips (chosen: var(--chosen-bg)), a line for their own words, Skip / Next and Not now / Back. A choice that is a whole sentence is the same chip set as a full-width row (.chat-fb-reasons--rows, radius 14px). No mic in the sheet — choosing is tapping. Set down, the thread holds a card to pick it up</td></tr>
            <tr><td>How sure</td><td><code>@ Confidence: Moderate</code><br /><code>@ Reason: …</code><br /><code>@ Human decision required: Yes</code></td><td>Under a hairline, two rows, each a 36px clay mark and a sentence — no badges. A dial lit to the level (one, two or three of its arcs), the level named in its status colour (var(--error-text), var(--warning), var(--success)) and the reason under it, 13.5px, white at 62%. Then a person, "Human decision required", and where the call sits</td></tr>
          </tbody>
        </table>
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
            <tr><td>.rt, .rt-eyebrow, .rt-step, .rt-note</td><td>Formatted replies</td><td>§103</td></tr>
            <tr><td>.rt-table, .rt-table-n, .rt-table-end</td><td>A plan as a table</td><td>§103</td></tr>
            <tr><td>.inc-sheet, .chat-fb-reasons--rows</td><td>The question sheet, every scenario</td><td>§103</td></tr>
            <tr><td>.rt-sure, .rt-sure-row, .rt-sure-level--*</td><td>How sure an answer is, and who decides</td><td>§103</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
