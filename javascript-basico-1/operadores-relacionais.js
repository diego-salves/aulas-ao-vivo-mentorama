// Operadores relacionais

//Os operadores mais comuns são:

            /*
             Igual a ==
             Diferente de !=
             Maior que >
             Menor que <
             Maior ou igual a >=
             Menor ou igual a <=

             Igual e do mesmo tipo que ===
             Diferente e de outro tipo que !==
            */

var num1 = 22
var num2 = '22'

if(num1 == num2){
    console.log('são iguais')
}else{
    console.log('São diferentes')
}

if(num1 === num2){
    console.log('são iguais')
}else{
    console.log('São diferentes')
}

var n1 = 54, n2 = 78;

console.log(n1 == n2); //false
console.log(n1 != n2); //true
console.log(n1 > n2); //false
console.log(n1 < n2) //true
console.log(n1 >= n2) //false
console.log(n1 <= n2) //true
console.log(n1 === n2); //false
console.log(n1 !== n2) //true
