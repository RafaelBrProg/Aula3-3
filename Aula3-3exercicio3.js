const prompt = require("prompt-sync")();

const idade = Number(prompt("Digite Sua idade:"));
let tempoVida

switch (true) {
    case (idade >= 0 && idade <= 12):
        tempoVida = "Você é uma criança"
        break;

    case (idade >= 13 && idade <= 19):
        tempoVida = "Você é um adolecente"
        break;

    case (idade >= 20 && idade <= 64):
        tempoVida = "Você é um adulto"
        break;

    case (idade >= 65):
        tempoVida = "Você é um idoso."
        break;

    default:
        tempoVida = "Idade inválida"
}

console.log(`${tempoVida}`)