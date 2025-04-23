const idades = JSON.parse(localStorage.getItem('idades') || '[]');
const sexos = JSON.parse(localStorage.getItem('sexos') || '[]');
const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes') || '[]');

if (typeof document !== 'undefined') {
    const form = document.getElementById('pesquisaForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const idade = parseInt(document.getElementById('idade').value);
            const sexo = document.querySelector('input[name="sexo"]:checked').value;
            const nota = parseInt(document.querySelector('input[name="nota"]:checked').value);

            idades.push(idade);
            sexos.push(sexo);
            avaliacoes.push(nota);

            localStorage.setItem('idades', JSON.stringify(idades));
            localStorage.setItem('sexos', JSON.stringify(sexos));
            localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));

            alert("Dados registrados!");
            form.reset();
        });
    }
}

function gerarRelatorio() {
    if (idades.length === 0) {
        document.getElementById('resultadoTexto').innerText = 'Nenhum dado registrado ainda.';
        return;
    }

    const mediaIdade = (idades.reduce((a, b) => a + b) / idades.length).toFixed(0);
    const idadeMaisNova = Math.min(...idades);
    const idadeMaisVelha = Math.max(...idades);

    const total = avaliacoes.length;
    const qtdOtimo = avaliacoes.filter(n => n === 1).length;
    const qtdBom = avaliacoes.filter(n => n === 2).length;
    const porcOtimo = ((qtdOtimo / total) * 100).toFixed(0);
    const porcBom = ((qtdBom / total) * 100).toFixed(0);

    const qtdF = sexos.filter(s => s === 'f').length;
    const qtdM = sexos.filter(s => s === 'm').length;
    const qtdO = sexos.filter(s => s === 'o').length;

    document.getElementById('resultadoTexto').innerHTML = `
        <div class="resultado">
            <p>Média de idade: ${mediaIdade}</p>
            <p>Mais novo: ${idadeMaisNova}</p>
            <p>Mais velho: ${idadeMaisVelha}</p>
            <p>Total de avaliações: ${total}</p>
            <p>Ótimo: ${porcOtimo}%</p>
            <p>Bom: ${porcBom}%</p>
        </div>
    `;

    // Gráfico das avaliações
    const ctxNotas = document.getElementById('graficoNotas').getContext('2d');
    new Chart(ctxNotas, {
        type: 'bar',
        data: {
            labels: ['Ótimo', 'Bom', 'Regular', 'Péssimo'],
            datasets: [{
                label: 'Quantidade de Avaliações',
                data: [
                    avaliacoes.filter(n => n === 1).length,
                    avaliacoes.filter(n => n === 2).length,
                    avaliacoes.filter(n => n === 3).length,
                    avaliacoes.filter(n => n === 4).length
                ],
                backgroundColor: ['#4caf50', '#8bc34a', '#ff9800', '#f44336']
            }]
        }
    });

    // Gráfico dos sexos
    const ctxSexos = document.getElementById('graficoSexos').getContext('2d');
    new Chart(ctxSexos, {
        type: 'bar',
        data: {
            labels: ['Feminino', 'Masculino', 'Outro'],
            datasets: [{
                label: 'Quantidade de Votantes',
                data: [qtdF, qtdM, qtdO],
                backgroundColor: ['#e91e63', '#2196f3', '#9c27b0']
            }]
        }
    });
}

function limparDados() {

    if (idades.length !== 0) {
        localStorage.removeItem('idades');
        localStorage.removeItem('sexos');
        localStorage.removeItem('avaliacoes');
        alert("Dados limpos!");
        return;
    }
}

