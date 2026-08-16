export function ChatInteractionsPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Chat Interactions</h1>
        <p className="page-desc">
          Interactive patterns layered on top of chat — top bar, mode toggle, context menus, history drawer, and voice overlay. All mobile-scoped via <code>:root[data-platform="mobile"]</code>.
        </p>
      </div>

      {/* ── Top Bar ── */}
      <div className="section">
        <h2 className="section-title">Chat Top Bar</h2>
        <p className="section-desc">Sticky header with back button, conversation info, and action icons. Blurred backdrop.</p>
        <div style={{ maxWidth: 400, background: 'rgba(5,8,22,0.75)', backdropFilter: 'blur(16px)', borderRadius: 12, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ color: 'rgba(255,255,255,0.7)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>humAIne</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Online</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {['🔍', '📋', '⋮'].map((icon, i) => (
              <div key={i} style={{ width: 34, height: 34, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>{icon}</div>
            ))}
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Class</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>.chat-topbar</td><td>Sticky, blur(16px), safe-area padding</td></tr>
            <tr><td>.chat-back-btn</td><td>Back arrow, no bg</td></tr>
            <tr><td>.chat-topbar-info</td><td>Name + status column</td></tr>
            <tr><td>.chat-topbar-actions</td><td>Icon button row</td></tr>
            <tr><td>.chat-topbar-btn</td><td>34px circle, :active state</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Mode Toggle ── */}
      <div className="section">
        <h2 className="section-title">Mode Toggle</h2>
        <p className="section-desc">Segmented pill for switching between Chat, News, and other modes. Sliding thumb indicator.</p>
        <div style={{ display: 'flex', gap: 24 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--surface-400)', marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Pill Style</div>
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 50, padding: 4 }}>
              {['Chat', 'News', 'PR'].map((m, i) => (
                <div key={m} style={{ padding: '6px 16px', borderRadius: 50, background: i === 0 ? 'rgba(255,255,255,0.14)' : 'none', color: i === 0 ? '#fff' : 'rgba(255,255,255,0.45)', fontSize: 13, fontWeight: 600 }}>{m}</div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--surface-400)', marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Thumb Style</div>
            <div style={{ position: 'relative', display: 'flex', background: 'rgba(255,255,255,0.06)', borderRadius: 50, padding: 3, gap: 2 }}>
              <div style={{ position: 'absolute', top: 3, left: 3, width: '33%', height: 'calc(100% - 6px)', background: 'rgba(255,255,255,0.14)', borderRadius: 50 }} />
              {['Chat', 'News', 'PR'].map((m, i) => (
                <div key={m} style={{ flex: 1, padding: '7px 14px', borderRadius: 50, color: i === 0 ? '#fff' : 'rgba(255,255,255,0.45)', fontSize: 12, fontWeight: 600, position: 'relative', zIndex: 1, textAlign: 'center' }}>{m}</div>
              ))}
            </div>
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Class</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>.chat-top-pill / .chat-pill-btn</td><td>Simple pill toggle</td></tr>
            <tr><td>.chat-mode-toggle / .chat-mode-btn</td><td>Sliding thumb toggle</td></tr>
            <tr><td>.chat-mode-thumb</td><td>Animated background indicator</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Context Menu ── */}
      <div className="section">
        <h2 className="section-title">Context Menu</h2>
        <p className="section-desc">Floating menu triggered by long-press on a message or the + button. Blurred glass panel.</p>
        <div style={{ maxWidth: 220 }}>
          <div style={{ background: 'rgba(18,21,40,0.98)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 6, backdropFilter: 'blur(16px)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
            {[
              { label: 'Copy', icon: '📋', danger: false },
              { label: 'Translate', icon: '🌐', danger: false },
              { label: 'Share', icon: '↗️', danger: false },
              { label: 'Delete', icon: '🗑', danger: true },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', borderRadius: 10, color: item.danger ? '#f87171' : 'rgba(255,255,255,0.8)', fontSize: 14, cursor: 'pointer' }}>
                <span style={{ fontSize: 14 }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Class</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>.ci-menu-m</td><td>Glass panel, blur(16px), radius 16px, scale-in anim</td></tr>
            <tr><td>.ci-menu-item-m</td><td>Row: icon + label, 11px padding, :active bg</td></tr>
            <tr><td>.ci-menu-item-m--danger</td><td>Red text (#f87171) for destructive actions</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── History Drawer ── */}
      <div className="section">
        <h2 className="section-title">History Drawer</h2>
        <p className="section-desc">Side panel sliding in from the right with conversation history, grouped by date. Includes a profile card at the bottom.</p>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ width: 280, background: 'rgba(9,11,24,0.98)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>History</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>✕</div>
            </div>
            <div style={{ padding: 12 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', padding: '8px 8px 6px', textTransform: 'uppercase' }}>Today</div>
              {['Q4 revenue analysis', 'Security audit review', 'Team standup notes'].map((item, i) => (
                <div key={item} style={{ padding: '10px 12px', borderRadius: 10, background: i === 0 ? 'rgba(255,255,255,0.06)' : 'none', color: i === 0 ? '#fff' : 'rgba(255,255,255,0.75)', fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item}</div>
              ))}
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', padding: '12px 8px 6px', textTransform: 'uppercase' }}>Yesterday</div>
              {['Compliance checklist', 'Marketing brief'].map(item => (
                <div key={item} style={{ padding: '10px 12px', borderRadius: 10, color: 'rgba(255,255,255,0.75)', fontSize: 13 }}>{item}</div>
              ))}
            </div>
            <div style={{ padding: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 12, background: 'rgba(255,255,255,0.04)' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #6b4ff0, #8a5cf6)' }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>Abhishek</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Growth Plan</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <table className="demo-table">
              <thead><tr><th>Class</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>.drawer-overlay</td><td>Fixed backdrop, rgba(0,0,0,0.5)</td></tr>
                <tr><td>.drawer-panel</td><td>80% width, max 320px, slide-in anim</td></tr>
                <tr><td>.drawer-header</td><td>Title + close button row</td></tr>
                <tr><td>.drawer-section-label</td><td>Date group label (10px, uppercase)</td></tr>
                <tr><td>.drawer-history-item</td><td>Truncated row, :active bg</td></tr>
                <tr><td>.drawer-profile-btn</td><td>Avatar + name + plan chip</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Voice Overlay ── */}
      <div className="section">
        <h2 className="section-title">Voice Overlay</h2>
        <p className="section-desc">Full-screen overlay for voice conversation mode. Central orb breathes while listening and pulses while the assistant speaks.</p>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <div style={{ position: 'relative', width: 180, height: 180, borderRadius: 20, background: 'rgba(5,8,22,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', width: 100, height: 100, borderRadius: '50%', background: 'radial-gradient(circle at 40% 35%, rgba(124,58,237,0.6), rgba(91,33,182,0.3) 40%, transparent 70%)', boxShadow: '0 0 60px rgba(124,58,237,0.2), inset 0 0 30px rgba(124,58,237,0.1)' }} />
            <div style={{ position: 'absolute', bottom: 14, display: 'flex', gap: 4, alignItems: 'center', height: 24 }}>
              {[12, 20, 28, 16, 24, 18, 10].map((h, i) => (
                <div key={i} style={{ width: 4, height: h, borderRadius: 2, background: '#9b7dff', opacity: 0.7 }} />
              ))}
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <table className="demo-table">
              <thead><tr><th>Class</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>.voice-overlay</td><td>Fixed inset, blur(20px), z-300</td></tr>
                <tr><td>.voice-orb</td><td>160px circle, radial gradient</td></tr>
                <tr><td>.voice-orb--listening</td><td>Breathe animation (2.5s loop)</td></tr>
                <tr><td>.voice-orb--speaking</td><td>Talk animation (0.6s alternate)</td></tr>
                <tr><td>.voice-bars / .voice-bar</td><td>Waveform: 4px bars, var(--brand-purple)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Language Bottom Sheet ── */}
      <div className="section">
        <h2 className="section-title">Language Bottom Sheet</h2>
        <p className="section-desc">Bottom sheet for selecting translation language. Flag + name rows with a selected indicator.</p>
        <div style={{ maxWidth: 320, background: 'var(--surface-950)', borderRadius: '20px 20px 0 0', border: '1px solid var(--surface-800)', borderBottom: 'none', overflow: 'hidden' }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: 'var(--surface-700)', margin: '8px auto 12px' }} />
          <div style={{ padding: '8px 0' }}>
            {[
              { flag: '🇬🇧', name: 'English', selected: true },
              { flag: '🇪🇸', name: 'Spanish', selected: false },
              { flag: '🇫🇷', name: 'French', selected: false },
              { flag: '🇩🇪', name: 'German', selected: false },
            ].map(lang => (
              <div key={lang.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 20px' }}>
                <span style={{ fontSize: 22 }}>{lang.flag}</span>
                <span style={{ flex: 1, fontSize: 15, color: '#fff' }}>{lang.name}</span>
                {lang.selected && <span style={{ color: '#9b7dff' }}>✓</span>}
              </div>
            ))}
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Class</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>.lang-list</td><td>Container, padding 8px</td></tr>
            <tr><td>.lang-row</td><td>Row: flag + name + check</td></tr>
            <tr><td>.lang-flag</td><td>22px emoji</td></tr>
            <tr><td>.lang-selected-icon</td><td>var(--brand-purple) check</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Privacy Notice ── */}
      <div className="section">
        <h2 className="section-title">Privacy Notice</h2>
        <p className="section-desc">Informational banner shown at the top of a chat thread.</p>
        <div style={{ maxWidth: 360, background: 'rgba(92,114,245,0.08)', border: '1px solid rgba(92,114,245,0.2)', borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <span style={{ color: '#818cf8', flexShrink: 0, marginTop: 1 }}>🔒</span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>Your conversations are private and encrypted. Only you and humAIne can see this chat.</span>
        </div>
        <p className="section-desc" style={{ marginTop: 8 }}>CSS: <code>.chat-private</code> + <code>.chat-private-icon</code> + <code>.chat-private-text</code></p>
      </div>
    </>
  )
}
