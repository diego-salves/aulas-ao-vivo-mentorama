/*
Quando usar var, let ou const?
1. Sempre declare variáveis

2. Sempre use const se o valor não deve ser alterado

3. Sempre use const se o tipo não deve ser alterado (Arrays e Objetos)

4. Só use let se não puder usar const

5. Use apenas var se você DEVE oferecer suporte a navegadores antigos.

https://caniuse.com/ para saber as features que são aceitas por cada versão do browser
*/


//var
var numero = 42;
//último caso!

//let
for(let i = 0; i < 5; i++){
    let valor = i * 3;
    console.log(valor);
};

//console.log(i); //ReferenceError
//console.log(valor); //ReferenceError

//const
// Constante vs Mutação
const curso = {nome: "Programação em Javascript"};
console.log(curso.nome);

//Não posso alterar o valor de uma const
//curso = 'javascript';

curso.nome = "Programação com a mentorama";

console.log(curso);