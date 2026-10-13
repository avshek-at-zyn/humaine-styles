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
          One typeface, Helvetica Neue, for everything in both apps — headings, body, labels and buttons. App screens size their
          text from the nine-step <span className="code-token">--fs-*</span> scale; the larger steps below are for marketing and the web's hero moments.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Typeface</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          <div className="card">
            <div style={{ fontSize: 11, color: 'var(--surface-500)', marginBottom: 8, fontFamily: 'var(--font-mono)' }}>--font · --font-body · --font-sans</div>
            <div style={{ fontFamily: 'var(--font)', fontSize: 24, color: 'var(--surface-50)', marginBottom: 8 }}>Helvetica Neue</div>
            <div style={{ fontSize: 13, color: 'var(--surface-400)' }}>Every word in both apps. The three names are one value in <span className="code-token">cosmos/tokens.css</span>, kept so older stylesheets still read it.</div>
          </div>
          <div className="card">
            <div style={{ fontSize: 11, color: 'var(--surface-500)', marginBottom: 8, fontFamily: 'var(--font-mono)' }}>The one exception</div>
            <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 8, background: 'var(--gradient-brand)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>hum<em>AI</em>ne</div>
            <div style={{ fontSize: 13, color: 'var(--surface-400)' }}>The wordmark keeps its own drawing. It is the logo, not text, so it is never re-set in the app face.</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">App scale</h2>
        <p className="section-desc">The sizes app screens use. Each is a token, so a step can be retuned in one place. Half-pixel sizes (12.5, 13.5) move onto the nearest step as screens join the scale.</p>
        <div className="card">
          {[
            { t: '--fs-34', use: 'Screen titles that open a flow' },
            { t: '--fs-28', use: 'Page titles' },
            { t: '--fs-22', use: 'Sheet and section headings' },
            { t: '--fs-18', use: 'Card headings' },
            { t: '--fs-16', use: 'Buttons, body copy on a phone' },
            { t: '--fs-14', use: 'Body copy on the web, list rows' },
            { t: '--fs-13', use: 'Pills, chips, secondary lines' },
            { t: '--fs-12', use: 'Descriptions, helper text' },
            { t: '--fs-11', use: 'Badges, labels, meta' },
          ].map(r => (
            <div key={r.t} className="type-sample">
              <div className="type-meta">
                <div className="meta-name">{r.t}</div>
                <div className="meta-detail">{r.t.replace('--fs-', '')}px<br/>{r.use}</div>
              </div>
              <div className="type-preview" style={{ fontSize: `var(${r.t})`, fontFamily: 'var(--font)' }}>Humans must lead. Technology must augment.</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Headline · marketing and hero</h2>
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
