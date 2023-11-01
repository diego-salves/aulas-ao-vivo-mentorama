// Estruturas condicionais

// syntax
// if(condição){
//     bloco 1
// }else{
//     bloco2
// }

var idade = 12;

if (idade > 17){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
};

if (idade <= 14){
    console.log("Criança");
}else if(idade > 14 && idade < 18){
    console.log("Adolescente");
}else{
    console.log("Adulto");
};

if (idade <= 14){
    console.log("Criança");
}else if(idade > 14 || idade < 18){
    console.log("Adolescente");
}else{
    console.log("Adulto");
};

// Verifica valor

numero1 = 2
numero2 = "2"

soma = (numero1 + numero2)
// typeof mostra o tipo
// console.log(typeof(soma))

if(numero1 == numero2){
    console.log("Numero1 e numero2 tem o mesmo valor")
}else{
    console.log("Numero1 e numero2 NÃO tem o mesmo valor")
}

if(numero1 === numero2){
    console.log("Numero1 e numero2 tem o mesmo tipo e valor")
}else{
    console.log("Numero1 e numero2 NÃO tem o mesmo tipo e valor")
}

// comparadores
// and  &&
// or  ||
// maior que  >
// menor que <
// maior ou igual a >=
// menor ou igual a <=

// Switch
// m Masculino, f Feminino, o Outros

// switch(variavel){
//     case 'condição':
//         bloco1
//         break
//     default:
//         blocoDefault
//         break
// };

var sexo = 'z';

switch(sexo){
    case 'm':
        console.log("Masculino");
        break;
    case 'f':
        console.log("Feminino");
        break;
    case 'o':
        console.log("Outros");
        break;
    default:
        console.log("Preferiu não declarar");
        break;
};

var s = 'f';
var masculino;

// console.log(typeof(masculino));

if (s === 'm'){
    masculino = true;
}else{
    masculino = false;
};

console.log(masculino);

// Forma simplificada

var masc = s === 'm';

console.log(masc);
