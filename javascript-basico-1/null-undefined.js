// Null e Undefined

// valor por referência

var aluno = {
    nome: 'Diego',
    nota: 7.0
};

//console.log(aluno)

var outro = aluno; //variáveis ligadas pelo endereço memória

//console.log(outro)

outro.nome = 'Gustavo';

console.log(outro)
console.log(aluno)

// Com valores primitivos, ocorre a cópia dos dados

var num1 = 34;
var num2 = num1; //ocorre a cópia do dado, variáveis independentes

num1++;
console.log(num1)
console.log(num2)

// Undefined
//console.log(qualquer); // is not defined

var novo;
console.log(novo);

var nula = null;
console.log(nula)
