import { useParams, Link } from 'react-router-dom'
import { getProject } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProject(id!)
  if (!project) {
    return (
      <div className="card" style={{ padding: 24 }}>
        <p>Project not found.</p>
        <Link to="/projects" className="btn" style={{ marginTop: 12 }}>Back to projects</Link>
      </div>
    )
  }

  return (
    <article className="grid" style={{ gap: 24 }}>
      <header className="grid-12 hero">
        <h1 className="title" style={{ marginBottom: 6 }}>{project.title}</h1>
        <p className="subtitle">{project.summary}</p>
        <div className="tags">{project.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
      </header>

      <section className="grid-8 card" style={{ overflow: 'hidden' }}>
        <img src={project.cover} alt={project.title} style={{ width: '100%', maxHeight: 380, objectFit: 'cover', display: 'block' }} />
        <div style={{ padding: 20 }}>
          <h3 className="section-title">Overview</h3>
          <p style={{ color: 'var(--muted)' }}>{project.description}</p>
        </div>
      </section>

      <aside className="grid-4 card" style={{ padding: 20 }}>
        <h3 className="section-title">Quick facts</h3>
        <div className="tags" style={{ marginBottom: 12 }}>
          {project.year && <span className="tag">Year: {project.year}</span>}
          {project.role && <span className="tag">Role: {project.role}</span>}
        </div>
        <div style={{ display: 'grid', gap: 10 }}>
          {project.stats?.map(s => (
            <div key={s.label} className="kpi">
              <div className="label">{s.label}</div>
              <div className="value">{s.value}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
          {project.links?.map(l => (
            <a key={l.label} href={l.url} className="btn" target="_blank" rel="noreferrer">{l.label}</a>
          ))}
          <Link to="/projects" className="btn">Back</Link>
        </div>
      </aside>
    </article>
  )
}
