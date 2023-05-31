/*
valores no array podem ter vários tipos de dados:
[12]['Mentorama'][12.24][true][('mentorama', 'javascript')]

obs:
-Possuem tamanho infinito
-Podemos colocar qualquer tipo de dado
*/

//Forma 1
var alunos = new Array('Diogo', 'Diego', 'Damião');
//console.log(typeof(alunos))
//console.log(alunos[2])
//Forma 2 = recomendada
var notas = [1, 3, 5, 7, 9, 10];
//console.log(typeof(notas));

//Acessando valor de um índice
console.log(notas[2])

//criando um array vazio
var dados = [];

//Alterar valor pelo índice
notas[2] = 10;
console.log(notas[2])

//obs, valor de índice que não existe
console.log(notas.length)
notas[9] = undefined;
console.log(notas.length)
console.log(notas)
console.log(notas[8])

for(let i = 0; i < notas.length; i++){
    if(notas[i] == undefined){
        notas[i] = null;
    };
};

console.log(notas)