var listElement = document.querySelector('#pokeList'),
    inputElement = document.querySelector('#pokeFilter'),
    pokeballElement = document.querySelector('#pokeballBack'),
    url = 'https://dev.treinaweb.com.br/pokeapi/',
    pokeList = new Rx.BehaviorSubject([]),
    inputs = Rx.Observable.fromEvent(inputElement, 'keyup'),
    scroll = Rx.Observable.fromEvent(window, 'scroll');

scroll.subscribe(
    () => {
        var rotation = `translateY(-50%) rotateZ(${window.scrollY /15}deg)`;
        pokeballElement.style.transform = rotation;
    }
)

pokeList.subscribe(createList);

inputs
.debounce(() => Rx.Observable.interval(300))
.map(event => event.target.value)
.subscribe(searchText => {
    var pkmList = pokeList
        .getValue()
        .filter(pokemon => pokemon.name.toLowerCase().includes(searchText))

        createList(pkmList);
})

function listAll(){
    Rx.Observable.fromPromise(fetch(`${url}pokedex/1`))
        .subscribe(response => {
            response.json()
                .then(result => result.pokemon)
                .then(pkmList => {
                    return pkmList.map(pokemon => {
                        var number = getNumberFromURL(pokemon.resource_uri);
                        
                        //A função assign() permite colocarmos as propriedades de um objeto dentro de outro objeto.
                        //Nesta situação, estamos colocando as propriedades do objeto pokemon e do objeto number, dentro de um objeto vazio {}
                        return Object.assign({}, pokemon, {number})
                    })
                    .filter(pokemon => pokemon.number < 1000)
                    .sort((a, b) => (a.number > b.number) ? 1 : -1)
                    .map(pokemon => {
                        var number = ("000" + pokemon.number).slice(-3);
                        return Object.assign({}, pokemon, {number})
                    })
                })
                .then(list => {
                    pokeList.next(list);
                })
        })
        //pokeList.next(pkmList);
}

function getNumberFromURL(url){
    return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
}

function createList(pkmlList){
    var template = pkmlList.map(pokemon => {
        return `
            <li class='poke-list-item'>
                <img src="https://serebii.net/pokedex-xy/icon/${pokemon.number}.png" />
                <span>${pokemon.number} - ${pokemon.name}</span>
            </li>
        `;
    })
    listElement.innerHTML = template.join('');
}

listAll();