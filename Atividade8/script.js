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

    if (document.getElementById("palavra1").value === "" || document.getElementById("palavra2").value === "") {
        alert("Por favor, preencha os dois campos.");
        return;
    }

    palavra1 = document.getElementById("palavra1").value;
    palavra2 = document.getElementById("palavra2").value;


    palavra1 = palavra1.replace(/[^a-zA-Z]/g, "").toUpperCase(); //Ignora caracteres especiais e converte para minúsculas
    palavra2 = palavra2.replace(/[^a-zA-Z]/g, "").toUpperCase(); //Ignora caracteres especiais e converte para minúsculas
    var array1 = palavra1.split("");
    var array2 = palavra2.split("");

    let contador = {}; // Inicializa o contador

    for (let letra of palavra1) {
        if (contador[letra]) {
            contador[letra]++;
        }
        else {
            contador[letra] = 1;
        }
      }

    var resultado = array2.every(function(letra) {
        if (contador[letra] && contador[letra] > 0) {
            contador[letra]--;
            return true; // A letra existe e foi usada
        } else {
            return false; // A letra não existe ou já foi usada
        }
    });
    
    if (resultado) {
        document.getElementById("resultado").innerHTML = "(2)" + palavra2 + " ✔➡ (1)" + palavra1;
    } else {
        document.getElementById("resultado").innerHTML = "(2)" + palavra2 + " ❌➡ (1)" + palavra1;
    }
}

function limparCampos() {
    console.log("Limpar campos");

    var ids = ["num1", "num2", "num3", "palindromo", "palavra1", "palavra2", "resultado"];
    ids.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            if (id === "resultado") {
                element.innerHTML = "";
            } else {
                element.value = "";
            }
        } else {
            console.warn(`Elemento com ID '${id}' não encontrado.`);
        }
    });
}