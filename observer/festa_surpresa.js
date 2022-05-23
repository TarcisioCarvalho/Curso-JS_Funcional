const readline = require('readline');


function obterResposta(pergunta){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close();
        }); 
    })
}


function namorada(){
    
        console.log('N: Apagar as luzes');
        console.log('N: Pedir Silêncio');
        console.log('N: Gritar parabéns');
  
}


function sindico(){
    console.log('S: monitorando barulho');
}

async function porteiro(interessados){
    while(true){
        const resp = await obterResposta('O namorado chegou ? (s)(N)(q)');
        if (resp === 's') interessados.forEach(obs => obs());
        if (resp === 'q') break;
    }
}

porteiro([namorada,sindico]);
/* obterResposta('Este é um teste?')
.then(console.log); */