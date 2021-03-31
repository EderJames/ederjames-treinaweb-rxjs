/*
Podemos categorizar os observables como Hot e Cold.

Cold: A característica principal destes observables, é que a função passada para ele
será executada quando algum dos inscritos do observable recebe uma alteração.
Outra característica deste tipo de observable é que cada subscribe possui um escopo diferente.
Exemplo:
*/
var source = Rx.Observable.interval(1000);

var subscription = source.subscribe(
    value => console.log(`My cold value is ${value}`)
);

/*
Hot: Os observables do tipo Hot possuem uma sintaxe parecida com os observables tipo cold,
entretanto, para transformar um observable em hot, precisamos acionar o método publish(), presente no observable.
Além disso, após acionarmos a função publish(), também teremos de acionar a função connect(), a partir desse momento os valores começarão a ser enviados.
Uma observação importante para essa questão é que em observables hot, sempre temos o mesmo escopo, independente dos subscribes
*/

//Exemplo:
var sourceHot = Rx.Observable.interval(1000);
var hot = sourceHot.publish();

var subscriptionHot = hot.subscribe(
    value => console.log(`My hot value is ${value}`)
)

hot.connect();

/*
Analogias com os observables hot e cold

Hot:
seriam como assistir um vídeo do YouTube ao vivo: 
não importa a hora em que você se conectar. Todos que estão assistindo estarão vendo a mesma coisa que está sendo transmitida;

Cold:
seriam como selecionar um vídeo no YouTube que esteja gravado: cada um no mundo que iniciar o vídeo começará vendo desde o “0:00”.
Uma pessoa pode estar assistindo já no momento “3:17”, mas quem começou a assistir agora estará ainda no “0:05”, ou seja, cada um está recebendo algo diferente.

*/