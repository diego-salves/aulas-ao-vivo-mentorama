const curso = {
    nome: 'Programação com Javascript',

    imprimir(){
        console.log(this.nome);
    }
}

//curso.imprimir();

const executar = curso.imprimir;

//executar();

// resolvendo conflito com bind

const executar2 = curso.imprimir.bind(curso);

executar2();