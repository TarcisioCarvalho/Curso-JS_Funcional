
const fs = require('fs');

const path = require('path');

const caminho = path.join(__dirname,'dados.txt');
console.log(caminho);

/* function exibirConteudo(err,dados){
    console.log(dados.toString());
} */

const dados  = fs.readFile(caminho,(err,dados)=> {
    return dados.toString();
})
console.log(dados);
/* function exibirConteudo(caminho){
    return new Promise(resolve=>{
        fs.readFile(caminho,{},dados => dados.toString())
    })
}

exibirConteudo(caminho)
.then(console.log) */