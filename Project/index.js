const path = require('path');
const fn = require('./functions');

const caminho = path.join(__dirname,'..','legendas');

const simbolos = [
    '♪','.','!','"','-','_','?','<i>','</i>','\r','(',')','[',']'
];




const arquivos = fn.lerPasta(caminho);
arquivos
.then(fn.filtraArquivosTerminadosCom('srt'))
.then(fn.lerArquivos)
.then(fn.mesclarElementos)
.then(fn.separaTextoPorSimbolo('\n'))
.then(fn.removerSeVazio)
.then(fn.removerSeIncluir('-->'))
.then(fn.removerSimbolos(simbolos))
.then(fn.removerSeApenasNumero)
.then(fn.mesclarElementos)
.then(fn.separaTextoPorSimbolo(' '))
.then(fn.removerSeVazio)
.then(fn.removerSeApenasNumero)
.then(fn.agruparElementos)
.then(fn.ordernarAtributoNumerico('qtde'))
.then(console.log);

/* const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname,'dados.txt'); */