//Escopo de variaveis

var teste = 42;     //variável global
var valor = 35;

function soma5(num1, num2){
    //variável local, só é reconhecida dentro do bloco da função
    var valor = 5; //variável local
    return valor + num1 + num2
};

//console.log(valor)

for(var i = 0; i < 5; i++){
    var other = 5; //variável global
    console.log(i * other);
};

console.log(i)
console.log(other)

for(let c = 0; c < 5; c++){
    let other2 = 12; //variável local
    console.log(c * other2)
};

console.log(c)
console.log(other2)
