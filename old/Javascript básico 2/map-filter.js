var precos = [4.66, 3.78, 9.78, 1.34, 5.32];

function preco_maior_que_4(valor){
    return valor > 4;
};

function adicionar_taxa(valor){
    return valor + 2;
};

function reduzir_taxa(valor){
    return valor - 1;
};

var result = precos.filter(preco_maior_que_4).map(adicionar_taxa);
var result2 = precos.map(reduzir_taxa).filter(preco_maior_que_4);

console.log(result2);