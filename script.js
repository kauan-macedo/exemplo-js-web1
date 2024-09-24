// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

const changeText = document.getElementById("btn-mudar-frases");

const frase1 = document.getElementById("mensagem2");
const frase2 = document.getElementById("mensagem3");
const frase3 = document.getElementById("mensagem4");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

changeText.addEventListener("click", function () {
  frase1.textContent = "A frase 1 mudou";
  frase2.textContent = "A frase 2 mudou";
  frase3.textContent = "A frase 3 mudou";
 });

