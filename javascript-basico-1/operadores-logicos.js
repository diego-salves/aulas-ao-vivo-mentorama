// Operadores Lógicos

var curso = 'Javascript';
var legal = false;

// AND && (e = ambos expressões devem ser verdadeiras)

if (curso === 'Javascript' && legal === true){
    console.log('O curso de Javascript é legal')
}else{
    console.log('O curso de Javascript não é legal')
}

// OR || (ou = pelo menos uma expressão deve ser vedadeira)
if (curso === 'Javascript' || legal === true){
    console.log('O curso de Javascript é legal')
}else{
    console.log('O curso de Javascript não é legal')
}

// NOT (quando qureremos fazer uma negação ou algo diferente do esperado)
// poderia-se usar !==

if(curso != 'Javascript'){
    console.log('O curso não é Javascript')
}else{
    console.log('O curso é Javascript')
}

