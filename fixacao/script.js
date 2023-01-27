/* Fixação

1. A partir do template, crie um código que leia o valor innerHTML do elemento P que está na página.

2. Depois disso, utilize o input que está na página para digitar um novo valor, e a cada vez que uma tecla for pressionada, imprima no console o valor atual do input.

3. Crie um botão, e neste botão adicione um evento que, ao ser clicado, substitua o valor do elemento P pelo valor que está no input.  */

const conteudo = document.getElementById("texto");
const frase = document.getElementById("paragrafo");

//2
function lidarInput() {
    console.log(conteudo.value);
}

//3
function lidarBotao() {
    frase.innerHTML = conteudo.value;
    conteudo.value = ""
}
