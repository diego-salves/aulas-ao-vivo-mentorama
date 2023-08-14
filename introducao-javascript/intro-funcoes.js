//Intro às funções

function sucesso(){
    console.log("Seu pedido foi concluído com sucesso");
};

//sucesso();

function somar(num1, num2){
    return num1 + num2;
};

//somar(7, 10);

function multiplicar(n1, n2){
    return n1 * n2;
};

result = multiplicar(7, 10);
result2 = multiplicar(somar(1,2), 10)
console.log(result2)

resultadoTotal = somar(result, 2);

console.log(result);
console.log(resultadoTotal);