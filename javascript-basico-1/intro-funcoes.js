// Introdução as funções

function somar(num1, num2){
    console.log(num1 + num2)
};

function message(){
    console.log('Mensagem');
}

function multiplicar(n1, n2){
    return n1 * n2;
}

var conta = somar(2, 10)
console.log(conta) // undefined

console.log(multiplicar(2, 30));