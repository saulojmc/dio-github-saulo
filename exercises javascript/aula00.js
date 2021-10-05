// fazer uma função que retorne o somatório dos números: 20, 30, 40 e 50

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
    }
    console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);

// fazer uma função que crie nome e sobrenome de uma pessoa.

function nomeCompleto(nome, sobrenome) {
    return {nome, sobrenome};
}

const pessoa = nomeCompleto('Saulo', 'Melo');

console.log(pessoa);

// função que faz multiplicação

function multiplicacao(num, listao) {
    return num * listao;
}

console.log(multiplicacao(2, 3));

function multiplicador(operador2, acumulador2, ...nums) {
    for (let numero2 of nums) {
        if(operador2 === '*') acumulador2 *= numero2;
    }
    console.log(acumulador2);
}

multiplicador('*', 1, 2, 3, 4, 5);