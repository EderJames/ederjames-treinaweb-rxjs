//Generator comum:

function* myCounterGenerator(){
    var i = 0;
    while(true){
        yield i++;
    }
}

var counter = myCounterGenerator();
console.log(counter.next());

function* myGeneratorWithObservable(){
    yield* [1,2,3,4,5,6,7,8,9,10];
}

//A função Rx.Observable.from permite que o nosso generator seja transformado em observable
//Nesta situação, estaremos percorrendo todos os registros do generator
Rx.Observable.from(myGeneratorWithObservable()).subscribe(x => console.log(x));

//Já a função take() determina a quantidade de valores que queremos pegar desta generator
//Nesta situação, percorreremos até o número 5.
Rx.Observable.from(myGeneratorWithObservable()).take(5).subscribe(x => console.log(x));

