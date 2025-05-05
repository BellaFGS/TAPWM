function numMaximo() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);

    var maximo = Math.max(num1, num2, num3);

    document.getElementById("resultado").innerHTML = "O maior número é ➡ " + maximo;
}

function numCrescente() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);

    var numeros = [num1, num2, num3];
    numeros.sort(function(a, b) { return a - b; });

    document.getElementById("resultado").innerHTML = "Os números em ordem crescente são ➡ " + numeros.join(", ");
}

function palindromo() {
    var palavra = document.getElementById("palindromo").value;
    palavra = palavra.replace(/[^a-z0-9]/gi, "").toLowerCase(); // Remove caracteres especiais e converte para minúsculas
    console.log(palavra);
    var palavraInvertida = palavra.split("").reverse().join("");
    console.log(palavraInvertida);

    if (palavra === palavraInvertida) {
        document.getElementById("resultado").innerHTML = "A palavra é um palíndromo!";
    } else {
        document.getElementById("resultado").innerHTML = "A palavra não é um palíndromo.";
    }
}

function subConjunto() {
    array1 = document.getElementById("array1").value.split(",").map(Number);
    array2 = document.getElementById("array2").value.split(",").map(Number);

    
}