const readline = require("readline")
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

input.question("digite o valor 1: ", (valor1) => {

    var fatorial = parseInt(valor1);
    var resultado = fatorial;
    for (var i = 1; i < fatorial; i++) {
        resultado *= i;
    }
    console.log(resultado);
})