//Forma 1
function somar1(num1, num2){
    return num1 + num2;
}

console.log(somar1(4, 6));

//Forma 2
let somar2 = function(num1, num2){
    return num1 + num2
};

console.log(somar2(4, 6));

//Forma 3
let somar3 = somar1;

console.log(somar3(4, 6));

//Arrow Function
const somar4 = (num1, num2) => {
    return num1 + num2
};

console.log(somar4(4, 6));

//Caso a função tenha apenas 1 parâmetro e executa apenas 1 linhas, pode ser simplificada

const dobrar = valor => valor * 2;

console.log(dobrar(5));

function mensagem1(){
    console.log('Esse curso é top')
};

mensagem1();

const msg = () => console.log('Esse curso é top');

msg();
