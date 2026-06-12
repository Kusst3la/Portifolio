import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Swiper from 'swiper'
import 'swiper/css'
import { tsParticles } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

AOS.init({ duration: 1000, once: true })

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="particles"></div>

  <header class="header">
    <h1>DevMiguel</h1>
    <nav>
      <a href="#inicio">Início</a>
      <a href="#sobre">Sobre</a>
      <a href="#servicos">Serviços</a>
      <a href="#projetos">Projetos</a>
      <a href="#contato">Contato</a>
    </nav>
  </header>

  <section id="inicio" class="hero">
    <div data-aos="fade-right">
      <h2>Crio sites modernos e responsivos</h2>
      <p>Usando TypeScript, JavaScript, HTML, CSS e bibliotecas modernas.</p>
      <a href="#contato" class="btn">Fale comigo</a>
    </div>
  </section>

  <section id="sobre" class="sobre">
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" />
    <div data-aos="fade-left">
      <h2>Sobre mim</h2>
      <p>
        Sou desenvolvedor front-end focado em criar experiências bonitas,
        rápidas e fáceis de usar.
      </p>
    </div>
  </section>
<section id="servicos" class="servicos">

<h2 data-aos="fade-up">Serviços</h2>

<div class="cards">

<div class="card" data-aos="zoom-in">
<i class="fa-solid fa-code"></i>
<h3>Programação</h3>
<p>Sites modernos usando tecnologias atuais.</p>
</div>


<div class="card" data-aos="zoom-in">
<i class="fa-solid fa-mobile-screen"></i>
<h3>Responsivo</h3>
<p>Design perfeito para celular e computador.</p>
</div>


<div class="card" data-aos="zoom-in">
<i class="fa-solid fa-palette"></i>
<h3>Design</h3>
<p>Interfaces bonitas e profissionais.</p>
</div>


</div>
</section>

  <section id="projetos" class="projetos">
    <h2>Projetos</h2>

    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Projeto 1</div>
        <div class="swiper-slide">Projeto 2</div>
        <div class="swiper-slide">Projeto 3</div>
      </div>
    </div>
  </section>

  <section id="contato" class="contato">
    <h2>Contato</h2>

    <form>
      <input type="text" placeholder="Seu nome">
      <input type="email" placeholder="Seu email">
      <textarea placeholder="Sua mensagem"></textarea>
      <button type="submit">Enviar</button>
    </form>

    <div class="sociais">


<a href="https://github.com/Kusst3la" target="_blank">
  <i class="fa-brands fa-github"></i>
</a>

<a href="https://www.linkedin.com/in/miguelduboc/" target="_blank">
  <i class="fa-brands fa-linkedin"></i>
</a>

<i class="fa-brands fa-instagram"></i>


<i class="fa-solid fa-envelope"></i>

</div>
`

new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1.2,
  spaceBetween: 20,
})

async function particles() {
  await loadSlim(tsParticles)

  await tsParticles.load({
    id: 'particles',
    options: {
      particles: {
        number: { value: 60 },
        links: { enable: true },
        move: { enable: true, speed: 1 },
        size: { value: 2 },
      },
    },
  })
}

particles()