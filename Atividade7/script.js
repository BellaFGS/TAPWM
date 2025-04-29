function calcularDados() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
    const resultado = document.getElementById("resultado");
    const resultadoTexto = document.getElementById("titulo");

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a != 0 && b != 0 && c != 0) {
        let classeFinal = "";

        if (
            Math.abs(b - c) < a && a < (b + c) &&  
            Math.abs(a - c) < b && b < (a + c) && 
            Math.abs(a - b) < c && c < (a + b)
        ) {
            if (a === b && b === c) {
                classeFinal = "equilatero";
                resultadoTexto.innerHTML = "Triângulo Equilátero";
            } else if (a === b || a === c || b === c) {
                classeFinal = "isosceles";
                resultadoTexto.innerHTML = "Triângulo Isosceles";
            } else {
                classeFinal = "escaleno";
                resultadoTexto.innerHTML = "Triângulo Escaleno";
            }
        } else {
            classeFinal = "invalido";
            resultadoTexto.innerHTML = "Triângulo Inválido";
        }

        resultado.className = classeFinal;
        resultadoTexto.hidden = false;

    } else {
        alert("Valor inválido detectado, por favor digite números diferentes de 0.");
    }
}

function limparFormulario() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";

    const resultado = document.getElementById("resultado");
    const resultadoTexto = document.getElementById("titulo");

    // Transição
    resultado.style.opacity = 0;
    setTimeout(() => {
        resultado.className = "doctor"; // volta pra imagem inicial
        resultado.style.opacity = 1;
    }, 300);

    resultadoTexto.hidden = true; 
    resultadoTexto.innerHTML = "";
}
