
function desenharBoneco() {
    const forca = document.getElementById("forca");

    // Limpar o conteúdo atual
    forca.innerHTML = "";

    // Base da forca
    const palo = document.createElement("div");
    palo.style.position = "absolute";
    palo.style.bottom = "0px";
    palo.style.left = "-10%";
    palo.style.transform = "translateX(-50%)";
    palo.style.width = "2px";
    palo.style.height = "250px";
    palo.style.backgroundColor = "#333";
    forca.appendChild(palo);

    const travessa = document.createElement("div");
    travessa.style.position = "absolute";
    travessa.style.top = "0px";
    travessa.style.left = "23%";
    travessa.style.transform = "translateX(-50%)";
    travessa.style.width = "100px";
    travessa.style.height = "2px";
    travessa.style.backgroundColor = "#333";
    forca.appendChild(travessa);

    const travessaSuperior = document.createElement("div");
    travessaSuperior.style.position = "absolute";
    travessaSuperior.style.top = "0px";
    travessaSuperior.style.left = "55%";
    travessaSuperior.style.transform = "translateX(-50%)";
    travessaSuperior.style.width = "2px";
    travessaSuperior.style.height = "60px";
    travessaSuperior.style.backgroundColor = "#333";
    forca.appendChild(travessaSuperior);

    // Cabeca
    if (tentativasRestantes <= 4) {
        const cabeca = document.createElement("div");
        cabeca.style.position = "absolute";
        cabeca.style.top = "60px"; // Alinhado ao topo da travessa superior
        cabeca.style.left = "55%";
        cabeca.style.transform = "translateX(-50%)";
        cabeca.style.width = "50px";
        cabeca.style.height = "50px";
        cabeca.style.border = "2px solid blue";
        cabeca.style.borderRadius = "50%";
        forca.appendChild(cabeca);
    }

    // Corpo
    if (tentativasRestantes <= 3) {
        const corpo = document.createElement("div");
        corpo.style.position = "absolute";
        corpo.style.top = "110px"; // Abaixo da cabeça
        corpo.style.left = "55%";
        corpo.style.transform = "translateX(-50%)";
        corpo.style.width = "10px";
        corpo.style.height = "60px";
        corpo.style.backgroundColor = "blue";
        forca.appendChild(corpo);
    }

    // Braços
    if (tentativasRestantes <= 2) {
        // Braço esquerdo
        const bracoEsquerdo = document.createElement("div");
        bracoEsquerdo.style.position = "absolute";
        bracoEsquerdo.style.top = "130px"; // Alinhado ao topo do corpo
        bracoEsquerdo.style.left = "40%";
        bracoEsquerdo.style.transform = "translateX(-50%) rotate(-45deg)";
        bracoEsquerdo.style.width = "50px";
        bracoEsquerdo.style.height = "2px";
        bracoEsquerdo.style.backgroundColor = "blue";
        forca.appendChild(bracoEsquerdo);

        // Braço direito
        const bracoDireito = document.createElement("div");
        bracoDireito.style.position = "absolute";
        bracoDireito.style.top = "128px"; // Alinhado ao topo do corpo
        bracoDireito.style.left = "35%";
        bracoDireito.style.transform = "translateX(50%) rotate(45deg)";
        bracoDireito.style.width = "50px";
        bracoDireito.style.height = "2px";
        bracoDireito.style.backgroundColor = "blue";
        forca.appendChild(bracoDireito);
    }

    // Pernas
    if (tentativasRestantes <= 1) {
        // Perna esquerda
        const pernaEsquerda = document.createElement("div");
        pernaEsquerda.style.position = "absolute";
        pernaEsquerda.style.top = "185px"; // Abaixo do corpo
        pernaEsquerda.style.left = "40%";
        pernaEsquerda.style.transform = "translateX(-50%) rotate(-45deg)";
        pernaEsquerda.style.width = "50px";
        pernaEsquerda.style.height = "2px";
        pernaEsquerda.style.backgroundColor = "blue";
        forca.appendChild(pernaEsquerda);
    }

    if (tentativasRestantes < 1) {
        // Perna direita
        const pernaDireita = document.createElement("div");
        pernaDireita.style.position = "absolute";
        pernaDireita.style.top = "185px"; // Abaixo do corpo
        pernaDireita.style.left = "36%";
        pernaDireita.style.transform = "translateX(50%) rotate(45deg)";
        pernaDireita.style.width = "50px";
        pernaDireita.style.height = "2px";
        pernaDireita.style.backgroundColor = "blue";
        forca.appendChild(pernaDireita);
    }

}
