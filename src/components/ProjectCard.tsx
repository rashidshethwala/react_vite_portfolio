import { Link } from 'react-router-dom'
import type { Project } from '@/types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/project/${project.id}`} className="project-card">
      <img className="project-img" src={project.cover} alt={project.title} loading="lazy" />
      <div className="project-body">
        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:12}}>
          <h3 style={{margin:0}}>{project.title}</h3>
          {project.year && <span className="tag">{project.year}</span>}
        </div>
        <p style={{margin:0, color:'var(--muted)'}}>{project.summary}</p>
        <div className="tags">
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </Link>
  )
}
