// destructuring com array

const numeros = [1, 3, 5, 7, 9];

const [num1, num2, num3, num4, num5] = numeros;

// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);

// Descartar valores

const [n1, , n3, , n5] = numeros;

// console.log(n1);
// console.log(n3);
// console.log(n5);

//Caso não hava a posição no array, podemos adicionar valores default(padrão)

//const [nu1, nu2, nu3, nu4, nu5, nu6 = 88] = numeros;
const [nu1, nu2, nu3, nu4, nu5 = 88] = numeros;

console.log(nu1);
console.log(nu2);
console.log(nu3);
console.log(nu4);
console.log(nu5);
//console.log(nu6);

// Destructuring com objeto
const produto = {
    nome: "Playstation 5",
    preco: 4500.00,
    tipo: 'Digital Edition',
    jogos: ['god of war', 'ghost of tsushima', 'it takes two']
};

const {nome, preco, tipo} = produto; // é necessário para objetos utilizar o mesmo nome da chave(key:value) no momento da desestruturação

// console.log(nome);
// console.log(preco);
// console.log(tipo);

const {jogos} = produto;

for(let i = 0; i < jogos.length; i++){console.log(jogos[i])};
