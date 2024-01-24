function somar(num1, num2){
    return num1 + num2;
}

let res = somar(4, 6);
// console.log(res);

// console.log(somar(10, 5));

//Exemplo 1
const executar = somar;

// console.log(executar(8, 7));

//Exemplo 2

function subtrair(num1, num2){
    return num1 - num2;
}

function random(num1, num2, func){
    return func(num1, num2)
}

// console.log(random(5, 5, somar));
// console.log(random(5, 5, subtrair));

// Exemplo 3

function outra(z){
    return z;
};

const ret = outra(subtrair);
console.log(ret(8,2));

/*
Cidadãos de Primeira Classe
First-Class Citizens = [Assigned to variables, Passed as arguments, Returned from functions]
Características no ECMAScript: Functions as Values, Function Expressions, Passing Functions as Arguments, Functions as Return Values

Higher-Order functions, Funções de ordem superior
 Uma função de ordem superior é uma função que:

Toma uma ou mais funções como argumentos, ou Retorna uma função como resultado.

As principais características das funções de ordem superior incluem:

Função como argumento: funções de ordem superior podem aceitar outras funções como argumentos, geralmente chamadas de funções de retorno de chamada. Os retornos de chamada são usados ​​para tarefas como processamento de dados, filtragem ou manipulação de eventos.
Função como valor de retorno: funções de ordem superior podem retornar outra função, permitindo a criação de funções especializadas adaptadas a tarefas específicas.
Abstração: funções de ordem superior abstraem padrões e operações comuns, promovendo a reutilização e modularidade do código.
Composição: múltiplas funções de ordem superior podem ser combinadas para criar transformações de dados complexas ou pipelines de processamento.

Fontes: https://medium.com/@rabailzaheer/first-class-and-higher-order-functions-86d14e40c688
*/



