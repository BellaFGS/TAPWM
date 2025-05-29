function calcularImc() {
    var altura = prompt("Digite sua altura: ");
    var peso = prompt("Digite seu peso: ");
    imc = (peso / (Math.pow(altura, 2))).toFixed(1);
    

    if (imc < 18.5){
        alert("IMC:" + imc + "\n" + "STATUS: Magreza " + "\n" + "Grau: 0 " )
    } 
    else if( imc > 18.5 && imc < 24.9 ){
        alert("IMC: " + imc + "\n" + "STATUS: Normal " + "\n" + "Grau: 0 " )
    } 
    else if( imc > 25.0 && imc < 29.9 ){
        alert("IMC: " + imc + "\n" + "STATUS: Sobrepeso " + "\n" + "Grau: I " )
    }
    else if( imc > 30.0 && imc < 39.9 ){
        alert("IMC: " + imc + "\n" + "STATUS: Obesidade " + "\n" + "Grau: II " )
    }
    else if( imc > 40.0  ){
        alert("IMC: " + imc + "\n" + "STATUS: Obesidade Grave " + "\n" + "Grau: III " )
    }

}