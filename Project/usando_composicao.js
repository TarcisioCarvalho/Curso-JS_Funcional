const path = require('path');
const fn = require('./functions');

const caminho = path.join(__dirname,'..','legendas');

const simbolos = [
    '♪','.','!','"','-','_','?','<i>','</i>','\r','(',')','[',']'
];


const composicaoDeFuncoes = fn.composicao(
fn.lerPasta
,fn.filtraArquivosTerminadosCom('srt')
,fn.lerArquivos
,fn.mesclarElementos
,fn.separaTextoPorSimbolo('\n')
,fn.removerSeVazio
,fn.removerSeIncluir('-->')
,fn.removerSimbolos(simbolos)
,fn.removerSeApenasNumero
,fn.mesclarElementos
,fn.separaTextoPorSimbolo(' ')
,fn.removerSeVazio
,fn.removerSeApenasNumero
,fn.agruparElementos
,fn.ordernarAtributoNumerico('qtde')
)

composicaoDeFuncoes(caminho)
.then(console.log)

/* const arquivos = fn.lerPasta(caminho);
arquivos
 */

/* const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname,'dados.txt'); */