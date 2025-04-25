function calcularDados() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
    const resultado = document.getElementById("resultado");
    const resultadoTexto = document.getElementById("titulo");

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a != 0 && b != 0 && c != 0) {
        if (Math.abs(b - c) < a && a < (b + c) &&  
            Math.abs(a - c) < b && b < (a + c) && 
            Math.abs(a - b) < c && c < (a + b)) {

            let tipo = "";

            if (a === b && b === c) {
                tipo = "equilatero";
                resultadoTexto.innerHTML = "Triângulo Equilátero";
            } else if (a === b || a === c || b === c) {
                tipo = "isosceles";
                resultadoTexto.innerHTML = "Triângulo Isosceles";
            } else {
                tipo = "escaleno";
                resultadoTexto.innerHTML = "Triângulo Escaleno";
            }

            resultado.className = ""; 
            resultado.classList.add(tipo);

        } else {
            resultadoTexto.innerHTML = "Triângulo Inválido";
            resultado.className = "";
            resultado.classList.add("invalido");
        }   
    } else {
        alert("Valor inválido detectado, por favor digite números diferentes de 0.");
        return;
    }
}

function limparFormulario() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    resultado.className = "teacher";
    resultadoTexto.innerHTML = "Triângulo";
   
}
