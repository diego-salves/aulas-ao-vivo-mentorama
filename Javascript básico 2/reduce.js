var precos = [4.66, 3.78, 9.78, 1.34, 5.32];

var soma = 0;

for(var i = 0; i < precos.length; i++){
    soma = soma + precos[i];
};

//console.log(soma);

soma = 0;

precos.forEach(function(valor){
    soma += valor; // soma = soma + valor
});

console.log(soma);

function somar(anterior, atual){
    return anterior + atual;
};

var result = precos.reduce(somar);

//console.log(result);

/* Como funciona o reduce?
[4.66, 3.78, 9.78, 1.34, 5.32]

Primeira execução:
    - Pega os dois primeiros valores (índice 0 e índice 1), soma e retorna esse valor;
    - Pega o retorno da execução anterior e o próximo valor (índice 2...)

1 = 4.66 + 3.78 -> 8.44
2 = 8.44 + 9.78 -> 18.22
...
*/

//Exemplo
function preco_maior_que_4(valor){
    return valor > 4;
};

function adicionar_taxa(valor){
    return valor + 5;
};

result = precos.map(adicionar_taxa).reduce(somar);
console.log(result);

result = precos.filter(preco_maior_que_4).map(adicionar_taxa).reduce(somar);
console.log(result);
