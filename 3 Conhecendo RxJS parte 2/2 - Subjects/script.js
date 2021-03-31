/*

A classe Subject é parecido tanto com Observable quanto com Observer. 
Isso porque nós podemos usá-los para se inscrever em outros Observables e também podemos nos inscrever neles.
Por causa disso, eles podem ser usados, por exemplo, para agir como um proxy para um grupo de inscrições e fonte de dados.

*/

var subject = new Rx.Subject();
var subscription = subject.subscribe(
    value => console.log(`My value is ${value}`),
    err => console.log(`Error message: ${err}`),
    () => console.log('Completed!')
);

subject.next(55);
subject.next(34);
subject.complete();

var observable = Rx.Observable.create(observer => {
    var i = 0;
    var interval = setInterval(() => {
        i++;
        observer.next(parseInt(Math.random()*10));
        if(i > 5){
            clearInterval(interval);
            observer.complete();
        }
    }, 1000);
})

var subjectSobrescrever = new Rx.Subject();

var subSource = observable.subscribe(subjectSobrescrever);

var subscription = subjectSobrescrever.subscribe(
    value => console.log(`1 - My Value is ${value}`),
    err => console.log(`Error message: ${err}`),
    () => console.log('1 - Completed!')
)

var subscription2 = subjectSobrescrever.subscribe(
    value => console.log(`2 - My Value is ${value}`),
    err => console.log(`Error message: ${err}`),
    () => console.log('2 - Completed!')
)

subjectSobrescrever.next(21);
subjectSobrescrever.next(22);
subjectSobrescrever.next(23);
subjectSobrescrever.complete();

/*
Criamos um Observable bem parecido com o que vimos anteriormente. 
A diferença aqui é que colocamos um limite de vezes que o Interval será executado, e o valor passado para a função “next()” é um número aleatório.

Em seguida criamos um Subject. Até agora nada de novo. O diferente vem agora: nos inscrevemos no Observable, mas ao invés de passar funções, nós passamos o Subject. 
Isso fará com que o Subject reaja às atualizações do Observable.

Mesmo reagindo ao Observable, o nosso Subject ainda pode reagir ao seu próprio método “next()”. 
Claro, desde que nenhum “complete()” tenha sido executado.

Note que nos inscrevemos no subject duas vezes. Lembra que foi dito que a cada inscrição em um Observable, um novo contexto era criado, então teríamos valores diferentes sendo exibidos?
*/

