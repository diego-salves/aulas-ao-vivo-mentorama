//Funções

//First Class citizens
//Single Responsiblity Principle (Princípio da responsabilidade única)
//Uma função deve fazer apenas uma coisa

function somar(num1, num2){
    var soma = num1 + num2;
    return soma;
};

//somar(2, 4);

function mensagemSoma(){
    var res = somar(4, 8);
    console.log(`O resultado da soma foi ${res}`);
};

mensagemSoma();

function multiplicar(n1, n2){
    var resMult = n1 * n2;
    return parseInt(resMult);
};

var divide = function dividir(n1, n2){return n1/n2}

console.log(divide(8, 4))

var soma = (a, b) => a + b;
console.log(soma(81, 85));
//arrow functions
