export function DataDisplayPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">Component</div>
        <h1 className="page-title">Data Display</h1>
        <p className="page-desc">
          Tables, KPI cards, and data patterns used across the Dashboard, Access Management, and Admin pages.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Data Table</h2>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table className="demo-table">
            <thead>
              <tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Last Active</th></tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 500, color: 'var(--surface-50)' }}>Abhishek Shevade</td>
                <td>abhishek@zynglobal.ai</td>
                <td><span className="demo-badge demo-badge-primary">Owner</span></td>
                <td><span className="demo-badge demo-badge-success">Active</span></td>
                <td style={{ color: 'var(--surface-400)' }}>2 min ago</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 500, color: 'var(--surface-50)' }}>Sarah Chen</td>
                <td>sarah@zynglobal.ai</td>
                <td><span className="demo-badge demo-badge-lilac">Admin</span></td>
                <td><span className="demo-badge demo-badge-success">Active</span></td>
                <td style={{ color: 'var(--surface-400)' }}>15 min ago</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 500, color: 'var(--surface-50)' }}>Marcus Rivera</td>
                <td>marcus@partner.com</td>
                <td><span className="demo-badge demo-badge-ice">Viewer</span></td>
                <td><span className="demo-badge demo-badge-warning">Pending</span></td>
                <td style={{ color: 'var(--surface-400)' }}>3 days ago</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 500, color: 'var(--surface-50)' }}>Priya Patel</td>
                <td>priya@external.org</td>
                <td><span className="demo-badge demo-badge-ice">Guest</span></td>
                <td><span className="demo-badge demo-badge-error">Inactive</span></td>
                <td style={{ color: 'var(--surface-400)' }}>30 days ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">KPI Dashboard</h2>
        <div className="demo-kpi-grid">
          <div className="demo-kpi">
            <div className="demo-kpi-label">AI Queries Today</div>
            <div className="demo-kpi-value" style={{ color: 'var(--shiny-blue)' }}>3,847</div>
            <div className="demo-kpi-change up">+23.1% vs yesterday</div>
          </div>
          <div className="demo-kpi">
            <div className="demo-kpi-label">Documents Processed</div>
            <div className="demo-kpi-value" style={{ color: 'var(--ryleigh)' }}>892</div>
            <div className="demo-kpi-change up">+5.7% this week</div>
          </div>
          <div className="demo-kpi">
            <div className="demo-kpi-label">Security Score</div>
            <div className="demo-kpi-value" style={{ color: 'var(--success)' }}>98.5%</div>
            <div className="demo-kpi-change up">+1.2% this month</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Leaderboard</h2>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table className="demo-table">
            <thead>
              <tr><th>#</th><th>Department</th><th>Queries</th><th>Trend</th></tr>
            </thead>
            <tbody>
              {[
                { rank: 1, dept: 'Engineering', queries: '12,450', trend: '+18%', bar: 100 },
                { rank: 2, dept: 'Sales', queries: '8,230', trend: '+24%', bar: 66 },
                { rank: 3, dept: 'Marketing', queries: '5,120', trend: '+9%', bar: 41 },
                { rank: 4, dept: 'HR', queries: '3,890', trend: '+31%', bar: 31 },
                { rank: 5, dept: 'Finance', queries: '2,100', trend: '-2%', bar: 17 },
              ].map((r) => (
                <tr key={r.rank}>
                  <td style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: r.rank <= 3 ? 'var(--primary-300)' : 'var(--surface-400)' }}>{r.rank}</td>
                  <td style={{ fontWeight: 500, color: 'var(--surface-50)' }}>{r.dept}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: `${r.bar}%`, maxWidth: 120, height: 6, borderRadius: 3, background: 'var(--gradient-galaxy)', opacity: 0.7 }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{r.queries}</span>
                    </div>
                  </td>
                  <td>
                    <span style={{ color: r.trend.startsWith('+') ? 'var(--success)' : 'var(--error)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>{r.trend}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Table Specs</h2>
        <table className="demo-table">
          <thead>
            <tr><th>Property</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr><td>Header Background</td><td>rgba(27, 27, 35, 0.8)</td></tr>
            <tr><td>Header Font</td><td>11px, 600 weight, uppercase</td></tr>
            <tr><td>Cell Padding</td><td>12px 16px</td></tr>
            <tr><td>Cell Font</td><td>13px</td></tr>
            <tr><td>Row Divider</td><td>1px solid rgba(255,255,255,0.06)</td></tr>
            <tr><td>Hover Background</td><td>var(--bg-card)</td></tr>
            <tr><td>Border Radius</td><td>12px (outer container)</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
