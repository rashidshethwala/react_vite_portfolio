import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => 
    (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light'
  )
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button className="btn" aria-label="Toggle theme" onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}
