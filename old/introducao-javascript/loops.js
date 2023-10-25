// laços de repetição: for, while, do-while

// for

var array = ['diego', 'rafael', 'damião']

for(var i = 0; i < array.length; i++){
    console.log("No índice " + i + " temos o(a) " + array[i])
}

// while
var numero = 20;

while(numero >= 10){
    console.log(numero);
    numero--;
};

//do-shile

var contador = 20;

do{
    console.log("Contador: " + contador);
    contador++;
}while(contador <=15);