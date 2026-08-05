export function MobilePage() {

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Mobile</div>
        <h1 className="page-title">Mobile System</h1>
        <p className="page-desc">
          Mobile-specific patterns for HumAIne Personal. All components use the same Cosmos tokens as the web apps — same colours, same radii, same typography. Only the layout adapts: 430px max-width, safe-area insets, and touch-optimised sizing.
        </p>
      </div>

      {/* ── Token Mapping ── */}
      <div className="section">
        <h2 className="section-title">Token Mapping</h2>
        <p className="section-desc">Mobile uses the exact same Cosmos tokens as web. The table below shows how each mobile surface maps to the shared token set.</p>
        <table className="demo-table">
          <thead><tr><th>Surface</th><th>Cosmos Token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>App background</td><td>var(--bg-primary)</td><td>#121315</td></tr>
            <tr><td>Card / elevated</td><td>var(--surface-950)</td><td>#1b1b1b</td></tr>
            <tr><td>Input field</td><td>var(--surface-950)</td><td>#1b1b1b</td></tr>
            <tr><td>Default border</td><td>var(--surface-700)</td><td>#474747</td></tr>
            <tr><td>Focus border</td><td>var(--primary-500)</td><td>#5c72f5</td></tr>
            <tr><td>Heading text</td><td>var(--surface-50)</td><td>#fbfbfb</td></tr>
            <tr><td>Body text</td><td>var(--surface-200)</td><td>#dadada</td></tr>
            <tr><td>Hint / label</td><td>var(--surface-400)</td><td>#979797</td></tr>
            <tr><td>Placeholder</td><td>var(--surface-500)</td><td>#6e6e6e</td></tr>
            <tr><td>Primary accent</td><td>var(--primary-400)</td><td>#768AFF</td></tr>
            <tr><td>CTA gradient</td><td>var(--gradient-brand)</td><td>Shiny Blue to Common Lilac</td></tr>
            <tr><td>Error</td><td>var(--error)</td><td>#ff5252</td></tr>
            <tr><td>Success</td><td>var(--success)</td><td>#4dcc8f</td></tr>
            <tr><td>Font</td><td>var(--font-body)</td><td>Helvetica Neue</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Screen Layout ── */}
      <div className="section">
        <h2 className="section-title">Screen Layout</h2>
        <p className="section-desc">Every mobile screen uses a <code>.screen</code> container (100dvh, max-width 430px, centered) with a <code>.screen-content</code> flex column inside.</p>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div className="mob-phone">
            <div className="mob-phone-notch" />
            <div className="mob-phone-screen">
              <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-primary)', borderRadius: 16 }}>
                <div style={{ position: 'absolute', width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(82,113,255,0.2), transparent)', top: '15%', left: '20%', filter: 'blur(20px)' }} />
                <div style={{ position: 'absolute', width: 60, height: 60, borderRadius: '50%', background: 'radial-gradient(circle, rgba(181,183,246,0.15), transparent)', top: '40%', right: '15%', filter: 'blur(15px)' }} />
                {[{ x: '20%', y: '25%' }, { x: '70%', y: '15%' }, { x: '45%', y: '50%' }, { x: '80%', y: '60%' }, { x: '15%', y: '70%' }].map((s, i) => (
                  <div key={i} style={{ position: 'absolute', width: 2, height: 2, borderRadius: '50%', background: '#fff', opacity: 0.3, left: s.x, top: s.y }} />
                ))}
              </div>
              <div style={{ position: 'relative', zIndex: 1, padding: '40px 16px 16px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ flex: 1 }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--primary-300)' }}>humAIne</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--surface-50)', marginTop: 6 }}>Sign in</div>
                  <div style={{ fontSize: 7, color: 'var(--surface-500)', marginTop: 2 }}>Humans must lead.</div>
                </div>
                <div style={{ flex: 1 }} />
                <div style={{ display: 'flex', gap: 4 }}>
                  {['G', 'M', 'S'].map(l => (
                    <div key={l} style={{ flex: 1, height: 20, borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid var(--surface-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6, color: 'var(--surface-500)' }}>{l}</div>
                  ))}
                </div>
                <div style={{ height: 20, borderRadius: 6, background: 'var(--gradient-brand)', marginTop: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6, color: '#fff', fontWeight: 600 }}>Login with email</div>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 200 }}>
            <table className="demo-table">
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Max Width</td><td>430px</td></tr>
                <tr><td>Height</td><td>100dvh</td></tr>
                <tr><td>Background</td><td>var(--bg-primary)</td></tr>
                <tr><td>Safe Area</td><td>env(safe-area-inset-top)</td></tr>
                <tr><td>Overflow</td><td>hidden (screen) / scroll (content)</td></tr>
                <tr><td>Touch Scroll</td><td>-webkit-overflow-scrolling: touch</td></tr>
                <tr><td>Overscroll</td><td>overscroll-behavior-y: none</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Animated Background ── */}
      <div className="section">
        <h2 className="section-title">Animated Background</h2>
        <p className="section-desc">The <code>.bg-scene</code> layer renders behind screen content — nebula orbs, star field, sparkle stars, shooting stars, and orbiting planets. All CSS-only keyframe animations.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, maxWidth: 500 }}>
          {[
            { label: 'Nebula Orbs', cls: '.nebula-orb', desc: 'Radial gradients using brand colours, blurred' },
            { label: 'Star Field', cls: '.star', desc: '18 static stars with twinkle keyframes' },
            { label: 'Sparkle Stars', cls: '.sparkle-star', desc: '6 cross-shaped, scale pulse animation' },
            { label: 'Shooting Stars', cls: '.shooting-star', desc: '4 diagonal streaks, staggered delays' },
            { label: 'Orbit Planets', cls: '.orbit-planet', desc: '3 dots on elliptical CSS orbits' },
            { label: 'Arc Ellipses', cls: '.bg-arc', desc: 'Faint ring borders in background' },
          ].map(b => (
            <div key={b.label} className="card" style={{ padding: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--surface-100)', marginBottom: 4 }}>{b.label}</div>
              <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--primary-300)', marginBottom: 4 }}>{b.cls}</div>
              <div style={{ fontSize: 10, color: 'var(--surface-500)', lineHeight: 1.4 }}>{b.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Buttons ── */}
      <div className="section">
        <h2 className="section-title">Buttons</h2>
        <p className="section-desc">Same button variants as web, adapted for touch: full-width, 48px height, larger tap targets. Uses <code>var(--gradient-brand)</code> for primary CTA.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
          <div className="mob-btn mob-btn--primary">Continue</div>
          <div className="mob-btn mob-btn--outline">Create account</div>
          <div className="mob-btn mob-btn--ghost">Skip</div>
          <div className="mob-btn mob-btn--primary mob-btn--disabled">Disabled</div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Variant</th><th>Background</th><th>Border</th></tr></thead>
          <tbody>
            <tr><td>.btn-primary</td><td>var(--gradient-brand)</td><td>none</td></tr>
            <tr><td>.btn-outline</td><td>transparent</td><td>1px solid var(--surface-700)</td></tr>
            <tr><td>.btn-ghost</td><td>transparent</td><td>none, color: var(--surface-400)</td></tr>
            <tr><td>:disabled</td><td>var(--surface-900)</td><td>none, opacity 0.5</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Input Fields ── */}
      <div className="section">
        <h2 className="section-title">Input Fields</h2>
        <p className="section-desc">Same TextField component, touch-sized: 48px height, var(--radius-lg) corners. Focus uses var(--primary-500), error uses var(--error).</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
          <div className="mob-input">
            <span style={{ color: 'var(--surface-500)' }}>Enter your email</span>
          </div>
          <div className="mob-input mob-input--focus">
            <span>abhishek@zynglobal.ai</span>
            <span style={{ width: 1, height: 14, background: 'var(--primary-500)', display: 'inline-block' }} />
          </div>
          <div className="mob-input mob-input--error">
            <span>invalid-email</span>
          </div>
          <div style={{ fontSize: 11, color: 'var(--error)', marginTop: -4 }}>Please enter a valid email address</div>
        </div>

        <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--surface-200)', marginTop: 20, marginBottom: 8 }}>OTP Input</h3>
        <div style={{ display: 'flex', gap: 8, maxWidth: 320 }}>
          {['4', '7', '2', '9', '', ''].map((d, i) => (
            <div key={i} className={`mob-otp ${d ? '' : 'mob-otp--empty'} ${i === 4 ? 'mob-otp--focus' : ''}`}>{d}</div>
          ))}
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Property</th><th>Cosmos Token</th></tr></thead>
          <tbody>
            <tr><td>Height</td><td>48px</td></tr>
            <tr><td>Background</td><td>var(--surface-950)</td></tr>
            <tr><td>Border</td><td>1px solid var(--surface-700)</td></tr>
            <tr><td>Focus Border</td><td>var(--primary-500)</td></tr>
            <tr><td>Error Border</td><td>var(--error) at 50% opacity</td></tr>
            <tr><td>Radius</td><td>var(--radius-lg) 12px</td></tr>
            <tr><td>Font</td><td>15px / var(--font-body)</td></tr>
            <tr><td>OTP Box</td><td>44 &times; 52px, var(--radius-md)</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Social Auth ── */}
      <div className="section">
        <h2 className="section-title">Social Auth</h2>
        <p className="section-desc">Same social buttons as web, in a three-up icon-only layout for compact screens. Uses var(--surface-700) border and var(--radius-lg).</p>
        <div style={{ maxWidth: 320 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              <svg key="g" width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.02 10.02 0 001 12c0 1.61.39 3.14 1.07 4.5l3.66-2.84.11.43z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>,
              <svg key="m" width="20" height="20" viewBox="0 0 24 24"><rect x="1" y="1" width="10" height="10" fill="#F25022"/><rect x="13" y="1" width="10" height="10" fill="#7FBA00"/><rect x="1" y="13" width="10" height="10" fill="#00A4EF"/><rect x="13" y="13" width="10" height="10" fill="#FFB900"/></svg>,
              <svg key="s" width="18" height="18" viewBox="0 0 54 54" fill="none"><path d="M19.7 33.6c0 2.8-2.3 5-5 5s-5-2.3-5-5 2.3-5 5-5h5v5z" fill="#E01E5A"/><path d="M22.3 33.6c0-2.8 2.3-5 5-5s5 2.3 5 5v12.6c0 2.8-2.3 5-5 5s-5-2.3-5-5V33.6z" fill="#E01E5A"/><path d="M27.3 19.7c-2.8 0-5-2.3-5-5s2.3-5 5-5 5 2.3 5 5v5h-5z" fill="#36C5F0"/><path d="M27.3 22.3c2.8 0 5 2.3 5 5s-2.3 5-5 5H14.7c-2.8 0-5-2.3-5-5s2.3-5 5-5h12.6z" fill="#36C5F0"/><path d="M41.2 27.3c0-2.8 2.3-5 5-5s5 2.3 5 5-2.3 5-5 5h-5v-5z" fill="#2EB67D"/><path d="M38.6 27.3c0 2.8-2.3 5-5 5s-5-2.3-5-5V14.7c0-2.8 2.3-5 5-5s5 2.3 5 5v12.6z" fill="#2EB67D"/><path d="M33.6 41.2c2.8 0 5 2.3 5 5s-2.3 5-5 5-5-2.3-5-5v-5h5z" fill="#ECB22E"/><path d="M33.6 38.6c-2.8 0-5-2.3-5-5s2.3-5 5-5h12.6c2.8 0 5 2.3 5 5s-2.3 5-5 5H33.6z" fill="#ECB22E"/></svg>,
            ].map((icon, i) => (
              <div key={i} className="mob-social-btn">{icon}</div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '12px 0' }}>
            <div style={{ flex: 1, height: 1, background: 'var(--surface-800)' }} />
            <span style={{ fontSize: 10, color: 'var(--surface-500)', letterSpacing: '0.1em' }}>OR</span>
            <div style={{ flex: 1, height: 1, background: 'var(--surface-800)' }} />
          </div>
          <div className="mob-btn mob-btn--primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>
            Login/Signup with email
          </div>
        </div>
      </div>

      {/* ── Onboarding ── */}
      <div className="section">
        <h2 className="section-title">Onboarding Flow</h2>
        <p className="section-desc">7-step personalisation wizard with a solar-system progress nav, step badges, chip grids, and slide enter/exit animations. All colours from Cosmos palette.</p>

        <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--surface-200)', marginTop: 16, marginBottom: 10 }}>Solar System Progress</h3>
        <div style={{ position: 'relative', height: 90, maxWidth: 360, background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="none">
            <path d="M 10 15 C 10 45, 20 74, 50 74 C 80 74, 90 45, 90 15" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.35" strokeDasharray="1.2 1.8" />
          </svg>
          {[
            { x: 10, y: 15, state: 'done', color: '#5271FF' },
            { x: 17, y: 42, state: 'done', color: '#4dcc8f' },
            { x: 30, y: 64, state: 'active', color: '#B5B7F6' },
            { x: 50, y: 74, state: 'future', color: '#E5C3F0' },
            { x: 70, y: 64, state: 'future', color: '#ACE1E4' },
            { x: 83, y: 42, state: 'future', color: '#5271FF' },
            { x: 90, y: 15, state: 'future', color: '#B5B7F6' },
          ].map((p, i) => (
            <div key={i} style={{
              position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)',
              width: p.state === 'active' ? 22 : p.state === 'done' ? 14 : 10,
              height: p.state === 'active' ? 22 : p.state === 'done' ? 14 : 10,
              borderRadius: '50%',
              background: p.state === 'future' ? 'var(--surface-900)' : p.color,
              opacity: p.state === 'future' ? 0.5 : 1,
              border: p.state === 'active' ? `2px solid ${p.color}` : 'none',
              boxShadow: p.state === 'active' ? `0 0 12px ${p.color}55` : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {p.state === 'done' && (
                <svg width="7" height="7" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              )}
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--surface-200)', marginTop: 20, marginBottom: 10 }}>Chip Selection</h3>
        <p className="section-desc">Multi-select chips for personalisation questions. Uses var(--primary-500) border and var(--primary-300) text on select.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, maxWidth: 360 }}>
          {['Strategic thinking', 'Technical depth', 'Big picture ideas', 'Practical problem solving', 'Leadership topics', 'A balanced mix'].map((c, i) => (
            <div key={c} className={`mob-chip ${i < 2 ? 'mob-chip--selected' : ''}`}>{c}</div>
          ))}
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Property</th><th>Cosmos Token</th></tr></thead>
          <tbody>
            <tr><td>Chip Padding</td><td>8px 14px</td></tr>
            <tr><td>Chip Radius</td><td>var(--radius-xl) 20px</td></tr>
            <tr><td>Chip Background</td><td>rgba(255,255,255,0.04)</td></tr>
            <tr><td>Chip Border</td><td>var(--surface-800)</td></tr>
            <tr><td>Selected Background</td><td>rgba(92,114,245,0.15)</td></tr>
            <tr><td>Selected Border</td><td>var(--primary-500)</td></tr>
            <tr><td>Selected Text</td><td>var(--primary-300)</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Chat Interface ── */}
      <div className="section">
        <h2 className="section-title">Chat Interface</h2>
        <p className="section-desc">Conversational UI with message bubbles, typing indicator, and chat input card. Uses the same surface stack and primary colours as the web chat.</p>

        <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--surface-200)', marginTop: 12, marginBottom: 10 }}>Chat Bubbles</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 360 }}>
          <div style={{ alignSelf: 'flex-end' }}>
            <div className="mob-bubble mob-bubble--user">Is my account secure?</div>
          </div>
          <div>
            <div className="mob-bubble mob-bubble--assistant">I've checked for you. Your account security looks good — no unusual logins in the last 30 days.</div>
          </div>
          <div>
            <div className="mob-bubble mob-bubble--assistant mob-bubble--typing"><span /><span /><span /></div>
          </div>
        </div>

        <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--surface-200)', marginTop: 20, marginBottom: 10 }}>Chat Input Card</h3>
        <div style={{ maxWidth: 360 }}>
          <div className="mob-ci-card">
            <div style={{ padding: '10px 14px', color: 'var(--surface-500)', fontSize: 14 }}>Message to humaine...</div>
            <div className="mob-ci-bottom">
              <div className="mob-ci-icon-btn">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </div>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <div className="mob-ci-icon-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="10" x2="4" y2="14"/><line x1="8" y1="7" x2="8" y2="17"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="16" y1="7" x2="16" y2="17"/><line x1="20" y1="10" x2="20" y2="14"/></svg>
                </div>
                <div className="mob-ci-icon-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.8"/><path d="M5 10a7 7 0 0014 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--surface-200)', marginTop: 16, marginBottom: 10 }}>With Send Pill</h3>
        <div style={{ maxWidth: 360 }}>
          <div className="mob-ci-card mob-ci-card--focus">
            <div style={{ padding: '10px 14px', color: 'var(--surface-100)', fontSize: 14 }}>How does zero-trust work?</div>
            <div className="mob-ci-bottom">
              <div className="mob-ci-icon-btn">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </div>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <div className="mob-ci-icon-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="10" x2="4" y2="14"/><line x1="8" y1="7" x2="8" y2="17"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="16" y1="7" x2="16" y2="17"/><line x1="20" y1="10" x2="20" y2="14"/></svg>
                </div>
                <div className="mob-send-pill">
                  Send
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--surface-200)', marginTop: 16, marginBottom: 10 }}>Voice Overlay</h3>
        <p className="section-desc">Full-screen overlay with animated breathing orb for voice conversation mode.</p>
        <div style={{ position: 'relative', maxWidth: 200, height: 120, background: 'rgba(0,0,0,0.6)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 60, height: 60, borderRadius: '50%', background: 'radial-gradient(circle, rgba(82,113,255,0.5), rgba(181,183,246,0.25), transparent)', filter: 'blur(8px)' }} />
          <div style={{ position: 'relative', width: 40, height: 40, borderRadius: '50%', background: 'var(--gradient-brand)', boxShadow: '0 0 30px rgba(82,113,255,0.4)' }} />
          <div style={{ position: 'absolute', bottom: 10, fontSize: 8, color: 'var(--surface-500)' }}>Tap to stop</div>
        </div>

        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Property</th><th>Cosmos Token</th></tr></thead>
          <tbody>
            <tr><td>User Bubble</td><td>var(--primary-500) gradient, 18px radius</td></tr>
            <tr><td>Assistant Bubble</td><td>var(--surface-950), 18px radius</td></tr>
            <tr><td>Input Card</td><td>var(--surface-950) bg, var(--surface-800) border</td></tr>
            <tr><td>Input Focus</td><td>border: var(--primary-500)</td></tr>
            <tr><td>Send Pill</td><td>var(--gradient-brand), var(--radius-xl)</td></tr>
            <tr><td>Voice Orb</td><td>var(--gradient-brand), blur glow</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── News & PR ── */}
      <div className="section">
        <h2 className="section-title">News & PR</h2>
        <p className="section-desc">Article feed with multi-select, AI summarisation, PR draft generation, and platform share sheet.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 500 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--surface-300)', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>News Card</div>
            <div className="card" style={{ padding: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 4, background: 'rgba(82,113,255,0.12)', color: 'var(--primary-300)', fontWeight: 600 }}>Reuters</span>
                <span style={{ fontSize: 9, color: 'var(--surface-500)' }}>2h ago</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--surface-100)', lineHeight: 1.4 }}>Asahi to launch cybersecurity overhaul after crippling attack</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--surface-300)', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Share Sheet</div>
            <div className="card" style={{ padding: 12 }}>
              {['Teams', 'Email', 'Slack', 'WhatsApp'].map(p => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0', fontSize: 11, color: 'var(--surface-200)' }}>
                  {p}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--surface-500)" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Plans & Payment ── */}
      <div className="section">
        <h2 className="section-title">Plans & Payment</h2>
        <p className="section-desc">Subscription plans with radio selector and payment form. Active plan uses var(--primary-500) accent.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, maxWidth: 400 }}>
          {[
            { name: 'Starter', price: 'Free', active: false },
            { name: 'Growth', price: '$19/mo', active: true },
            { name: 'Enterprise', price: 'Custom', active: false },
          ].map(p => (
            <div key={p.name} className={`mob-plan ${p.active ? 'mob-plan--active' : ''}`}>
              <div style={{ fontSize: 11, fontWeight: 600, color: p.active ? 'var(--primary-300)' : 'var(--surface-300)' }}>{p.name}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: p.active ? 'var(--surface-50)' : 'var(--surface-200)', marginTop: 4 }}>{p.price}</div>
              <div className={`mob-plan-radio ${p.active ? 'mob-plan-radio--on' : ''}`} />
            </div>
          ))}
        </div>
        <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--surface-200)', marginTop: 16, marginBottom: 8 }}>Wallet Buttons</h3>
        <div style={{ display: 'flex', gap: 8, maxWidth: 360 }}>
          <div className="mob-wallet mob-wallet--apple">Apple Pay</div>
          <div className="mob-wallet mob-wallet--gpay">Google Pay</div>
          <div className="mob-wallet mob-wallet--paypal">PayPal</div>
        </div>
      </div>

      {/* ── Drawers & Sheets ── */}
      <div className="section">
        <h2 className="section-title">Drawers & Sheets</h2>
        <p className="section-desc">Bottom sheets with backdrop blur, handle bar, and slide-up animation. Panel uses var(--surface-950) background.</p>
        <div style={{ position: 'relative', maxWidth: 320, height: 200, borderRadius: 16, overflow: 'hidden', background: 'var(--bg-primary)' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'var(--surface-950)', borderRadius: '20px 20px 0 0', padding: '8px 16px 16px', border: '1px solid var(--surface-800)', borderBottom: 'none' }}>
            <div style={{ width: 36, height: 4, borderRadius: 2, background: 'var(--surface-700)', margin: '0 auto 12px' }} />
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--surface-50)', marginBottom: 8 }}>Profile</div>
            {['Account Settings', 'Appearance', 'Privacy', 'Sign out'].map(item => (
              <div key={item} style={{ padding: '8px 0', fontSize: 12, color: item === 'Sign out' ? 'var(--error)' : 'var(--surface-200)', borderBottom: '1px solid var(--surface-900)' }}>{item}</div>
            ))}
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Property</th><th>Cosmos Token</th></tr></thead>
          <tbody>
            <tr><td>Overlay</td><td>rgba(0,0,0,0.5) + blur(8px)</td></tr>
            <tr><td>Panel Background</td><td>var(--surface-950)</td></tr>
            <tr><td>Panel Border</td><td>var(--surface-800)</td></tr>
            <tr><td>Panel Radius</td><td>20px 20px 0 0</td></tr>
            <tr><td>Handle Bar</td><td>36 &times; 4px, var(--surface-700)</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── CSS Classes ── */}
      <div className="section">
        <h2 className="section-title">CSS Class Reference</h2>
        <p className="section-desc">Mobile-only classes from <code>cosmos-design-system.css</code>. All reference the shared Cosmos token set.</p>
        <table className="demo-table">
          <thead><tr><th>Class</th><th>Component</th><th>Section</th></tr></thead>
          <tbody>
            <tr><td>.screen, .screen-content</td><td>Screen Layout</td><td>§35</td></tr>
            <tr><td>.bg-scene, .nebula-*, .star-*</td><td>Animated Background</td><td>§35</td></tr>
            <tr><td>.btn, .btn-primary, .btn-outline</td><td>Buttons</td><td>§35</td></tr>
            <tr><td>.input-field, .otp-*</td><td>Form Inputs</td><td>§36</td></tr>
            <tr><td>.sol-nav-m, .sol-planet-m</td><td>Solar System Nav</td><td>§39</td></tr>
            <tr><td>.ob-chip, .ob-pills</td><td>Onboarding Chips</td><td>§39</td></tr>
            <tr><td>.chat-bubble--user/--assistant</td><td>Chat Bubbles</td><td>§37</td></tr>
            <tr><td>.ci-card-m, .ci-send-pill-m</td><td>Chat Input</td><td>§37</td></tr>
            <tr><td>.voice-overlay, .voice-orb</td><td>Voice Mode</td><td>§37</td></tr>
            <tr><td>.np-m-*, .news-card</td><td>News & PR</td><td>§37</td></tr>
            <tr><td>.sheet-overlay, .sheet-container</td><td>Bottom Sheets</td><td>§37</td></tr>
            <tr><td>.plans-option, .plans-option--active</td><td>Plans Screen</td><td>§38</td></tr>
            <tr><td>.pay-wallet-btn-m</td><td>Payment</td><td>§38</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
