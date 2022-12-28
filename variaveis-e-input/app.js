const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const minhaPrimeiraConstanteString = 'Minha primeira contante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
readLine.question('Informe sua idade:', input => {
    leituraDeCampo = input;
    console.log(`o usuário digitou: ${leituraDeCampo}`);
});