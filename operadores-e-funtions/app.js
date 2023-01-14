const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

/* A FUNÇÃO validarNumeroInformado AUTOMATIZA O COMPORTAMENTO DO try */
const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero);
    if (!resultado) {
        console.log(`Número informado não é vásido`);
    }
    return resultado;
}

// A FUNÇÃO validarOperador FAZ A VALIDAÇÃO DOS OPERADORES ARITIMÉTICOS
const validarOperador = (operador) => {
    switch (operador) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
        default:
            console.log('Operador informado é inválido');
            return null;
    }
}

readLine.question('Favor informar um número: ', (numero1) => {
    const numeroValido1 = validarNumeroInformado(numero1);

    if (numeroValido1) {
        readLine.question('Favor informar outro número: ', (numero2) => {
            const numeroValido2 = validarNumeroInformado(numero2);
            
            if (numeroValido2) {
                readLine.question('Favor informar o operador: ', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if (operadorValidado) {
                        switch (operadorValidado) {
                            case '+': console.log(`Operador selecionado adição = ${numeroValido1} + ${numeroValido2} = ${numeroValido1 + numeroValido2}`);
                                break;
                             case '-': console.log(`Operador selecionado subtração = ${numeroValido1} - ${numeroValido2} = ${numeroValido1 - numeroValido2}`);
                                break;
                            case '*': console.log(`Operador selecionado multiplicação = ${numeroValido1} * ${numeroValido2} = ${numeroValido1 * numeroValido2}`);
                                break;
                            case '/': console.log(`Operador selecionado divisão = ${numeroValido1} / ${numeroValido2} = ${numeroValido1 / numeroValido2}`);
                                break;
                            case '%': console.log(`Operador selecionado módulo = ${numeroValido1} % ${numeroValido2} = ${numeroValido1 % numeroValido2}`);
                                break;
                            default: break;
                        }
                    }
                })
            }
        });
    }
})