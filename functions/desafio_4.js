const fs = require('fs');

const path = require('path');

const caminho = path.join(__dirname,'dados.txt');

function lerArquivo(caminho){
    return new Promise(resolve=>{
        fs.readFile(caminho,(erro,dados)=>{
            resolve( dados.toString());
        });
        console.log('Teste')
    })
}

lerArquivo(caminho)
.then(conteudo => conteudo.split('\n'))
.then(console.log)