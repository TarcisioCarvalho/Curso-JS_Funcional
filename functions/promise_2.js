/* function executa(){
    console.log('Executando callback');
    setTimeout(()=> console.log('Executando callback'),2000);
}

setTimeout(executa,2000); */
let contador = 0;


function esperarPor(tempo = 2000){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(++contador);
        },tempo)
    })
}

esperarPor()
.then(esperarPor)
.then(esperarPor)
.then(console.log)