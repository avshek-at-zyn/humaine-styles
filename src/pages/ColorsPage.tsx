export function ColorsPage() {
  const brandColors = [
    { name: 'Shiny Blue', hex: '#5271FF', rgb: '82, 113, 255', pms: '2718 C' },
    { name: 'Ryleigh', hex: '#B5B7F6', rgb: '181, 183, 246', pms: '2717 C' },
    { name: 'Common Lilac', hex: '#E5C3F0', rgb: '229, 195, 240', pms: '531 C' },
    { name: 'Comfort Ice Blue', hex: '#ACE1E4', rgb: '172, 225, 228', pms: '317 C' },
  ]

  const primaryScale = [
    { step: '50', hex: '#EEF0FF' },
    { step: '100', hex: '#D8DCFF' },
    { step: '200', hex: '#B6BEFF' },
    { step: '300', hex: '#96A3FF' },
    { step: '400', hex: '#768AFF' },
    { step: '500', hex: '#5271FF' },
    { step: '600', hex: '#264AAF' },
    { step: '700', hex: '#0D3997' },
    { step: '800', hex: '#001681' },
    { step: '900', hex: '#141E3A' },
    { step: '950', hex: '#121315' },
  ]

  const surfaceScale = [
    { step: '50', hex: '#FBFBFB' },
    { step: '100', hex: '#EFEFEF' },
    { step: '200', hex: '#DADADA' },
    { step: '300', hex: '#B9B9B9' },
    { step: '400', hex: '#979797' },
    { step: '500', hex: '#666666' },
    { step: '600', hex: '#5C5C5C' },
    { step: '700', hex: '#474747' },
    { step: '800', hex: '#3A3A3A' },
    { step: '900', hex: '#2F2F2F' },
    { step: '950', hex: '#1B1B1B' },
  ]

  const semanticColors = [
    { name: 'Success', hex: '#4DCC8F', bg: 'rgba(77,204,143,0.1)' },
    { name: 'Warning', hex: '#FFB84D', bg: 'rgba(255,184,77,0.1)' },
    { name: 'Error', hex: '#FF5252', bg: 'rgba(255,82,82,0.1)' },
    { name: 'Info', hex: '#5271FF', bg: 'rgba(82,113,255,0.1)' },
  ]

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Foundation</div>
        <h1 className="page-title">Colors</h1>
        <p className="page-desc">
          The HumAIne colour palette blends deep-space neutrals with vibrant brand accents.
          Primary palette for identity, surface scale for UI depth.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Brand Palette</h2>
        <p className="section-desc">The four core brand colours used across HumAIne for identity and key accents.</p>
        <div className="brand-colors">
          {brandColors.map((c) => (
            <div key={c.name} className="brand-color-card" style={{ cursor: 'pointer' }}>
              <div className="color-preview" style={{ background: c.hex }} />
              <div className="color-info">
                <div className="color-name">{c.name}</div>
                <div className="color-hex">{c.hex}</div>
                <div style={{ fontSize: 10, color: 'var(--surface-500)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>
                  RGB ({c.rgb}) · PMS {c.pms}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Primary Scale</h2>
        <p className="section-desc">11-step blue scale anchored by Shiny Blue at 500. Used for interactive elements, focus states, and brand accents.</p>
        <div className="color-scale-row">
          {primaryScale.map((c) => (
            <div
              key={c.step}
              className="color-swatch"
              style={{
                background: c.hex,
                color: Number(c.step) <= 400 ? '#141E3A' : '#fff',
              }}
            >
              <div className="swatch-label">{c.step}</div>
              <div className="swatch-hex">{c.hex}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Surface Scale</h2>
        <p className="section-desc">Neutral grey scale for backgrounds, borders, and text hierarchy. Dark mode uses 700–950 for surfaces and 200–50 for text.</p>
        <div className="color-scale-row">
          {surfaceScale.map((c) => (
            <div
              key={c.step}
              className="color-swatch"
              style={{
                background: c.hex,
                color: Number(c.step) <= 400 ? '#1B1B1B' : '#DADADA',
              }}
            >
              <div className="swatch-label">{c.step}</div>
              <div className="swatch-hex">{c.hex}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Semantic Colors</h2>
        <div className="semantic-grid">
          {semanticColors.map((c) => (
            <div key={c.name} className="semantic-card" style={{ background: c.bg }}>
              <div className="semantic-dot" style={{ background: c.hex, boxShadow: `0 0 16px ${c.hex}40` }} />
              <div className="semantic-name">{c.name}</div>
              <div className="semantic-hex">{c.hex}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Usage Guidelines</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { token: '--primary-500', use: 'Primary buttons, active nav items, focus rings' },
            { token: '--surface-950', use: 'Sidebar, topbar, card backgrounds' },
            { token: '--surface-900', use: 'Input backgrounds, secondary surfaces' },
            { token: '--surface-800', use: 'Borders, dividers, hover states' },
            { token: '--surface-400', use: 'Secondary text, placeholders' },
            { token: '--surface-200', use: 'Primary body text' },
            { token: '--surface-50', use: 'High-emphasis text, headings' },
          ].map((row) => (
            <div key={row.token} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span className="code-token" style={{ minWidth: 140 }}>{row.token}</span>
              <span style={{ fontSize: 13, color: 'var(--surface-300)' }}>{row.use}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
