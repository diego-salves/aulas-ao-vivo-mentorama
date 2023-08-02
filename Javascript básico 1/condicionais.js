//estruturas condicionais
var idade = 16;

if(idade >= 18){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}

if(idade <= 14){
    console.log("Criança");
}else if(idade > 14 && idade <18){
    console.log("Adolescente");
}else{
    console.log("Adulto");
}

//curiosidade
if(1 == '1'){
    console.log('Sim, 1=="1"')
}else{
    console.log("não")
}

console.log(1 + '1')
var valor = 2;
var valor2 = '2';

if(valor === valor2){
    console.log('Sim, valor === valor2')
}else{
    console.log("não")
}

var sexo = 'h';

switch(sexo){
    case 'h':
        console.log("Homem");
        break;
    case 'm':
        console.log("Feminino");
        break;
    case 'o':
        console.log("Outros");
        break;
    default:
        console.log("Optou por não declarar");
        break;
}

var s = 'f';
var masculino;

if(s === 'm'){
    masculino=true;
}else{
    masculino=false;
}

console.log(masculino);

var masc = s === 'm';
console.log(masc);

