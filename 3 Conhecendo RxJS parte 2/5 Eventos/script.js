var myInput = document.querySelector('#myInput'),
    myDiv = document.querySelector('#myDiv'),
    inputs = Rx.Observable.fromEvent(myInput, 'keyup');

inputs.subscribe(event => {
    myDiv.innerHTML = event.target.value;
})