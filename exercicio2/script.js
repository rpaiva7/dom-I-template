
/* value - Escreva um código que capture os valores dos inputs do arquivo HTMLAllCollection, imprima estes valores no console, e em seguida, limpe os inputs.  */

const nome = document.getElementById('nome')
console.log(nome.value);
nome.value = ""
console.log(nome.value);

const endereco = document.getElementById('endereco')
console.log(endereco.value);
endereco.value = ""
console.log(endereco.value);

const email = document.getElementById('email')
console.log(email.value);
email.value = ""
console.log(email.value);