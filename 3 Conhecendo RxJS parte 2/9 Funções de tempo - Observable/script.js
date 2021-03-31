//Função delay
//Através desta função, podemos definir um atraso para a operação realizada.
//Esta função faz com que os valores sejam enviados apenas 5 segundo após a inscrição ter sido feita
var sourceDelay = Rx.Observable.from([1,2,3,4,5]).delay(5000);

var subscription = sourceDelay.subscribe(
    value => console.log(`Valor do delay ${value}`)
)

//Função interval
//Esta função tem a finalidade de enviar valores a cada intervalo de tempo
//Nesta situação, também poderíamos utilizar a função take(), para determinarmos quantos registros desejamos 
var sourceInterval = Rx.Observable.interval(1000)

var subscription = sourceInterval.subscribe(
    value => console.log(value)
)

//Função timer
//Neste código, haverá um atraso de cinco segundos e depois a ação será realizada a cada segundo
var sourceTimer = Rx.Observable.timer(5000, 1000).take(5)

var subscription = sourceTimer.subscribe(
    value = console.log(value)
)

//Função debounce:
//A debounce recebe uma função que deve retornar um intervalo.
//Para isso, utilizamos o interval() do objeto Observable
var myInput = document.querySelector('#myInput'),
    myDiv = document.querySelector('#myDiv'),
    inputs = Rx.Observable.fromEvent(myInput, 'keyup');

inputs.debounce(() => Rx.Observable.interval(1000))
      .subscribe(event => {
          myDiv.innerHTML = event.target.value;
      })
