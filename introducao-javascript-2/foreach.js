var cursos = [
    "Programação frontend",
    "algoritmos",
    "programação em python",
    "ciencia de dados",
    "programação em javascript"
];

// console.log(cursos.length)

//definir uma função
function imprimir(curso, indice, array){
    console.log(indice + ' - ' + curso);
    console.log(array);
};

// forEach - para cada
//cursos.forEach(imprimir);

// utilização de função anônima (lambda, callback)
// cursos.forEach(function(curso, indice){
//     console.log(indice + ' - ' + curso);
// });

// arrow function - função flecha
cursos.forEach((curso, indice) => console.log(indice + ' - ' + curso));

// usando o for normal
for(var i = 0; i < cursos.length; i++){
    console.log(i + ' - ' + cursos[i])
}