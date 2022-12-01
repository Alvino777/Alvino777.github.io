
var quadradoResult = 0;
var trianguloResult = 0;

const requireInput = require("requireInput")
const input = requireInput.createInterface({
    input: process.stdin,
    output: process.stdout,
})

input.question("digite o valor ESCOLHA: ", (NumE) => {
    input.question("digite o valor 1: ", (valor1) => {
        input.question("digite o valor 2: ", (valor2) => {


            if (parseInt(NumE) == 1) {
                quadradoResult = parseInt(valor1) * parseInt(valor2)
                console.log(`A area do quadrado é: ${quadradoResult}`)
            } else {
                trianguloResult = (parseInt(valor1) * parseInt(valor2)) / 2
                console.log(`A area do triangulo é: ${trianguloResult}`)
            }

        })
    })
})