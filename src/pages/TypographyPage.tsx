export function TypographyPage() {
  const headlines = [
    { name: '3xl', size: '88px', weight: 'Bold', lineHeight: '120%' },
    { name: '2xl', size: '64px', weight: 'Bold', lineHeight: '120%' },
    { name: 'xl', size: '48px', weight: 'Bold', lineHeight: '120%' },
    { name: 'large', size: '36px', weight: 'Bold', lineHeight: '120%' },
    { name: 'medium', size: '28px', weight: 'Bold', lineHeight: '120%' },
    { name: 'small', size: '24px', weight: 'Bold', lineHeight: '120%' },
  ]

  const titles = [
    { name: 'large', size: '20px', weight: 'Bold', lineHeight: '120%' },
    { name: 'medium', size: '18px', weight: 'Bold', lineHeight: 'auto' },
    { name: 'small', size: '16px', weight: 'Bold', lineHeight: 'auto' },
    { name: 'extra-small', size: '14px', weight: 'Bold', lineHeight: 'auto' },
  ]

  const labels = [
    { name: 'large', size: '14px', weight: 'Bold', lineHeight: 'auto' },
    { name: 'medium', size: '12px', weight: 'Bold', lineHeight: 'auto' },
    { name: 'small', size: '10px', weight: 'Bold', lineHeight: 'auto' },
  ]

  const body = [
    { name: 'xl', size: '18px', weight: 'Regular', lineHeight: 'auto' },
    { name: 'large', size: '16px', weight: 'Regular', lineHeight: 'auto' },
    { name: 'medium', size: '14px', weight: 'Regular', lineHeight: 'auto' },
    { name: 'small', size: '12px', weight: 'Regular', lineHeight: 'auto' },
  ]

  const sample = 'The quick brown fox jumps over the lazy dog.'

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Foundation</div>
        <h1 className="page-title">Typography</h1>
        <p className="page-desc">
          Helvetica Neue for body and UI text. Space Grotesk for display and headings. A comprehensive type scale from 10px labels to 88px headlines.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Font Families</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div className="card">
            <div style={{ fontSize: 11, color: 'var(--surface-500)', marginBottom: 8, fontFamily: 'var(--font-mono)' }}>--font-body</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 24, color: 'var(--surface-50)', marginBottom: 8 }}>Helvetica Neue</div>
            <div style={{ fontSize: 13, color: 'var(--surface-400)' }}>Primary typeface for all body text, labels, and UI elements.</div>
          </div>
          <div className="card">
            <div style={{ fontSize: 11, color: 'var(--surface-500)', marginBottom: 8, fontFamily: 'var(--font-mono)' }}>--font-display</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--surface-50)', marginBottom: 8 }}>Space Grotesk</div>
            <div style={{ fontSize: 13, color: 'var(--surface-400)' }}>Display typeface for headings, section titles, and emphasis.</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Headline</h2>
        <div className="card">
          {headlines.map((h) => (
            <div key={h.name} className="type-sample">
              <div className="type-meta">
                <div className="meta-name">{h.name}</div>
                <div className="meta-detail">Helvetica Neue {h.weight}<br/>{h.size} / {h.lineHeight}</div>
              </div>
              <div className="type-preview" style={{ fontSize: h.size, fontWeight: h.weight === 'Bold' ? 700 : 400, lineHeight: h.lineHeight }}>
                {sample}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Title</h2>
        <div className="card">
          {titles.map((t) => (
            <div key={t.name} className="type-sample">
              <div className="type-meta">
                <div className="meta-name">{t.name}</div>
                <div className="meta-detail">Helvetica Neue {t.weight}<br/>{t.size} / {t.lineHeight}</div>
              </div>
              <div className="type-preview" style={{ fontSize: t.size, fontWeight: 700, lineHeight: t.lineHeight }}>
                {sample}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Label</h2>
        <div className="card">
          {labels.map((l) => (
            <div key={l.name} className="type-sample">
              <div className="type-meta">
                <div className="meta-name">{l.name}</div>
                <div className="meta-detail">Helvetica Neue {l.weight}<br/>{l.size} / {l.lineHeight}</div>
              </div>
              <div className="type-preview" style={{ fontSize: l.size, fontWeight: 700, lineHeight: l.lineHeight }}>
                {sample}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Body</h2>
        <div className="card">
          {body.map((b, i) => (
            <div key={i} className="type-sample">
              <div className="type-meta">
                <div className="meta-name">{b.name}</div>
                <div className="meta-detail">Helvetica Neue {b.weight}<br/>{b.size} / {b.lineHeight}</div>
              </div>
              <div className="type-preview" style={{ fontSize: b.size, fontWeight: 400, lineHeight: b.lineHeight }}>
                {sample}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
