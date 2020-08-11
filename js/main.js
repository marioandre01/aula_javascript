/*
var nome = "Mário André";
var idade = 29;
var idade2 = 10;

var frase = "Japão é o melhor time do mundo";

//alert(nome + " tem " + idade + " anos")
//alert(idade + idade2)

console.log(nome)
console.log(idade + idade2)
console.log(frase.replace("Japão", "Brasil"))
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
console.log(idade + i)
*/

var lista = ["maçã", "pera", "laranja"];
lista.push("uva");

console.log(lista[1]);
console.log(lista)

lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join("-"));

var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta);
console.log(fruta.nome);
//alert(fruta.cor)

var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[0].nome);

/*
var idade = prompt("Qual a sua idade: ");

if(idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
};
*/

/*
var count = 0;

while(count <= 5){
    console.log(count);
    alert(count);
    //count = count + 1;
    count++;
}
*/

/*
var count;

for(count=1; count <= 5; count++){
    console.log(count);
}
*/

/*
var d = new Date();

alert(d);
alert(d.getMonth() + 1);
alert(d.getUTCMinutes());
*/

function soma(n1, n2){
    return n1 + n2;
}

//alert(soma(5,10))

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

//alert(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    
    return validar;
}

//var idade = prompt("Qual a sua idade: ");
//console.log(validaIdade(idade));


function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //abrir em nova aba
    window.open("https://digitalinnovation.one/");
    
    //abrir na mesma aba
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}