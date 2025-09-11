const items = [
    { icon:'/img/icons/dev-web.png', title:'Développement Web', desc:'Sites vitrines, e‑commerce et apps web modernes et rapides.' },
    { icon:'/img/icons/dev-desktop.png', title:'Développement Desktop', desc:'Applications Windows, macOS & Linux performantes.' },
    { icon:'/img/icons/dev-mobile.png', title:'Développement Mobile', desc:'Apps Android & iOS natives ou cross‑platform.' },
    { icon:'/img/icons/maintenance.png', title:'Maintenance & Support', desc:'Suivi, mises à jour, sécurité et supervision.' },
    { icon:'/img/icons/brand.png', title:'Brand Strategy', desc:'Positionnement, identité visuelle et guidelines.' },
    { icon:'/img/icons/uiux.png', title:'UI/UX Design', desc:'Wireframes, maquettes, prototypes & tests.' },
  ]
  
  export default function Services(){
    return (
      <section id="uiux" className="services container">
        <h2>Pour vous accompagner</h2>
        <div className="services-grid">
          {items.map(s => (
            <article className="card service" key={s.title}>
              <img src={s.icon} alt="" className="icon" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
    )
  }