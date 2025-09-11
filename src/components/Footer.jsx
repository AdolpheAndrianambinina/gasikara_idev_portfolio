export default function Footer(){
    return (
      <footer className="site-footer">
        <div className="container footer-top">
          <a className="brand" href="#home">
            <img src="/img/logo.png" alt="Logo Gasikar‑I‑Dev" className="brand-logo" />
            <span className="brand-text">Gasikar‑I‑Dev</span>
          </a>
  
          <div className="socials">
          <a href="#" aria-label="WhatsApp"><img src="/icons/social_whatsapp.png" alt="" /></a>
            <a href="#" aria-label="Facebook"><img src="/icons/social_fb.png" alt="" /></a>
            <a href="#" aria-label="GitHub"><img src="/icons/social_instagram.png" alt="" /></a>
            <a href="#" aria-label="LinkedIn"><img src="/icons/social-linkedin.png" alt="" /></a>
            <a href="#" aria-label="X"><img src="/icons/social-x.png" alt="" /></a>
          </div>
        </div>
  
        <div className="container footer-bottom">
          <p>© 2025 Gasikar‑I‑Dev — Tous droits réservés.</p>
        </div>
      </footer>
    )
  }