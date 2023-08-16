/* arrays

- Possuem tamanho infinito
- Podemos colocar qualquer tipo de dado
*/

//Formas de criar um array

//Forma 1
var alunos = new Array('Cristina', 'João', 'Diego', 'Maria');
//console.log(alunos);

// Forma 2
var notas = [1, 3, 5, 7, 9]
//console.log(notas);

var dados = [];
//console.log(dados);

// Índices começam a partir do 0

//Fazendo acesso ao valor de um índice
//console.log(alunos[0][1])

var random = ['diego', 23, 23.45, true, [1,2,3,4]]

//console.log(random[4][3])

notas[2] = 8
notas[7] = 13

//console.log(notas)

if (notas[6] == undefined){
    notas[6] = 6.5;
}

//console.log(notas)

var nomes = ['Paula', 'Maria', 'Juliana'];
console.log(nomes)

nomes.push('Diego'); // Insere o valor no final do array
console.log(nomes);

console.log(nomes.length); //Tamanho do array

//Ordenar os dados de um array

nomes.sort();
console.log(nomes);

var number = [5,6,7,8,4,4,23,34,43,34,45,45,346,3564,6453,654,564,564]
//number.sort() //cuidado, ordenação de ints não funciona assim!
number.sort(function(a, b){return a - b});
//console.log(number)

var floats = [1.123, 2.123, 4.124, 123.55, 42.27, 546.99, 23.12];
//floats.sort(function(a, b) {return a - b});
floats.sort((a, b) => a - b)
//console.log(floats)

// Deletando dados de um array
//console.log(nomes)
delete nomes[3]
//console.log(nomes)
//console.log(nomes.length)

nomes[3] = "Paula"

//nomes.splice(1, 2);
console.log(nomes)

// splice = a splice(partir de x, delete x, insira n)
nomes.splice(3, 1, 'Carlos', 'Eva');

console.log(nomes)

/* Atividade
a partir do array 
var dados = [3, 1, 'Carlos', 'Eva', 'João', [1,2,3,4], 6, true]
verifique se o dado é uma string, se for não faça nada, se não for substitua o dado 
usando o splice para a string 'default', use um loop for ou while

*/