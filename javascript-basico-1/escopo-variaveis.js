// Escopo de variáveis

var teste = 42; // variável global

function somar(num1, num2){
    // variável local (só é reconhecida dentro do bloco função)
    var valor = 5; // variável local
    return valor + num1 + num2
}

for(var i = 0; i < 5; i++){
    var outra = 5; // variável global
    console.log(i*outra)
}

console.log(i)

for(var j = 0; j < 5; j++){
    let num4 = 12; //variável local
    console.log(j * num4)
}

console.log(j)
console.log(num4)