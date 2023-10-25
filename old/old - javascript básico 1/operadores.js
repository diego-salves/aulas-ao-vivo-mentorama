var num1 = 42, num2 = 19, nome = "Diego";

console.log(num1, num2, nome);

//soma
var res = num1 + num2;
console.log(res)

//subtração

res = num1 - num2;
console.log(res)

// Multiplicação
res = num1 * num2;
console.log(res);

//Divisão
res = num1 / num2;
console.log(res)

// Módulo (resto da divisão)
res = num1 % 2;
console.log(res)

// if (num1 % 2 == 0){
//     console.log("Par")
// }else{
//     console.log("ímpar")
// }

// Incremento-Decremento
//num1 = num1 + 8;
num1 += 8; // -=, *=, /=
console.log(num1);

console.log(num1++); //Imprime a variável e depois incrementa 50, 51
console.log(num1--); //Imprime a variável e depois decrementa 51, 50
console.log(++num1); //Incrementa e depois imprime 51
console.log(--num1); //Decrementa e depois imprime 50

//Operadores aritméticos
/*
+ adição
- subtração
* multiplicação
/ divisão

abreviações
+=
-=
*=
/=
*/

console.log(7/0) //Infinity

console.log("42" / 2);

console.log("Diego" * 2); //NaN (Not a number)

var num = 42;

console.log(num.toString());

console.log(13.124412124.toFixed(2));

console.log(Math.PI);

console.log(Math.pow(3, 2));

//console.log(3**2);

console.log(typeof(42));

console.log(typeof("Javascript"));

console.log(Number.isInteger(45));
console.log(Number.isInteger("java"));
console.log(Number.isInteger(13.123123));

// conversão binária

var value = 105632143;
console.log(value.toString(2));
