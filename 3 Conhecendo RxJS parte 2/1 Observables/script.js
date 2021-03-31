
//As promisses não podem ser canceladas, quando queremos que ela não seja mais executa, temos de criar um if no qual o controlador fique falso e o próximo código não seja executado
/*A contribuição do RxJS é trazer callbacks, promisses, eventos, webworkes e entre outros,
unidos em um único tipo de evento, permitindo que o desenvolvimento fique mais hemogêneo.

RxJS ou ReactiveX

Conceito de Observables e Observers:

Observables -> Variáveis que estão sendo observadas, quando recebem uma ação, os observers entram em ação.

Observers -> São funções que são disparadas sempre que um observable é alterado.


*/
//Criando um observable do RxJS
//Para criarmos este observable, utilizamos o método create, da classe Observable, presente na classe Rx

//Podemos passar três valores para um observable:
//next: executa quando a função next é acionada
//error: função executada se ocorrer um erro
//completed: função executada quando a operação for finalizada

var observable = Rx.Observable.create(observer => {
    observer.next(5);

    //Situação de erro:
    //observer.error('error cod 131');

    //Situação em que executou sem erros
    observer.complete();
});

observable.subscribe(
    value => console.log(`My Value is ${value}`),
    err => console.log(`Error message ${err}`),
    () => console.log('Completed!')
);

//Para desassociarmos um observable de um subscribe, podemos utilizar duas funções:
//observer.complete() -> completa o processamento feito no observable
//subscription.unsubscribe() -> faz com que o subscribe seja removido do observable, mas a função complete não é executado
var observable2 = Rx.Observable.create(observer => {
    var i = 0;
    setInterval(() => {
        observer.next(i++);

        if(i > 4){
            observer.complete();
        }

    }, 1000)
})

//A cada subscribe criado, temos um novo contexto, um novo escopo.
var subscription = observable2.subscribe(
    value => console.log(`My Value is ${value}`),
    err => console.log(`Error message ${err}`),
    () => console.log('Completed!')
);

//Este comando fará com que o observable2 seja desassociado do subscribe, porém, as funções executando dentro do observable,
//continuam rodando, até chamarmos o observer.complete().
subscription.unsubscribe();