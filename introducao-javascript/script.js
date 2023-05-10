function falar(){
    alert("Olá, tudo bem?")
} 

function perguntar(){
    var nome;
    nome = prompt("Qual é o seu nome? ");
    alert("Olá " + nome)
}

function mudar_texto(){
    var h1 = document.getElementsByTagName("h1")

    if(h1[0].innerText == "Introdução ao Javascript - Mentorama"){
        h1[0].innerText = "Não entendi nada ainda, mas irei"
    }else{
        h1[0].innerText = "Introdução ao Javascript - Mentorama"
    }
}

function incrementar(){
    var p1 = document.getElementById("p1");

    p1.innerText = parseInt(p1.innerText) + 1;
}