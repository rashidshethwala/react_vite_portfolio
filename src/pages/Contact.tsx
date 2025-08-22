import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sent'>('idle')
  return (
    <div className="grid">
      <section className="grid-8 card" style={{padding:24}}>
        <h2 className="section-title">Let's work together</h2>
        <p style={{color:'var(--muted)'}}>Tell me about your project and I'll get back within 1–2 days.</p>
        {status === 'idle' ? (
          <form onSubmit={(e)=>{ e.preventDefault(); setStatus('sent')}} style={{display:'grid', gap:12}}>
            <input required placeholder="Your name" style={inputStyle} />
            <input required type="email" placeholder="Email" style={inputStyle} />
            <input placeholder="Company" style={inputStyle} />
            <textarea required placeholder="Project details" rows={6} style={inputStyle} />
            <button className="btn primary" type="submit">Send message</button>
          </form>
        ) : (
          <div className="card" style={{padding:16}}>
            Thanks! Your message has been sent.
          </div>
        )}
      </section>
      <aside className="grid-4 card" style={{padding:24}}>
        <h3 className="section-title">Contact</h3>
        <div style={{display:'grid', gap:8, color:'var(--muted)'}}>
          <div>Email: <a href="mailto:rashid@example.com">rashid@example.com</a></div>
          <div>Location: India (IST)</div>
          <div>Social: <a href="https://github.com/">GitHub</a> · <a href="https://www.linkedin.com/">LinkedIn</a></div>
        </div>
      </aside>
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  padding:'12px 14px',
  borderRadius:12,
  border:'1px solid var(--border)',
  background:'var(--surface)',
  color:'var(--text)'
}
