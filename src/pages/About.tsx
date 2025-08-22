export default function About() {
  return (
    <div className="grid" style={{ gap: 24 }}>
      <section className="grid-8 card" style={{ padding: 24 }}>
        <h2 className="section-title">About me</h2>
        <p style={{ color: 'var(--muted)' }}>
          I'm a self-taught engineer who cares about UX polish and reliable shipping.
          I enjoy turning complex ideas into approachable products with thoughtful design.
        </p>
        <p style={{ color: 'var(--muted)' }}>
          Recently, I've been exploring motion-first interfaces, design tokens and performance profiling.
          I collaborate closely with design and backend to deliver end-to-end features.
        </p>
      </section>
      <aside className="grid-4 card" style={{ padding: 24 }}>
        <h3 className="section-title">Skills</h3>
        <div className="tags">
          {["React", "TypeScript", "Vite", "Node", "REST", "WebSockets", "CI/CD", "Playwright", "Vitest"].map(s => <span key={s} className="tag">{s}</span>)}
        </div>
        <h3 className="section-title" style={{ marginTop: 16 }}>Tools</h3>
        <div className="tags">
          {["VS Code", "Figma", "GitHub", "Jira", "Linear", "Postman"].map(s => <span key={s} className="tag">{s}</span>)}
        </div>
      </aside>
    </div>
  )
}
