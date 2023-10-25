function falar(){
    alert("Olá, tudo bem?")
}

function perguntar(){
    var nome;
    nome = prompt("Qual é o seu nome?");
    alert('Olá ' + nome)
}

function mudar_texto(){
    var h1 = document.getElementsByTagName("h1")

    if(h1[0].innerText == "Introdução ao Javascript"){
        h1[0].innerText = "Usando inner text para alterar texto"
    }else{
        h1[0].innerText = "Introdução ao Javascript"
    }
}

function incrementar(){
    var p1 = document.getElementById("p1");

    p1.innerText = parseInt(p1.innerText) + 1
}