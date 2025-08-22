import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-inner container">
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <div style={{width:36, height:36, borderRadius:10, background:'var(--surface)', display:'grid',placeItems:'center', border:'1px solid var(--border)'}}>
              <span style={{fontWeight:900}}>R</span>
            </div>
            <strong>Rashid · Portfolio</strong>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:6}}>
            <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>Projects</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} Rashid — Built with React + Vite
      </footer>
    </div>
  )
}
