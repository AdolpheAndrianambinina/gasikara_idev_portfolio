import { useEffect, useState } from 'react'

const testimonials = [
  {
    id:1,
    text:'“Équipe réactive et créative, notre site a gagné en performance et en clarté. La collaboration a été fluide du début à la fin.”',
    name:'Marie Lianne',
    title:'Fondatrice, GreenMarket',
    photo:'/img/testimonials/01.jpg'
  },
  {
    id:2,
    text:'“Excellent accompagnement sur notre application mobile. Les délais ont été tenus et le résultat est top.”',
    name:'Ava Dan',
    title:'CEO, Move Studio',
    photo:'/img/testimonials/02.jpg'
  }
]

export default function Testimonials(){
  const [current, setCurrent] = useState(0)

  useEffect(()=>{
    const it = setInterval(()=>{
      setCurrent(c => (c+1) % testimonials.length)
    }, 6000)
    return ()=> clearInterval(it)
  },[])

  return (
    <section className="testimonials container">
      <h2>Retour clients</h2>
      <p className="t-sub">Que disent nos clients sur nous ?</p>

      <div className="slider" aria-roledescription="carousel">
        <div className="slides">
          {testimonials.map((t, idx)=>(
            <article key={t.id} className={`card testimonial ${idx===current ? 'is-active':''}`}>
              <p>{t.text}</p>
              <div className="who">
                <img src={t.photo} alt="" className="avatar" />
                <div>
                  <strong>{t.name}</strong>
                  <span style={{display:'block', color:'#b6b2d6'}}>{t.title}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="dots" role="tablist" aria-label="Témoignages">
          {testimonials.map((_, idx)=>(
            <button
              key={idx}
              className={`dot ${idx===current ? 'is-active':''}`}
              data-slide={idx}
              onClick={()=>setCurrent(idx)}
              aria-selected={idx===current}
            />
          ))}
        </div>
      </div>
    </section>
  )
}