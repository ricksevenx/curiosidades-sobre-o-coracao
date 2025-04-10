const botaoFugir = document.querySelector(".botao-fugir");
const botaoTroll = document.querySelector(".botao-troll");
const botaoFinal = document.querySelector(".botao-final");
const respostaFinal = document.querySelector(".resposta-final");

let tentouFugir = false;
let tentouTrollar = false;
let podeMostrarBotao = false;
let fugiuUltimaVez = false;

// Função pra fazer o botão "fugir" se mover
function moverBotaoFugir(event) {
  fugiuUltimaVez = true;

  const larguraJanela = window.innerWidth;
  const alturaJanela = window.innerHeight;

  const novoX = Math.floor(
    Math.random() * (larguraJanela - botaoFugir.offsetWidth)
  );
  const novoY = Math.floor(
    Math.random() * (alturaJanela - botaoFugir.offsetHeight)
  );

  botaoFugir.style.position = "absolute";
  botaoFugir.style.left = `${novoX}px`;
  botaoFugir.style.top = `${novoY}px`;

  tentouFugir = true;

  verificarBotaoFinal();
}

botaoFugir.addEventListener("mouseover", moverBotaoFugir);
botaoFugir.addEventListener("touchstart", (e) => {
  moverBotaoFugir(e);
  e.preventDefault(); // Evita o clique acidental no mobile
});

botaoTroll.addEventListener("click", () => {
  tentouTrollar = true;
  verificarBotaoFinal();
});

function verificarBotaoFinal() {
  if (tentouFugir && tentouTrollar) {
    podeMostrarBotao = true;
    botaoFinal.style.display = "inline-block";
  }
}

botaoFinal.addEventListener("click", () => {
  respostaFinal.style.display = "block";
});
