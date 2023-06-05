var num1 = 42, num2 = 19, num3 = "25" ,nome = "Damião";

console.log(num1, num2, nome)

//soma
var res = num1 + num2;
console.log("O resultado é: " + res);
console.log(nome + num1);

//Cuidado!
console.log(num2 + num3);

//Subtração
res = num1 - num2;
console.log(res)

//Multiplicação
res = num1 * num2;
console.log(res)

//Divisão
res = num1 / num2;
console.log(res)

//Módulo (resto de divisão)
var par = 4201
res = par % 2;
console.log(res);

//Incremento/Decremento

//num1 = num1 + 1
console.log(num1)
console.log(num1++) //imprime a variável e depois incrementa
console.log(num1--) //imprime a variável e depois decrementa
console.log(++num1) //incrementa e depois imprime
console.log(--num1) //decrementa e depois imprime

// Em JavaScript, existem diversos operadores comparativos utilizados para comparar valores. Aqui estão alguns termos comparativos comumente utilizados:

// Igualdade:

// == (igualdade solta): Verifica se dois valores são iguais, realizando coerção de tipos se necessário.
// === (igualdade estrita): Verifica se dois valores são iguais sem realizar coerção de tipos.
// Desigualdade:

// != (desigualdade solta): Verifica se dois valores são diferentes, realizando coerção de tipos se necessário.
// !== (desigualdade estrita): Verifica se dois valores são diferentes sem realizar coerção de tipos.
// Comparação:

// < (menor que): Verifica se o valor à esquerda é menor que o valor à direita.
// > (maior que): Verifica se o valor à esquerda é maior que o valor à direita.
// <= (menor ou igual a): Verifica se o valor à esquerda é menor ou igual ao valor à direita.
// >= (maior ou igual a): Verifica se o valor à esquerda é maior ou igual ao valor à direita.
// Operador ternário:

// condição ? valor1 : valor2: Avalia uma condição e retorna valor1 se a condição for verdadeira, ou valor2 se a condição for falsa.
// Esses são os termos comparativos básicos em JavaScript. Eles permitem que você faça comparações e tome decisões com base nos resultados.