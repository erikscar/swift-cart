import "./index.css"

export default function Footer() {
  return (
    <footer>

      <div class="footer-infos">
        <div class="logo">
          <img src="logo.png" alt="logo" class="logo-img" />
          <h1 class="main-title">SwiftCart</h1>
        </div>
        <p>Velocidade e Conveniência, suas compras em um clique!</p>
        <div class="icons-wrapper">
          <i class="bi bi-github"></i>
          <i class="bi bi-linkedin"></i>
        </div>
      </div>

      <div class="footer-infos">
        <h2>Links</h2>
        <a href="" class="footer-links">Minha Conta</a>
        <a href="" class="footer-links">Lista de Desejos</a>
        <a href="" class="footer-links">Meus Pedidos</a>
      </div>
      <div class="footer-infos">
        <h2>Contato</h2>
        <p>erikscarcela@gmail.com</p>
        <p>+55 (11) 940080990</p>
      </div>
    </footer>
  )
}