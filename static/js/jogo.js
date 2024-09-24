let palavraAtual;
let dicaAtual;
let letrasAdivinhadas = [];
let tentativasMaximas = 5;

function iniciarJogo() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    palavraAtual = palavras[indiceAleatorio];
    dicaAtual = dicas[indiceAleatorio];
    letrasAdivinhadas = [];
    tentativasRestantes = tentativasMaximas;
    limparBoneco();
    atualizarDisplayDoJogo();
    
}

function limparBoneco(){
    const forca = document.getElementById("forca");

    forca.innerHTML = "";

}

function atualizarDisplayDoJogo() {
    let palavraExibida = "";
    for (let i = 0; i < palavraAtual.length; i++) {
        const letra = palavraAtual[i];

        if (letrasAdivinhadas.includes(letra) || letra === " ") {
            palavraExibida += letra;
        } else {
            palavraExibida += "_";
        }
    }
    document.getElementById("palavra").textContent = palavraExibida;
    document.getElementById("dica").textContent = `Dica: ${dicaAtual}`;
    document.getElementById("status").textContent = `Tentativas Restantes: ${tentativasRestantes}`;
    document.getElementById("attempts").textContent = `Letras já tentadas: ${letrasAdivinhadas.join(", ")}`;

    if (tentativasRestantes <= 0) {
        document.getElementById("status").textContent = `Você perdeu! A palavra era: ${palavraAtual}`;
    } else if (palavraExibida.indexOf('_') === -1) {
        document.getElementById("status").textContent = "Você venceu!";
    }
}

function adivinharLetra() {
    const entradaAdivinhacao = document.getElementById("guess");
    const letraAdivinhada = entradaAdivinhacao.value.toLowerCase();

    if (letraAdivinhada.length === 1 && /^[a-záéíóúãõç]$/i.test(letraAdivinhada)) {
        if (!letrasAdivinhadas.includes(letraAdivinhada)) {
            letrasAdivinhadas.push(letraAdivinhada);

            if (!palavraAtual.includes(letraAdivinhada)) {
                tentativasRestantes--;
            }

            atualizarDisplayDoJogo();
            desenharBoneco(); // Certifique-se de definir esta função para desenhar o boneco do jogo da forca
        }
    }

    entradaAdivinhacao.value = "";
}

document.addEventListener("DOMContentLoaded", iniciarJogo);