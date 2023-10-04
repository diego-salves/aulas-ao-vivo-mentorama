function mensagem(){
    alert("Olá, tudo bem?")
};

function pergunta(){
    var nome;
    nome = prompt("Informe o seu nome")
    alert("Olá " + nome)
};

function mudar_h1(){
    var h1 = document.getElementsByTagName("h1")

    if(h1[0].innerText == "Introdução ao JS - Mentorama"){
        h1[0].innerText = "Usando Inner Text para alterar o H1"
    }else{
        h1[0].innerText = "Introdução ao JS - Mentorama"
    }
};

function incrementar(){
    var p1 = document.getElementById("p1");

    p1.innerText = parseInt(p1.innerText) + 1
}