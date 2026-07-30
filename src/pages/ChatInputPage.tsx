import { useState, useRef, useEffect } from 'react'

export function ChatInputPage() {
  const [audioBars, setAudioBars] = useState<number[]>(() =>
    Array.from({ length: 36 }, () => Math.random())
  )

  useEffect(() => {
    const id = setInterval(() => {
      setAudioBars(prev => [...prev.slice(1), Math.random()])
    }, 80)
    return () => clearInterval(id)
  }, [])

  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">ChatInput</h1>
        <p className="page-desc">
          The primary input for HumAIne's AI chat. A card-style container with textarea, attachment menu, voice recording, and send controls.
        </p>
      </div>

      {/* Default state */}
      <div className="section">
        <h2 className="section-title">Default</h2>
        <p className="section-desc">Empty state with placeholder, attach (+) and mic buttons.</p>
        <div className="ci-demo-card">
          <div className="ci-demo-textarea" style={{ color: '#979797' }}>
            Message to humaine...
          </div>
          <div className="ci-demo-bottom">
            <button className="ci-demo-icon-btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
            <button className="ci-demo-mic-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M5 10a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Text entered - with Send */}
      <div className="section">
        <h2 className="section-title">Text Entered</h2>
        <p className="section-desc">When user types, the Send pill appears. Focus adds a brighter border.</p>
        <div className="ci-demo-card" style={{ borderColor: 'var(--surface-500)' }}>
          <div className="ci-demo-textarea" style={{ color: 'var(--surface-200)' }}>
            What were our Q4 revenue highlights?
          </div>
          <div className="ci-demo-bottom">
            <button className="ci-demo-icon-btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button className="ci-demo-mic-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M5 10a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="ci-demo-send-pill">
                Send
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* File Attached */}
      <div className="section">
        <h2 className="section-title">File Attached</h2>
        <p className="section-desc">Files appear as chips above the textarea with a remove button.</p>
        <div className="ci-demo-card" style={{ borderColor: 'var(--surface-500)' }}>
          <div className="ci-demo-files">
            <div className="ci-demo-file">
              <span className="ci-demo-file-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </span>
              <span className="ci-demo-file-name">Q4_Report.pdf</span>
              <button className="ci-demo-file-remove">&times;</button>
            </div>
            <div className="ci-demo-file ci-demo-file--img">
              <div className="ci-demo-file-thumb" style={{ background: 'linear-gradient(135deg, var(--primary-600), var(--common-lilac))' }} />
              <button className="ci-demo-file-remove">&times;</button>
            </div>
          </div>
          <div className="ci-demo-textarea" style={{ color: 'var(--surface-200)' }}>
            Summarise this report for me
          </div>
          <div className="ci-demo-bottom">
            <button className="ci-demo-icon-btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button className="ci-demo-mic-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M5 10a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="ci-demo-send-pill">
                Send
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Recording */}
      <div className="section">
        <h2 className="section-title">Voice Recording</h2>
        <p className="section-desc">Mic replaces the bottom row with a live waveform, discard (trash), and confirm (check) buttons.</p>
        <div className="ci-demo-card" style={{ borderColor: 'var(--surface-500)' }}>
          <div className="ci-demo-textarea" style={{ color: 'var(--surface-200)', fontStyle: 'italic' }}>
            Listening...
          </div>
          <div className="ci-demo-bottom">
            <div className="ci-demo-waveform">
              {audioBars.map((h, i) => (
                <div key={i} className="ci-demo-bar" style={{ height: `${Math.max(4, h * 28 + 4)}px` }} />
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button className="ci-demo-voice-btn ci-demo-voice-btn--discard" title="Discard">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="ci-demo-voice-btn ci-demo-voice-btn--confirm" title="Confirm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Transcribed */}
      <div className="section">
        <h2 className="section-title">Voice Transcribed</h2>
        <p className="section-desc">After confirming, the transcribed text appears in the textarea ready to edit or send.</p>
        <div className="ci-demo-card" style={{ borderColor: 'var(--surface-500)' }}>
          <div className="ci-demo-textarea" style={{ color: 'var(--surface-200)' }}>
            Show me the latest security audit results
          </div>
          <div className="ci-demo-bottom">
            <button className="ci-demo-icon-btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button className="ci-demo-mic-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M5 10a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="ci-demo-send-pill">
                Send
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Attach Menu */}
      <div className="section">
        <h2 className="section-title">Attach Menu</h2>
        <p className="section-desc">The + button opens a dropdown with Upload file and Upload image options.</p>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div className="ci-demo-attach-menu">
            <button className="ci-demo-menu-item">
              <span className="ci-demo-menu-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><line x1="12" y1="18" x2="12" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><polyline points="9 15 12 12 15 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <div className="ci-demo-menu-label">Upload file</div>
                <div className="ci-demo-menu-sub">PDF, DOCX, TXT and more</div>
              </div>
            </button>
            <button className="ci-demo-menu-item">
              <span className="ci-demo-menu-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.6"/><polyline points="21 15 16 10 5 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <div className="ci-demo-menu-label">Upload image</div>
                <div className="ci-demo-menu-sub">JPG, PNG, GIF, WEBP</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className="section">
        <h2 className="section-title">Specs</h2>
        <table className="demo-table">
          <thead><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Card Background</td><td>var(--surface-950)</td></tr>
            <tr><td>Card Border</td><td>1px solid var(--surface-800)</td></tr>
            <tr><td>Card Radius</td><td>24px</td></tr>
            <tr><td>Card Padding</td><td>20px 24px</td></tr>
            <tr><td>Card Min Height</td><td>148px</td></tr>
            <tr><td>Focus Border</td><td>var(--surface-500)</td></tr>
            <tr><td>Textarea Font</td><td>14px / var(--font-body)</td></tr>
            <tr><td>Placeholder</td><td>#979797</td></tr>
            <tr><td>Send Pill</td><td>var(--primary-500), radius 16px, font 16px/700</td></tr>
            <tr><td>Mic / Attach Button</td><td>32px, border 1px solid #979797</td></tr>
            <tr><td>Waveform Bar</td><td>3px wide, var(--primary-500), 0.75 opacity</td></tr>
            <tr><td>Discard Button</td><td>border: 1px solid #ed6a6c</td></tr>
            <tr><td>Confirm Button</td><td>border: 1px solid #1a945b</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
