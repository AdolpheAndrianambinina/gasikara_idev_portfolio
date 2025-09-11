import { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="#home">
          <img src="/img/logo.png" alt="Logo Gasikar‑I‑Dev" className="brand-logo" />
          <span className="brand-text">Gasikara‑I‑Dev</span>
        </a>

        <button
          className="nav-toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Navigation principale">
          <a href="#home" onClick={()=>setOpen(false)}>Accueil</a>
          <a href="#uiux" onClick={()=>setOpen(false)}>UI/UX</a>
          <a href="#projects" onClick={()=>setOpen(false)}>Projets</a>
          <a href="#about" onClick={()=>setOpen(false)}>À propos</a>
          <a href="#contact" className="btn btn-ghost btn-small" onClick={()=>setOpen(false)}>Nous écrire</a>
        </nav>
      </div>
    </header>
  )
}