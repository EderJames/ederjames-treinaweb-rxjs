//Sequências:
//A função range cria uma sequência de números, ela recebe dois parâmetros:
//Número inicial e Quantidade de números.
//Após o último elemento, a função complete é executada
var sourceRange = Rx.Observable.range(1, 10);

var subscriptionRange = sourceRange.subscribe(
    value => console.log(`My Value is ${value}`),
    err => {},
    () => console.log(`Completed!`)
);

//Também temos a função from(), com ela podemos passar um array para um observable,
//seguindo o seguinte exemplo:
//Após o último elemento, a função complete() é acionada
var numbers = [1,8,15,37];
var sourceNumber = Rx.Observable.from(numbers);

var subscriptionNumbers = sourceNumber.subscribe(
    value => console.log(`My Value is ${value}`),
    err => {},
    () => console.log(`Completed!`)
);
