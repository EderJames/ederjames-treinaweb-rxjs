//subject do tipo AsyncSubject
//A principal característica deste objeto AsyncSubject, é que ele será executado somente
//após a chamada do complete(), neste caso, receberemos apenas o valor '1' no nosso subscribe
var subject = new Rx.AsyncSubject();
var subscription = subject.subscribe(
    value => console.log(`My Value is ${value}`),
    err => console.log(`Error message: ${err}`),
    () => console.log(`Completed!`)
)

var counter = 5;
var interval = setInterval(() => {
    subject.next(counter--);
    if(!counter){
        clearInterval(interval);
        subject.complete();
    }
}, 1000)

//BehaviorSubject
/*
A principal diferença é que podemos passar um valor inicial para o BehaviorSubject. Este valor será utilizado quando alguém se inscrever nele e nenhum valor tiver sido enviado ainda.

Outra diferença é que se um Subject parar de enviar valores, um novo inscrito não receberá nada. 
Se um BehaviorSubject parar de enviar valores, um novo inscrito receberá o último valor enviado, ou o valor inicial se nenhum tiver sido passado.

Se quisermos pegar o valor final do BehaviorSubject, não precisamos criar uma nova inscrição. Basta utilizar a função “getValue()” e o último valor será retornado (ou valor inicial caso nenhum tenha sido enviado).
*/
var subjectBehavior = new Rx.BehaviorSubject(83);
var subscriptionBehavior = subjectBehavior.subscribe(
    value => console.log(`My Value is ${value}`),
    err => console.log(`Error message: ${err}`),
    () => console.log('Completed!')
)

var counterSubject = 5,
    intervalSubject = setInterval(() => {
        subjectBehavior.next(counterSubject--);
        if(!counterSubject){
            clearInterval(intervalSubject);
            subjectBehavior.complete();
        }
    })

console.log(`Último valor: ${subjectBehavior.getValue()}`);

//ReplaySubject
/*
O ReplaySubject armazena os últimos valores enviados. Assim, se houver um novo inscrito, ele receberá todos os últimos valores.
Nós podemos escolher a quantidade de itens armazenados.

No exemplo acima nós indicamos para o ReplaySubject que queremos que ele armazene os últimos 2 valores. Durante seu ciclo de vida serão enviados 5 valores.

Como criamos um inscrito antes dos valores começarem a ser enviados, esse inscrito irá receber todos os valores, mas o ReplaySubject irá armazenar os últimos 2.

Se criarmos um novo inscrito, ele irá receber estes últimos 2 valores que o ReplaySubject armazenou em seu buffer.

Se não passarmos nenhuma quantidade de elementos a serem armazenados, todos os valores enviados ficarão armazenados na memória.

Como segundo parâmetro, podemos passar por quanto tempo cada elemento ficará disponível.

*/
//var subjectReplay = new Rx.ReplaySubject(2, 1000);
var subjectReplay = new Rx.ReplaySubject(2);
var subscriptionReplay = subjectReplay.subscribe(
    value => console.log(`My Value is ${value}`),
    err => console.log(`Error message: ${err}`),
    () => console.log('Completed!')
)

var counterReplay = 5,
    interval = setInterval(() => {
        subjectReplay.next(counterReplay--);
        if(!counterReplay){
            clearInterval(interval);
            subjectReplay.complete();
        }
    })


