export function LogoPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Brand</div>
        <h1 className="page-title">Logo & Brand</h1>
        <p className="page-desc">
          Guidelines for using the HumAIne and ZynGlobal logos. Consistency builds trust — follow these rules across all touchpoints.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Logo Mark</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          <div className="card" style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-xl)', background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 32, fontWeight: 700, fontFamily: 'var(--font-display)', color: '#fff' }}>H</div>
            <div style={{ fontSize: 12, color: 'var(--surface-400)' }}>Gradient Mark</div>
            <div style={{ fontSize: 10, color: 'var(--surface-500)', marginTop: 4 }}>Primary — dark backgrounds</div>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: 40, background: 'rgba(255,255,255,0.03)' }}>
            <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-xl)', background: '#5271FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 32, fontWeight: 700, fontFamily: 'var(--font-display)', color: '#fff' }}>H</div>
            <div style={{ fontSize: 12, color: 'var(--surface-400)' }}>Solid Blue Mark</div>
            <div style={{ fontSize: 10, color: 'var(--surface-500)', marginTop: 4 }}>Mono contexts, favicons</div>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: 40, background: '#f0f0f5' }}>
            <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-xl)', background: '#121315', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 32, fontWeight: 700, fontFamily: 'var(--font-display)', color: '#fff' }}>H</div>
            <div style={{ fontSize: 12, color: '#666' }}>Dark Mark</div>
            <div style={{ fontSize: 10, color: '#999', marginTop: 4 }}>Light backgrounds</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Wordmark</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div className="card" style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-lg)', background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-display)', color: '#fff' }}>H</div>
              <span style={{ fontFamily: "'Koh Santepheap', var(--font-display)", fontSize: 22, fontWeight: 700, color: '#B5B7F6', letterSpacing: -0.3 }}>humAIne</span>
            </div>
            <div style={{ fontSize: 11, color: 'var(--surface-500)' }}>Product wordmark — "AI" capitalised</div>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 500, color: 'var(--surface-300)', letterSpacing: 2 }}>ZYNGLOBAL</span>
            </div>
            <div style={{ fontSize: 11, color: 'var(--surface-500)' }}>Parent brand — all caps, spaced</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Tagline</h2>
        <div className="card" style={{ textAlign: 'center', padding: 32 }}>
          <div style={{ fontSize: 16, color: '#8C8EBE', fontStyle: 'italic', fontFamily: 'var(--font-body)' }}>
            Disruptively Human . Trust Co-created.
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Clear Space</h2>
        <p className="section-desc">Maintain a minimum clear space equal to the height of the "H" mark on all sides. Never crowd the logo.</p>
        <div className="card" style={{ textAlign: 'center', padding: 48 }}>
          <div style={{ display: 'inline-block', border: '1px dashed rgba(82,113,255,0.3)', padding: 32, borderRadius: 'var(--radius-lg)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', fontSize: 9, color: 'var(--primary-300)', fontFamily: 'var(--font-mono)' }}>min 1× height</div>
            <div style={{ position: 'absolute', left: 6, top: '50%', transform: 'translateY(-50%) rotate(-90deg)', fontSize: 9, color: 'var(--primary-300)', fontFamily: 'var(--font-mono)' }}>1×</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-lg)', background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, fontFamily: 'var(--font-display)', color: '#fff' }}>H</div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'var(--surface-50)' }}>HumAIne</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title" style={{ color: 'var(--success)' }}>Do</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {[
            'Use the gradient mark on dark backgrounds',
            'Keep "AI" capitalised in humAIne',
            'Use approved colour variants only',
            'Maintain clear space around the logo',
            'Pair with the brand gradient for CTAs',
            'Use the solid blue mark at small sizes',
          ].map((t) => (
            <div key={t} className="card" style={{ padding: 16, borderColor: 'rgba(77,204,143,0.15)' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--success)', fontSize: 14, flexShrink: 0 }}>&#10003;</span>
                <span style={{ fontSize: 12, color: 'var(--surface-300)', lineHeight: 1.5 }}>{t}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title" style={{ color: 'var(--error)' }}>Don't</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {[
            'Stretch, rotate, or skew the logo',
            'Use unapproved colours on the mark',
            'Place on busy or low-contrast backgrounds',
            'Add drop shadows or outer glows',
            'Rearrange the mark and wordmark',
            'Write "Humaine" or "HUMAINE" — always humAIne',
          ].map((t) => (
            <div key={t} className="card" style={{ padding: 16, borderColor: 'rgba(255,82,82,0.15)' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--error)', fontSize: 14, flexShrink: 0 }}>&#10007;</span>
                <span style={{ fontSize: 12, color: 'var(--surface-300)', lineHeight: 1.5 }}>{t}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Minimum Sizes</h2>
        <table className="demo-table">
          <thead>
            <tr><th>Context</th><th>Mark Only</th><th>Mark + Wordmark</th></tr>
          </thead>
          <tbody>
            <tr><td>Digital / Screen</td><td>24px</td><td>120px wide</td></tr>
            <tr><td>Print</td><td>10mm</td><td>40mm wide</td></tr>
            <tr><td>Favicon / App Icon</td><td>16px</td><td>N/A (mark only)</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
