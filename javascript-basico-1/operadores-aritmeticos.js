// Operador aritmético

/*
+ adição
- subtração
* multiplicação
/ divisão
** exponenciação

+=
-=
*=
/=

*/

//console.log(7/0); // Infinity

//console.log(2**2)

console.log("42" / 2); // 21

console.log("Mentorama" * 3) // Nan - Not a number

console.log(0.1 + 0.7); // 0.7999999999999999

console.log(42.12441523.toFixed(3));

console.log(Math.PI);

console.log(Math.pow(3, 2));

console.log(Math.sqrt(625));

var num = 42;
console.log(typeof(num));
num = num.toString();
console.log(typeof(num));

console.log(Number.isInteger(45));
console.log(Number.isInteger("mentorama"));

//conversão binária
var valor = 1000;
console.log(valor.toString(2));

if (Number.isInteger(valor)){
    console.log("valor é um número")
}else{
    console.log("valor não é um número")
}
