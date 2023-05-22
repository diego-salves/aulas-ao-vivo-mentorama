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
