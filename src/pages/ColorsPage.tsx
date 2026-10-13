import { useTokens } from '../useTokens'

/* A token, shown with the value the page actually has for it. */
function Token({ name, value, use, swatch, sample }: { name: string; value?: string; use: string; swatch?: React.CSSProperties; sample?: string }) {
  return (
    <div className="semantic-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)' }}>
      <div style={{ height: 44, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-strong)', marginBottom: 10, background: `var(${name})`, ...swatch }}>{sample}</div>
      <div className="semantic-name">{name}</div>
      <div className="semantic-hex">{value || '…'}</div>
      <div style={{ fontSize: 11.5, color: 'var(--surface-400)', marginTop: 6, lineHeight: 1.45 }}>{use}</div>
    </div>
  )
}

export function ColorsPage() {
  const brandColors = [
    { name: 'Shiny Blue', hex: '#5271FF', rgb: '82, 113, 255', pms: '2718 C' },
    { name: 'Ryleigh', hex: '#B5B7F6', rgb: '181, 183, 246', pms: '2717 C' },
    { name: 'Common Lilac', hex: '#E5C3F0', rgb: '229, 195, 240', pms: '531 C' },
    { name: 'Comfort Ice Blue', hex: '#ACE1E4', rgb: '172, 225, 228', pms: '317 C' },
  ]

  const ground = [
    { name: '--bg', use: 'The ground under every screen, both apps' },
    { name: '--color-primary', use: 'The primary itself: links, focus, the brand mark' },
    { name: '--primary-300', use: 'What is chosen: a segmented side, the step you are on, a primary badge' },
    { name: '--primary-400', use: 'A picked chip, and the start of the main button' },
    { name: '--primary-200', use: 'Light tints and text on dark primary fills' },
    { name: '--primary-500', use: 'Deep fills; info' },
    { name: '--brand-purple', use: 'Accents on the chat surface' },
    { name: '--brand-pink', use: 'The end of every brand gradient' },
  ]
  const text = [
    { name: '--text-primary', use: 'Headings and body copy' },
    { name: '--text-secondary', use: 'Descriptions, labels, secondary lines' },
    { name: '--text-muted', use: 'Hints and meta only — too faint for body copy' },
    { name: '--border', use: 'Every hairline: cards, fields, dividers' },
    { name: '--border-strong', use: 'A firmer edge: secondary buttons, hover' },
  ]
  const status = [
    { name: '--success', use: 'Something went right: a strong password, a refund. Never “Active”.' },
    { name: '--warning', use: 'Something to act on soon: an expired plan' },
    { name: '--error', use: 'Something went wrong; destructive actions' },
    { name: '--error-text', use: 'An error said in words, under a field' },
  ]
  const choice = [
    { name: '--choice-bg', use: 'A pill on offer: its fill' },
    { name: '--choice-border', use: 'A pill on offer: its edge' },
    { name: '--choice-text', use: 'A pill on offer: its words' },
    { name: '--chosen-bg', use: 'A picked pill or chip: filled' },
    { name: '--chosen-text', use: 'A picked pill or chip: white words' },
    { name: '--chosen-glow', use: 'A picked pill or chip: the soft glow under it' },
  ]
  const live = useTokens([...ground, ...text, ...status, ...choice].map(t => t.name))

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

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Foundation</div>
        <h1 className="page-title">Colors</h1>
        <p className="page-desc">
          Two palettes. The ZynGlobal identity colours for the logo, print and marketing, and the product tokens
          every humAIne screen is built from. The product tokens live in one file, <span className="code-token">cosmos/tokens.css</span>,
          that both apps read — the values on this page are read from it live.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Identity palette</h2>
        <p className="section-desc">The four ZynGlobal brand colours, for identity and print. Product screens use the tokens below, not these directly.</p>
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
        <h2 className="section-title">Ground and brand</h2>
        <p className="section-desc">The same in both apps. Change one in <span className="code-token">humaine-styles/public/cosmos/tokens.css</span>, run <span className="code-token">npm run cosmos:sync</span> in each app, and both follow.</p>
        <div className="semantic-grid">
          {ground.map(t => <Token key={t.name} name={t.name} value={live[t.name]} use={t.use} />)}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Text and lines</h2>
        <div className="semantic-grid">
          {text.map(t => (
            <Token key={t.name} name={t.name} value={live[t.name]} use={t.use} sample={t.name.startsWith('--text') ? 'Aa' : undefined}
              swatch={{ background: 'var(--bg)', boxShadow: t.name.startsWith('--border') ? `inset 0 0 0 1px var(${t.name})` : 'inset 0 0 0 1px var(--border)', color: `var(${t.name})`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600 }} />
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Status</h2>
        <p className="section-desc">One green, one amber, one red. Green is for something that went right, not for something that is on — a status like “Active” or “This device” is a primary badge.</p>
        <div className="semantic-grid">
          {status.map(t => <Token key={t.name} name={t.name} value={live[t.name]} use={t.use} />)}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">A choice, and a choice made</h2>
        <p className="section-desc">The pills a question offers, and how one looks once picked. Relationship building set them; Personalisation, the incident questions and “What went wrong?” use them in both apps.</p>
        <div className="card" style={{ marginBottom: 14 }}>
          <div className="choice-pills">
            <span className="choice-pill choice-pill--on">Executive &amp; concise</span>
            <span className="choice-pill">Analytical &amp; detailed</span>
            <span className="choice-pill">Calm &amp; reassuring</span>
          </div>
        </div>
        <div className="semantic-grid">
          {choice.map(t => (
            <Token key={t.name} name={t.name} value={live[t.name]} use={t.use} sample={t.name.endsWith('-text') ? 'Aa' : undefined}
              swatch={t.name === '--chosen-glow' ? { background: 'var(--chosen-bg)', boxShadow: 'var(--chosen-glow)' }
                : t.name.endsWith('-text') ? { background: t.name.startsWith('--chosen') ? 'var(--chosen-bg)' : 'var(--choice-bg)', color: `var(${t.name})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600 }
                : t.name.endsWith('-border') ? { background: 'transparent', boxShadow: `inset 0 0 0 2px var(${t.name})` }
                : undefined} />
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Surface scale</h2>
        <p className="section-desc">Neutral greys for depth. Not shared yet: each app keeps its own steps, and these are the web's. They join the shared tokens when the components that use them do.</p>
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
        <h2 className="section-title">Usage</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { token: '--bg', use: 'Page ground, both apps' },
            { token: '--gradient-cta', use: 'The main button, a switch that is on, your own chat message' },
            { token: '--primary-300', use: 'The chosen side of a segmented control, the current step, a primary badge' },
            { token: '--chosen-bg', use: 'A picked pill or chip, with --chosen-text on it' },
            { token: '--text-primary', use: 'Headings and body copy' },
            { token: '--text-secondary', use: 'Descriptions and labels' },
            { token: '--border', use: 'Hairlines: cards, fields, dividers' },
            { token: '--success', use: 'Only for something that went right' },
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
