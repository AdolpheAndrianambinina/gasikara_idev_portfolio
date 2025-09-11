import React, { useState } from 'react'

const PROJECTS = [
  { id: 1, cat: 'uiux',    img: '/img/projects/fashion.jpg',   tag: 'UI/UX Design',  title: 'Fashion Website Design' },
  { id: 2, cat: 'uiux',    img: '/img/projects/marketing.jpg', tag: 'UI/UX Design',  title: 'Marketing Website Design' },
  { id: 3, cat: 'mobile',  img: '/img/projects/watch.jpg',     tag: 'Dev Mobile',    title: 'Watch Website Design' },
  { id: 4, cat: 'desktop', img: '/img/projects/jordan.jpg',    tag: 'Dev Desktop',   title: 'Jordan Website Design' },
  { id: 5, cat: 'uiux',    img: '/img/projects/redbull.jpg',   tag: 'UI/UX Design',  title: 'Redbull Website Design' },
  { id: 6, cat: 'uiux',    img: '/img/projects/drone.jpg',     tag: 'UI/UX Design',  title: 'Drone Website Design' },
]

const TABS = [
  { key: 'all',     label: 'Tous' },
  { key: 'uiux',    label: 'UI-UX' },   // remplace le tiret spécial par un tiret normal
  { key: 'mobile',  label: 'Dev Mobile' },
  { key: 'desktop', label: 'Dev Desktop' },
]

export default function Projects() {
  const [active, setActive] = useState('all')
  const visible = active === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === active)

  return (
    <section id="projects" className="projects container">
      <div className="projects-head">
        <h2>Les projets qui reflètent notre vision</h2>
        <div className="filters" role="tablist" aria-label="Filtres projets">
          {TABS.map(t => (
            <button
              key={t.key}
              type="button"
              role="tab"
              className={`filter ${active === t.key ? 'is-active' : ''}`}
              aria-selected={active === t.key}
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-cards">
        {visible.map(p => (
          <figure className={`card project ${p.cat}`} key={p.id}>
            <img src={p.img} alt={p.title} />
            <figcaption>
              <span className="tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <button type="button" className="card-arrow" aria-label="Ouvrir le projet">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path fill="currentColor" d="M6 12h9.17l-3.59 3.59L13 17l6-6-6-6-1.41 1.41L15.17 11H6z"/>
                </svg>
              </button>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}