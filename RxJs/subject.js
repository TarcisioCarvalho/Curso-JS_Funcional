const {Observable} = require('rxjs');

function getObservable(){
    return new Observable(subscriber=>{
        setTimeout(()=>{
            subscriber.next(Math.random());
        },1000)
    })
}

const obs = getObservable();

obs.subscribe(console.log);
obs.subscribe(console.log);