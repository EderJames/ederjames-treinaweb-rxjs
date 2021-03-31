//Função count
var sourceCount = Rx.Observable.range(0, 10).count();
var subscriptionCount = sourceCount.subscribe(
    value => console.log(`Valor de count: ${value}`)
)

//Utilizando outras funções dentro da função count:
var sourceCount2 = Rx.Observable.range(0, 10).count(x => x % 2 === 0);
var subscriptionCount2 = sourceCount2.subscribe(
    value => console.log(value`Valor de count2: ${value}`)
)

//Função max:
var sourceMax = Rx.Observable.from([1,3,5,7,9,2,4,6,8]).max();

var subscriptionMax = sourceMax.subscribe(
    value => console.log(`Valor de max: ${value}`)
)

//Função min:
sourceMin = Rx.Observable.from([1,3,5,7,9,2,4,6,8]).min();

var subscriptionMin = sourceMin.subscribe(
    value => console.log(value`Valor de min: ${value}`)
)

//Função reduce:
//Esta função faz uma redução, acumulando os valores em um único lugar

/*
A função “reduce()” está recebendo uma variável que segura o total e outra que receberá cada elemento do array. 
Nós retornamos uma soma, então no final teremos a soma de todos os elementos
*/
var sourceReduce = Rx.Observable.from([1,2,3,4,5]).reduce((total, current) => total + current);
var subscriptionReduce = sourceReduce.subscribe(
    value => console.log(`Valor de reduce: ${value}`)
)

