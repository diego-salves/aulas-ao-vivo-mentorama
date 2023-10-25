var cursos = [
    'ux design',
    'cientista de dados',
    'unreal engine 4',
    'teste de software',
    'desenvolvedor frontend',
    'python do básico ao avançado'
];

//console.log(cursos.length);

function print(curso, indice, array){
   //console.log(indice + ' - ' + curso);
    //console.log(array);
};

//para cada
cursos.forEach(print);

// função anonima (lambda/callback) e template string
cursos.forEach(function(curso, indice){
    //console.log(indice + ' - ' + curso);
});

for(var i = 0; i < cursos.length; i++){
    console.log(i + ' - ' + cursos[i]);
};

