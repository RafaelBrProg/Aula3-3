const validarCartaoCredito = (numero) => { 
    const regex = /^\d{16}$/;
    if (!regex.test(numero)) {
        return false; 
    }

    const primeiroDigito = numero.charAt(0);
    return primeiroDigito === '4' || primeiroDigito === '5' || primeiroDigito === '6';
};

const numeroCartao = '4123456789123456'; 
console.log(validarCartaoCredito(numeroCartao) ? 'Número de cartão de crédito válido.' : 'Número de cartão de crédito inválido.');
