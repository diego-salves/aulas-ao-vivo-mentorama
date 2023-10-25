function calcular_idade1(ano_nascimento){
    const data = new Date(); //gera a data atual

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
};

function calcular_idade2(ano_nascimento){
    const data = new Date();

    const idade = data.getUTCFullYear() - ano_nascimento;

    console.log(idade);
}

let age = calcular_idade1(1996);
//console.log(age)

//calcular_idade2(1996);

const data1 = new Date().getFullYear().toString();
// console.log(data1);

const data2 = new Date().getUTCFullYear().toString();
// console.log(data2);

const data = new Date();

console.log('Data completa: ' + data);

console.log('Ano: ' + data.getFullYear());

console.log('Mês: ' + data.getMonth()); // 0 - janeiro, 1 - fevereiro, etc;

function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(4, 6)); // 10
console.log(somar(4)); // NaN - Not a number
console.log(somar(4, 6, 8)); // 10
console.log(somar(4, 6, 8, 3, 2, 1, 4, 4 ,5)); //10
console.log(somar()); // NaN

function concatenar(a, b){
    return console.log(`${a} e ${b}`);
}

concatenar('joão');
