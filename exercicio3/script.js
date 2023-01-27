
/* Eventos - Faça um site que, toda vez que o usuário clicar em um botão, imprima no console quantos cliques ele deu no botão até agora.  */

let clique = 0; 

/* function lidarClick() {
    clique++
    console.log('Já cliquei aqui ' + clique + ' vezes');
} */

/* Outro jeito que dá certo é com template string: */

function lidarClick() {
    console.log(`Já cliquei aqui ${clique++} vezes`);
}