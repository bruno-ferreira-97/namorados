const audio = document.getElementById("player-audio");

// --- SISTEMA DE CARROSSEL DE FOTOS ---
const fotosCarrossel = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    // pulei a 10 porque no seu print não tinha
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg",
    "16.jpeg",
    "17.jpeg",
    "18.jpeg",
    "19.jpeg",
    "20.jpeg"
];

let indexAtual = 0;

function rodarFotos() {
    const imgCarrossel = document.getElementById("foto-carrossel");
    if (imgCarrossel) {
        indexAtual = (indexAtual + 1) % fotosCarrossel.length;
        imgCarrossel.src = fotosCarrossel[indexAtual];
    }
}

// Este é o motor! Troca a foto a cada 2000 milissegundos (2 segundos)
let intervaloCarrossel = setInterval(rodarFotos, 2000);


// --- RESTANTE DO CÓDIGO (BOTÕES E MÚSICA) ---

function fugir() {
    const btnNao = document.getElementById("btn-nao");
    btnNao.style.position = "absolute";
    
    const maxX = window.innerWidth - btnNao.offsetWidth - 20;
    const maxY = window.innerHeight - btnNao.offsetHeight - 20;
    
    const aleatorioX = Math.floor(Math.random() * maxX);
    const aleatorioY = Math.floor(Math.random() * maxY);
    
    btnNao.style.left = aleatorioX + "px";
    btnNao.style.top = aleatorioY + "px";
}

function aceitou() {
    clearInterval(intervaloCarrossel);
    
    document.getElementById("tela-quiz").style.display = "none";
    document.getElementById("tela-player").style.display = "block";
    
    if (audio) {
        audio.play().catch(erro => console.log("Erro ao tocar áudio: ", erro));
    }
    
    setInterval(criarCoracao, 300);
}

function alternarMusica() {
    const btn = document.getElementById("btn-play-pause");
    if (audio.paused) {
        audio.play();
        btn.innerText = "⏸️";
    } else {
        audio.pause();
        btn.innerText = "▶️";
    }
}

function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerText = "❤️";
    
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = Math.random() * 2 + 3 + "s";
    coracao.style.fontSize = Math.random() * 20 + 15 + "px";
    
    document.body.appendChild(coracao);
    
    setTimeout(() => {
        coracao.remove();
    }, 5000);
}
