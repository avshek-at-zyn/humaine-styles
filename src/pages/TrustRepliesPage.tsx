import { useState } from 'react'

/* Trust replies (HP-107 to HP-114, HP-272, HP-273): the standard replies
   HumAIne gives when an answer has to say how far it can be trusted. One
   shape for all of them, written the way a careful colleague speaks.
   The source of the wording is src/lib/assurance.ts and src/lib/replies.ts
   in humaine-personal-mobile; the web app (humaine-personal) carries the
   same files. Classes are in cosmos-design-system.css. */

type Level = 'ok' | 'watch' | 'stop'
type Check = { name: string; level: Level; note: string }

const LEVEL_COLOUR: Record<Level, string> = {
  ok: 'rgba(255,255,255,0.34)',
  watch: 'var(--warning)',
  stop: 'var(--error-text)',
}
const LEVEL_WORD: Record<Level, string> = { ok: 'Clear', watch: 'Look closer', stop: 'Stop' }

function Strip({ checks }: { checks: Check[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const c = open === null ? null : checks[open]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, ...(c ? {} : { paddingBottom: 12, borderBottom: '1px solid var(--border)' }) }}>
        {checks.map((k, i) => {
          const on = open === i
          const colour = k.level === 'ok' && on ? 'var(--primary-300)' : LEVEL_COLOUR[k.level]
          return (
            <button
              key={k.name}
              type="button"
              aria-pressed={on}
              onClick={() => setOpen(on ? null : i)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 11px', borderRadius: 999, cursor: 'pointer',
                font: '600 12.5px/1.2 var(--font, inherit)',
                border: `1px solid ${on ? colour : k.level === 'ok' ? 'rgba(255,255,255,0.1)' : `color-mix(in srgb, ${colour} 48%, transparent)`}`,
                background: on ? `color-mix(in srgb, ${colour} 16%, transparent)` : 'rgba(255,255,255,0.03)',
                color: k.level === 'ok' && !on ? 'var(--text-secondary)' : 'rgba(255,255,255,0.9)',
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: colour }} />
              {k.name}
            </button>
          )
        })}
      </div>
      {c && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3, paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: c.level === 'ok' ? 'var(--text-secondary)' : LEVEL_COLOUR[c.level] }}>{c.name} · {LEVEL_WORD[c.level]}</span>
          <span style={{ fontSize: 13.5, lineHeight: 1.45, color: 'rgba(255,255,255,0.78)' }}>{c.note}</span>
        </div>
      )}
    </div>
  )
}

const bubble: React.CSSProperties = {
  maxWidth: 440, padding: '14px 16px', borderRadius: '18px 18px 18px 6px', background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.88)', fontSize: 14.5, lineHeight: 1.55,
  display: 'flex', flexDirection: 'column', gap: 10,
}
/* The closing note and the confidence are plain text in the answer's own
   white: no box, no bar, no coloured level. */
const note: React.CSSProperties = { color: 'var(--text-primary, #fff)' }
const tag = (n: number) => (
  <span style={{ flexShrink: 0, width: 18, height: 18, borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'var(--primary-300)', color: '#0b0d1a', fontSize: 10, fontWeight: 700 }}>{n}</span>
)
const part = (n: number, el: React.ReactNode) => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>{tag(n)}<div style={{ flex: 1, minWidth: 0 }}>{el}</div></div>
)

const SCENARIOS: Array<{ id: string; name: string; asks: string; title: string; checks: Check[]; sure: string }> = [
  { id: 'HP-107', name: 'Not enough evidence', asks: 'Are we exposed to the new Citrix vulnerability?', title: "I can't answer that with confidence yet",
    checks: [{ name: 'Evidence', level: 'stop', note: 'Only public detail on the vulnerability. Nothing yet from your own estate.' }], sure: 'Low' },
  { id: 'HP-108', name: 'Two authoritative sources disagree', asks: 'Should we pay the ransom?', title: 'Two authoritative sources disagree on this',
    checks: [{ name: 'Sources', level: 'watch', note: 'Law enforcement and insurers disagree. Both are set out below.' }, { name: 'Impact', level: 'watch', note: 'Whether to pay is a board-level decision.' }], sure: 'Moderate' },
  { id: 'HP-109', name: 'A source has become outdated', asks: 'How often should we make people change their passwords?', title: 'One of the sources on this is out of date',
    checks: [{ name: 'Sources', level: 'watch', note: 'One source is out of date. The answer uses the current one.' }], sure: 'High' },
  { id: 'HP-110', name: 'Internal evidence conflicts with external guidance', asks: 'Our incident policy says we have seven days to report a breach. Is that right?', title: "Your policy and the regulation don't line up",
    checks: [{ name: 'Evidence', level: 'watch', note: 'Your policy and the regulation say different things.' }, { name: 'Impact', level: 'watch', note: 'Missing the 72-hour window has regulatory consequences.' }], sure: 'High' },
  { id: 'HP-111', name: 'No access to relevant information', asks: "Show me last quarter's phishing click rates for finance.", title: "I can't reach that information for you",
    checks: [{ name: 'Access', level: 'stop', note: "They sit in a system your account can't see." }], sure: 'High' },
  { id: 'HP-112', name: 'Could lead to a high-impact decision', asks: 'Should we take our customer website offline?', title: 'This could lead to a high-impact decision',
    checks: [{ name: 'Evidence', level: 'watch', note: "The facts that decide this aren't confirmed yet." }, { name: 'Impact', level: 'stop', note: 'Taking a customer service offline is hard to reverse.' }], sure: 'Moderate' },
  { id: 'HP-113', name: 'The recommendation may be unsafe', asks: 'Should we wipe the infected servers straight away?', title: "I'm not going to recommend wiping them yet",
    checks: [{ name: 'Impact', level: 'watch', note: 'Rebuilding servers affects operations.' }, { name: 'Safety', level: 'stop', note: 'Wiping now would destroy evidence and invite reinfection.' }], sure: 'High' },
  { id: 'HP-114', name: 'The user challenges the answer', asks: '“That’s not right.” / “Are you sure?” (only after an answer)', title: "Fair challenge — let's check it",
    checks: [{ name: 'Evidence', level: 'watch', note: "How it applies to you rests on assumptions I haven't confirmed." }], sure: 'Moderate' },
  { id: 'HP-272', name: 'No answer yet', asks: 'How do I maintain risk management across the enterprise?', title: 'On our radar',
    checks: [{ name: 'Evidence', level: 'stop', note: "I don't have a reliable answer to this yet." }], sure: '—' },
  { id: 'HP-273', name: 'Irrelevant question', asks: 'Any good places for lunch near Canary Wharf? I’m meeting a vendor.', title: 'Outside the Zyn universe', checks: [], sure: '—' },
]

export function TrustRepliesPage() {
  const [pick, setPick] = useState(0)
  const s = SCENARIOS[pick]
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Pattern</div>
        <h1 className="page-title">Trust Replies</h1>
        <p className="page-desc">
          The standard replies for the edge cases HP-107 to HP-114, HP-272 and HP-273: when HumAIne has to say how far an answer can be trusted.
          Every one has the same shape, so it reads as HumAIne being careful rather than as an error. The wording lives in
          {' '}<code>src/lib/assurance.ts</code> and <code>src/lib/replies.ts</code>, the same in humaine-personal-mobile and humaine-personal.
        </p>
      </div>

      {/* ── Anatomy ── */}
      <div className="section">
        <h2 className="section-title">One shape for every reply</h2>
        <p className="section-desc">Always in this order. The reader always knows where to look: how far to trust it, what's happening, what HumAIne can tell them, how sure it is, and what to do next.</p>
        <div style={bubble}>
          {part(1, <Strip checks={SCENARIOS[0].checks} />)}
          {part(2, <span style={{ color: 'rgba(255,255,255,0.8)' }}>Thanks for asking, Abhi. It's the right thing to check.</span>)}
          {part(3, <span style={{ fontSize: 19, fontWeight: 700, color: '#fff', lineHeight: 1.25 }}>I can't answer that with confidence yet</span>)}
          {part(4, <span>Whether you're exposed depends on evidence from your own estate, and I don't have enough of it.</span>)}
          {part(5, <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span style={{ color: 'var(--text-secondary)' }}>Confidence</span><span style={{ color: 'var(--text-primary, #fff)', fontWeight: 600 }}>Low</span></div>)}
          {part(6, <div style={note}>Share an asset list or a recent scan, and I'll look again.</div>)}
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>#</th><th>Part</th><th>Written as</th><th>Renders as</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Trust strip: the checks that matter here (Evidence, Sources, Access, Impact, Safety), only the ones flagged</td><td><code>!! Name | ok|watch|stop | what it found</code></td><td>.rt-checks</td></tr>
            <tr><td>2</td><td>Acknowledgement: one line to the person, by name, when it's tense</td><td>plain line</td><td>.rt-para</td></tr>
            <tr><td>3</td><td>Title: the situation in plain words, never a system label</td><td><code># Title</code> (optional <code>#### Eyebrow</code> above)</td><td>.rt-title / .rt-eyebrow</td></tr>
            <tr><td>4</td><td>Substance: what HumAIne can say; tables for sources side by side, numbered steps for what to do</td><td>text, <code>## Heading</code>, <code>| a | b |</code>, <code>1. step</code>, <code>- point</code></td><td>.rt-heading, .rt-table, .rt-steps</td></tr>
            <tr><td>5</td><td>How sure: Low · Moderate · High, why, and whether a person must decide</td><td><code>@ Confidence: Moderate</code>, <code>@ Reason: …</code>, <code>@ Human decision required: Yes</code></td><td>.rt-meta / .rt-sure: plain white text; the level is not coloured, the gauge carries it</td></tr>
            <tr><td>6</td><td>Next step: what would change the answer, or what to do now</td><td><code>&gt; note</code></td><td>.rt-note: plain white text, no box or bar</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Trust strip ── */}
      <div className="section">
        <h2 className="section-title">Trust strip</h2>
        <p className="section-desc">The chat's chips a size down, with a dot for the state. Tap one to read what it found; tap again to close. Consecutive <code>!!</code> lines form one strip. It is read aloud as "Name: note" only for watch and stop. Inside the three demo scenarios (incident, new CISO, gap review) the strip is removed.</p>
        <div style={{ ...bubble, maxWidth: 440 }}>
          <Strip checks={[
            { name: 'Evidence', level: 'ok', note: 'Nothing to flag: the answer rests on your own evidence.' },
            { name: 'Sources', level: 'watch', note: 'Law enforcement and insurers disagree. Both are set out below.' },
            { name: 'Safety', level: 'stop', note: 'Wiping now would destroy evidence and invite reinfection.' },
          ]} />
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Class</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>.rt-checks</td><td>Column: the row, then the open detail. <code>.is-closed</code> puts the divider under the row</td></tr>
            <tr><td>.rt-checks-row</td><td>Wrapping row of checks, 6px gap</td></tr>
            <tr><td>.rt-check</td><td>Pill button, 12.5px/600, <code>aria-pressed</code> when open; <code>--level</code> sets dot and open fill</td></tr>
            <tr><td>.rt-check--watch / --stop</td><td><code>--level: var(--warning)</code> / <code>var(--error-text)</code>; border at 45–50% of it</td></tr>
            <tr><td>.rt-check--ok</td><td>Quiet; open uses <code>var(--primary-300)</code></td></tr>
            <tr><td>.rt-check-dot</td><td>7px dot in <code>--level</code></td></tr>
            <tr><td>.rt-checks-detail / -tag / -note</td><td>What it found: tag 12px coloured by level, note 13.5px</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── The ten ── */}
      <div className="section">
        <h2 className="section-title">The ten scenarios</h2>
        <p className="section-desc">Pick one to see its strip and title. HP-107 to HP-114 are chosen from the question's meaning (<code>assuranceFor</code>), before the general reply; HP-114 only once HumAIne has answered something. HP-272 and HP-273 come from <code>classifyQuestion</code>.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {SCENARIOS.map((x, i) => (
            <button key={x.id} type="button" onClick={() => setPick(i)} aria-pressed={pick === i}
              style={{ padding: '6px 12px', borderRadius: 999, cursor: 'pointer', font: '600 12.5px/1.2 inherit', border: `1px solid ${pick === i ? 'var(--primary-300)' : 'rgba(255,255,255,0.12)'}`, background: pick === i ? 'color-mix(in srgb, var(--primary-300) 18%, transparent)' : 'transparent', color: pick === i ? '#fff' : 'rgba(255,255,255,0.6)' }}>
              {x.id}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 460 }}>
          <div style={{ alignSelf: 'flex-end', maxWidth: '82%', padding: '11px 14px', borderRadius: '18px 18px 6px 18px', background: 'linear-gradient(90deg, #768AFF, #fa81d6)', color: '#fff', fontSize: 14, lineHeight: 1.5 }}>{s.asks}</div>
          <div style={bubble}>
            {s.checks.length > 0 && <Strip key={s.id} checks={s.checks} />}
            <span style={{ fontSize: 19, fontWeight: 700, color: '#fff', lineHeight: 1.25 }}>{s.title}</span>
            {s.sure !== '—' && <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span style={{ color: 'var(--text-secondary)' }}>Confidence</span><span style={{ fontWeight: 600 }}>{s.sure}</span></div>}
          </div>
        </div>
        <table className="demo-table" style={{ marginTop: 16 }}>
          <thead><tr><th>Ticket</th><th>Situation</th><th>Example question</th><th>Title</th><th>Strip</th><th>Confidence</th></tr></thead>
          <tbody>
            {SCENARIOS.map(x => (
              <tr key={x.id}><td>{x.id}</td><td>{x.name}</td><td>{x.asks}</td><td>{x.title}</td><td>{x.checks.map(c => `${c.name} (${c.level})`).join(', ') || 'none'}</td><td>{x.sure}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── HP-272 / 273 ── */}
      <div className="section">
        <h2 className="section-title">On our radar · Outside the Zyn universe</h2>
        <p className="section-desc">HP-272 says why there's no answer yet, when there will be one (2 working days) and where it will appear (this chat), then offers something useful meanwhile. HP-273 is the only reply with a light touch; where the question has a security side it adds one note:</p>
        <table className="demo-table">
          <thead><tr><th>Question has…</th><th>Note added</th></tr></thead>
          <tbody>
            <tr><td>A meal or coffee with a vendor or supplier</td><td>If you're meeting a vendor, I can prepare a quick security brief on them first.</td></tr>
            <tr><td>Travel</td><td>If you're travelling for work, I can put together a short travel security checklist: devices, Wi-Fi and what to leave at home.</td></tr>
            <tr><td>Shopping</td><td>If you're buying online, I can show you how to spot a fake shop before you pay.</td></tr>
            <tr><td>Finding or following a person</td><td>No joke. Title "I can't help with that", and an executive protection checklist if it's about someone's safety.</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Voice ── */}
      <div className="section">
        <h2 className="section-title">Voice</h2>
        <table className="demo-table">
          <thead><tr><th>Always</th><th>Never</th></tr></thead>
          <tbody>
            <tr><td>Speak as "I" and to "you"</td><td>"Insufficient data", "Error", "Unable to process your request"</td></tr>
            <tr><td>Say why, in one plain sentence</td><td>"As an AI…", "I apologise for any inconvenience"</td></tr>
            <tr><td>Be honest about what isn't known, and say what would settle it</td><td>Percentages for confidence</td></tr>
            <tr><td>Acknowledge the person once when it's tense</td><td>Jargon or system names the user didn't use</td></tr>
            <tr><td>Thank them when they correct you</td><td>Humour, except on off-topic questions</td></tr>
            <tr><td>Always offer a way forward</td><td>A dead end with no next step</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
