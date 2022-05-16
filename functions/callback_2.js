
console.log(caminho);

function exibirConteudo(err,dados){
    console.log(dados.toString());
}

fs.readFile(caminho,{},exibirConteudo)

