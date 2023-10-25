const cursos = [
    'Python',
    'Algoritmos e Lógica de Programação',
    'Desenvolvimento de layout front-end',
    'Programação em Javascript',
    'Cientista de dados'
];

function show(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}

//cursos.forEach(show); // Aqui está ocorrendo um callback

// usando lambda

// cursos.forEach(function(curso, indice){
//     console.log(`${indice + 1} - ${curso}`);
// });

//usando arrow-function
// cursos.forEach((curso, indice) => console.log((`${indice + 1} - ${curso}`)))

const precos = [23.55, 80.00, 945.59, 5.23, 748.78];

let menores = [];

// for(let p in precos){
//     if (precos[p] < 50){
//         menores.push(precos[p]);
//     }
// };

// for (let i = 0; i < precos.length; i++){
//     if (precos[i] < 50){
//         menores.push(precos[i]);
//     }
// };

//Forma 1

menores = precos.filter(function(preco){
    return preco < 50;
});

//console.log(menores);

// Forma 2

menores = precos.filter(preco => preco < 50);

console.log(menores);
