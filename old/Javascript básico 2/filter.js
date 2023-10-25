var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrar_pares(n){
    return n % 2 === 0;
};

// console.log(filtrar_pares(3)); //false
// console.log(filtrar_pares(8)); //true

function filtrar_impares(n){
    return n % 2 !== 0;
};

function filtrar_multiplos_5(n){
    return n % 5 === 0;
};

//console.log(numeros);

var result = numeros.filter(filtrar_pares);
//console.log(result);

result = numeros.filter(filtrar_impares);
//console.log(result);

result = numeros.filter(filtrar_multiplos_5);
//console.log(result);

var alunos = [
    {nome: 'Diego', nota: 10},
    {nome: 'Damião', nota: 9.2},
    {nome: 'Diogo', nota: 7.3},
    {nome: 'Gabriel', nota: 7.2}
];

//console.log(alunos[0].nome);

function filtrar_notas_maiores_que_9(aluno){
    return aluno.nota > 9;
};

function filtrar_notas_maiores_que_7(aluno){
    return aluno.nota > 7;
};

var filtereds = alunos.filter(filtrar_notas_maiores_que_9);
// console.log(filtereds);

filtereds = alunos.filter(filtrar_notas_maiores_que_7);
// console.log(filtereds);

// console.log(alunos.length);
// console.log(filtereds.length);

//for each quando queremos alterar o array que estamos trabalhando

//map quando queremos criar um novo array

//filter quando queremos criar um novo array a partir de uma condição

function aumenta_1(valor){
    if(valor >= 9){
        return valor;
    } else{
        return valor + 1;
    };
};

//console.log(aumenta_1(1));

var alunos_filtrados = alunos.filter(maior_ou_igual_9);

//console.log(alunos_filtrados)

//var resultado = alunos.map(function(valor){return valor});

var resultado = alunos.map((e)=> e.nota)

console.log(resultado);