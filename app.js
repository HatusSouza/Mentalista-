function Chutar(){
//sortear um numero aleatorio secreto
let numeroSecreto = 3
//pegar o numero digitado e converter para inteiro
let chute = parseInt( document.querySelector("#valor").value)
//comparar o numero digitado com o numero aleatorio secreto
if(numeroSecreto == chute){
//se tiver correto e os numeros forem iguais,mostrar a menasagem que a pessoa acertou
document.querySelector(".resultado").innerHTML = "você acertou"
}
else{
//se tiver errado e os numeros forem diferentes , mostrar a mensagem que a pessoa errou.
document.querySelector(".resultado").innerHTML = "você errou"
}
/**
 * Operadores Relacionais
* < --> menor
* > --> maior
* <= --> menor ou igual
* >= --> maior ou igual
* == --> igual
* != --> diferente
*/






}