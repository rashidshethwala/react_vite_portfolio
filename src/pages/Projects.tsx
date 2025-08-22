import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useMemo, useState } from 'react'

export default function Projects() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return projects.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.summary.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <div className="grid" style={{ gap: 24 }}>
      <div className="grid-12 card" style={{ padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <h2 className="section-title" style={{ margin: 0 }}>Projects</h2>
        <input
          placeholder="Search by title, tag..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '10px 12px', borderRadius: 12, border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)', minWidth: 240 }}
        />
      </div>
      {filtered.map(p => (
        <div className="grid-4" key={p.id}>
          <ProjectCard project={p} />
        </div>
      ))}
      {filtered.length === 0 && (
        <div className="grid-12 card" style={{ padding: 24, textAlign: 'center', color: 'var(--muted)' }}>No projects found.</div>
      )}
    </div>
  )
}
