//Podemos transformar as nossas promisses em observables,
//a grande vantagem de termos observables no local de promisses, é que os observables podem ser cancelados.

//Promisses comuns:
//As promisses recebem dois parâmetros: resolve e reject
//resolve => executada quando a promisse finaliza com sucesso
//reject  => executada quando ocorre um erro na execução da promisse
var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(500);
    }, 2000);
})

myPromise.then(value => console.log(`My value is ${value}`));

//Observable através de promisse
var myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(500);
    }, 2000);
})

var source = Rx.Observable.fromPromise(myPromise2);
var subscription = source.subscribe(
    value => console.log(`My Value is ${value}`)
)