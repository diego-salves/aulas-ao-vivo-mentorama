 //Operadores Lógicos

 var curso = 'JavaScript';
 var legal = false;

 // AND (e = ambas expressões devem ser verdadeiras)
 if(curso === 'JavaScript' && legal === true){
     console.log('O curso de JavaScript é legal!');
 }else{
     console.log('O curso não é de JavaScript ou não é legal.');
 }

 // OR (ou = pelo menos uma expressão deve ser verdadeira)
 if(curso === 'JavaScript' || legal === true){
     console.log('O curso de JavaScript é legal.');
 }else{
     console.log('O curso não é de JavaScript ou não é legal.');
 }

 // NOT (quando queremos fazer uma negação ou verificar se algo não é como esperado)
 // ==
 if(curso != 'JavaScript'){
     console.log('O curso não é JavaScript');
 }else{
     console.log('O curso é JavaScript');
 }

const a = 3;
const b = -2;

console.log(!(a > 0 && b > 0))

console.log(!(null)) //true

console.log(!(NaN)) //true

console.log(!(1)) //false

console.log(!("")) //false

console.log(!(undefined)) //true

console.log(!("gato")) //false

//double not

console.log(!!true) //true
console.log(!!{}) //true

console.log({}) //{}
