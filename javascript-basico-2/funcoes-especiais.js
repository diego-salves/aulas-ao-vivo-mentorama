const cursos = [
    'Programação em Python',
    'Algoritmos',
    'Programação em Java',
    'Programação em Javascript',
    'Formação frontend',
    'SQL'
];

// for (let i = 0; i < cursos.length; i++){
//     console.log(`${i + 1} - ${cursos[i]}`)
// }

function listar(curso, indice, array){
    console.log(`${indice + 1} - ${curso}`);
    //console.log(array)
}

//cursos.forEach(listar); // Aqui está ocorrendo o callback

// usando lambda

// cursos.forEach(function(curso, indice){
//     console.log(`${indice + 1} - ${curso}`);
// })

// usando arrow function

//cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));

//filter

const precos = [23.55, 78.23, 899.43, 12.89, 5.32, 67.45];

//let menores = []

// for(let p in precos){
//     if(precos[p] < 50){
//         menores.push(precos[p]);
//     }
// };

// for(let i = 0; i < precos.length; i++){
//     if(precos[i] < 50){
//         menores.push(precos[i]);
//     }
// }

// Forma 1

// menores = precos.filter(function(preco){
//     return preco < 50;
// });

// Forma 2

menores = precos.filter(preco => preco < 50);

console.log(menores);
