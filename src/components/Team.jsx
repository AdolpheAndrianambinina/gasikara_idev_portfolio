const team = [
    {id:1, name:'Jean Aimé', role:'CEO/DEV BACKEND', photo:'/img/team/01.png'},
    {id:2, name:'Mael MASSOU', role:'DEV BACKEND', photo:'/img/team/02.png'},
    {id:3, name:'Adolphe ANDRIANAMBININA', role:'DEV FRONTEND', photo:'/img/team/03.png'},
    /*{id:4, name:'Fitahiana RANDRIANTSOHAVINA', role:'DESIGN & COM', photo:'/img/team/04.png'},*/
    {id:5, name:'Iantsa RAKOTOARISON', role:'DESIGN & COM', photo:'/img/team/05.png'},
    {id:6, name:'Harifetra', role:'DEV BACKEND', photo:'/img/team/06.png'},
    {id:7, name:'Manohisoa RAZAFIMAHATRATRA', role:'DEV FRONTEND', photo:'/img/team/07.png'},
    {id:8, name:'Jacquot FRANçOIS', role:'DEV BACKEND', photo:'/img/team/08.png'},
    {id:9, name:'Fabra Kim', role:'DEVOPS', photo:'/img/team/09.png'},
    {id:10, name:'Invité', role:'Consultant', photo:'/img/team/10.png'},
  ]
  
  export default function Team(){
    return (
      <section className="team container">
        <h2>Notre équipe</h2>
        <p className="team-sub">Qui sommes‑nous ?</p>
        <ul className="team-grid">
          {team.map(m => (
            <li className="card member" key={m.id}>
              <img src={m.photo} alt="" className="avatar" />
              <div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    )
  }