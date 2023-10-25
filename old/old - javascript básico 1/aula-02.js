var idade = 13;

if(idade>=18){
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}

if(idade <= 14){
    console.log("Criança");
}else if(idade > 14 && idade < 18){
    console.log("Adolescente")
}else{
    console.log("adulto")
}

//Dica (verificar valor)
if(1 == "1"){
    console.log("Sim, 1 == '1'")
}else{
    console.log("não")
}

var valor = 50;
var valor2 = "50";

//Dica (verificar valor e tipo de dado)
if(valor === valor2){
    console.log('Sim, valor === valor2')
}else{
    console.log("Não")
}

var sexo = 'm';

switch(sexo){
    case 'm':
        console.log("masculino");
        break;
    case 'f': 
        console.log("feminino");
        break;
    default:
        console.log("prefiro não declarar");
        break;
}       

var masculino;
var s = 'f';

if(s === 'm'){
    masculino = true;
}else{
    masculino = false;
}

console.log(masculino);

var masc = s === 'f'; // só retorna true ou false
console.log(masc);