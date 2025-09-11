// src/components/About.jsx
export default function About(){
    return (
      <section id="about" className="about container">
        <div className="about-visual">
          <img src="/img/about_illustration.jpg" alt="Équipe en action" />
        </div>
  
        <div className="about-content">
          <p className="about-eyebrow">A PROPOS DE NOUS</p>
          <h2>Nous sommes un groupe passionné de développeurs, designers et chefs de projet</h2>
  
          <p>
            Unis par la volonté de créer des solutions digitales qui font la différence.
            Notre expertise technique et notre approche collaborative nous permettent
            d’accompagner efficacement nos clients à chaque étape.
          </p>
  
          <div className="about-actions">
            <a
              href="/docs/cv.pdf"
              download
              className="btn btn-white"
              aria-label="Télécharger le CV"
            >
              Download CV
            </a>
          </div>
         
          <div className="kpi-container">
            {/* KPI 1 */}
            <div className="kpi-card">
              <div className="kpi-number">06+</div>
              <div className="kpi-label">Ans expérience</div>
            </div>

            {/* KPI 2 */}
            <div className="kpi-card">
              <div className="kpi-number">150+</div>
              <div className="kpi-label">Projets</div>
            </div>

            {/* KPI 3 */}
            <div className="kpi-card">
              <div className="kpi-number">100%</div>
              <div className="kpi-label">Satisfaction Client</div>
            </div>
          </div>

        </div>
      </section>
    )
  }