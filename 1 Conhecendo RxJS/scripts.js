/*Um dos princípios da programação funcional são as funções puras,
  isso significa que toda função deve receber pelo menos um parâmetro e sempre retornar um valor.
*/

//Exemplos de uma mesma funcionalidade com programação imperativa e programação funcional:
//O código abaixo consiste em verificar os números pares.

/*Programação Imperativa*/
var list = [1,2,3,4,5,6];
var pares = [];
for(var i = 0; i < list.length; i++){
   if(list[i] % 2 === 0){
      pares.push(list[i]);
   }
}

/* Programação Funcional */
var list = [1,2,3,4,5,6];
var pares = list.filter(x => x % 2 === 0);

//A programação funcional possui quatro pilares:
/*
Elasticidade: a aplicação reagirá a grandes cargas;
Resiliência: a aplicação deverá reagir a falhas;
Orientação a mensagens: a aplicação reagirá a eventos;
Responsividade: reação aos usuários, proporcionando uma experiência interativa

Uma das características da programação funcional é que não devemos alterar variáveis
*/