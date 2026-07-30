export function SocialButtonPage() {
  const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.02 10.02 0 001 12c0 1.61.39 3.14 1.07 4.5l3.66-2.84.11.43z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
  const MicrosoftIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
      <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
      <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
      <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
    </svg>
  )

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Social Button</h1>
        <p className="page-desc">
          OAuth provider buttons for auth screens. Uses real provider icons. Two layouts: full-width with text and compact icon-only for responsive.
        </p>
      </div>

      {/* Full width with text */}
      <div className="section">
        <h2 className="section-title">With Text</h2>
        <p className="section-desc">Full-width buttons with provider icon and label. Used on sign-in and sign-up screens.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 360 }}>
          <button className="social-demo-btn">
            <GoogleIcon />
            Continue with Google
          </button>
          <button className="social-demo-btn">
            <MicrosoftIcon />
            Continue with Microsoft
          </button>
        </div>
      </div>

      {/* Hover state */}
      <div className="section">
        <h2 className="section-title">Hover State</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 360 }}>
          <button className="social-demo-btn" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'var(--surface-500)' }}>
            <GoogleIcon />
            Continue with Google
          </button>
        </div>
        <div style={{ marginTop: 8, fontSize: 10, color: 'var(--surface-600)', fontFamily: 'var(--font-mono)', lineHeight: 1.5 }}>
          bg: rgba(255,255,255,0.04) &middot; border: var(--surface-500)
        </div>
      </div>

      {/* Icon only — compact */}
      <div className="section">
        <h2 className="section-title">Icon Only (Responsive)</h2>
        <p className="section-desc">Compact icon-only variant for narrow viewports or inline placement.</p>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="social-demo-compact"><GoogleIcon /></button>
          <button className="social-demo-compact"><MicrosoftIcon /></button>
        </div>
      </div>

      {/* Compact row with text */}
      <div className="section">
        <h2 className="section-title">Compact Row</h2>
        <p className="section-desc">Side-by-side buttons with icon + short label. Used in the auth page header.</p>
        <div style={{ display: 'flex', gap: 10, maxWidth: 360 }}>
          <button className="social-demo-btn" style={{ flex: 1 }}>
            <GoogleIcon />
            Google
          </button>
          <button className="social-demo-btn" style={{ flex: 1 }}>
            <MicrosoftIcon />
            Microsoft
          </button>
        </div>
      </div>

      {/* SSO */}
      <div className="section">
        <h2 className="section-title">SSO / Enterprise</h2>
        <div style={{ maxWidth: 360 }}>
          <button style={{
            height: 44, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            background: 'transparent', border: '1px solid var(--primary-500)',
            borderRadius: 8, fontSize: 13, color: 'var(--primary-300)',
            cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 500,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            Use Single Sign-on
          </button>
        </div>
      </div>

      {/* Specs */}
      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Height</td><td>48px (full) / 48px (compact)</td></tr>
            <tr><td>Border</td><td>1px solid var(--surface-700)</td></tr>
            <tr><td>Border Radius</td><td>8px</td></tr>
            <tr><td>Background</td><td>transparent</td></tr>
            <tr><td>Hover Background</td><td>rgba(255,255,255,0.04)</td></tr>
            <tr><td>Hover Border</td><td>var(--surface-500)</td></tr>
            <tr><td>Font</td><td>14px / 500</td></tr>
            <tr><td>Icon Size</td><td>20 &times; 20px</td></tr>
            <tr><td>Gap (icon to text)</td><td>10px</td></tr>
            <tr><td>Text Color</td><td>var(--surface-100)</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
