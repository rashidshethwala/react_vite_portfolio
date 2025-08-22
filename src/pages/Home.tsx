import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="grid">
      <section className="grid-12 hero">
        <h1 className="title">Hi, I'm Rashid — building friendly UIs and snappy apps.</h1>
        <p className="subtitle">Frontend-focused engineer with a love for design systems, animations and developer tooling.</p>
        <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
          <Link to="/projects" className="btn primary">View Projects <MoveRight size={16} /></Link>
          <a href="/Rashid_Resume.pdf" className="btn">Download Resume</a>
        </div>
        <div className="kpis">
          <div className="kpi">
            <div className="label">Experience</div>
            <div className="value">6+ yrs</div>
          </div>
          <div className="kpi">
            <div className="label">Projects</div>
            <div className="value">25+</div>
          </div>
          <div className="kpi">
            <div className="label">Stack</div>
            <div className="value">React · TS · Node</div>
          </div>
        </div>
      </section>
    </div>
  )
}
