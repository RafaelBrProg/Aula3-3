const prompt = require('prompt-sync')();

function getEstacaoDoAno(mes) {
    let estacao;

    switch (mes) {
        case 12:
        case 1:
        case 2:
            estacao = 'Inverno';
            break;
        case 3:
        case 4:
        case 5:
            estacao = 'Primavera';
            break;
        case 6:
        case 7:
        case 8:
            estacao = 'Verão';
            break;
        case 9:
        case 10:
        case 11:
            estacao = 'Outono';
            break;
        default:
            estacao = 'Número de mês inválido. Por favor, insira um número entre 1 e 12.';
            break;
    }
    return estacao;
}

// Captura a entrada do usuário e converte para inteiro
const mes = parseInt(prompt('Digite o número correspondente ao mês (1 a 12):'), 10);

// Verifica se a entrada é um número e está dentro do intervalo válido
if (!isNaN(mes) && mes >= 1 && mes <= 12) {
    const resultado = getEstacaoDoAno(mes);
    console.log(resultado);
} else {
    console.log('Entrada inválida. Por favor, insira um número entre 1 e 12.');
}
