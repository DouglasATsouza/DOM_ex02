function addConteudo(){
    document.getElementById('inserirTexto').innerHTML = "<h2>Olá Mundo!</h2>";
}

function addImagem(){
    document.getElementById('inserirImagem').innerHTML = "<img src='download.jpg'>";
}

function addParagrafo(){
    nome = prompt("Digite seu nome: ")
    document.getElementById('inserirParagrafo').innerHTML = "E aí "+nome+"! Você está deixando o seu site dinâmico!";
}


const btnPlus = document.getElementById("addContador");
const btnZera = document.getElementById("zerarContador");
const cont = document.getElementById("contador");

let i = 0;
   
btnPlus.addEventListener('click', function(){
    i++;
    cont.innerHTML = ("O contador está com: "+i+" Clique(s).");
})

btnZera.addEventListener('click', function(){
    i = 0;
    cont.innerHTML = ("O contador está com: 0 Clique(s).");
})
