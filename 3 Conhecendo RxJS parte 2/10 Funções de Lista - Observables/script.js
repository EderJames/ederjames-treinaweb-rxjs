//Função map
//A função map serve para pegarmos cada um dos elementos de uma lista e transformar em uma outra estrutura.
var items = [
    {a: 1},
    {a: 2},
    {a: 3},
    {a: 4}
];

var sourceMap = Rx.Observable.from(items);
var subscriptionMap = sourceMap.map(x => {return {value: x.a}})
    .subscribe(
        x => console.log(`Map ${x}`)
    )

//Função filter
//A função filtro tem o intuito de filtrar os elementos
var sourceFilter = Rx.Observable.from([1,2,3,4,5,6,7,8,9,10]);
var subscriptionFilter = sourceFilter.filter(x => x % 2 === 0)
    .subscribe(
        x => console.log(`Filter: ${x}`)
    )

//Função take
//Retornar apenas um determinado número de elementos
var sourceTake = Rx.Observable.from([1,2,3,4,5,6,7,8,9,10]);
var subscriptionTake = sourceTake.take(3)
    .subscribe(
        x => console.log(`Valor da função take: ${x}`)
    )

//Função find
//Faz uma busca nos elementos e retorna o primeiro que bater com a condição passada.
var people = [
    {name: 'Rick', age: 10},
    {name: 'Rose', age: 25},
    {name: 'Cassandra', age: 13},
    {name: 'Henry', age: 22}
]

var source = Rx.Observable.from(people);
var subscription = source.find(x => x.age > 18)
    .subscribe(
        x => console.log(x)
    )

//Função first
//Retorna o primeiro elemento que satisfaça a condição:
var sourceFirst = Rx.Observable.from(people);
var subscriptionFirst = source.first(x => x.name[0] === 'R')
    .subscribe(
        x => console.log(`Value do first: Nome: ${x.name} - Idade:${x.age}`)
    )

//Função last
//Retorna o último elemento que satisfaça a condição
var people2 = [
    {name: 'Rick', age: 10},
    {name: 'Rose', age: 25},
    {name: 'Cassandra', age: 13},
    {name: 'Henry', age: 22}
];

var sourceLast = Rx.Observable.from(people2);
var subscription = sourceLast.last(x => x.name[0] == 'R')
    .subscribe(
        x => console.log(`Último nome: ${x.name} - Idade: ${x.age}`)
    )

//Função pluck
//Passamos o nome de um dos campos do elemento. Esse campo será arrancado da lista, original e será a raiz do novo elemento.
//Neste cenário, a função pluck() pegará o valor da propriedade name, de todos os registros, e na sequência criará um novo array, só com os valores presentes na propriedade name
var peoplePluck = [
    {name: 'Rick', age: 10},
    {name: 'Rose', age: 25},
    {name: 'Cassandra', age: 13},
    {name: 'Henry', age: 22}
]
console.log('Resultado do pluck');
var sourcePluck = Rx.Observable.from(peoplePuck);
var subscription = source.pluck('name')
    .subscribe(
        x => console.log(`${x}`)
    )

