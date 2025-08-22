import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/globals.css'

const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
const theme = saved ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
document.documentElement.setAttribute('data-theme', theme)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/react_vite_portfolio/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
