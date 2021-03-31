//Sequências:
//A função range cria uma sequência de números, ela recebe dois parâmetros:
//Número inicial e Quantidade de números.
//Após o último elemento, a função complete é executad
var source = Rx.Observable.range(1, 10);

var subscription = source.subscribe(
    value => console.log(`My Value is ${value}`),
    err => {},
    () => console.log(`Completed!`)
);

//Também temos a função from(), com ela podemos passar um array para um observable,
//seguindo o seguinte exemplo:
//Após o último elemento, a função complete() é acionada
var numbers = [1,8,15,37];
var source = Rx.Observable.from(numbers);

var subscription = source.subscribe(
    value => console.log(`My Value is ${value}`),
    err => {},
    () => console.log(`Completed!`)
);
