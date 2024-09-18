const prompt = require("prompt-sync")();
const codigoVeiculo = prompt("Digite o código do veículo (1: Carro, 2: Moto):");

switch (codigoVeiculo) {
    case '1':
        const carro = prompt("Digite o modelo do carro (ex: Gol 1.0, Uno Mille):");
        switch (carro) {
            case 'Gol 1.0':
                console.log("Modelo: Gol 1.0");
                console.log("Marca: Volkswagen");
                console.log("Peso: 2.5 toneladas");
                console.log("Tanque: 30 litros");
                console.log("Valor: R$ 36.000,00");
                break;
            case 'Uno Mille':
                console.log("Modelo: Uno Mille");
                console.log("Marca: Fiat");
                console.log("Peso: 1.2 toneladas");
                console.log("Tanque: 45 litros");
                console.log("Valor: R$ 32.000,00");
                break;
            default:
                console.log("Modelo de carro não reconhecido.");
        }
        break;

    case '2':
        const moto = prompt("Digite o modelo da moto (ex: CG 160, Biz 125):");
        switch (moto) {
            case 'CG 160':
                console.log("Modelo: CG 160");
                console.log("Marca: Honda");
                console.log("Peso: 0.15 toneladas");
                console.log("Tanque: 16 litros");
                console.log("Valor: R$ 12.000,00");
                break;
            case 'Biz 125':
                console.log("Modelo: Biz 125");
                console.log("Marca: Honda");
                console.log("Peso: 0.12 toneladas");
                console.log("Tanque: 11 litros");
                console.log("Valor: R$ 8.500,00");
                break;
            default:
                console.log("Modelo de moto não reconhecido.");
        }
        break;

    default:
        console.log("Código de veículo não reconhecido.");
}
