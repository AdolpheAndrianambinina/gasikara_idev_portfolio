export default function Hero(){
    return (
      <section className="hero container">
        <div className="hero-text">
          <div className="hero-badge">Créatif • Code • Inspiration</div>
          <h1>Bienvenue chez, <span className="accent">Gasikara‑I‑Dev</span>.</h1>
          <p className="hero-sub"></p>
          <p className="hero-sub">Développement Web, Desktop & Mobile</p>
          <p className="hero-sub">Basé à Tana</p>
     
  
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Nous écrire</a>
            <a href="#projects" className="btn btn-secondary">Nos projets</a>
          </div>
  
        </div>
  
        <div className="hero-visual">
          <img src="/img/hero_illustration.jpg" alt="Illustration développement" />
        </div>
      </section>
    )
  }