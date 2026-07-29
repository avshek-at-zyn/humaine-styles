export function LogoPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Brand</div>
        <h1 className="page-title">Logo & Brand</h1>
        <p className="page-desc">
          Two brands, one system. ZynGlobal is the parent. humAIne is the product.
          They share a palette but have distinct identities.
        </p>
      </div>

      {/* ZynGlobal */}
      <div className="section">
        <h2 className="section-title">ZynGlobal</h2>
        <div className="card" style={{ textAlign: 'center', padding: '40px 32px' }}>
          <div style={{ marginBottom: 20 }}>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <defs>
                <linearGradient id="zg" x1="12" y1="8" x2="44" y2="48" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ACE1E4"/>
                  <stop offset="40%" stopColor="#5271FF"/>
                  <stop offset="70%" stopColor="#B5B7F6"/>
                  <stop offset="100%" stopColor="#E5C3F0"/>
                </linearGradient>
              </defs>
              <path d="M28 4c-6 0-10 4-10 10s8 14 10 18c2-4 10-12 10-18S34 4 28 4zm0 50c6 0 10-4 10-10s-8-14-10-18c-2 4-10 12-10 18s4 10 10 10z" fill="url(#zg)" opacity="0.9"/>
            </svg>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 400, color: '#E5C3F0', letterSpacing: 6, marginBottom: 6 }}>
            ZYN GLOBAL
          </div>
          <div style={{ fontSize: 11, color: 'var(--surface-500)', letterSpacing: 3, fontFamily: 'var(--font-display)' }}>
            INTELLIGENCE EVOLVED.
          </div>
        </div>
        <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          <div style={{ textAlign: 'center', fontSize: 10, color: 'var(--surface-500)' }}>
            <div style={{ padding: '20px 0', background: 'rgba(255,255,255,0.02)', borderRadius: 8, marginBottom: 4, border: '1px solid rgba(255,255,255,0.04)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: '#E5C3F0', letterSpacing: 4 }}>ZYN GLOBAL</span>
            </div>
            Dark background
          </div>
          <div style={{ textAlign: 'center', fontSize: 10, color: 'var(--surface-500)' }}>
            <div style={{ padding: '20px 0', background: '#f5f5f5', borderRadius: 8, marginBottom: 4 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: '#141E3A', letterSpacing: 4 }}>ZYN GLOBAL</span>
            </div>
            Light background
          </div>
          <div style={{ textAlign: 'center', fontSize: 10, color: 'var(--surface-500)' }}>
            <div style={{ padding: '20px 0', background: 'var(--primary-500)', borderRadius: 8, marginBottom: 4 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: '#fff', letterSpacing: 4 }}>ZYN GLOBAL</span>
            </div>
            Brand background
          </div>
        </div>
      </div>

      {/* humAIne */}
      <div className="section">
        <h2 className="section-title">humAIne</h2>
        <div className="card" style={{ textAlign: 'center', padding: '40px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 12 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, letterSpacing: -0.5 }}>
              <span style={{ color: '#E5C3F0' }}>hum</span>
              <span style={{ color: '#5271FF' }}>AI</span>
              <span style={{ color: '#B5B7F6' }}>ne</span>
            </span>
          </div>
          <div style={{ fontSize: 13, color: '#8C8EBE', fontStyle: 'italic', fontFamily: 'var(--font-body)' }}>
            Disruptively Human . Trust Co-created.
          </div>
        </div>
        <div style={{ marginTop: 12, fontSize: 12.5, color: 'var(--surface-500)', lineHeight: 1.6 }}>
          The "AI" in humAIne is always capitalised — it's the core of the product identity. The name uses lowercase for "hum" and "ne" to keep it approachable.
        </div>
      </div>

      {/* Lockup */}
      <div className="section">
        <h2 className="section-title">Lockup</h2>
        <p className="section-desc">Mark + wordmark combined. Used in the sidebar, topbar, and splash screens.</p>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 20, width: 'fit-content' }}>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700, fontFamily: 'var(--font-display)', color: '#fff' }}>H</div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--surface-50)', letterSpacing: -0.2 }}>HumAIne</div>
            <div style={{ fontSize: 9, color: 'var(--surface-600)', fontFamily: 'var(--font-mono)' }}>by ZynGlobal</div>
          </div>
        </div>
      </div>

      {/* Clear Space */}
      <div className="section">
        <h2 className="section-title">Clear Space</h2>
        <div className="card" style={{ textAlign: 'center', padding: 40 }}>
          <div style={{ display: 'inline-block', border: '1px dashed rgba(82,113,255,0.2)', padding: 28, borderRadius: 8, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)', fontSize: 8, color: 'var(--primary-500)', fontFamily: 'var(--font-mono)' }}>1× height</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 700, fontFamily: 'var(--font-display)', color: '#fff' }}>H</div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--surface-50)' }}>HumAIne</span>
            </div>
          </div>
        </div>
      </div>

      {/* Do & Don't */}
      <div className="section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--success)', marginBottom: 10, letterSpacing: 0.5 }}>DO</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                'Use the gradient mark on dark backgrounds',
                'Keep "AI" capitalised in humAIne',
                'Use approved colour variants only',
                'Maintain clear space around the logo',
                'Use the solid mark at small sizes (favicons)',
              ].map((t) => (
                <div key={t} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 12, color: 'var(--surface-400)', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--success)', fontSize: 11, marginTop: 1 }}>&#10003;</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--error)', marginBottom: 10, letterSpacing: 0.5 }}>DON'T</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                'Stretch, rotate, or skew the logo',
                'Use on busy or low-contrast backgrounds',
                'Add shadows or outer glows to the mark',
                'Write "Humaine" or "HUMAINE"',
                'Use colours outside the brand palette',
              ].map((t) => (
                <div key={t} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 12, color: 'var(--surface-400)', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--error)', fontSize: 11, marginTop: 1 }}>&#10007;</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Minimum Sizes */}
      <div className="section">
        <h2 className="section-title">Minimum Sizes</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {[
            { ctx: 'Digital', mark: '24px', lockup: '120px wide' },
            { ctx: 'Print', mark: '10mm', lockup: '40mm wide' },
            { ctx: 'Favicon', mark: '16px', lockup: 'Mark only' },
          ].map((r) => (
            <div key={r.ctx} className="card" style={{ padding: 16, textAlign: 'center' }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--surface-200)', fontFamily: 'var(--font-display)', marginBottom: 6 }}>{r.ctx}</div>
              <div style={{ fontSize: 10, color: 'var(--surface-500)', fontFamily: 'var(--font-mono)' }}>Mark: {r.mark}</div>
              <div style={{ fontSize: 10, color: 'var(--surface-500)', fontFamily: 'var(--font-mono)' }}>Lockup: {r.lockup}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
