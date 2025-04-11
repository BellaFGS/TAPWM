function play(playerChoice) {
    const resultDiv = document.getElementById("result");
    
        resultDiv.innerHTML = `
        <h4 class="text-dark" id="fase-text">Jo...</h4>
        <div class="d-flex justify-content-center align-items-center gap-4 mb-2">
            <img src="./img/pedra.svg" class="mao-jokenpo" alt="Player">
            <img src="./img/pedra.svg" class="mao-jokenpo-bob" alt="Bob">
        </div>
    `;


    // Fase 1: Ken...
    setTimeout(() => {
        document.getElementById("fase-text").textContent = "Ken...";
    }, 500);

    // Fase 2: Pô!
    setTimeout(() => {
        document.getElementById("fase-text").textContent = "Pô!";
    }, 1000);

    // Fase final: substitui pelas jogadas reais
    setTimeout(() => {
        const roboChoice = RoboBob();
        playGame(playerChoice, roboChoice);
    }, 1500);
}



function RoboBob() {
    var random = Math.random().toFixed(1); // Gera um número aleatório entre 0 e 1
    var bob = random * 10; // Número de 0 a 9
    return convertor(bob); // Retorna a jogada do robô
}

function convertor(num) {
    var resposta;

    if (num <= 3) {
        resposta = "tesoura";
    } else if (num > 3 && num <= 6) {
        resposta = "pedra";
    } else {
        resposta = "papel";
    }

    return resposta;
}

function playGame(player, robo) {
    let resultText = "";

    if (player === robo) {
        resultText = "Empate!";
    } else if (
        (player === "tesoura" && robo === "papel") ||
        (player === "papel" && robo === "pedra") ||
        (player === "pedra" && robo === "tesoura")
    ) {
        resultText = "Você ganhou!";
    } else {
        resultText = "Você perdeu!";
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <div class="d-flex justify-content-center align-items-center gap-4 mb-2">
            <div>
                <p class="mb-1"><strong>Você</strong></p>
                <img src="${getImageFor(player)}" alt="${player}" style="width: 60px;">
            </div>
            <div>
                <p class="mb-1"><strong>Bob</strong></p>
                <img src="${getImageFor(robo)}" alt="${robo}" style="width: 60px;">
            </div>
        </div>
        <h4 class="text-dark">${resultText}</h4>
    `;
}


function getImageFor(choice) {
    return `./img/${choice}.svg`;
}
