//Função da Media

function media(){
   var nome = prompt("Qual o seu nome? ");
   var nota1 = parseFloat (prompt("Digite a 1º Nota"));
   var nota2 = parseFloat (prompt("Digite a 2º Nota"));
   var nota3 = parseFloat (prompt("Digite a 3º Nota"));

   var media = nota1 + nota2 + nota3 / 3;

   var resultado = alert("A média de " + nome + " é: " + media.toFixed(2));

   return resultado;
}

function operacoes(){
    var num1 = prompt("Olá Digite o 1º número");
    var num2 = prompt("Digite o 2º número");

    soma = num1 + num2;
    sub = num1 - num2;
    mul = num1 * num2;
    div = num1 / num2;
    res = num1 % num2;

    resultado = alert( num1 +" + " + num2 + " = " + soma + "\n" +
                num1 +" - " + num2 + " = " + sub + " \n" +
                num1 +" * " + num2 + " = " + mul + " \n" +
                num1 +" / " + num2 + " = " + div + " \n" +
                num1 +" / " + num2 + " = " + res + " \n");
    
    return resultado;


}